import ShopDrop from "./show-drop";

function Navs({ show }: { show: boolean }) {
  return (
    <div
      className={`transition-all duration-500 row-start-2 col-span-2 flex flex-col gap-2 lg:flex lg:flex-row lg:gap-6 ${
        show ? "max-h-[300px] h-full p-4" : "max-h-0 h-0"
      } lg:!h-full lg:!max-h-full overflow-hidden`}
    >
      <ShopDrop />
      <span className="whitespace-nowrap">On Sale</span>
      <span className="whitespace-nowrap">New Arrivals</span>
      <span className="whitespace-nowrap">Brands</span>
    </div>
  );
}

export default Navs;
