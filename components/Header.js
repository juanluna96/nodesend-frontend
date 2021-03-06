import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter();

    const { usuario, cerrarSesion } = useContext(authContext);

    // Context de la aplicacion
    const { limpiarState } = useContext(appContext);

    const imgSize = {
        width: 210,
        get height() { return this.width * 9 / 16 }
    }

    const redireccionar = () => {
        router.push('/');
        limpiarState();
    }

    return (
        <header className="flex flex-col items-center justify-between py-0 md:flex-row">
            {/* <Link href="/"  >
                <a className="cursor-pointer" onClick={ () => { console.log('hola') } }>
                    <Image src="/logo.svg" width={ imgSize.width } height={ imgSize.height } alt="logo" />
                </a>
            </Link> */}
            <Image src="/logo.svg" className="cursor-pointer" onClick={ () => redireccionar() } width={ imgSize.width } height={ imgSize.height } alt="logo" />
            {
                usuario
                    ? (
                        <div className="flex flex-col items-center justify-between py-0 md:flex-row">
                            <p className="md:mr-4">Hola, { usuario.nombre }</p>
                            <button
                                onClick={ cerrarSesion }
                                className="px-4 py-3 text-sm font-bold text-gray-900 uppercase transition-all duration-150 ease-linear bg-transparent border border-gray-800 border-solid rounded outline-none hover:bg-gray-800 hover:text-white active:bg-gray-900 focus:outline-none"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    )
                    : (
                        <div className="flex flex-col items-center justify-between w-full px-3 py-0 md:flex-row md:max-w-sm">
                            <Link href="/login">
                                <a className="w-full px-4 py-3 my-2 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none md:mr-2 hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">Loguearme</a>
                            </Link>
                            <Link href="/crearcuenta">
                                <a className="w-full px-4 py-3 my-2 text-sm font-bold text-center text-gray-900 uppercase transition-all duration-150 ease-linear bg-transparent border border-gray-800 border-solid rounded outline-none hover:bg-gray-800 hover:text-white active:bg-gray-900 focus:outline-none" >
                                    Crear cuenta
                                </a>
                            </Link>
                        </div>
                    )
            }
        </header>
    )
}

export default Header
