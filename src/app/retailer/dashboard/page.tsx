import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ShoppingBag, Tag, Users, DollarSign, TrendingUp, Box, Clipboard, MessageSquare } from "lucide-react";

export const dynamic = "force-static";

export default function RetailerDashboard() {
  // Mock data for static export
  const storeName = "Fashion Boulevard";
  const sales = { today: 345, week: 2450, month: 8790 };
  const stats = {
    pendingOrders: 5,
    products: 24,
    customers: 148,
    revenue: 8790,
  };

  // Mock recent orders
  const recentOrders = [
    {
      id: "ORD-001",
      product: "Vintage Leather Crossbody Bag",
      customer: "Emily Johnson",
      date: "Today, 2:34 PM",
      status: "Pending",
      amount: 69.99,
    },
    {
      id: "ORD-002",
      product: "Handwoven Beach Tote Bag",
      customer: "Michael Roberts",
      date: "Today, 11:20 AM",
      status: "Completed",
      amount: 45.99,
    },
    {
      id: "ORD-003",
      product: "Beaded Statement Necklace",
      customer: "Jennifer Lopez",
      date: "Yesterday, 4:15 PM",
      status: "Completed",
      amount: 29.99,
    },
  ];

  // Mock popular products
  const popularProducts = [
    {
      id: 1,
      name: "Vintage Leather Crossbody Bag",
      sales: 42,
      revenue: 2940,
      growth: 12,
    },
    {
      id: 2,
      name: "Handwoven Beach Tote Bag",
      sales: 38,
      revenue: 1748,
      growth: 8,
    },
    {
      id: 3,
      name: "Beaded Statement Necklace",
      sales: 35,
      revenue: 1050,
      growth: 15,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">{storeName}</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/retailer/products">
              <Box className="mr-2 h-4 w-4" />
              Manage Products
            </Link>
          </Button>
          <Button asChild>
            <Link href="/retailer/messages">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Clipboard className="h-8 w-8 text-orange-500" />
              <span className="text-xs px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                +2 today
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
              <h3 className="text-2xl font-bold">{stats.pendingOrders}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Box className="h-8 w-8 text-orange-500" />
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                24 active
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Total Products</p>
              <h3 className="text-2xl font-bold">{stats.products}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-orange-500" />
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                +12 this week
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
              <h3 className="text-2xl font-bold">{stats.customers}</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8 text-orange-500" />
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                +8% from last month
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
              <h3 className="text-2xl font-bold">${stats.revenue}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest orders from your customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{order.product}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.customer} • {order.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                        {order.status}
                      </div>
                      <div className="font-medium">${order.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/retailer/orders">View All Orders</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Products */}
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Popular Products</CardTitle>
              <CardDescription>Your top-selling items this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {popularProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className={`p-2 rounded-full bg-orange-100`}>
                      <ShoppingBag className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {product.sales} sales • ${product.revenue}
                      </div>
                    </div>
                    <div className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {product.growth}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/retailer/products">Manage Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <Link href="/retailer/promotions">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
            <CardContent className="flex items-center gap-4 p-6">
              <Tag className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-medium">Create Promotion</h3>
                <p className="text-sm text-muted-foreground">
                  Set up special offers and discounts
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/retailer/products/new">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
            <CardContent className="flex items-center gap-4 p-6">
              <Box className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-medium">Add New Product</h3>
                <p className="text-sm text-muted-foreground">
                  List a new item in your store
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/retailer/messages">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
            <CardContent className="flex items-center gap-4 p-6">
              <MessageSquare className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-medium">Customer Messages</h3>
                <p className="text-sm text-muted-foreground">
                  Respond to customer inquiries
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
