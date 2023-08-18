import './styles.css'
import { Component } from 'react'
import { loadPosts } from '../../utils/load-posts'
import { PostCard } from '../PostCard'
import { Button } from '../Button'

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 2
    }

    componentDidMount() {
        this.loadPosts()
    }

    loadPosts = async () => {
        const { page, postsPerPage } = this.state
        const photosAndPosts = await loadPosts()
        this.setState({ 
            posts: photosAndPosts.slice(page, postsPerPage),
            allPosts: photosAndPosts
        })
    }

    loadMorePosts = () => {
        const { page, postsPerPage, allPosts, posts } = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

        this.setState({posts:[ ...posts, ...nextPosts], page: nextPage })
    }

    render() {
        const { posts } = this.state

        return (
            <section className="container">
                <div className="posts">
                    {posts.map(post => (
                        // Na linha abaixo, o post é o objeto que está sendo passado para o componente PostCard
                        <PostCard key = {post.id} post={post} />
                    ))}
                    <Button text="Load more posts" action={this.loadMorePosts}/>
                </div>
            </section>
        )
    }
}

