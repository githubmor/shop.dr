import List from "./list";

function NewArrival() {
  return (
    <div className="flex flex-col gap-6 w-full px-4 py-11">
      <span className="font-anton text-[2rem] w-full text-center">
        New Arrivals
      </span>
      <List />
    </div>
  );
}

export default NewArrival;
