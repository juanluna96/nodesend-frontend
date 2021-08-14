import { MOSTRAR_ALERTA, LIMPIAR_ALERTA } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {
        case LIMPIAR_ALERTA:
            return { ...state, mensaje_archivo: '' };
        case MOSTRAR_ALERTA:
            return { ...state, mensaje_archivo: payload };
        default:
            return state
    }
}