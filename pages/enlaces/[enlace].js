import React, { useContext, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineDownload } from 'react-icons/ai';

import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';
import appContext from '../../context/app/appContext';

export const getServerSideProps = async (props) => {
    const { params: { enlace } } = props;
    const resultado = await clienteAxios.get(`enlaces/${enlace}`);

    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
    const enlaces = await clienteAxios.get('enlaces');
    return {
        paths: enlaces.data.enlaces.map((enlace) => (
            { params: { enlace: enlace.url } }
        )),
        fallback: false
    };
}

const Enlace = ({ enlace }) => {
    const [tienePassword, setTienePassword] = useState(enlace.password);
    const { verificarPassword } = useContext(appContext);

    // Formulario y validacion con Formik y Yup simplificado
    const formikOptions = {
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().required('La contraseña es obligatoria'),
        }),
        onSubmit: valores => {
            verificarPassword(valores.password);
        }
    };

    return (
        <Layout>
            {
                tienePassword
                    ? (
                        <>
                            <p className="text-center">Este enlace esta protegido con contraseña, para descargar el documento colocala acontinuacion.</p>
                            <Formik { ...formikOptions } >
                                <Form className="max-w-2xl px-6 py-6 mx-auto mb-4">
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-block ml-0.5 text-xs font-bold mb-2">Contraseña del enlace...</label>
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

                                    <button type="submit" className="block w-full px-4 py-3 mt-8 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">Validar contraseña</button>
                                </Form>
                            </Formik>
                        </>
                    )
                    : (
                        <>
                            <h1 className="text-2xl text-center text-gray-700 md:text-4xl">Descarga tu archivo</h1>
                            <div className="flex items-center justify-center max-w-lg px-3 mx-auto mt-5">
                                <a href={ `${process.env.backendURL}/api/archivos/${enlace.archivo}` } className="flex items-center justify-center w-full px-4 py-3 my-5 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">
                                    <AiOutlineDownload className="mr-2 text-xl" />
                                    Aqui
                                </a>
                            </div>
                        </>
                    )
            }
        </Layout>
    )
}

export default Enlace
