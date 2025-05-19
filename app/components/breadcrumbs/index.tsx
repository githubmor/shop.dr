'use client';
import Link from 'next/link';
import Arrow from './arrow';

type PathType = { href: string; label: string };

type Props = {
  paths: PathType[];
};

export default function Breadcrumbs({ paths }: Props) {
  const breadcrumbs = [{ href: '/', label: 'Home' }, ...paths];

  return (
    <nav className="text-sm breadcrumbs">
      <ul className="flex space-x-2">
        {breadcrumbs.map((crumb, i) => (
          <li className="flex gap-1 items-center" key={i}>
            <Link href={crumb.href} className="hover:underline capitalize">
              {crumb.label}
            </Link>
            {i < breadcrumbs.length - 1 && <Arrow />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
