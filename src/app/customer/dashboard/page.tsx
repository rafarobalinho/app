import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Heart, Clock, DollarSign, BarChart3 } from "lucide-react";

export const dynamic = "force-static";

export default function CustomerDashboard() {
  // Mock data for static export
  const stats = {
    purchases: 12,
    wishlisted: 24,
    pendingOrders: 2,
    totalSpent: 549.97,
  };

  const recentActivity = [
    {
      id: "1",
      type: "order",
      product: "Vintage Leather Crossbody Bag",
      store: "Fashion Boulevard",
      date: "March 15, 2023",
      status: "Completed",
    },
    {
      id: "2",
      type: "wishlist",
      product: "Handmade Ceramic Coffee Mug",
      store: "Home Essentials",
      date: "March 10, 2023",
      status: "Added to Wishlist",
    },
    {
      id: "3",
      type: "order",
      product: "Wireless Bluetooth Headphones",
      store: "Tech Haven",
      date: "February 28, 2023",
      status: "Completed",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, John! Here's what's happening with your account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <ShoppingBag className="h-8 w-8 text-orange-500 mb-2" />
            <p className="text-sm font-medium text-muted-foreground">Total Purchases</p>
            <h3 className="text-3xl font-bold">{stats.purchases}</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Heart className="h-8 w-8 text-orange-500 mb-2" />
            <p className="text-sm font-medium text-muted-foreground">Wishlisted Items</p>
            <h3 className="text-3xl font-bold">{stats.wishlisted}</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Clock className="h-8 w-8 text-orange-500 mb-2" />
            <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
            <h3 className="text-3xl font-bold">{stats.pendingOrders}</h3>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <DollarSign className="h-8 w-8 text-orange-500 mb-2" />
            <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
            <h3 className="text-3xl font-bold">${stats.totalSpent}</h3>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivity.map((item) => (
                <li key={item.id} className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0">
                  <div className={`p-2 rounded-full ${
                    item.type === "order" ? "bg-green-100" : "bg-blue-100"
                  }`}>
                    {item.type === "order" ? (
                      <ShoppingBag className={`h-4 w-4 ${
                        item.type === "order" ? "text-green-600" : "text-blue-600"
                      }`} />
                    ) : (
                      <Heart className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.product}</p>
                    <p className="text-sm text-muted-foreground">
                      From {item.store} · {item.date}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.status}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/customer/wishlist">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
            <CardContent className="flex items-center gap-4 p-6">
              <Heart className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-medium">View Your Wishlist</h3>
                <p className="text-sm text-muted-foreground">
                  Check out items you've saved for later
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/products">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
            <CardContent className="flex items-center gap-4 p-6">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-medium">Explore Products</h3>
                <p className="text-sm text-muted-foreground">
                  Discover new items from local retailers
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/stores">
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer h-full">
            <CardContent className="flex items-center gap-4 p-6">
              <BarChart3 className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-medium">Browse Stores</h3>
                <p className="text-sm text-muted-foreground">
                  Find your favorite local retailers
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
