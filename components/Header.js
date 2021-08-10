import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const width = 210;
    const height = width * 9 / 16;

    return (
        <header className="flex flex-col items-center justify-between py-0 md:flex-row">
            <Link href="/"  >
                <a className="cursor-pointer">
                    <Image src="/logo.svg" width={ width } height={ height } alt="logo" />
                </a>
            </Link>
            <div>
                <Link href="/login">
                    <a className="px-4 py-3 mt-8 mr-2 text-sm font-bold text-center text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded outline-none hover:bg-red-600 hover:text-gray-200 active:bg-red-500 focus:outline-none">Loguearme</a>
                </Link>
                <Link href="/crearcuenta">
                    <a className="px-4 py-3 text-sm font-bold text-gray-900 uppercase transition-all duration-150 ease-linear bg-transparent border border-gray-800 border-solid rounded outline-none hover:bg-gray-800 hover:text-white active:bg-gray-900 focus:outline-none" >
                        Crear cuenta
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
