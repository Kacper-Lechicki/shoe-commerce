import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ProductCreateRoute = () => {
  return (
    <form>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>

        <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
      </div>

      <Card className="my-6 lg:my-12 w-full xl:w-1/2">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>

          <CardDescription>
            In this form you can create your product
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>

              <Input
                type="text"
                className="w-full"
                placeholder="Product Name"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Description</Label>

              <Textarea
                placeholder="Write your description right here..."
                className="min-h-[120px] w-full"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input placeholder="$0.00" type="number" className="w-full" />
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Label>Featured Product</Label>
              <Switch />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Status</Label>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProductCreateRoute;
