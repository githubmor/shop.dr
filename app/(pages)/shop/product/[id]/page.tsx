import { Breadcrumbs } from '@/app/components';
import { fetchProduct } from '@/app/orm';

type Props = {
  params: {
    id: string;
  };
};

async function Product({ params }: Props) {
  const product = await fetchProduct(params.id);
  const category = product?.category;
  const type = product?.type;
  return (
    <div>
      <Breadcrumbs
        paths={[
          { href: '/shop', label: 'Shop' },
          { href: `/category/${category?.title || ''}`, label: category?.title || '' },
          { href: `/type/${type?.title || ''}`, label: type?.title || '' }
        ]}
      />
      {product?.title}
    </div>
  );
}

export default Product;
