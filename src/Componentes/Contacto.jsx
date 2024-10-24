import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Label, TextInput, Textarea } from "flowbite-react";





export const Contacto = () => {
  return (
    <div className='bg-grisoscuro py-16 px-12'>
      <div className='flex flex-col gap-8'>
        <div className='text-white text-left flex flex-col gap-6'>
          <h2 className='text-5xl font-extralight'>Contacto</h2>
          <p className='text-sm leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat rem explicabo odit eaque fugit, provident incidunt inventore voluptatibus magni. Dignissimos nobis sint nulla consectetur sed, vero officiis necessitatibus illo.</p>
          <div className='flex gap-4'>
            <FaFacebookF className='text-3xl' />
            <FaTwitter className='text-3xl' />
            <FaInstagram className='text-3xl' />
          </div>
        </div>
        <span className='flex contacto-img'></span>
        <div>
          <div className='mt-2'>
            <div className="mb-2 flex flex-col">
              <Label htmlFor="small" value="Nombre y apellido" className='text-white text-left' />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder='Indicanos tu nombre'/>
          </div>
          <div className='mt-2'>
            <div className="mb-2 flex flex-col">
              <Label htmlFor="small" value="Dirección de email" className='text-white text-left' />
            </div>
            <TextInput id="small" type="text" sizing="sm" placeholder='Ingresá tu email'/>
          </div>
          <div className='mt-2'>
          <div className="mb-2 flex">
            <Label htmlFor="comment" value="Tu consulta" className='text-white text-left' />
          </div>
          <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
          </div>
          
      </div>
    </div>
  )
}
