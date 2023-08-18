import { ImageCard } from "../ImageCard"
export const PostCard = ({post}) => {
    return (
        <div key={post.id} className="post">
            <ImageCard src={post.cover} />
            <div className="text">
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
            </div>
        </div>
    )
}