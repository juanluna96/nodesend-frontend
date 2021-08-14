import { MOSTRAR_ALERTA } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {
        case MOSTRAR_ALERTA:
            return { ...state, mensaje_archivo: payload };
        default:
            return state
    }
}