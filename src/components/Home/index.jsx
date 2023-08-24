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
        postsPerPage: 10,
        searchValue: ''
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

    handleSearch = (event) => {
        const { value } = event.target
        this.setState({ searchValue: value })
        // console.log(value)
    }

    render() {
        const { posts, searchValue } = this.state

        const filteredPosts = !!searchValue 
        ? posts.filter ((post) => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        : posts
        
        return (
            <section className="container">
                <input 
                    type="text" 
                    name='txtSearch' 
                    id='txtSearch' 
                    placeholder='Search...'
                    value={searchValue}
                    onChange={this.handleSearch}
                />

                <div className="posts">
                    {filteredPosts.map(post => (
                        // Na linha abaixo, o post é o objeto que está sendo passado para o componente PostCard
                        <PostCard key = {post.id} post={post} />
                    ))}
                    <Button text="Load more posts" action={this.loadMorePosts}/>
                </div>
            </section>
        )
    }
}