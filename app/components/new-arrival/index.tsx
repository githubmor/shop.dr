import Button from "../button";
import List from "./list";

function NewArrival() {
  return (
    <div className="flex flex-col gap-6 w-full px-4 py-11">
      <span className="font-anton text-[2rem] w-full text-center">
        New Arrivals
      </span>
      <List />
      <Button
        text="View All"
        className="bg-transparent text-base-content border border-neutral-100 text-sm font-medium"
      />
    </div>
  );
}

export default NewArrival;
