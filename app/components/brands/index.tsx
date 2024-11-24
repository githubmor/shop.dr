import Calvin from "./calvin";
import Gucci from "./gicci";
import Prada from "./prada";
import Versage from "./versage";
import Zara from "./zara";

function Brands() {
  return (
    <div className="w-full bg-neutral flex flex-wrap justify-center lg:justify-evenly gap-8 px-4 py-10">
      <Versage />
      <Zara />
      <Gucci />
      <Prada />
      <Calvin />
    </div>
  );
}

export default Brands;
