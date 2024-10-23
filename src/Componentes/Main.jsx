import React from 'react'
import { Header } from './Header'
import { Portada } from './Portada'
import { Nosotros } from './Nosotros'
import { Servicios } from './Servicios'

export const Main = () => {
  return (
    <div>
        <Header />
        <Portada />
        <Nosotros/>
        <Servicios/>
    </div>
  )
}
