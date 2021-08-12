import React, { useReducer } from 'react'
import authContext from './authContext';
import { authReducer } from './authReducer';

import {
    USUARIO_AUTENTICADO,
    REGISTRO_EXITOSO,
    REGISTRO_FALLIDO,
    LIMPIAR_ALERTA,
    LOGIN_EXITOSO,
    LOGIN_FALLIDO,
    CERRAR_SESION
} from '../../types';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

const AuthState = ({ children }) => {
    // Definir un state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: null
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
            dispatch({
                type: REGISTRO_FALLIDO,
                payload: error.response.data.message
            })
        }

        limpiarAlerta();
    }

    // Autenticar usuarios
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_FALLIDO,
                payload: error.response.data.message
            })
        }

        limpiarAlerta();
    }

    // Retorne el usuario autenticado en base al JWT
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('auth');
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    // Cerrar sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    // Limpiar la alerta con el mensaje
    const limpiarAlerta = () => {
        // Limpiar la alerta luego de 3 segundos
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA
            })
        }, 3000)
    }

    return (
        <authContext.Provider value={ {
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            cargando: state.cargando,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion
        } }>
            { children }
        </authContext.Provider>
    )
}

export default AuthState