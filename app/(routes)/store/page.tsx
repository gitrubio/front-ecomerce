"use client";

import useGetProducts from "@/api/useGetProducts";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "./components/product-card";
import { useState } from "react";
import { ProductType } from "@/types/product";

export default function Page() {
  const params = useSearchParams();
  const category = params.get("category") || "todos";
  const { result, loading, error } = useGetProducts();
  const [filterOrigin, setFilterOrigin] = useState(category);

  const filteredProducts =
    !loading && Array.isArray(result)
      ? filterOrigin === "todos"
        ? result
        : result.filter(
            (product: ProductType) => product?.category?.slug === filterOrigin
          )
      : [];

      const handleFilterChange = (newFilter: string) => {
        setFilterOrigin(newFilter);
        // Optionally, you can also refetch products or apply additional logic here
      }
    
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h1 className="font-bold text-3xl">
        Productos
       
      </h1>
      <Separator />
      <div className="sm:flex sm:justify-between ">
        <FiltersControlsCategory slug={filterOrigin} handleFilterChange={handleFilterChange}/>

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {!loading &&
            filteredProducts.length > 0 &&
            filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          {
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
        </div>
      </div>
    </div>
  );
}
