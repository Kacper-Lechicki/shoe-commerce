import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

const OrdersPage = () => {
  return (
    <Card className="bg-gray-50">
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="h-[50px] bg-gray-200 hover:bg-gray-200">
              <TableHead className="rounded-tl-lg font-bold pl-6">
                Customer
              </TableHead>

              <TableHead className="font-bold">Type</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold">Date</TableHead>

              <TableHead className="text-right rounded-tr-lg font-bold pr-6">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="h-[80px]">
              <TableCell className="pl-6">
                <p className="font-medium">Test User</p>
              </TableCell>

              <TableCell>Sale</TableCell>
              <TableCell>Successful</TableCell>
              <TableCell>2025-08-20</TableCell>

              <TableCell className="text-right pr-6">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersPage;
