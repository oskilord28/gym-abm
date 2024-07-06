import React , {useState}from "react";
import "../estilos/tabla.css"


const Tabla = ({clases , eliminarElemento , editarElemento}) =>{
    const [form, setForm] = useState(null)

    const eliminar = (elemento) => 
        
        { console.log(elemento)
        const conf = window.confirm("Seguro de Eliminar el elemento ?")
        if (conf) {
            eliminarElemento(elemento)
            
        }

    }

    const editar = (elemento) =>{
        setForm(elemento)
    }

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value})
      
    }
    
    const handleSubmit = (elemento) => {
        const conf = window.confirm ("Esta seguro de editar el elemento")
        if(conf){
            editarElemento(elemento)
            setForm(null)
        }
    }
    
    return (
        <table className="table info table-striped my-3 ">
            <thead>
                <tr className="table-info" >
                    <th>Clases</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Horarios</th>
                    <th>Acciones</th>
                </tr>
              
            </thead>
            <tbody>
                {clases.map(c =>
                    (form !== null && form.id === c.id)
                    ? 
                    <tr key={c.id}>
                        <td>
                            <select onChange={handleChange} className="form-select" name="clase" id="">
                            <option value="">Seleccione</option>
                            <option value="funcional">Funcional</option>
                            <option value="zumba">Zumba</option>
                            <option value="crossfit">Crossfit</option>
                            </select>
                        </td>
                        <td>
                            <input onChange={handleChange} type="text" name="nombreApellido" value= {form.nombreApellido}  id="" />
                        </td>
                        <td>
                            <input onChange={handleChange} type="text" name="telefono" value= {form.telefono}  id="" />
                        </td>
                        <td>
                            <input onChange={handleChange} type="text" name ="email" value= {form.email}  id="" />
                        </td>
                        <td>
                            <select  onChange={handleChange} className="form-select" name="horario" id="">
                            <option value="">Horarios</option>
                            <option value="10:00-11:00">10:00-11:00</option>
                            <option value="11:00-12:00">11:00-12:00</option>
                            <option value="12:00-13:00">12:00-13:00</option>
                            </select>
                        </td>
                        <td>    
                            <button className="btn btn-primary"onClick={()=>handleSubmit(form)}>Aceptar</button>
                            <button className="btn btn-danger" onClick={()=> setForm(null)}>Cancelar</button>
                        </td>
                    </tr>
                    :
                    <tr key ={c.id}>
                        <td>{c.clase}</td>
                        <td>{c.nombreApellido}</td>
                        <td>{c.telefono}</td>
                        <td>{c.email}</td>
                        <td>{c.horario}</td>
                       <td>
                       <button onClick ={()=> editar(c)} className="btn btn-warning mx-3">Editar</button>
                       <button onClick={() => eliminar(c)} className="btn btn-danger mx-3" >Eliminar</button>
                       </td>
                    </tr>
                )}
            </tbody>
            
        </table>
    )


}

export default Tabla ;
