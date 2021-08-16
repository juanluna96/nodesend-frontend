import React from 'react'
import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';

export const getStaticProps = async (ctx) => {
    const resultado = await clienteAxios.get('enlaces/tQ-EDo9Ql');

    console.log(resultado);

    return {
        props: {
            enlace:resultado.data
        }
    }
}

export async function getStaticPaths() {
    const enlaces = await clienteAxios.get('enlaces');
    return {
        paths: enlaces.data.enlaces.map((enlace) => (
            { params: { enlace: enlace.url } }
        )),
        fallback: false
    };
}

const Enlace = ({enlace}) => {
    console.log(enlace);
    return (
        <Layout>
            Desde enlace.js
        </Layout>
    )
}

export default Enlace
