export type DashboardNavigationLink = {
  name: string;
  href: string;
};

export const DASHBOARD_NAVIGATION_LINKS: DashboardNavigationLink[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
  },
  {
    name: 'Products',
    href: '/dashboard/products',
  },
  {
    name: 'Categories',
    href: '/dashboard/categories',
  },
];
