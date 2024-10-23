import React from 'react'
import { Servicio } from '../Minicomponentes/Servicio'

export const Servicios = () => {
  return (
    <div className='flex flex-col py-12 px-10'>
        <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-8'>
            <h2 className='text-5xl'>¿En qué podemos ayudarte?</h2>
            <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, fugit dolor similique atque sunt, qui quis distinctio minus amet dolore ipsam iste veritatis.</p>
        </div>
        <div className='flex flex-col gap-10'>
            <Servicio id={0} titulo={'Liderazgo'} img={'https://assets.nicepagecdn.com/d2cc3eaa/275409/images/handshake-close-up-executives_10.jpg'}/>
            <Servicio id={1} titulo={'Liderazgo'} img={'https://assets.nicepagecdn.com/d2cc3eaa/275409/images/blonde-female-executive-posing-w.jpg'}/>
            <Servicio id={2} titulo={'Liderazgo'} img={'https://assets.nicepagecdn.com/d2cc3eaa/275409/images/business-meeting_53876-71215.jpg'}/>
        </div>
        </div>
    </div>
  )
}
