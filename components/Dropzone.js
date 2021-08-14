import React, { useCallback, useContext, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clienteAxios from '../config/axios';
import { TiTimes } from 'react-icons/ti';
import Loading from './Loading';
import appContext from '../context/app/appContext';

const Dropzone = () => {
    const { mostrarAlerta } = useContext(appContext);

    const [loading, setLoading] = useState(false);
    const [Error, setError] = useState({ file: false, delete: false });
    const [archivos, setArchivos] = useState([]);

    const onDropAccepted = useCallback(async (acceptedFiles) => {
        const [archivo] = acceptedFiles;

        // Crear un form data
        const formData = new FormData();
        formData.append('archivo', archivo);

        setLoading(true);
        const resultado = await clienteAxios.post('archivos', formData);
        archivo.nombre = resultado.data.archivo;

        // Actualizando el state
        setArchivos([archivo]);
        setError({ ...Error, file: false })

        setLoading(false);
    }, []);

    const onDropRejected = () => {
        setError({ ...Error, file: true });
        mostrarAlerta('El archivo es muy pesado');
        setTimeout(() => {
            setError({ ...Error, file: false });
        }, 2000)
    };

    const deleteFile = async (archivo) => {
        try {
            const nuevosArchivos = [...archivos]
            nuevosArchivos.splice(nuevosArchivos.indexOf(archivo), 1)
            setArchivos(nuevosArchivos);
            await clienteAxios.delete(`archivos/${archivo.nombre}`, { data: { archivo: archivo.nombre } });
        } catch (error) {
            console.log(error.response);
            setError({ ...Error, delete: archivo.nombre });
        }
    };

    const crearEnlace = () => {
        console.log('Crear enlace');
    }

    // Extraer contenido de dropzone
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDropAccepted, onDropRejected, maxSize: 1000000 });

    const listaArchivos = archivos.map((archivo, index) => (
        <li key={ archivo.lastModified }>
            <div className="float-right">
                <button onClick={ () => deleteFile(archivo) } className="p-1 -mt-2 -mr-2 text-lg font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded rounded-full outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none"><TiTimes /></button>
            </div>
            <div className="flex-1 p-3 mb-4 bg-white rounded shadow-lg">
                <p className="text-xl font-bold">{ archivo.path }</p>
                <p className="text-sm text-gray-500">{ (archivo.size / Math.pow(1024, 2)).toFixed() } MB</p>
            </div>
        </li>
    ))

    return (
        <div className="flex flex-col items-center justify-center mx-2 mt-16 mb-3 bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg md:flex-1 lg:mt-0">
            {
                listaArchivos.length > 0
                    ? (
                        <div className="w-full px-3 mt-10">
                            <h4 className="mb-4 text-2xl font-bold text-center">Archivos</h4>
                            <ul>
                                { listaArchivos }
                            </ul>
                            { Error.delete && <p className="text-2xl text-center text-red-500">No se pudo eliminar el archivo { Error.delete }</p> }
                            <button className="w-full px-4 py-3 my-5 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none" onClick={ crearEnlace }>Crear enlace</button>
                        </div>
                    )
                    : (
                        <div { ...getRootProps({ className: 'dropzone w-full py-32' }) }>
                            <input className="h-100" { ...getInputProps() } />
                            {
                                loading ? <>
                                    <Loading />
                                </>
                                    :
                                    isDragActive ? <p className="text-2xl text-center text-gray-600">Suelta el archivo</p> : (
                                        <div className="text-center">
                                            { Error.file && <p className="text-xl italic text-center text-red-500">El archivo es muy grande</p> }
                                            <p className="text-2xl text-center text-gray-600">Seleccione un archivo y arrastralo aqui</p>
                                            <button className="px-4 py-3 my-10 mr-2 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">Subir archivo</button>
                                        </div>
                                    )
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default Dropzone
