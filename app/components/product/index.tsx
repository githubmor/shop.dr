import Image from "next/image";
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

async function getProductImage(id: number) {
  const res = await fetch(`http://localhost:3000/api/products/${id}/image`);
  if (!res.ok) throw new Error("Failed to fetch product image");
  return res.json();
}

async function Product({ product: { price, id, rate, title, tax } }: Props) {
  const { imageUrl } = await getProductImage(id);
  return (
    <div className="flex flex-col gap-3 snap-center">
      <div className="bg-base-100 w-52 lg:w-80 aspect-square rounded-xl">
        <Image
          src={imageUrl}
          alt={`Product ${id}`}
          width={500}
          height={500}
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
