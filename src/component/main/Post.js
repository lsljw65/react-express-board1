import "../../css/main/Post.css";

function Post(props) {
  return (
    <tr id="post">
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.pd}</td>
      <td>{props.au_num}</td>

      {/* <span>{props.id}</span>
            <span>{props.name}</span> */}
    </tr>
  );
}

export default Post;
