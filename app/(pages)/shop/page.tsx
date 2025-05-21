import { getCategories, getStyles } from '@/app/orm';
import { Breadcrumbs } from '../components';
import Menu from '../components/menu';
import FilterIcon from './filter-icon';

async function ShopPage() {
  const categories = await getCategories();
  const styles = await getStyles();
  return (
    <div className="flex flex-col gap-5 ">
      <Breadcrumbs paths={[{ href: '/shop', label: 'Shop' }]} />
      <div className="flex gap-5 ">
        <div className="w-1/4 flex flex-col gap-5 rounded-2xl border border-neutral-100 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
            <FilterIcon />
          </div>
          <hr />
          <Menu title="Categories" items={categories} />
          <hr />
          <Menu title="Styles" items={styles} />
        </div>
        <div className="tes w-3/4 ">
          <div>
            <span className="text-2xl font-bold">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
