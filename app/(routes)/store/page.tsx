"use client";

import useGetProducts from "@/api/useGetProducts";
import { Separator } from "@/components/ui/separator";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeleton-schema";
import ProductCard from "./components/product-card";
import { useState } from "react";
import { ProductType } from "@/types/product";
import { SearchBar } from "./components/product-search";
import { useSearchParams } from "next/navigation";


export default function Page() {
  
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || "todos"
  const { result, loading } = useGetProducts();
  const [filterOrigin, setFilterOrigin] = useState(category);
  const [search, setSearch] = useState("");

  const handleFilterChange = (newFilter: string) => {
    setFilterOrigin(newFilter);
    // Optionally, you can also refetch products or apply additional logic here
  };

  const handleSearch = (query: string) => {
    setFilterOrigin('todos')
    setSearch(query);
  };

  const filteredProducts =
    !loading && Array.isArray(result)
      ? result
          .filter((product: ProductType) =>
            filterOrigin === "todos"
              ? true
              : product?.category?.slug === filterOrigin
          )
          .filter((product: ProductType) =>
            search.trim() === ""
              ? true
              : product?.productName
                  ?.toLowerCase()
                  .includes(search.toLowerCase())
          )
      : [];

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl mb-3">Productos</h1>

        <SearchBar key={"search"} onSearch={handleSearch} />
      </div>
      <Separator />
      <div className="sm:flex sm:justify-between ">
        <FiltersControlsCategory
          slug={filterOrigin}
          handleFilterChange={handleFilterChange}
        />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {!loading &&
            filteredProducts.length > 0 &&
            filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          {!loading && filteredProducts.length === 0 && (
            <p>No hay productos con este filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}
