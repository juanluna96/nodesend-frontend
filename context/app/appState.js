import React, { useReducer } from 'react'
import appContext from './appContext';
import appReducer from './appReducer';
import {
    MOSTRAR_ALERTA,
    LIMPIAR_ALERTA,
    SUBIR_ARCHIVO_EXITOSO,
    SUBIR_ARCHIVO_FALLIDO,
    BORRAR_ARCHIVO_EXITOSO,
    BORRAR_ARCHIVO_FALLIDO,
    CARGANDO_CONTENIDO,
    SUBIR_ENLACE_EXITOSO,
    LIMPIAR_STATE,
    AGREGAR_PASSWORD,
    AGREGAR_NUMERO_DESCARGAS
} from '../../types';
import clienteAxios from '../../config/axios';

const AppState = ({ children }) => {
    const initialState = {
        mensaje_archivo: '',
        nombre: '',
        nombre_original: '',
        descargas: 1,
        password: '',
        autor: null,
        url: '',
        error_eliminar: false,
        loading: false
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    /* -------------------------------------------------------------------------- */
    /*                            Funciones de archivos                           */
    /* -------------------------------------------------------------------------- */

    // Muestra una alerta
    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        });

        ocultarAlerta();
    }

    // Sube los archivos al servidor
    const subirArchivo = async (formData, nombreOriginal) => {
        cargandoArchivo(true);
        try {
            const resultado = await clienteAxios.post('archivos', formData);
            dispatch({
                type: SUBIR_ARCHIVO_EXITOSO,
                payload: {
                    nombre: resultado.data.archivo,
                    nombre_original: nombreOriginal
                }
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: SUBIR_ARCHIVO_FALLIDO,
                payload: error.response.data.message
            });
        }
        cargandoArchivo(false);
    }

    // Borra los archivos del servidor
    const borrarArchivo = async (archivo) => {
        try {
            await clienteAxios.delete(`archivos/${archivo}`, { data: { archivo: archivo } });
            dispatch({
                type: BORRAR_ARCHIVO_EXITOSO
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: BORRAR_ARCHIVO_FALLIDO
            });
        }
    }

    // Funcion para el loading del archivo
    const cargandoArchivo = (estado) => {
        dispatch({
            type: CARGANDO_CONTENIDO,
            payload: estado
        });
    }

    // Funcion para forrar la alerta en 3s
    const ocultarAlerta = () => {
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA,
            })
        }, 3000)
    }

    /* -------------------------------------------------------------------------- */
    /*                            Funciones de enlaces                            */
    /* -------------------------------------------------------------------------- */

    // Crea un enlace una vez que se subio el archivo
    const crearEnlace = async () => {
        const data = obtenerDataEnlace();

        try {
            const resultado = await clienteAxios.post('enlaces', data);
            dispatch({
                type: SUBIR_ENLACE_EXITOSO,
                payload: resultado.data.message
            });
        } catch (error) {
            console.log(error.response);
        }
    }

    const obtenerDataEnlace = () => {
        return {
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor
        }
    }

    // Agrega el password del enlace
    const agregarPassword = (password) => {
        dispatch({
            type: AGREGAR_PASSWORD,
            payload: password
        });
    }

    // Agrega el numero de descargas
    const agregarDescargas = (descargas) => {
        dispatch({
            type: AGREGAR_NUMERO_DESCARGAS,
            payload: descargas
        });
    }


    /* -------------------------------------------------------------------------- */
    /*                             Funciones del state                            */
    /* -------------------------------------------------------------------------- */

    const limpiarState = () => {
        dispatch({
            type: LIMPIAR_STATE
        });
    }

    return (
        <appContext.Provider value={ {
            mensaje_archivo: state.mensaje_archivo,
            nombre: state.nombre,
            nombre_original: state.nombre_original,
            descargas: state.descargas,
            password: state.password,
            autor: state.autor,
            url: state.url,
            loading: state.loading,
            mostrarAlerta,
            subirArchivo,
            borrarArchivo,
            agregarPassword,
            agregarDescargas,
            crearEnlace,
            limpiarState
        } }>
            { children }
        </appContext.Provider>
    )
}

export default AppState
