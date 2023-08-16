import { useState } from "react";

const Formulario =({agregarTarjeta})=>{

    const [datos, setDatos]=useState({
        nombre:"",
        animal:""
    });
    const funcionFormualario =(e)=>{
        e.preventDefault();
        if (datos.nombre.length >=3 &&datos.nombre.trim()&&datos.animal.length >6 && datos.animal.trim()){
            agregarTarjeta(datos)
        }else{
                alert("sus datos son incorrectos");
        }
        
    }
    return (
            <form  className ="form-control mb-3"action="" onSubmit={funcionFormualario}>
                <input   className ="form-control mb-2" type="text" placeholder="Ingrese su nombre" name="nombre" onChange={(e)=>setDatos({...datos,nombre: e.target.value})} />
                <input  className ="form-control mb-2"  type="text" placeholder="Ingrese un animal" name="animal" onChange={(e)=>setDatos({...datos,animal: e.target.value})} />
                <button className="btn btn-info">ENVIAR</button>
            </form>
            
            
    );
}
export default Formulario;