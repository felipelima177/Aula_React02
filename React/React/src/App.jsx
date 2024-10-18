import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(true)
  const [theme, setTheme] = useState(true)
  const [num, setNum] = useState(0)
  const [titulo, setTitulo] = useState(false)
  const [texto, setTexto] = useState(' ')
  const exibirMsg = (event) => {
    setTexto(event.target.value);
  };

  const [nome, setNome] = useState('Felipe');
  const [ano, setAno] = useState(24);
  const [email, setEmail] = useState('felipe123@gmail.com');
  const [like, setLike] = useState()
  const [textcont, setTextcont] = useState()

  return (
    <>
      <button onClick={() => setTheme(theme ? false : true)}>TROCAR A COR DE FUNDO</button>
      {theme ?
        <div className='fundo-preto'>
          <h1>NOME: {name}</h1>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        : <div className='fundo-branco'>
          <h1>NOME: {name}</h1>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
      }

      {/*Atv 1 contador 10 em 10 */}
      <div>
        <button onClick={() => setNum(num + 10)}>ADICIONAR NÚMERO</button>
        <h1>{num}</h1>
        <button onClick={() => setNum(num - 10)}>REMOVER NÚMERO</button>
      </div>
      <br />

      {/*Atv 2 esconder/exibir texto */}
      <div>
        <button onClick={() => setTitulo(("Balacobaco"))}>
          Exibir título {titulo}
        </button>

        <button onClick={() => setTitulo((titulo) => titulo = "")}>
          Ocultar título {titulo}
        </button>

      </div>

      {/*Atv 3 exibir mensagem ao digitar SENAI */}
      <div>
        <input type="text" value={texto} placeholder='Digite algo' onChange={exibirMsg} />
        <p>Resultado: {texto}</p>
        {texto === "SENAI" && <p>Apareci!</p>}
      </div>

      {/*Atv 4 like e deslike */}
      <div>
        <br />
        <button onClick={() => setLike("❤" + 1)}>
          Dar um Like {like}
        </button>

        <button onClick={() => setLike(("❤" + 0))}>
          Remover like {like}
        </button>
      </div>
      <br />

       {/*Atv 5 contador de caracteres */}
      



      {/*Atv 6 formulário */}
      <div>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder='informe seu nome' /><br></br>
        <input value={ano} onChange={e => setAno(e.target.value)} placeholder='informe sua idade' /><br></br>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='informe seu email' /><br></br>
        <button onClick={() => setAno(age + 1)}>
          
        </button>
        <p>Nome: {nome}<br></br> Idade: {ano}<br></br>Email: {email}<br></br></p>
      </div>
    </>

  )
}


export default App
