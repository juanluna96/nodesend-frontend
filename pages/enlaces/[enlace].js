import React from 'react'
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
    console.log(enlace);
    return (
        <Layout>
            Desde enlace.js
        </Layout>
    )
}

export default Enlace
