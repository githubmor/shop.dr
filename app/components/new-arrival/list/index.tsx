import Product, { ProductType } from "../../product";
async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function List() {
  const products = await fetchProducts();

  return (
    <div className="flex gap-4 w-full justify-between overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:scrollbar-default">
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
