"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()
    
    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">Muy pronto nuestro equipo comenzará a trabajar en la impresión de tu producto, utilizando materiales de la mejor calidad y cuidando cada detalle del proceso. Mientras tanto, relájate y disfruta la espera: en poco tiempo recibirás una pieza única, hecha especialmente para ti.</p>
                    <p className="my-3">Gracias de nuevo por confiar en nosotros para dar vida a tus ideas con impresión 3D. ¡Estamos deseando que disfrutes de tu producto único y personalizado!</p>
                    <p className="my-3">¡Disfruta del producto!</p>

                    <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;