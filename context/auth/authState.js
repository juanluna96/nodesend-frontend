import React, { useReducer } from 'react'
import authContext from './authContext';
import { authReducer } from './authReducer';

import { USUARIO_AUTENTICADO, REGISTRO_EXITOSO } from '../../types';
import clienteAxios from '../../config/axios';

const AuthState = ({ children }) => {
    // Definir un state inicial
    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Registrar usuario
    const registrarUsuario = async (datos) => {
        try {
            const respuesta = await clienteAxios.post('usuarios', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <authContext.Provider value={ {
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            registrarUsuario
        } }>
            { children }
        </authContext.Provider>
    )
}

export default AuthState