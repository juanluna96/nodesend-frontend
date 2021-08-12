import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clienteAxios from '../config/axios';

const Dropzone = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 mx-2 mt-16 mb-3 bg-gray-100 border-2 border-gray-400 border-dashed rounded-lg md:flex-1 lg:mt-0">
            <p>Dropzone aquí</p>
        </div>
    )
}

export default Dropzone
