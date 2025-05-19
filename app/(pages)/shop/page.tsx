import { Breadcrumbs } from '../../components';

function ShopPage() {
  return (
    <div>
      <Breadcrumbs paths={[{ href: '/shop', label: 'Shop' }]} />
      Shop
    </div>
  );
}

export default ShopPage;
