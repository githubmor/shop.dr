import hero from "@/public/hero2.png";
import Image from "next/image";
import Title from "./title";
import ShopNow from "./shop-now";
import Numbers from "./numbers";
import Star from "./star";

function Hero() {
  return (
    <div className="w-full bg-base-300 flex-center">
      <div className=" lg:container flex flex-col lg:flex lg:flex-row gap-6 pt-14 px-4 bg-base-300">
        <div className="flex flex-col gap-6 lg:gap-12 flex-auto">
          <Title />
          <ShopNow />
          <Numbers />
        </div>
        <div className="relative ">
          <Star className="absolute right-10 top-12" />
          <Star className="scale-50 absolute left-6 top-28" />
          <Image src={hero} alt="hero" priority />
        </div>
      </div>
    </div>
  );
}

export default Hero;
