import Link from 'next/link'
import { Separator } from './ui/separator'

const dataFooter = [
    {
        id: 1,
        name: "Sobre Nosotros",
        link: "/about"
    },
    {
        id: 2,
        name: "Productos",
        link: "/about"
    },
    {
        id: 3,
        name: "Mi cuenta",
        link: "/about"
    },
    {
        id: 4,
        name: "Politica de privacidad",
        link: "/about"
    },
]

export default function Footer() {
  return (
   <footer className='mt-4'>
    <div className='w-full max-w-screen-xl max-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
            <p>
                <span className='font-bold'>CleanPrint1</span> E-comerce
            </p>
            <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
                {dataFooter.map(item => (
                    <li key={item.id + 'footer'} >
                        <Link href={item.link} className='me-4 hover:underline md:me-6 '>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <Separator className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'/>
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024 <span className='font-bold'>CleanPrint</span>. Todos los derechos reservados.
        </span>
    </div>
   </footer>
  )
}
