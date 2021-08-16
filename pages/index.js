import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';
import Link from 'next/link';
import Dropzone from '../components/Dropzone';
import Alerta from '../components/Alerta';
import appContext from '../context/app/appContext';
import { FaRegCopy, FaCopy } from 'react-icons/fa';

const Home = () => {
  // State para copiar el enlace
  const [copiado, setCopiado] = useState(false);

  // Extraer el usuario autenticado del storage
  const { usuarioAutenticado } = useContext(authContext);
  const { mensaje_archivo, url } = useContext(appContext);
  const enlace = process.env.frontendURL + 'enlaces/' + url;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const copiarEnlace = () => {
    setCopiado(true);
    navigator.clipboard.writeText(enlace);
    setTimeout(() => {
      setCopiado(false);
    }, 1500)
  }

  return (
    <Layout>
      <div className="px-3 mx-auto mb-32 md:w-4/5 xl:w-3/5">
        {
          url
            ? (
              <>
                <p className="px-3 text-2xl text-center md:text-4xl">El enlace para compartir el archivo es:</p>
                <Link href={ enlace }>
                  <a target="_blank" className="block px-3 my-4 text-2xl italic text-center text-red-500 md:text-4xl">{ enlace }</a>
                </Link>
                <button
                  onClick={ () => copiarEnlace() }
                  className="flex items-center justify-center w-full px-4 py-3 my-5 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none"
                >
                  {
                    copiado ? (
                      <>
                        <FaCopy className="mr-2 text-xl" />
                        <p> Enlace copiado</p>
                      </>
                    ) : (
                      <>
                        <FaRegCopy className="mr-2 text-xl" />
                        <p> Copiar enlace</p>
                      </>
                    )
                  }

                </button>
              </>
            )
            : (
              <>
                { mensaje_archivo && <Alerta /> }
                <div className="p-5 py-10 bg-white rounded-lg lg:flex md:shadow-lg">
                  <Dropzone />
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
              </>
            )
        }

      </div>
    </Layout>
  )
}

export default Home
