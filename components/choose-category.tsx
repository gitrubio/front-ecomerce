/* eslint-disable @next/next/no-img-element */
"use client";
import  useGetCategories  from "@/api/useGetCategories";
import { CategoryType } from "@/types/product";
import { ResponseType } from "@/types/response";
import Link from "next/link";

export default function ChooseCategory() {
  const { result, loading }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoría favorita
      </h3>
      <div className="grid  gap-5 sm:grid-cols-3">
        {!loading &&
          result !== undefined &&
          result.map((item: CategoryType) => (
            <Link
              key={item.id}
              href={`/store?category=${item.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg h-82"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                  item.mainImage ? item.mainImage.url : ""
                }`}
                alt={item.categoryName}
                className="max-w-[260px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
              />
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-0 backdrop-blur-lg">
                {item.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}
