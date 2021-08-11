import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import Alerta from '../components/Alerta';

const CrearCuenta = () => {
    // Acceder al state
    const AuthContext = useContext(authContext);
    const { mensaje, registrarUsuario } = AuthContext;

    // Formulario y validacion con Formik y Yup
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
            password: Yup.string().min(6, 'La contraseña debe contener al menos 6 caracteres').required('La contraseña es obligatoria'),
        }),
        onSubmit: (valores, { resetForm }) => {
            registrarUsuario(valores);
            resetForm();
        }
    });

    return (
        <Layout>
            <div className="mx-auto mb-32 md:w-4/5 xl:w-3/5">
                <h2 className="my-4 font-sans font-bold text-center text-gray-800 uppercase text-4l">Crear cuenta</h2>
                { mensaje && <Alerta /> }
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-lg">
                        <form className="px-8 py-6 mb-4 shadow-md bg-white-rounded" onSubmit={ formik.handleSubmit }>
                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-block ml-0.5 text-xs font-bold mb-2">Nombre...</label>
                                <input type="text" className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline" id="nombre" placeholder="Nombre de usuario..." value={ formik.values.nombre } onChange={ formik.handleChange } onBlur={ formik.handleBlur } />
                                {
                                    formik.touched.nombre && formik.errors.nombre
                                        ? (
                                            <div className="p-4 my-2 text-red-700 bg-gray-200 border-l-4 border-red-500">
                                                <p className="font-bold">Error</p>
                                                <p>{ formik.errors.nombre }</p>
                                            </div>
                                        )
                                        : null
                                }
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-block ml-0.5 text-xs font-bold mb-2">Email...</label>
                                <input type="text" className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline" id="email" placeholder="Email del usuario..." value={ formik.values.email } onChange={ formik.handleChange } onBlur={ formik.handleBlur } />
                                {
                                    formik.touched.email && formik.errors.email
                                        ? (
                                            <div className="p-4 my-2 text-red-700 bg-gray-200 border-l-4 border-red-500">
                                                <p className="font-bold">Error</p>
                                                <p>{ formik.errors.email }</p>
                                            </div>
                                        )
                                        : null
                                }
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-block ml-0.5 text-xs font-bold mb-2">Contraseña...</label>
                                <input type="password" className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline" id="password" placeholder="Contraseña..." value={ formik.values.password } onChange={ formik.handleChange } onBlur={ formik.handleBlur } />
                                {
                                    formik.touched.password && formik.errors.password
                                        ? (
                                            <div className="p-4 my-2 text-red-700 bg-gray-200 border-l-4 border-red-500">
                                                <p className="font-bold">Error</p>
                                                <p>{ formik.errors.password }</p>
                                            </div>
                                        )
                                        : null
                                }
                            </div>
                            <button className="block w-full px-4 py-3 mt-8 text-sm font-bold text-center text-red-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-red-500 border-solid rounded outline-none hover:bg-red-500 hover:text-white active:bg-red-500 focus:outline-none" type="submit">Registrarme</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CrearCuenta
