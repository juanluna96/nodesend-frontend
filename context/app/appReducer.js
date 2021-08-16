import {
    MOSTRAR_ALERTA,
    LIMPIAR_ALERTA,
    SUBIR_ARCHIVO_EXITOSO,
    BORRAR_ARCHIVO_EXITOSO,
    SUBIR_ARCHIVO_FALLIDO,
    CARGANDO_CONTENIDO,
    SUBIR_ENLACE_EXITOSO,
    LIMPIAR_STATE,
    AGREGAR_PASSWORD
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {
        case SUBIR_ARCHIVO_EXITOSO:
            return { ...state, nombre: payload.nombre, nombre_original: payload.nombre_original };
        case BORRAR_ARCHIVO_EXITOSO:
            return { ...state, nombre: '', nombre_original: '' };
        case AGREGAR_PASSWORD:
            return { ...state, password: payload };
        case SUBIR_ENLACE_EXITOSO:
            return { ...state, url: payload };
        case SUBIR_ARCHIVO_FALLIDO:
        case MOSTRAR_ALERTA:
            return { ...state, mensaje_archivo: payload };
        case LIMPIAR_ALERTA:
            return { ...state, mensaje_archivo: '' };
        case CARGANDO_CONTENIDO:
            return { ...state, loading: payload };
        case LIMPIAR_STATE:
            return {
                ...state,
                mensaje_archivo: '',
                nombre: '',
                nombre_original: '',
                descargas: 1,
                password: '',
                autor: null,
                url: '',
                error_eliminar: false,
                loading: false
            };
        default:
            return state
    }
}