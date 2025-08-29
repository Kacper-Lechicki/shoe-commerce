import {
  DASHBOARD_NAVIGATION_LINKS,
  DashboardNavigationLink,
} from '@/constants';
import Link from 'next/link';
import React from 'react';

type DashboardNavigationProps = {
  onNavigationClick?: () => void;
};

const DashboardNavigation = ({
  onNavigationClick,
}: DashboardNavigationProps) => {
  return (
    <>
      {DASHBOARD_NAVIGATION_LINKS.map((link: DashboardNavigationLink) => {
        return (
          <Link key={link.href} href={link.href} onClick={onNavigationClick}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default DashboardNavigation;
