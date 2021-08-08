import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const width = 210;
    const height = width * 9 / 16;

    return (
        <header className="py-0 flex flex-col md:flex-row items-center justify-between">
            <Link href="/" passHref >
                <Image className="cursor-pointer" src="/logo.svg" width={ width } height={ height } alt="logo" />
            </Link>
            <div>
                <Link href="/login">
                    <a className="text-sm bg-red-400 px-4 py-3 rounded text-white font-bold uppercase mr-2">Iniciar sesion</a>
                </Link>
                <Link href="/crearcuenta">
                    <a className="text-sm text-gray-900 bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-900 font-bold uppercase px-4 py-3 rounded outline-none focus:outline-none  ease-linear transition-all duration-150" >
                        Crear cuenta
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
