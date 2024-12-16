import {
  Banner,
  Brands,
  Feedback,
  Footer,
  Header,
  Hero,
  StyleList,
  Subscribe,
  Vitrin,
} from "./components";

export default function Home() {
  return (
    <main className="overflow-y-auto flex flex-col items-center relative">
      <Banner />
      <Header />
      <Hero />
      <Brands />
      <Vitrin />
      <StyleList />
      <Feedback />
      <Subscribe />
      <Footer />
    </main>
  );
}
