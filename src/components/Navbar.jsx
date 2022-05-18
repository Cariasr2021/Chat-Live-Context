import React from 'react'
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {
    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)
  return (
    <nav className='navbar navbar-dark bg-dark'>
        <div className="container-fluid">
            <span className='navbar-brand'>
                Chat
            </span>
            <div>
                {
                    usuario.estado ? 
                    <button className="btn btn-outline-danger my-2" onClick={cerrarSesion}>
                        Cerrar Sesión
                    </button> :
                    <button className="btn btn-outline-success my-2" onClick={ingresoUsuario}>
                        Acceder
                    </button>
                }             
            </div>
        </div>
    </nav>
  )
}

export default Navbar