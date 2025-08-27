"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { makePaymentRequest } from "@/api/paymen";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { sendToWhatsApp } from "@/api/whatsapp";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const { items, removeAll } = useCart();
  const [succes, setSucces] = useState(false);
  const router = useRouter();

  const prices = items.map((product) => product?.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const products = items;
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const res = await makePaymentRequest.post("/api/orders", {
        data: {
          products: {
            connect: products.map((item) => ({ id: item.id })), // IDs existentes
          },
          orderStatus: "order",
          emailCustomer: formData.get("email"),
          AddressCustomer: formData.get("address"),
          NameCustomer: formData.get("name"),
          PhoneCustomer: formData.get("phone"),
          especificaciones: formData.get("espe"),
          total: items.map((item) => item.price).reduce((a, b) => a + b, 0),
        },
      });

      setSucces(true);
      removeAll();
      setTimeout(() => {
        sendToWhatsApp(res?.data?.data, products);
      }, 2000);
      console.log(res, products);
    } catch (error) {
      console.log(error);
    }
  };

  if (succes) {
    return (
      <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          <div className="flex justify-center md:min-w-[400px]">
            <Image
              src="/success.jpg"
              alt="Success"
              width={250}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl">¡Gracias por tu compra!</h1>
            <p className="my-3">
              Muy pronto nuestro equipo comenzará a trabajar en la impresión de
              tu producto, utilizando materiales de la mejor calidad y cuidando
              cada detalle del proceso. Mientras tanto, relájate y disfruta la
              espera: en poco tiempo recibirás una pieza única, hecha
              especialmente para ti.
            </p>
            <p className="my-3">
              Gracias de nuevo por confiar en nosotros para dar vida a tus ideas
              con impresión 3D. ¡Estamos deseando que disfrutes de tu producto
              único y personalizado!
            </p>
            <p className="my-3">¡Disfruta del producto!</p>

            <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:min-h-[80vh]">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="NameCustomer">Nombre</Label>
                  <Input
                    required
                    type="text"
                    id="NameCustomer"
                    name="name"
                    placeholder="Pepe"
                  />
                </div>
                <div className=" grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="emailCustomer">Correo</Label>
                  <Input
                    required
                    type="email"
                    id="emailCustomer"
                    name="email"
                    placeholder="pepe@gmail.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="TelCustomer">Telefono</Label>
                  <Input
                    required
                    type="number"
                    id="TelCustomer"
                    name="phone"
                    placeholder="31459305"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="AddressCustomer">Direccion</Label>
                  <Input
                    required
                    type="text"
                    id="AddressCustomer"
                    name="address"
                    placeholder="Cr 34c#45"
                  />
                </div>
              </div>
              <Label htmlFor="email">Especificaciones</Label>
              <Textarea
                name="espe"
                placeholder="Deja cualquier especificación que quieras para tus productos"
              />

              <p className="mb-3 text-lg font-semibold">Order Summary</p>
              <Separator />
              <div className="flex justify-between gap-5 my-4">
                <p>Order total</p>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <div className="flex items-center justify-center w-full mt-3">
                <Button
                  className="w-full"
                  type="submit"
                  disabled={items.length === 0}
                >
                  Ordenar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
