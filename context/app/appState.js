import React, { useReducer } from 'react'
import appContext from './appContext';
import appReducer from './appReducer';
import { MOSTRAR_ALERTA } from '../../types';

const AppState = ({ children }) => {
    const initialState = {
        mensaje_archivo: ''
    }

    // Muestra una alerta
    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        })
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <appContext.Provider value={ {
            mensaje_archivo: state.mensaje_archivo,
            mostrarAlerta
        } }>
            { children }
        </appContext.Provider>
    )
}

export default AppState
