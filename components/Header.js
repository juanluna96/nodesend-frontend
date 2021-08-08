import React from 'react'
import Image from 'next/image'

const Header = () => {
    const width = 210;
    const height = width * 9 / 16;

    return (
        <header className="py-6 flex flex-col md:flex-row items-center justify-between">
            <Image src="/logo.svg" width={ width } height={ height } alt="logo" />
        </header>
    )
}

export default Header
