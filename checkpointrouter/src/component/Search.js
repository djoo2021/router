import React,{useState}from 'react'

function Search({FM}) {

  const [word,setword]=useState("");

 const  handlSubmit=(e)=>{
    e.preventDefault();
     FM(word);
     setword("");
  }

  return (
    <div>
  <form className="form-inline my-2 my-lg-0" onSubmit={handlSubmit}>
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={word} onChange={(e)=> setword(e.target.value)} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     
    </form>
    </div>
  )
}

export default Search