import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

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
  const [data, setData] = useState(null)

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
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
        .then((response) => response.json())
        .then((data) => {
          //console.log(data)
          //setData(data)
        })

    async function traerDataPe() {
      const dataFromApiJSON = await fetch('https://hn.algolia.com/api/v1/search?query=redux')
      try {
        const dataReal = await dataFromApiJSON.json()
        //console.log(dataReal)
        //setData(dataReal)
      } catch(error) {
        console.log(error)
      }
    }

    async function searchBook() {
      const response = await axios('https://hn.algolia.com/api/v1/search?query=java')
      console.log(response.data)
      setData(response.data)
    }

    traerDataPe()
    searchBook()

    
  }, [])
  

  return (
    <div className="App">
      <h1>Data From Promesa</h1>
      <ul>
        {data && data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
