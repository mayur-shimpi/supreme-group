import Image from 'next/image'
import React from 'react'

const Appbar = () => {
    return (
        <header className='bg-white container mx-auto py-2 px-5'>
            <div className='grid grid-cols-3 '>
                <div>
                    <Image
                        src="./assets/logo.svg"
                        alt='Logo'
                        width={150}
                        height={60}
                        className='lg:ml-16 h-[60px] w-[160px] lg:h-[80px] lg:w-[170px]'
                    />
                </div>
            </div>
        </header>
    )
}

export default Appbar