import { Breadcrumbs } from '@/app/components';
import { getCategory } from '@/app/orm';

type Props = {
  params: {
    id: number;
  };
};

async function CategoryPage({ params }: Props) {
  const category = await getCategory(params.id);
  return (
    <div>
      <Breadcrumbs paths={[{ href: `/category/${category?.title}`, label: category?.title || '' }]} />
      {category?.title}
    </div>
  );
}

export default CategoryPage;
