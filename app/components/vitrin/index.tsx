import ProductList from "./product-list";

function Vitrin() {
  return (
    <div className="divide-y divide-neutral-100 px-4 lg:px-24 flex flex-col items-center w-full">
      <ProductList title="NEW ARRIVALS" url="/api/products/new" />
      <ProductList title="top selling" url="/api/products/top" />
    </div>
  );
}

export default Vitrin;
