import React from 'react'
import { Header } from './Header'
import { Portada } from './Portada'
import { Nosotros } from './Nosotros'
import { Servicios } from './Servicios'
import { Nosotros2 } from './Nosotros2'
import { Mensaje } from './Mensaje'

export const Main = () => {
  return (
    <div>
        <Header />
        <Portada />
        <Nosotros/>
        <Servicios/>
        <Nosotros2/>
        <Mensaje/>
    </div>
  )
}
