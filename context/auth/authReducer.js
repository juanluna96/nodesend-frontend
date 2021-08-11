import { USUARIO_AUTENTICADO, REGISTRO_EXITOSO } from '../../types';

export const authReducer = (state, { payload, type }) => {
    switch (type) {
        case REGISTRO_EXITOSO:
            return { ...state, mensaje: payload }
        case USUARIO_AUTENTICADO:
            return { ...state, usuario: payload }
        default:
            return state
    }
}