import { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import axios from 'axios'


//Providers(Padres) Consumers(Hijos) -> StoreProvider (redux) HistoryProvider AuthProvider
//useContext createContext
//useReducer
//useRef
//useMemo -> optmizacion
//useCallback -> optimizacion

const themes = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: 'black',
    color: 'white'
  }
}


//1. Se crea el contexto con data inicial
const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {}
})

//2. Se crea el Provider

const MyThemeComponent = () => {
  const [theme, setTheme] = useState(themes.light)
  const value = {  theme, setTheme }

  return (
    <ThemeContext.Provider value={value}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

const Toolbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div>
      <ThemedButton />
      <br/>
      <br/>
      <LightButton onClickLightBtn={()=>setTheme(themes.light)} />
      <DarkButton onClickDarkBtn={()=>setTheme(themes.dark)} />
    </div>
  )
}

const ThemedButton = ()=> {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button style={{ background: theme.backgroundColor, color: theme.color}}>
      Estoy siendo estilado por el theme context
    </button>
  )
}

const LightButton = ({ onClickLightBtn }) => {
  return (
    <button onClick = {onClickLightBtn}>
      Turn on Light
    </button>
  )
}

const DarkButton = ({ onClickDarkBtn }) => {
  return (
    <button onClick={ onClickDarkBtn}>
      Turn on Dark
    </button>
  )
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
  
  console.log("APP Component")

  return (
    <div className="App">
      <MyThemeComponent />
    </div>
  );
}

export default App;
