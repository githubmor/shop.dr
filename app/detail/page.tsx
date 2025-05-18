import { fetchProduct } from "../utils";

type Props = {
   params: {
       id: string;
   };
};

async function Detail({ params }: Props) {
   const product = await fetchProduct(params.id);
   return (
       <div>{product?.title}</div>
   )
}
   
export default Detail