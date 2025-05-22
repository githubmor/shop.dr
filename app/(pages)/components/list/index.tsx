'use client';
import Product from '@/app/components/product';
import { ProductType } from '@/app/models';
import Paginate from './paginate';

type Props = {
  products: ProductType[];
  title: string;
  allProductCount: number;
  page: number;
  count: number;
};

function List({ products, title, allProductCount, count, page }: Props) {
  return (
    <div className="w-3/4 flex flex-col gap-4 ">
      <div className="w-full flex-ic justify-between">
        <span className="text-2xl font-bold">{title}</span>
        <div>
          <span>{`Showing ${(page - 1) * count + 1}-${page * count} of ${allProductCount} Products`}</span>
          <span>Sort by :</span>
          <select className="max-w-min font-semibold outline-none">
            <option>Most Popular</option>
            <option>Low Price</option>
            <option>High Price</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <hr />
      <div className="w-full flex-ic justify-between">
        <Paginate
          currentPage={page}
          totalPages={Math.ceil(allProductCount / count)}
          onPageChange={(newPage) => console.log(newPage)}
        />
      </div>
    </div>
  );
}

export default List;
