"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Decoración / Hogar",
    href: "/store/decoracion-hogar",
    description:
      "Macetas, portavelas, organizadores, lámparas, bases para luces LED, marcos, esculturas y adornos modernos.",
  },
  {
    title: "Accesorios Personalizados",
    href: "/store/accesorios-personalizados",
    description:
      "Llaveros, nombres decorativos, bisutería, fundas para dispositivos, soportes, porta tarjetas, ganchos y colgantes.",
  },
  {
    title: "Juguetes / Figuras",
    href: "/store/juguetes-figuras",
    description:
      "Personajes de videojuegos, películas, anime, rompecabezas, juegos de mesa, piezas de colección, modelos articulados, dragones y robots.",
  },
];


const MenuList = () => {
  return (
    <NavigationMenu viewport={false} className="Z-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent className="z-20">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      CleanPrint
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                     Transformamos tus ideas en realidad con impresión 3D limpia, precisa y sostenible.


                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/store" title="Tienda">
                Accede a toda tu información , tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Sección de ofertas y descuentos especiales.
              </ListItem>
              <ListItem href="/accesorios" title="Accesorios">
                Explora nuestra amplia gama de accesorios personalizados y únicos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent className="z-20">
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="z-20">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/store">Tienda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
  
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
export default MenuList;