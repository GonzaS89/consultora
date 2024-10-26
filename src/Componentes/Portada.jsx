import React from 'react';
import '../App.css';

export const Portada = () => {
    return (
        <div className='bg-gris'>
            <div className='xl:max-w-7xl md:flex flex-row md:justify-between my-0 mx-auto xl:px-0 relative'>
            <div className='flex flex-col items-start md:justify-between md:w-1/2 gap-6 py-8 px-8'>
                <h1 className='uppercase text-4xl lg:text-5xl xl:text-6xl font-bold text-left lg:pr-12 '>Consultoría empresarial global para un mundo dinámico
                </h1>
                <p className='text-left font-thin xl:text-lg md:pr-20 lg:leading-loose'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed modi quia non dolorum et labore. Excepturi, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='xl:py-4 xl:px-20 xl:text-xl'>ver más</button>
            </div>
            <span className='flex portada-img'></span>
            </div>
        </div>
    )
}
