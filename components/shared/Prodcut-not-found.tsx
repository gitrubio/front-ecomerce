"use client";

import { PackageX } from "lucide-react"; // Asegúrate de tener lucide-react instalado

interface ProductNotFoundProps {
  message?: string;
}

export default function ProductNotFound({
  message = "No hay productos disponibles.",
}: ProductNotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
      <PackageX className="w-12 h-12 text-gray-400" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
