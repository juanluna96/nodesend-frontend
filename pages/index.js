import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';
import Link from 'next/link';

const Home = () => {
  // Extraer el usuario autenticado del storage
  const { usuarioAutenticado, usuario } = useContext(authContext);

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <Layout>
      <div className="mx-auto mb-32 md:w-4/5 xl:w-3/5">
        <div className="p-5 py-10 bg-white rounded-lg lg:flex md:shadow-lg">
          <p>Dropzone aquí</p>
          <div className="mx-2 mt-16 mb-3 md:flex-1 lg:mt-0">
            <h2 className="my-4 font-sans text-4xl font-bold text-gray-800">Compartir archivos de forma sencilla y rápida.</h2>
            <p className="text-lg leading-loose">
              <span className="italic font-bold text-red-500">ReactNode<span className="text-gray-800">Send</span></span> te permite compartir archivos con cifrado de extremo a extremo y un archivo que es eliminado después de ser descargado. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en línea para siempre.
            </p>
            <Link href="/login">
              <a className="block my-3 text-base text-lg italic font-bold text-red-500 transition-all duration-150 ease-linear outline-none hover:text-red-700 active:text-red-800 focus:outline-none">Crear cuenta para mayores beneficios</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
