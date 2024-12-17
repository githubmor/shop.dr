import Button from "../../button";
import List from "./list";
type Props = {
  title: string;
  url: string;
};
function ProductList({ title, url }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full py-11 lg:py-16">
      <span className="font-anton text-[2rem] lg:text-5xl w-full text-center">
        {title}
      </span>
      <List url={url} />
      <Button
        text="View All"
        className="w-full lg:w-1/4 self-center bg-base text-base-content border border-neutral-100 text-sm lg:text-[1rem] font-medium"
      />
    </div>
  );
}

export default ProductList;
