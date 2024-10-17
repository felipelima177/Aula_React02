import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(true)
  const [theme, setTheme] = useState(true)
  const [num, setNum] = useState(0)
  const [titulo, setTitulo] = useState (false)
  const [texto, setTexto] = useState(' ')
  const exibirMsg = (event) => {
    setTexto(event.target.value);
  };
  

  return (
    <>
        <button onClick={() => setTheme(theme ? false : true)}>TROCAR A COR DE FUNDO</button>
        {theme ?
        <div className='fundo-preto'>
          <h1>NOME: {name}</h1>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
        :  <div className='fundo-branco'>
            <h1>NOME: {name}</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div> 
          }

          
          <div>
          <button onClick={() => setNum (num +10)}>ADICIONAR NÚMERO</button>
          <h1>{num}</h1>
          <button onClick={() => setNum (num -10)}>REMOVER NÚMERO</button>
          </div>
          <br />

          
          <div>
            <button onClick={() => setTitulo(("Balacobaco"))}>
            Exibir título {titulo}
            </button>
          
            <button onClick={() => setTitulo((titulo) => titulo = "")}>
            Ocultar título {titulo}
            </button>
          
          </div>

          <div>
             <input type="text" value={texto} placeholder='Digite algo' onChange={exibirMsg} />
            <p>Resultado: {texto}</p>
            {texto === "SENAI" && <p>Apareci!</p>}
          </div>


          </>

        )
}

export default App
