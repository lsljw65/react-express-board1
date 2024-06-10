import '../../css/main/Post.css'

function Post(props){
    return(
        <div id='post'>
            <span>{props.id}</span>
            <span>{props.name}</span>
        </div>
    )
}

export default Post;