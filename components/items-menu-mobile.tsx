import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function ItemsMenuMobile() {
  return (
   <Popover>
        <PopoverTrigger className='cursor-pointer'>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
           <Link href="/category/decoracion-hogar" className="block p-2 hover:bg-gray-100">Decoración / Hogar</Link>
           <Link href="/category/accesorios-personalizados" className="block p-2 hover:bg-gray-100">Accesorios Personalizados</Link>
           <Link href="/category/juguetes-figuras" className="block p-2 hover:bg-gray-100">Juguetes / Figuras</Link>
           <Link href="/category/educativos-cientificos" className="block p-2 hover:bg-gray-100">Educativos / Científicos</Link>
        </PopoverContent>
   </Popover>
  )
}
