import Button from "../../button";
import { ProductType } from "../../product";
import List from "./list";
type Props = {
  title: string;
  fetchProducts: () => Promise<ProductType[]>;
};
function ProductList({ title, fetchProducts }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full py-11 lg:py-16">
      <span className="font-anton text-[2rem] w-full text-center">{title}</span>
      <List fetchProducts={fetchProducts} />
      <Button
        text="View All"
        className="w-full lg:w-1/3 self-center bg-base text-base-content border border-neutral-100 text-sm font-medium"
      />
    </div>
  );
}

export default ProductList;
