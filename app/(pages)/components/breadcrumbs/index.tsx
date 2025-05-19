'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Arrow from './arrow'

export default function  Breadcrumbs() {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<{ href: string; label: string }[]>([])

  useEffect(() => {
    const paths = pathname.split('/').filter(Boolean)
    const crumbs = paths.map((_, i) => {
      const href = '/' + paths.slice(0, i + 1).join('/')
      return { href, label: decodeURIComponent(paths[i]) }
    })
    setBreadcrumbs([{ href: '/', label: 'Home' }, ...crumbs])
  }, [pathname])

  return (
    <nav className="text-sm breadcrumbs">
      <ul className="flex space-x-2">
        {breadcrumbs.map((crumb, i) => (
          <li className='flex gap-1 items-center' key={i}>
            <Link href={crumb.href} className="hover:underline capitalize">
              {crumb.label}
            </Link>
            {i < breadcrumbs.length - 1 && <Arrow />}
          </li>
        ))}
      </ul>
    </nav>
  )
}
