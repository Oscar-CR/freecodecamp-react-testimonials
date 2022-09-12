import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img className='contenedor-imagen' src= {require(`../images/${props.imagen}`) } alt='foto de usuario' />
      <div className='contenedor-descripcion'>
        <p className='descripcion-nombre'><strong>{props.nombre}</strong> in {props.pais} </p>
        <p className='descripcion-puesto'> {props.cargo} at <strong>{props.empresa}</strong>  </p>
        <p className='descripcion-testimonio'> "{props.testimonio}"</p>
      </div>
    </div>
  );
 
}

export default Testimonio;