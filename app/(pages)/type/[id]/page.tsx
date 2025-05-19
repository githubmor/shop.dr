import { Breadcrumbs } from '@/app/components';
import { getType } from '@/app/orm';

type Props = {
  params: {
    id: number;
  };
};

async function TypePage({ params }: Props) {
  const type = await getType(params.id);
  return (
    <div>
      <Breadcrumbs paths={[{ href: `/type/${type?.title}`, label: type?.title || '' }]} />
      {type?.title}
    </div>
  );
}

export default TypePage;
