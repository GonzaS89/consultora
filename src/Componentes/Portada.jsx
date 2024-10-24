import React from 'react';
import '../App.css';

export const Portada = () => {
    return (
        <div className='flex justify-center bg-gris'>
            <div className='max-w-7xl md:flex flex-row md:justify-between md:px-12 my-0 mx-auto'>
            <div className='flex flex-col items-start md:justify-between md:w-1/2 gap-6 py-8 px-6'>
                <h1 className='uppercase text-5xl lg:text-6xl font-bold text-left'>Consultoría empresarial global para un mundo dinámico
                </h1>
                <p className='text-left text-lg font-thin lg:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed modi quia non dolorum et labore. Excepturi, vitae</p>
                <button className='lg:py-4 lg:px-20 text-xl'>ver más</button>
            </div>
            <span className='flex portada-img'></span>
            </div>
        </div>
    )
}
