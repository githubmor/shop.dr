import { Breadcrumbs } from '@/app/components';
import { fetchProduct } from '@/app/orm';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function Product({ params }: Props) {
  const { id } = await params;
  const product = await fetchProduct(id);
  const category = product?.category;
  const type = product?.type;
  return (
    <div>
      <Breadcrumbs
        paths={[
          { href: '/shop', label: 'Shop' },
          { href: `/category/${category?.id || ''}`, label: category?.title || '' },
          { href: ``, label: type?.title || '' }
        ]}
      />
      {product?.title}
    </div>
  );
}

export default Product;
