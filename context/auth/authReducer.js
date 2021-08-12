import {
    USUARIO_AUTENTICADO,
    REGISTRO_EXITOSO,
    REGISTRO_FALLIDO,
    LIMPIAR_ALERTA,
    LOGIN_FALLIDO,
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';

export const authReducer = (state, { payload, type }) => {
    switch (type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_FALLIDO:
        case LOGIN_FALLIDO:
            return { ...state, mensaje: payload }
        case LOGIN_EXITOSO:
            localStorage.setItem('token', payload);
            return { ...state, token: payload, autenticado: true }
        case USUARIO_AUTENTICADO:
            return { ...state, usuario: payload }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return { ...state, usuario: null, token: null, autenticado: null }
        case LIMPIAR_ALERTA:
            return { ...state, mensaje: null }
        default:
            return state
    }
}