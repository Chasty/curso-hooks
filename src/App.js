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

  useEffect(()=> {
    //PROMESAS
    async function searchBook() {
      const response = await axios('https://hn.algolia.com/api/v1/search?query=java')
      console.log(response.data)
      setData(response.data)
    }

    searchBook()

    return ()=> {
      //limpiar aqui - componentWillUnMount
    }

    
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
