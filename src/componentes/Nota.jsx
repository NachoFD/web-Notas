/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Nota.css'

function Nota(props) {



  return (
    <div className='fondo_nota' style={ props.tema == 'Oscuro' ? {backgroundColor: 'rgb(34, 4, 93)', color: 'gray'} : {}}>

      <button onClick={props.eliminar} style={ props.tema == 'Oscuro' ? {backgroundColor: 'black', color: 'gray'} : {}}>X</button>
      <h4><strong>Creado:</strong> <span>{props.fecha}</span></h4>
      <hr />
      <h3>{props.nota}</h3>
    </div>
  )
}

export default Nota