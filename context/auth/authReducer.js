import {
    USUARIO_AUTENTICADO,
    REGISTRO_EXITOSO,
    REGISTRO_FALLIDO,
    LIMPIAR_ALERTA,
    LOGIN_FALLIDO
} from '../../types';

export const authReducer = (state, { payload, type }) => {
    switch (type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_FALLIDO:
        case LOGIN_FALLIDO:
            return { ...state, mensaje: payload }
        case LIMPIAR_ALERTA:
            return { ...state, mensaje: null }
        case USUARIO_AUTENTICADO:
            return { ...state, usuario: payload }
        default:
            return state
    }
}