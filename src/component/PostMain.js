import '../css/PostMain.css'
import Pagenation from './main/Pagenation';
import PostList from './main/PostList';

function PostMain(props){
    return(
        <div id='post-main'>
            <h3>PostMain.js</h3>
            <PostList movieList={props.movieList}/>
            <Pagenation/>
        </div>
    )
}

export default PostMain;