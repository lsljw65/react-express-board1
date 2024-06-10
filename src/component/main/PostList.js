import "../../css/main/PostList.css";
import Post from "./Post";

function PostList(props) {
  const result = props.movieList.map((data) => (
    <Post id={data.id} name={data.name} pd={data.pd} au_num={data.au_num} />
  ));

  return (
    <div id="post-list">
      <h3>목록 리스트</h3>
      <table>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>감독</td>
          <td>관객수</td>
        </tr>
        {result}
      </table>
    </div>
  );
}

export default PostList;
