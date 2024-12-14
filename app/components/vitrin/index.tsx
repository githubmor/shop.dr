import { fetchNewArrivals, fetchTopSelling } from "@/app/utils";
import ProductList from "./product-list";

function Vitrin() {
  return (
    <div className="divide-y divide-neutral-100 px-4 lg:px-24 flex flex-col items-center w-full">
      <ProductList title="NEW ARRIVALS" fetchProducts={fetchNewArrivals} />
      <ProductList title="top selling" fetchProducts={fetchTopSelling} />
    </div>
  );
}

export default Vitrin;
