import React from 'react'
import { Servicio } from '../Minicomponentes/Servicio'

export const Servicios = () => {
  return (
    <div className='py-12 px-10'>
        <div className='max-w-7xl my-0 mx-auto'>
          <div className='my-0 mx-auto flex flex-col gap-10'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-4xl lg:text-5-xl'>¿En qué podemos ayudarte?</h2>
            <p className='md:px-24 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis beatae est officiis natus quisquam tempore! Expedita fuga, recusandae tenetur repellendus placeat tempora voluptas eius facere inventore voluptatibus, quis ut!</p>
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
