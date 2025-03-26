import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, Star, Trash } from "lucide-react";

export const dynamic = "force-static";

export default function WishlistPage() {
  // Mock data for static export
  const wishlistItems = [
    {
      id: "1",
      name: "Vintage Leather Crossbody Bag",
      price: 89.99,
      discountPrice: 69.99,
      rating: 4.8,
      reviewCount: 124,
      image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      store: {
        name: "Fashion Boulevard",
        location: "Market Square, Booth #24",
      },
      addedOn: "March 10, 2025",
    },
    {
      id: "4",
      name: "Wireless Bluetooth Headphones",
      price: 129.99,
      discountPrice: 99.99,
      rating: 4.6,
      reviewCount: 213,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      store: {
        name: "Tech Haven",
        location: "Market Square, Booth #35",
      },
      addedOn: "March 8, 2025",
    },
    {
      id: "7",
      name: "Wooden Desk Organizer",
      price: 34.99,
      discountPrice: 29.99,
      rating: 4.5,
      reviewCount: 67,
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      store: {
        name: "Home Essentials",
        location: "Market Square, Booth #12",
      },
      addedOn: "March 5, 2025",
    },
  ];

  const recommendedItems = [
    {
      id: "2",
      name: "Handmade Ceramic Coffee Mug",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      store: "Home Essentials",
    },
    {
      id: "10",
      name: "Sustainable Bamboo Dinnerware Set",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      store: "Eco Living",
    },
    {
      id: "12",
      name: "Vintage Silk Scarf",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      store: "Fashion Boulevard",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="text-muted-foreground mt-2">
          Items you've saved for later
        </p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-48 h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <div className="mb-2">
                    <Link
                      href={`/products/${item.id}`}
                      className="font-medium hover:text-orange-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(item.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({item.reviewCount})
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.store.name} • {item.store.location}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Added on {item.addedOn}
                  </div>
                  <div className="flex items-center mt-auto pt-4">
                    <div className="flex items-baseline">
                      <span className="font-semibold">
                        ${item.discountPrice}
                      </span>
                      {item.price !== item.discountPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ${item.price}
                        </span>
                      )}
                    </div>
                    <div className="ml-auto flex gap-2">
                      <Button variant="outline" size="sm">
                        <Trash className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={`/products/${item.id}/reserve`}>
                          Reserve in Store
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recommended for You</h2>
              <Link
                href="/products"
                className="text-orange-600 hover:text-orange-700 flex items-center text-sm"
              >
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recommendedItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group"
                >
                  <Card className="overflow-hidden transition-all duration-200 h-full hover:shadow-md">
                    <div className="relative aspect-square">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <button className="absolute top-2 right-2 h-8 w-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart className="h-4 w-4 text-gray-600 hover:text-orange-600" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-orange-600 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <div className="font-semibold">${item.price}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.store}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Start browsing and save items for later
          </p>
          <Button asChild>
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
