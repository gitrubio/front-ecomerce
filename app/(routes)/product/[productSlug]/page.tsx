"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";
import ProductNotFound from "@/components/shared/Prodcut-not-found";
import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductGallery from "./components/product-gallery";


export default function Page() {
    const params = useParams()
    const { productSlug } = params;

    const { result, error }: ResponseType = useGetProductBySlug(productSlug)

    if (result === null) {
        return <SkeletonProduct />
    }
    if ((result != null && result.length === 0) || error != '' ) {
       return  <ProductNotFound message="producto no encontrado"/>
    }
    console.log("Product details fetched:", result);
    
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
            <div className="grid sm:grid-cols-2">
                <div className="">
                    <ProductGallery images={result[0]?.images} />
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
                <div className="sm:px-12">
                {/*    {result[0].images.map((item) =>(
                    <ProductImageMinuature url={item.url} />
                   ))} */}
                </div>
            </div>
        </div>
    )
}