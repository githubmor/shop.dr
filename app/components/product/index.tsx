"use client";
import { fetcher } from "@/app/utils";
import Image from "next/image";
import useSWR from "swr";
import Rate from "./rate";

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

function Product({ product: { price, id, rate, title, tax } }: Props) {
  const { data } = useSWR<{ imageUrl: string }>(
    `/api/products/${id}/image`,
    fetcher
  );

  return (
    <div className="flex flex-col gap-3 snap-center">
      <div className="bg-base-100 w-52 lg:w-80 aspect-square rounded-xl lg:rounded-[1.25rem]">
        {data && (
          <Image
            src={data.imageUrl}
            alt={`Product ${id}`}
            width={300}
            height={300}
            className="aspect-square"
            priority
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold lg:text-[1.25rem]">{title}</span>
        <Rate rate={rate} />
        <div className="flex gap-1">
          <span className="text-xl lg:text-2xl font-bold">${price}</span>
          {tax && (
            <>
              <span className="text-xl lg:text-2xl font-bold line-through text-neutral-400">
                ${(price - (price * tax) / 100).toFixed(2)}
              </span>
              <div className="rounded-full flex-center bg-[#ff3333]/10 px-4 py-1">
                <small className="text-[0.625rem] lg:text-xs text-[#FF3333]">
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
