/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Nota from './componentes/Nota'

function App() {

  const [ tema, setTema ] = useState('Claro')
  const [ fondo, setFondo ] = useState('linear-gradient(to top, rgb(230, 230, 230), rgb(230, 230, 230))')

  const [ notas, setNotas ] = useState([])
  const [ textoNota, setNota ] = useState('')

  const handleChange = (event) => {
    setNota(event.target.value);
  }

  const agregarNota = () => {

    if(textoNota != ''){
      const fechaActual = new Date();
      const fechaFormateada = fechaActual.toLocaleString();
  
      const nota = {
        fecha: fechaFormateada,
        nota: textoNota
      }
  
      setNotas([...notas, nota]);
      setNota('');
    }
  }

  const eliminarNota = (notaAEliminar) => {
    const nuevasNotas = notas.filter(nota => nota !== notaAEliminar);
    setNotas(nuevasNotas)
  }

  const changeTema = () => {

    if(tema == 'Oscuro'){
      setTema('Claro')
      setFondo('linear-gradient(to top, rgb(230, 230, 230), rgb(230, 230, 230))')
    }
    else
    {
      setTema('Oscuro')
      setFondo('linear-gradient(to top, rgb(0, 0, 0), rgb(35, 2, 100))')
    }
  }

  return (
    <main className='display_fondo' style={{background: fondo}}>
      <div style={{display: 'block'}}>

        <header className='escribir_nota' 
          style={ tema == 'Claro' ? 
          {
            boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', 
            backgroundColor: 'rgb(230, 230, 230)'
          } 
          : 
          {
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', 
            backgroundColor: 'rgb(34, 4, 93)'
          }}>

            <img src={ tema == 'Oscuro' ? 'https://cdn-icons-png.flaticon.com/128/2392/2392508.png' : 'https://cdn-icons-png.flaticon.com/128/606/606807.png'} className='icono_tema' style={tema == 'Claro' ? {height: '40px', width: '40px', marginRight: '3px', marginTop: '5px'} : {}} onClick={changeTema}/>

            <input 
              type="text" 
              name="nota" 
              value={textoNota} 
              onChange={handleChange}
              placeholder='Agregar una nota'
              
              style={tema == 'Claro' ? {border: '2px solid black'} : {}}
            />

            <button onClick={agregarNota} style={tema == 'Claro' ? {borderColor: 'black'} : {}}>+</button>
        </header>


        <div className='notas'>
            {notas.map((nota, index) => (
              <Nota key={index} fecha={nota.fecha} nota={nota.nota} eliminar={() => eliminarNota(nota)}/>
            ))}
        </div>

      </div>
    </main>
  )
}

export default App
