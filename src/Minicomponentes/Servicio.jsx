import React from 'react'

export const Servicio = (props) => {

    const definirCss = val => {
        if(val === 0) {return 'bg-gris'}
        else if(val === 1) {return 'bg-morado text-white'}
    }

    const definirSentido = val => {
      if(val === 1) {return 'md:flex-row-reverse'}
      else{return 'md:flex-row'}
    }

  return (
    <div className={`flex flex-col ${definirSentido(props.id)} md:px-8 lg:px-0`}>
        <img src={props.img} alt="" className='servicio-img'/>
        <div className={`${definirCss(props.id)} lg:justify-evenly py-6 lg:py-8 px-4 md:px-8 flex flex-col items-start gap-4 lg:gap-8 text-left`}>
            <h2 className='text-2xl lg:text-3xl xl:text-4xl font-light'>{props.titulo}</h2>
            <p className='leading-relaxed xl:leading-loose text-sm lg:text-base xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid unde labore, illo tempora non, facilis dolore quas dolorum quae minus iusto reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus cum repellat nesciunt ea dolor nemo blanditiis error.</p>
            <button className='border-2 tracking-widest xl:text-2xl xl:py-4'>ver más</button>
        </div>
    </div>
  )
}
