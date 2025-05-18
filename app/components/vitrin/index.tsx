import ProductList from "./product-list";

function Vitrin() {
  return (
    <div className="divide-y divide-neutral-100 px-4 lg:px-24 flex flex-col items-center w-full">
      <ProductList title="NEW ARRIVALS" type="list" />
      <ProductList title="top selling" type="top" />
    </div>
  );
}

export default Vitrin;
