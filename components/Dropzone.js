import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clienteAxios from '../config/axios';

const Dropzone = () => {
    const onDrop = useCallback(async (acceptedFiles) => {
        const [archivo] = acceptedFiles;

        // Crear un form data
        const formData = new FormData();
        formData.append('archivo', archivo);

        const resultado = await clienteAxios.post('archivos', formData);
        console.log(resultado.data);
    }, [])

    // Extraer contenido de dropzone
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div className="flex flex-col items-center justify-center mx-2 mt-16 mb-3 bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg md:flex-1 lg:mt-0">
            <div { ...getRootProps({ className: 'dropzone w-full py-32' }) }>
                <input className="h-100" { ...getInputProps() } />
                {
                    isDragActive ? <p className="text-2xl text-center text-gray-600">Suelta el archivo</p> : (
                        <div className="text-center">
                            <p className="text-2xl text-center text-gray-600">Seleccione un archivo y arrastralo aqui</p>
                            <button className="px-4 py-3 my-10 mr-2 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">Subir archivo</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Dropzone
