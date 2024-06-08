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

  return (
    <div id="App">
      <h1>Hello React </h1>
      <h2>React-Express-MySql 연결</h2>
      <button onClick={selectAll}>모두조회</button>
      <button onClick={selectWhere}>조건조회</button>

    </div>
  );
}

export default App;
