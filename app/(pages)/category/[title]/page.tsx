import { Breadcrumbs } from '@/app/components';

type Props = {
  params: {
    title: string;
  };
};

function CategoryPage({ params }: Props) {
  return (
    <div>
      <Breadcrumbs paths={[{ href: `/${params.title}`, label: params.title }]} />
      {params.title}
    </div>
  );
}

export default CategoryPage;
