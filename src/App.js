import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(()=>{
    fetchMyAdvice();
  },[]);

  const [advice,setMyadvice]=useState("");
  const [author,setMyauthor]=useState("");


  const fetchMyAdvice = async () => {

    try {
      const response=await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
      const {text,author}=response.data.quotes[0];
      setMyadvice(text);
      setMyauthor(author)
      
    } catch (error) {
      console.log(error);

    }
    
  };

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading"> {advice} </h1>
        <h2 className="author"> {`by ${author}`} </h2>
        <button className="button" onClick={fetchMyAdvice}>Get Advice</button>
      </div>     
    </div>
  );
}

export default App;
