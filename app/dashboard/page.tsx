import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="border-2 bg-gray-50 border-green-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="w-6 h-6 text-green-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-semibold mb-1">$100.000</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gray-50 border-blue-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="w-6 h-6 text-blue-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-semibold mb-1">+50</p>

            <p className="text-xs text-muted-foreground">
              Total Sales on ShoeCommerce
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gray-50 border-indigo-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="w-6 h-6 text-indigo-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-semibold mb-1">37</p>

            <p className="text-xs text-muted-foreground">
              Total Products Created
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gray-50 border-orange-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Users</CardTitle>
            <User2 className="w-6 h-6 text-orange-500" />
          </CardHeader>

          <CardContent>
            <p className="text-3xl font-semibold mb-1">120</p>
            <p className="text-xs text-muted-foreground">
              Total Users Signed Up
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2 bg-gray-50">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>

            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle>Recent sales</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-8">
            <div className="flex item-center gap-4">
              <Avatar className="hidden sm:flex h-8 w-8">
                <AvatarFallback>
                  <User2 className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>

              <div className="grid gap-1/2">
                <p className="text-sm font-medium">Test User</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>

              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>

            <div className="flex item-center gap-4">
              <Avatar className="hidden sm:flex h-8 w-8">
                <AvatarFallback>
                  <User2 className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>

              <div className="grid gap-1/2">
                <p className="text-sm font-medium">Test User</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>

              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>

            <div className="flex item-center gap-4">
              <Avatar className="hidden sm:flex h-8 w-8">
                <AvatarFallback>
                  <User2 className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>

              <div className="grid gap-1/2">
                <p className="text-sm font-medium">Test User</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>

              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>

            <div className="flex item-center gap-4">
              <Avatar className="hidden sm:flex h-8 w-8">
                <AvatarFallback>
                  <User2 className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>

              <div className="grid gap-1/2">
                <p className="text-sm font-medium">Test User</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>

              <p className="ml-auto font-medium">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
