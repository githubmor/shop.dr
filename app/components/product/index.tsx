import Image from "next/image";
import Rate from "./rate";
import { getProductImage } from "@/app/utils";

export type ProductType = {
  id: number;
  title: string;
  rate: number;
  price: number;
  tax?: number;
};

type Props = {
  product: ProductType;
};

async function Product({ product: { price, id, rate, title, tax } }: Props) {
  const { imageUrl } = await getProductImage(id);

  return (
    <div className="flex flex-col gap-3 snap-center">
      <div className="bg-base-100 w-52 lg:w-80 aspect-square rounded-xl lg:rounded-[1.25rem]">
        <Image
          src={imageUrl}
          alt={`Product ${id}`}
          width={300}
          height={300}
          className="aspect-square"
          priority
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold">{title}</span>
        <Rate rate={rate} />
        <div className="flex gap-1">
          <span className="text-xl font-bold">${price}</span>
          {tax && (
            <>
              <span className="text-xl font-bold line-through text-neutral-400">
                ${(price - (price * tax) / 100).toFixed(2)}
              </span>
              <div className="rounded-full flex-center bg-[#ff3333]/10 px-4 py-1">
                <small className="text-[0.625rem] text-[#FF3333]">
                  -{tax}%
                </small>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
