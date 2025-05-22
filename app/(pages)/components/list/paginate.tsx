'use client';
import Button from './button';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Paginate({ currentPage, totalPages, onPageChange }: Props) {
  const pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1, 2, 3);
    pages.push('...');
    pages.push(totalPages - 2, totalPages - 1, totalPages);
  }

  const handleClick = (page: number) => {
    if (page !== currentPage && typeof page === 'number') {
      onPageChange(page);
    }
  };

  return (
    <div className="w-full justify-between flex items-center gap-2">
      <Button text="Previous" onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
      <div className="flex items-center gap-2">
        {pages.map((page, idx) =>
          page === '...' ? (
            <span key={idx + 1000} className="px-2 text-gray-400 select-none">
              ...
            </span>
          ) : (
            <Button
              text={page.toString()}
              key={page}
              onClick={() => handleClick(page as number)}
              disabled={currentPage === page}
              className={`px-4  ${currentPage === page ? 'font-bold bg-neutral-6 text-neutral' : ''}`}
            />
          )
        )}
      </div>
      <Button
        text="Next"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}

export default Paginate;
