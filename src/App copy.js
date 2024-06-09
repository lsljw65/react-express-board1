import './App.css';
import axios from 'axios';
// axios 서버에 데이터를 요청할 때 비동기적으로 요청

function App() {

  const selectAll=async()=>{
    alert("selectAll!");
    const result=await axios.get('/movies');
    console.log(result)
    // http://localhost:8000/movies
  }

  const selectWhere=()=>{
    alert("selectWhere")
    axios.get('/movies/'+3)
  }

  var val;
  const insertInput=(e)=>{
    console.log(e.target.value);
    val=e.target.value;
  }

  const trans=()=>{
    console.log(val)
  }

  return (
    <div id="App">
      <h1>Hello React </h1>
      <h2>React-Express-MySql 연결</h2>
      <button onClick={selectAll}>모두조회</button>
      <button onClick={selectWhere}>조건조회</button>
      {/* 입력 */}
      <div className='insert'>
        <label>입력하세요 : </label><input type="text" onChange={insertInput}/>
        <br/>
        {/* <input type="submit" value={"결과전송"} onClick={insertInput}/> */}
        <button onClick={trans}>결과전송</button>
      </div>
      

    </div>
  );
}

export default App;
