import { Breadcrumbs } from '@/app/components';

type Props = {
  params: {
    title: string;
  };
};

function TypePage({ params }: Props) {
  return (
    <div>
      <Breadcrumbs paths={[{ href: `/${params.title}`, label: params.title }]} />
      {params.title}
    </div>
  );
}

export default TypePage;
