import { fetchProduct } from "@/app/orm";


type Props = {
   params: {
       id: string;
   };
};

async function Product({ params }: Props) {
   const product = await fetchProduct(params.id);
   return (
       <div >{product?.title}</div>
   )
}
   
export default Product