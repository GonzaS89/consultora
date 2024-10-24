import React from 'react'

export const Servicio = (props) => {

    const definirCss = val => {
        if(val === 0) {return 'bg-gris'}
        else if(val === 1) {return 'bg-morado text-white'}
    }

  return (
    <div className='flex flex-col'>
        <img src={props.img} alt=""/>
        <div className={`${definirCss(props.id)} py-6 px-4 flex flex-col items-start gap-4 text-left`}>
            <h2 className='text-3xl font-light'>{props.titulo}</h2>
            <p className='text-base leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid unde labore, illo tempora non, facilis dolore quas dolorum quae minus iusto reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus cum repellat nesciunt ea dolor nemo blanditiis error.</p>
            <button className='bg-morado font-bold py-2 px-20 border-2 tracking-widest'>ver más</button>
        </div>
    </div>
  )
}
