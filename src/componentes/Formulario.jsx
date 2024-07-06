import React , { useState }  from 'react'
import "../estilos/formulario.css"

const Formulario = ({nuevoElemento}) => {
    const [form, setForm] = useState({
        
        clase: "",
        nombreApellido: "",
        telefono: "",
        email: "",
        horario: ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form.clase === "" && form.nombreApellido === "" && form.telefono === "" && form.email === "" && form.horario === ""  ) {
         
            alert("Faltan todos los datos");
            
            
        } else if (form.clase === ""){

            alert ("Falta la clase")
        }else if (form.nombreApellido === ""){

            alert ("Faltan el nombre completo")
        }
        else if (form.telefono === ""){

            alert ("Falta el telefono")
        }
        else if (form.horario === ""){

            alert ("Falta el horario")
        }
        else{
           nuevoElemento(form)
        }

       
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <select onChange={handleChange} className='form-select ' name="clase">
                <option value="">Seleccione</option>
                <option value="funcional">Funcional</option>
                <option value="zumba">Zumba</option>
                <option value="crossfit">Crossfit</option>
            </select>
            <input  onChange={handleChange} value={form.nombreApellido} type="text" name='nombreApellido' className='form-control' placeholder='Nombre y Apellido'/>
            <input onChange={handleChange} value={form.telefono} type="number" name='telefono' className='form-control' placeholder='Telefono' />
            <input onChange={handleChange} value={form.email} type="email" name='email' className='form-control' placeholder='Email' />
           
            <select onChange={handleChange} className='form-select ' name="horario">
            <option value="">Horarios</option>
                <option value="10:00-11:00">10:00-11:00</option>
                <option value="11:00-12:00">11:00-12:00</option>
                <option value="12:00-13:00">12:00-13:00</option>
            </select>
            <button type='submit' className='btn btn-dark'>Agregar</button>
        </form>
    )
}

export default Formulario