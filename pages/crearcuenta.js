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
                                <label htmlFor="nombre" className="block text-block text-sm font-bol mb-2">Nombre</label>
                                <input type="text" className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" placeholder="Nombre de usuario..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CrearCuenta
