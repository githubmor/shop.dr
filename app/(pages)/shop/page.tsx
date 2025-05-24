'use client';
import { CategoryType, ProductType, StyleType } from '@/app/models';
import { fetcher } from '@/app/utils';
import useSWR from 'swr';
import { Breadcrumbs } from '../components';
import List from '../components/list';
import Menu from '../components/menu';
import FilterPanel from './components/filter-panel';
import { useState } from 'react';

type FilterType = {
  category: string | null;
  style: string | null;
};

function ShopPage() {
  const [filter, setFilter] = useState<FilterType>({
    category: null,
    style: null
  });
  const { data: categories } = useSWR<CategoryType[]>(`/api/category/list`, fetcher);
  const { data: styles } = useSWR<StyleType[]>(`/api/style/list`, fetcher);
  const { data: products } = useSWR<ProductType[]>(`/api/product/list`, fetcher);
  return (
    <div className="flex flex-col gap-5 ">
      <Breadcrumbs paths={[{ href: '/shop', label: 'Shop' }]} />
      <div className="flex gap-5 ">
        <FilterPanel>
          {categories && (
            <Menu
              title="Categories"
              items={categories}
              onItemClick={(id: number): void => {
                setFilter({ ...filter, category: id + '' });
              }}
            />
          )}
          <hr />
          {styles && (
            <Menu
              title="Styles"
              items={styles}
              onItemClick={(id: number): void => {
                setFilter({ ...filter, style: id + '' });
              }}
            />
          )}
        </FilterPanel>
        {products && (
          <List products={products} title={'Shop Now'} allProductCount={100} page={2} count={10} />
        )}
      </div>
    </div>
  );
}

export default ShopPage;
