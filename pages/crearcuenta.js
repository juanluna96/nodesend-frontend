import React from 'react'
import Layout from '../components/Layout';

const CrearCuenta = () => {
    return (
        <Layout>
            <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
                <h2 className="text-4l font-sans uppercase font-bold text-gray-800 text-center my-4">Crear cuenta</h2>
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-lg">
                        <form className="bg-white-rounded shadow-md px-8 py-6 mb-4">
                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-block ml-0.5 text-xs font-bold mb-2">Nombre...</label>
                                <input type="text" className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" placeholder="Nombre de usuario..." />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-block ml-0.5 text-xs font-bold mb-2">Email...</label>
                                <input type="text" className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Email del usuario..." />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-block ml-0.5 text-xs font-bold mb-2">Contraseña...</label>
                                <input type="password" className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Contraseña..." />
                            </div>
                            <button className="w-full text-sm text-red-500 mt-8 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 font-bold uppercase block text-center px-4 py-3 rounded outline-none focus:outline-none  ease-linear transition-all duration-150" type="submit">Registrarme</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CrearCuenta
