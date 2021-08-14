import React, { useContext } from 'react'
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext';

const Alerta = () => {
    // Extraer mensaje de alertas para usuario
    const AuthContext = useContext(authContext);
    const { mensaje } = AuthContext;

    const AppContext = useContext(appContext);
    const { mensaje_archivo } = AppContext;

    return (
        <div className="w-full max-w-lg px-3 py-2 mx-auto my-3 text-center text-white bg-red-500">
            { mensaje || mensaje_archivo }
        </div>
    )
}

export default Alerta
