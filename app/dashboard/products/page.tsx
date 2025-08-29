import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { MoreHorizontal, PlusCircle, UserIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5 bg-gray-50">
        <CardHeader>
          <CardTitle>Products</CardTitle>

          <CardDescription>
            Manage your products and view their sales performance
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="h-[50px] bg-gray-200 hover:bg-gray-200">
                <TableHead className="w-[120px] rounded-tl-lg font-bold pl-6">
                  Image
                </TableHead>

                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="font-bold">Price</TableHead>
                <TableHead className="font-bold">Date</TableHead>

                <TableHead className="text-right rounded-tr-lg font-bold pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="h-[80px]">
                <TableCell className="pl-6">
                  <UserIcon className="w-10 h-10" />
                </TableCell>

                <TableCell>Nike Air</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>$299.00</TableCell>
                <TableCell>2025-08-20</TableCell>

                <TableCell className="pr-6 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>

                      <DropdownMenuSeparator />

                      <DropdownMenuItem className="cursor-pointer">
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsPage;
