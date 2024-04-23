import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const [dados, setDados] = useState([]);

  const buscarTodasContas = async (event) => {
    try {
      const response = await axios.get('https://backendsimples-production.up.railway.app/buscar_todas');
      setDados(response.data);
    } catch (error) {
      console.error('Erro:', error);
      toast.error("Erro ao tentar buscar todas as contas!");
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={buscarTodasContas}>
          buscar contas
        </button>
      </div>
      <div>
      <table >
          <thead>
            <tr>
              <th>Id</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
