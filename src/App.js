import { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [nombres, setNombres] = useState("Lokito")
  const [apellidos, setApellidos] = useState("Mas Naki")

  function hola(nombre) {
    //algo complicado
    console.log("qwdqwd")
    return (<div>
      <h1>Hola {nombre}</h1>
    </div>)
  }


  function testFunction(a, b) {
    return a + b
  }

  useEffect(()=> {
    //se hacen peticiones a apis, se hacen subcripciones 
    console.log("Hola desde useEffect []")
    console.log(testFunction(10, 5))
  }, []) //componentDidMount

  useEffect(()=> {
    //dependiendo si el valor cambia haces algo
    console.log("Hola desde useEffect [apellidos, nombres]")
    console.log(testFunction(10, 105))
  }, [apellidos, nombres]) //componentDidUpdate

  /*useEffect(()=> {
    console.log("Hola desde useEffect [nombres]")
    console.log(testFunction(10, 20))
  }, [nombres]) //componentDidUpdate*/

  return (
    <div className="App">
      <button onClick={()=>{ setApellidos(("Rosa").toString());} }>Change Apellidos</button>
      <br/>
      <br/>
      <button onClick={()=>{ setNombres(("Willy").toString());} }>Change Nombres</button>
    </div>
  );
}

export default App;
