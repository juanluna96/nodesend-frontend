import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import authContext from '../context/auth/authContext';
import Alerta from '../components/Alerta';
import { useRouter } from 'next/dist/client/router';

const Login = () => {
    const { iniciarSesion, autenticado, mensaje } = useContext(authContext);

    // Next - router
    const router = useRouter();

    useEffect(() => {
        if (autenticado) {
            router.push('/');
        }
    }, [autenticado])

    // Formulario y validacion con Formik y Yup simplificado
    const formikOptions = {
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('El email no es valido').required('El email es obligatorio'),
            password: Yup.string().min(6, 'La contraseña debe contener al menos 6 caracteres').required('La contraseña es obligatoria'),
        }),
        onSubmit: valores => {
            iniciarSesion(valores);
        }
    };

    return (
        <Layout>
            <div className="mx-auto mb-32 md:w-4/5 xl:w-3/5">
                <h2 className="my-4 font-sans font-bold text-center text-gray-800 uppercase text-4l">Iniciar sesion</h2>
                { mensaje && <Alerta /> }
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-lg">
                        <Formik { ...formikOptions } >
                            <Form className="px-8 py-6 mb-4 shadow-md bg-white-rounded">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-block ml-0.5 text-xs font-bold mb-2">Email del usuario...</label>
                                    <Field name="email" type="email" className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline" />
                                    <ErrorMessage name="email">
                                        {
                                            msg =>
                                                <div className="p-4 my-2 text-red-700 bg-gray-200 border-l-4 border-red-500">
                                                    <p className="font-bold">Error</p>
                                                    <p>{ msg }</p>
                                                </div>
                                        }
                                    </ErrorMessage>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-block ml-0.5 text-xs font-bold mb-2">Contraseña...</label>
                                    <Field name="password" type="password" className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none focus:outline-none focus:shadow-outline" />
                                    <ErrorMessage name="password">
                                        {
                                            msg =>
                                                <div className="p-4 my-2 text-red-700 bg-gray-200 border-l-4 border-red-500">
                                                    <p className="font-bold">Error</p>
                                                    <p>{ msg }</p>
                                                </div>
                                        }
                                    </ErrorMessage>
                                </div>

                                <button type="submit" className="block w-full px-4 py-3 mt-8 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">Loguearme</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login
