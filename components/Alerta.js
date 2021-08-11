import React, { useContext } from 'react'
import authContext from '../context/auth/authContext'

const Alerta = () => {
    const AuthContext = useContext(authContext);
    const { mensaje } = AuthContext;

    return (
        <div className="w-full max-w-lg px-3 py-2 mx-auto my-3 text-center text-white bg-red-500">
            { mensaje }
        </div>
    )
}

export default Alerta
