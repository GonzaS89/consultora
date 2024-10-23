import React from 'react'

export const Servicio = (props) => {

    const definirBg = val => {
        if(val === 0) {return 'bg-gris'}
        else if(val === 1) {return 'bg-morado'}
    }

  return (
    <div className='flex flex-col'>
        <img src={props.img} alt=""/>
        <div className={`${definirBg(props.id)}  flex flex-col items-start gap-4 text-left`}>
            <h2 className='text-3xl'>{props.titulo}</h2>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid unde labore, illo tempora non, facilis dolore quas dolorum quae minus iusto reiciendis.</p>
            <button className='bg-morado text-xl py-2 px-12'>ver más</button>
        </div>
    </div>
  )
}
