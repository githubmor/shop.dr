"use client";
import { fetcher } from "@/app/utils";
import Product, { ProductType } from "../../../product";
import useSWR from "swr";

type Props = {
  url: string;
};

export default function List({ url }: Props) {
  const { data, error, isLoading } = useSWR<ProductType[]>(url, fetcher);
  if (error) {
    return <span>{error}</span>;
  }
  if (isLoading) {
    return <>isloading ...</>;
  }
  return (
    <div className="flex gap-4 lg:gap-5 w-full justify-between overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:scrollbar-default">
      {data?.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
