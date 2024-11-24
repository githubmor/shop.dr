import AnimatNumber from "./animat-number";

function Numbers() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center lg:justify-items-start">
      <AnimatNumber num={200} caption="International Brands" />
      <AnimatNumber num={2000} caption="High-Quality Products" />
      <AnimatNumber
        className="col-span-2 lg:col-span-1"
        num={30000}
        caption="Happy Customers"
      />
    </div>
  );
}

export default Numbers;
