import {
  DASHBOARD_NAVIGATION_LINKS,
  DashboardNavigationLink,
} from '@/constants';
import Link from 'next/link';
import React from 'react';

const DashboardNavigation = () => {
  return (
    <>
      {DASHBOARD_NAVIGATION_LINKS.map((link: DashboardNavigationLink) => {
        return (
          <Link key={link.href} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default DashboardNavigation;
