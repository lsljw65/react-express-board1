import '../../css/main/PostList.css'
import Post from './Post';

function PostList(props){

    const result=props.movieList.map(
        (data)=>(<Post id={data.id} name={data.name}/>)
    )

    return(
        <div id='post-list'>
            <h3>목록 리스트</h3>
            {result}
        </div>
    )
}

export default PostList;