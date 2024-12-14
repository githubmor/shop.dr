import { Banner, Brands, Header, Hero, Vitrin } from "./components";

export default function Home() {
  return (
    <main className="overflow-y-auto flex flex-col items-center relative">
      <Banner />
      <Header />
      <Hero />
      <Brands />
      <Vitrin />
    </main>
  );
}
