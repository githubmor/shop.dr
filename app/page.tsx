import { Banner, Header, Hero } from "./components";

export default function Home() {
  return (
    <main className="overflow-y-auto flex flex-col items-center">
      <Banner />
      <Header />
      <Hero />
    </main>
  );
}
