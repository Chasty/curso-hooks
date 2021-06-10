import { useState, useEffect } from 'react';
import './App.css';

let count = 0

function Counter(){
  return (<p>{count}</p>)
}

//React Component
//1. Inicializacion
//- constructor() - useState()

//2. Monteo
//- componenDidMount, componentDerivedProps
//- componentWillMount -> useEffect()

//3. Actualizacion
//- componentShouldUpdate, componentDidUpdate -> useEffect()

//4. Desmonteo
//- componentWillUnMount -> useEffect()

function App() {
  const [nombre, setNombre] = useState("Lokito")
  const [apellidos, setApellidos] = useState("Mas Naki")

  function hola(nombre) {
    //algo complicado
    console.log("qwdqwd")
    return (<div>
      <h1>Hola {nombre}</h1>
    </div>)
  }

  console.log("Test")
  console.log({count})

  return (
    <div className="App">
      <div>{hola("Wally")}</div>
      <p>{nombre} {apellidos}</p>
      <p>{count}</p>
      <button onClick={()=>{ setApellidos((Math.random()*100).toString()); count++; } }>Test</button>
      <Counter />
    </div>
  );
}

export default App;
