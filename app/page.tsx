import { Banner, Brands, Header, Hero, ProductList } from "./components";
import { fetchNewArrivals, fetchTopSelling } from "./utils";

export default function Home() {
  return (
    <main className="overflow-y-auto flex flex-col items-center relative">
      <Banner />
      <Header />
      <Hero />
      <Brands />
      <div className="divide-y px-4 lg:px-24 flex flex-col items-center w-full">
        <ProductList title="NEW ARRIVALS" fetchProducts={fetchNewArrivals} />
        <ProductList title="top selling" fetchProducts={fetchTopSelling} />
      </div>
    </main>
  );
}
