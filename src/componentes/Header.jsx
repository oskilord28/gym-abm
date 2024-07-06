import React from 'react'
import "../estilos/header.css"

const Header = ({titulo}) => {
    // const titulo = "Clases"
    return(
        <header className='bg-primary bg-gradient shadow p - 2'>
            <h1 className='text-center'>{titulo} </h1>
        </header>
    )
}

export default Header