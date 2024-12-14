import Product, { ProductType } from "../../product";

type Props = {
  fetchProducts: () => Promise<ProductType[]>;
};

export default async function List({ fetchProducts }: Props) {
  const products = await fetchProducts();

  return (
    <div className="flex gap-4 lg:gap-5 w-full justify-between overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:scrollbar-default">
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
