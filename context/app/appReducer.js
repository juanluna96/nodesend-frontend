import {
    MOSTRAR_ALERTA,
    LIMPIAR_ALERTA,
    SUBIR_ARCHIVO_EXITOSO,
    BORRAR_ARCHIVO_EXITOSO,
    SUBIR_ARCHIVO_FALLIDO,
    CARGANDO_CONTENIDO
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {
        case SUBIR_ARCHIVO_EXITOSO:
            return { ...state, nombre: payload.id, nombre_original: payload.nombre };
        case BORRAR_ARCHIVO_EXITOSO:
            return { ...state, nombre: '', nombre_original: '' };
        case SUBIR_ARCHIVO_FALLIDO:
        case MOSTRAR_ALERTA:
            return { ...state, mensaje_archivo: payload };
        case LIMPIAR_ALERTA:
            return { ...state, mensaje_archivo: '' };
        case CARGANDO_CONTENIDO:
            return { ...state, loading: payload };
        default:
            return state
    }
}