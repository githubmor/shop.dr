import { Brands, Feedback, Hero, StyleList, Vitrin } from './components';

export default function Home() {
  return (
    <main className="overflow-y-auto flex flex-col items-center relative">
      <Hero />
      <Brands />
      <Vitrin />
      <StyleList />
      <Feedback />
    </main>
  );
}
