import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(()=>{
    fetchMyAdvice();
  },[]);

  const [advice,setMyadvice]=useState("");
  const [author,setMyauthor]=useState("");


  const fetchMyAdvice = async ()=>{
    try {
      const response=await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
      const {text,author}=response.data.quotes[0];
      setMyadvice(text);
      setMyauthor(author)
      
    } catch (error) {
      console.log(error);

    }
    
  };

  /*const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const {advice}=data.slip;
      console.log(advice)

    } catch (error) {
      console.log(error); 

    }
  };*/

  return (
    <div className="App">
      <h1>{advice}</h1>
      <h2>{`by ${author}`}</h2>
      <button onClick={fetchMyAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
