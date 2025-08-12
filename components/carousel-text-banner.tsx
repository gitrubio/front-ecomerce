"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Card, CardContent } from './ui/card';
import Autoplay from 'embla-carousel-autoplay';

export const dataCarouselTop = [
  {
    id: 1,
    title: "Damos vida a tus ideas",
    description: "Impresión 3D de alta calidad para proyectos creativos, funcionales y únicos.",
    link: "/images/carousel1.jpg",
  },
  {
    id: 2,
    title: "Ofertas especiales cada semana",
    description: "Aprovecha descuentos exclusivos en productos seleccionados y personalizaciones.",
    link: "/images/carousel2.jpg",
  },
  {
    id: 3,
    title: "Envíos rápidos a todo el país",
    description: "Recibe tus creaciones en la puerta de tu casa de forma segura y eficiente.",
    link: "/images/carousel3.jpg",
  }
];



export default function CarouselTextBanner() {
    const router = useRouter();

  return (
    <div className='bg-gray-200 darkL:bg-primary'>
        <Carousel className='w-full max-w-4xl mx-auto' plugins={[Autoplay({
            delay: 2500,
            stopOnInteraction: false,
        })]}>
          <CarouselContent>
              {dataCarouselTop.map(({id,description,link ,title}) => (
                <CarouselItem key={id} className='cursor-pointer' onClick={() => router.push(link)}>
                    <div>
                        <Card className='shadow-none border-none bg-transparent'>
                            <CardContent className='flex flex-col items-center justify-center p-2 text-center'>
                                <p className='sm:text-lg text-wrap dark:text-secondary font-bold'>{title}</p>
                                <p className='text-xs sm:text-sm text-wrap dark:text-secondary'>{description}</p>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
    </div>
  )
}
