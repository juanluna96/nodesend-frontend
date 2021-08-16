import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FormularioEnlace = () => {
    const [tienePassword, setTienePassword] = useState(false);

    return (
        <div className="w-full mt-20">
            <div className="mb-3">
                <label htmlFor="" className="block text-block ml-0.5 text-xs font-bold mb-1 text-gray-800">Eliminar tras...</label>
                <div className="relative inline-flex self-center w-full transition duration-100 ease-in-out group">
                    <IoIosArrowDown className="absolute top-0 right-0 p-2 m-2 text-3xl text-white transition duration-500 ease-in-out bg-red-500 rounded pointer-events-none group-hover:bg-red-600" />
                    <select className="w-full h-12 pl-5 pr-10 text-lg text-gray-800 transition duration-500 ease-in-out bg-white border-2 border-red-500 rounded appearance-none cursor-pointer group-hover:border-red-600 focus:outline-none">
                        <option value="" selected disabled>-- Seleccione --</option>
                        <option value="1">1 Descarga</option>
                        <option value="5">5 Descargas</option>
                        <option value="10">10 Descargas</option>
                        <option value="20">20 Descargas</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-2">
                    <span className="mr-2 text-xs font-bold text-gray-700">Proteger con contraseña</span><input type="checkbox" className="w-5 h-5 text-red-600 form-checkbox" onChange={ () => setTienePassword(!tienePassword) } />
                </div>
                {
                    tienePassword &&
                    <input type="password" className="w-full h-12 px-3 py-2 leading-tight text-gray-700 border-2 border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="nombre" placeholder="Contraseña..." />
                }
            </div>
        </div>
    )
}

export default FormularioEnlace
