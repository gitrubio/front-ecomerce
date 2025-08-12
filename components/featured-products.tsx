/* eslint-disable @next/next/no-img-element */
"use client";

import useGetFeaturedProducts from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./skeleton-schema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

export default function FeaturedProducts() {
  const { result, loading }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const {addItem} = useCart();
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((item: ProductType) => {
              const { id, slug, images, productName, category } = item;
              let displayCategory;
              const displayName = productName.length > 8
                  ? productName.slice(0, 8) + "..."
                  : productName;
              if (category?.categoryName) {
                displayCategory =
                  category.categoryName.length > 10
                    ? category.categoryName.slice(0, 10) + "..."
                    : category.categoryName;
              } else {
                displayCategory = "Sin categoria";
              }
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none ">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                            images ? images[0]?.url : ""
                          }`}
                          className="h-40"
                          alt="Image feature"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              icon={<Expand />}
                              className="text-gray-600"
                              onClick={() => router.push(`product/${slug}`)}
                            />
                            <IconButton
                              icon={<ShoppingCart />}
                              className="text-gray-600"
                              onClick={() => addItem(item)}
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{displayName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black">
                            {displayCategory}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
