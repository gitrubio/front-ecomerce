"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; // si usas el helper de shadcn
import { Image as InterfaceImages } from "@/types/product";

interface ProductGalleryProps {
  images: InterfaceImages[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  return (
    <div className="flex flex-col gap-4">
      {/* Imagen principal */}
      <div className="relative  w-100 md:w-120  aspect-square rounded-lg overflow-hidden border">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${selectedImage}`}
          alt="Imagen del producto"
          fill
          className="object-contain"
        />
      </div>
    
      {/* Miniaturas */}
      <div className="gr grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {images.map((img) => (
          <button
            key={img.url}
            type="button"
            onMouseEnter={() => setSelectedImage(img.url)}
            className={cn(
              "relative w-20 h-20 rounded-md overflow-hidden border-2 focus:outline-none focus:ring-2 focus:ring-primary",
              selectedImage === img.url
                ? "border-primary"
                : "border-transparent"
            )}
            tabIndex={0}
            aria-label={`Seleccionar vista del producto`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img.url}`}
              alt={`Vista del producto`}
              fill
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
