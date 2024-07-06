import React, { useState, useEffect } from 'react'
import "../estilos/contenedor.css"
import Header from './Header'
import Formulario from './Formulario'
import Tabla from './Tabla'
import axios from 'axios'

const Contenedor = () => {
    const url = "http://localhost:5000/clases"

    const [clases, setClases] = useState([])

    useEffect(() => {
        axios.get(url)

        .then(resp => setClases(resp.data))
      
      
        
    }, [])
    
 
    const nuevoElemento = (nuevo) => {
        axios.post(url, nuevo)
        .then((response) => { 

            
            setClases([...clases, response.data])})
    }

    const eliminarElemento = (elemento) => {
        axios.delete(url + "/" + elemento.id)
        .then(() => setClases(clases.filter(c => c.id !== elemento.id)))
    }

    const editarElemento = (elemento) => {
        const nuevasClases = [...clases]
        const index = clases.findIndex(c => c.id === elemento.id)
        
        nuevasClases[index] = elemento
        
        axios.put(url + "/" + elemento.id, elemento)
        .then(() => setClases(nuevasClases))
    }
    return(
        <div className='contenedor'>
            <Header titulo = {"Clases"}/>
            <Formulario nuevoElemento={nuevoElemento}  />
            <Tabla clases= {clases} eliminarElemento={eliminarElemento} editarElemento={editarElemento}/>
        </div>
    )
}

export default Contenedor
