import Link from 'next/link'
import React, { Fragment } from 'react'
import { buttonVariants } from './ui/button'

export default function BannerProduct() {
  return (
    <Fragment>
    <div className='mt-4 text-center'>
        <p>Sumergete en una experiencia unica</p>
        <h4 className='mt-2 text-5xl font-extrabold uppercase'>CafeExquisito</h4>
        <p className='my-2 text-lg'>Despierta todos tus sentidos con cada sorbo</p>
        <Link href={'#'} className={buttonVariants()} >Comprar</Link>
    </div>
    <div className="h-[350px] lg:h-[600px] bg-[url('/banner.jpg')] bg-center mt-5 bg-cover">

    </div>
    </Fragment>
  )
}
