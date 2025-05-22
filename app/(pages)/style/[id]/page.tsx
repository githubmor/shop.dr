import { getStyle } from '@/app/orm';
import { Breadcrumbs } from '../../components';
import { categories, styles, products } from '@/app/db';
import List from '../../components/list';
import Menu from '../../components/menu';
import FilterPanel from '../../shop/components/filter-panel';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function StylePage({ params }: Props) {
  const { id } = await params;
  const style = await getStyle(+id);
  return (
    <div className="flex flex-col gap-5 ">
      <Breadcrumbs paths={[{ href: `/style/${style?.id}`, label: style?.title || '' }]} />
      <div className="flex gap-5 ">
        <FilterPanel>
          <Menu title="Categories" items={categories} />
          <hr />
          <Menu title="Styles" items={styles} />
        </FilterPanel>
        <List products={products} title={style?.title || ''} allProductCount={100} page={2} count={10} />
      </div>
    </div>
  );
}

export default StylePage;
