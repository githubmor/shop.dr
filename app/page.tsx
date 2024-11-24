import { Banner, Header, Hero } from "./components";

export default function Home() {
  return (
    <main className="overflow-y-auto flex flex-col items-center relative">
      <Banner />
      <Header />
      <Hero />
    </main>
  );
}
