import React from 'react'
import { Servicio } from '../Minicomponentes/Servicio'

export const Servicios = () => {
  return (
    <div className='py-12 px-10'>
        <div className='max-w-7xl my-0 mx-auto'>
          <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-8 lg:gap-10'>
            <h2 className='text-3xl lg:text-5xl font-extralight'>¿En qué podemos ayudarte?</h2>
            <p className='lg:text-xl leading-loose lg:px-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis beatae est officiis natus quisquam tempore! Expedita fuga, recusandae tenetur repellendus placeat tempora voluptas eius facere inventore voluptatibus, quis ut!</p>
        </div>
        <div className='flex flex-col'>
            <Servicio id={0} titulo={'Liderazgo'} img={'https://assets.nicepagecdn.com/d2cc3eaa/275409/images/handshake-close-up-executives_10.jpg'}/>
            <Servicio id={1} titulo={'Innovaciones'} img={'https://assets.nicepagecdn.com/d2cc3eaa/275409/images/blonde-female-executive-posing-w.jpg'}/>
            <Servicio id={2} titulo={'Coaching'} img={'https://assets.nicepagecdn.com/d2cc3eaa/275409/images/business-meeting_53876-71215.jpg'}/>
        </div>
          </div>
        </div>
    </div>
  )
}
