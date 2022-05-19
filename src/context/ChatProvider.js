import React from 'react'
import {db, auth, provider} from '../firebase/config'

export const ChatContext = React.createContext()

const ChatProvider = ({children}) => {

    const dataUsuario = {
                            uid: null, 
                            email: null,
                            estado: null
                        }
    const [usuario, setUsuario] = React.useState(dataUsuario)
    const [mensaje, setMensaje] = React.useState([])
                    
    React.useEffect(() => {
        detectarUsuario()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUsuario({
                    uid: user.uid, 
                    email: user.email,
                    estado: true
                })
                cargarMensajes()
            }else {
                setUsuario({
                    uid: null, 
                    email: null,
                    estado: false
                })
            }
        })
    }

    const ingresoUsuario = async() => {
        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = async() => {
        auth.signOut()
    }

    const cargarMensajes = () =>{
        db.collection('chat').orderBy('fecha')
        .onSnapshot(query => {
            const arrayMensaje = query.docs.map(item => item.data())
            setMensaje(arrayMensaje)
        })
    }
    
    const agregarMensajes = async(uidChat, textoInput) => {
        try {
            await db.collection('chat').add({
                fecha: Date.now(),
                texto: textoInput,
                uid: uidChat
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <ChatContext.Provider
        value={{usuario, ingresoUsuario, cerrarSesion, mensaje, agregarMensajes}}
    >
        {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider