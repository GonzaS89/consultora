import React from 'react';
import { Accordion } from "flowbite-react";

export const Nosotros2 = () => {

  return (
    <div className='py-12 px-12'>
        <div className="max-w-7xl my-0 mx-auto flex flex-col md:flex-row md:justify-between gap-12">
            <div className="flex flex-col items-start gap-8 text-left md:basis-1/2">
                <h2 className="text-4xl xl:text-5xl font-extralight md:pr-12">Nos asociamos con las universidades líderes del mundo</h2>
                <p className='leading-loose xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui temporibus aperiam ratione reiciendis velit nobis voluptatem beatae ipsa quisquam illum at, facilis, cum vero maxime veniam perspiciatis, mollitia aut.</p>
                <button className='xl:text-2xl xl:py-4'>ver más</button>
            </div>
            <Accordion className='border-none w-full md:basis-1/2'>
      <Accordion.Panel>
        <Accordion.Title className='p-0 h-16'>
          <h2 className='font-open capitalize text-sm font-bold text-morado'>Create a Webinar en minutos</h2>
        </Accordion.Title>
        <Accordion.Content className="p-4 text-gray-700">
          <p className='text-left font-open'>
            Este es el contenido del primer acordeón. Puedes personalizar el estilo del contenido también.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='p-0 h-16'>
          <h2 className='font-open capitalize text-sm font-bold text-morado'>Create a Webinar en minutos</h2>
        </Accordion.Title>
        <Accordion.Content className="p-4 text-gray-700">
          <p className='text-left font-open'>
            Este es el contenido del primer acordeón. Puedes personalizar el estilo del contenido también.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className='p-'>
        <Accordion.Title className='p-0 h-16'>
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
