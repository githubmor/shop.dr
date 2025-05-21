import { getCategory } from '@/app/orm';
import { Breadcrumbs } from '../../components';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = await getCategory(+id);
  return (
    <div>
      <Breadcrumbs paths={[{ href: `/category/${category?.id}`, label: category?.title || '' }]} />
      {category?.title}
    </div>
  );
}
