'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import DashboardNavigation from '@/components/dashboard/DashboardNavigation';

const MobileNavigation = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleNavigationClick = () => {
    setSheetOpen(false);
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button className="shrink-0 md:hidden" variant="outline" size="icon">
          <MenuIcon height={5} width={5} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="sr-only">
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>

        <nav className="flex flex-col gap-6 text-lg font-medium mt-8 p-5">
          <DashboardNavigation onNavigationClick={handleNavigationClick} />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
