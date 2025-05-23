import { fetchProductList } from "@/app/orm";
import Product from '../../../product';
import { ProductType } from '@/app/models';

type Props = {
  type: "top"|"list";
};

export default async function List({ type }: Props) {
  const data = await fetchProductList(type)
  return (
    <div className="flex gap-4 lg:gap-5 w-full justify-between overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:scrollbar-default">
      {data?.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
