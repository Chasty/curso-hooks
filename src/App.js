import { useState, useEffect } from 'react';
import './App.css';


/*const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});*/

function miPromesa(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //throw("que fue error")
      if(numero %2 == 0) {
        resolve("Resolve: el numero es par")
      } else {
        reject("Reject: el numero es impar")
      }
      //reject("From Resolve") //data para catch()
    }, 2000)
  })
}


function App() {
  const [data, setData] = useState([])

  const [rptaPromise1, setRptaPromise1] = useState("")
  const [rptaPromise2, setRptaPromise2] = useState("")
    

  useEffect(()=> {

    //PROMESAS
    miPromesa(3).
              then((data) => {
                console.log(data)
                setRptaPromise1(data)
              }).catch((data)=> {
                console.log(data)
                setRptaPromise1(data)
              }).finally((data)=> {
                console.log(data)
              })

    async function pruebaPromesa() {
      try {
        const promesa2 = await miPromesa(10)
        console.log("promesa 2")
        console.log(promesa2)
        setRptaPromise2(promesa2)
      } catch(error) {
        setRptaPromise2(error)
        console.log(error)
      }
    } 


    pruebaPromesa()
    

    //llamar a la api 
    /*callApi('https://hn.algolia.com/api/v1/search?query=redux').
    then((data)=> {
      setData(data)
    })*/
  }, [])


  return (
    <div className="App">
      <h1>Data From Promesa</h1>
      <p>{rptaPromise1}</p>
      <br/>
      <p>{rptaPromise2}</p>
    </div>
  );
}

export default App;
