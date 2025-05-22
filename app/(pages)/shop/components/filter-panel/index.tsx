import { ReactNode } from 'react';
import FilterIcon from './filter-icon';

type Props = {
  children: ReactNode;
};

function FilterPanel({ children }: Props) {
  return (
    <div className="w-1/4 flex flex-col gap-5 rounded-2xl border border-neutral-100 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <FilterIcon />
      </div>
      <hr />
      {children}
    </div>
  );
}

export default FilterPanel;
