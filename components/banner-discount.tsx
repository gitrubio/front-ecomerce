import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

export default function BannerDiscount() {
  return (
    <div className='p-5 sm:p-20 text-center'>
        <h2 className='uppercase text-2xl sm:text-4xl font-bold text-primary'>
           Consigue hasta un 20%
        </h2>
        <h3>
            ¡Aprovecha nuestro descuento del 20% en todos los productos!
        </h3>
        <h3>
            Usa el código <span className='font-bold'>DESCUENTO20</span> al finalizar tu compra.
        </h3>
        <div className='max-w-md mx-auto sm:flex justify-center gap-8 mt-5'>
            <Link href={'#'} className={buttonVariants()}>Comprar</Link>
            <Link href={'#'} className={buttonVariants({variant: "outline"})}>Mas informacion</Link>
        </div>
    </div>
  )
}
