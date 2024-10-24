import React from 'react';
import '../App.css';

export const Portada = () => {
    return (
        <div className='bg-gris'>
            <div className=''>
            <div className='flex flex-col items-start gap-6 py-8 px-6'>
                <h1 className='uppercase text-5xl font-bold text-left'>Consultoría empresarial global para un mundo dinámico
                </h1>
                <p className='text-left text-lg font-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed modi quia non dolorum et labore. Excepturi, vitae</p>
                <button>ver más</button>
            </div>
            <span className='flex portada-img'></span>
            </div>
            
        </div>
    )
}
