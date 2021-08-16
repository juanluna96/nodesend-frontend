import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';

import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';

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
    return (
        <Layout>
            <h1 className="text-2xl text-center text-gray-700 md:text-4xl">Descarga tu archivo</h1>
            <div className="flex items-center justify-center max-w-lg px-3 mx-auto mt-5">
                <a href={ `${process.env.backendURL}/api/archivos/${enlace.archivo}` } className="flex items-center justify-center w-full px-4 py-3 my-5 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">
                    <AiOutlineDownload className="mr-2 text-xl" />
                    Aqui
                </a>
            </div>
        </Layout>
    )
}

export default Enlace
