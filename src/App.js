import React, { useState, useEffect } from "react";
import './App.css';
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";

function useLaptops(){
  const [loading,setLoading] = useState(true);
  const[data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/laptop")
    .then((response) => response.json())
    .then((d) => {console.log(d);
      setData(d);
      setLoading(false);
    })
  }, []);
  return {loading, data} 
}

function useSubtimer(){
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(()=> {
      setShow(true);
    }, 2000);
  },[]);
  return show
}

const App = () => {
  const {loading, data} =useLaptops();
  const show = useSubtimer();

  if(loading){
    return <LoadingMask />;
 };

 const laptops=[]
 for ( const l of data){
   laptops.push(<Laptop laptop={l} key={l.name} />)
 };

  return (
    <div className="App">
      <header>
        <button>Sort</button>
      </header>
      <h1>Laptops</h1>
      <div>{laptops}</div>
    </div>
  )
}

export default App
