import './App.css';
import axios from 'axios';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import PostMain from './component/PostMain';
import PostWrite from './component/PostWrite';
import PostView from './component/PostView';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


// axios 서버에 데이터를 요청할 때 비동기적으로 요청

function App() {
  const[movieList,setMovieList]=useState([])
  //componentDidMount
  useEffect(()=>{
    getMovieData()
  },[])

  const getMovieData=async()=>{
    const result=await axios('/movies');
    console.log(result)
    console.log(result.data)
    setMovieList(result.data)
  }

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
      <div className='lib'>
        <Header/>
        <DayList/>
        <Day/>
      </div>
      <div className='board'>
        <h2>Board</h2>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PostMain movieList={movieList}/>} />
            <Route path='/write' element={<PostWrite/>} />
            <Route path='/view' element={<PostView/>} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
