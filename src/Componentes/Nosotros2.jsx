import React from 'react';
import { Accordion } from "flowbite-react";

export const Nosotros2 = () => {

  return (
    <div className='py-12 px-10'>
        <div className="max-w-7xl flex flex-col gap-12">
            <div className="flex flex-col items-start gap-8 text-left ">
                <h2 className="text-5xl">Nos asociamos con las universidades líderes del mundo.</h2>
                <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui temporibus aperiam ratione reiciendis velit nobis voluptatem beatae ipsa quisquam illum at, facilis, cum vero maxime veniam perspiciatis, mollitia aut.</p>
                <button>ver más</button>
            </div>
            <Accordion className='border-none'>
      <Accordion.Panel className='p-'>
        <Accordion.Title>
          <h2 className='font-open capitalize text-sm font-bold text-morado'>Create a Webinar en minutos</h2>
        </Accordion.Title>
        <Accordion.Content className="p-4 text-gray-700">
          <p className='text-left font-open'>
            Este es el contenido del primer acordeón. Puedes personalizar el estilo del contenido también.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className='p-'>
        <Accordion.Title>
          <h2 className='font-open capitalize text-sm font-bold text-morado'>Create a Webinar en minutos</h2>
        </Accordion.Title>
        <Accordion.Content className="p-4 text-gray-700">
          <p className='text-left font-open'>
            Este es el contenido del primer acordeón. Puedes personalizar el estilo del contenido también.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className='p-'>
        <Accordion.Title>
          <h2 className='font-open capitalize text-sm font-bold text-morado'>Create a Webinar en minutos</h2>
        </Accordion.Title>
        <Accordion.Content className="p-4 text-gray-700">
          <p className='text-left font-open'>
            Este es el contenido del primer acordeón. Puedes personalizar el estilo del contenido también.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
            </div>
    
    </div>
  )
}
