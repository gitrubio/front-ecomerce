import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLoveItem } = useLovedProducts();

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>

        <ProductTasteOrigin
          origin={'venezuela'}
          taste={'dulce'}
        />
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product?.price)}</p>
      <div className="flex items-center justify-between gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar{" "}
        </Button>
        <Heart
         key={product.id}
          width={300}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLoveItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProduct;