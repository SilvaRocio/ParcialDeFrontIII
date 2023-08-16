import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Formulario from './Formulario'
import Tarjeta from './Tarjeta'

function App() {
  
  const tarjeta={
    nombre:"",
    animal:""
  }
  const [datos, setDatos]=useState(tarjeta)
  const agregarTarjeta=(datos)=>{
    setDatos(datos);
  }
  return (
    <>
      <h2>Ingrese los Datos</h2>
      <Formulario agregarTarjeta={agregarTarjeta}></Formulario>

      {

      datos.nombre !== "" ? <Tarjeta dato={datos}></Tarjeta> : false
      
      }

    </>
  )
}

export default App
