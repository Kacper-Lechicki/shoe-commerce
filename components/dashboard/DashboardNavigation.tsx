'use client';

import {
  DASHBOARD_NAVIGATION_LINKS,
  DashboardNavigationLink,
} from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type DashboardNavigationProps = {
  onNavigationClick?: () => void;
};

const DashboardNavigation = ({
  onNavigationClick,
}: DashboardNavigationProps) => {
  const pathname = usePathname();

  return (
    <>
      {DASHBOARD_NAVIGATION_LINKS.map((link: DashboardNavigationLink) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigationClick}
            className={cn(
              link.href === pathname
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default DashboardNavigation;
