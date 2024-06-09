import { useState } from "react";
function Insert(props){
    console.log(props)
    const [name,setName]=useState(props.movieName)
    const trans=()=>{
        const newName=name;
        setName(newName)
    }
    

    // const trans=()=>{
    //   console.log(val)
    // }
    return(
        <div>
            <h2>Insert.js</h2>
            <p>{name}</p>
            {/* 입력 */}
            <div className='insert'>
                
                {/* <input type="submit" value={"결과전송"} onClick={insertInput}/> */}
                <button onClick={trans}>결과전송</button>
                <p>{name}</p>
            </div>
        </div>
    )

}

export default Insert;