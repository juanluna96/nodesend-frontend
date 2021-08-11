import { USUARIO_AUTENTICADO } from '../../types';

export const authReducer = (state, { payload, type }) => {
    switch (type) {
        case 'USUARIO_AUTENTICADO':
            return { ...state, usuario: payload }
        default:
            return state
    }
}