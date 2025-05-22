import { fetchProductList, getCategories, getStyles } from '@/app/orm';
import { Breadcrumbs } from '../components';
import List from '../components/list';
import Menu from '../components/menu';
import FilterPanel from './components/filter-panel';

async function ShopPage() {
  const categories = await getCategories();
  const styles = await getStyles();
  const products = await fetchProductList('list');
  return (
    <div className="flex flex-col gap-5 ">
      <Breadcrumbs paths={[{ href: '/shop', label: 'Shop' }]} />
      <div className="flex gap-5 ">
        <FilterPanel>
          <Menu title="Categories" items={categories} />
          <hr />
          <Menu title="Styles" items={styles} />
        </FilterPanel>
        <List products={products} title={'Shop Now'} allProductCount={100} page={2} count={10} />
      </div>
    </div>
  );
}

export default ShopPage;
