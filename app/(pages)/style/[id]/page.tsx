import { getStyle } from '@/app/orm';
import { Breadcrumbs } from '../../components';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function StylePage({ params }: Props) {
  const { id } = await params;
  const style = await getStyle(+id);
  return (
    <div>
      <Breadcrumbs paths={[{ href: `/style/${style?.id}`, label: style?.title || '' }]} />
      {style?.title}
    </div>
  );
}

export default StylePage;
