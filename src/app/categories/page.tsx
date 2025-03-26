import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

export default function CategoriesPage() {
  // This would come from an API/database in a real app
  const categories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/womens-fashion",
      description: "Dresses, tops, bottoms, and accessories for women"
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/mens-fashion",
      description: "Shirts, pants, suits, and accessories for men"
    },
    {
      id: 3,
      name: "Home Goods",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/home-goods",
      description: "Furniture, decor, kitchenware, and home accessories"
    },
    {
      id: 4,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/accessories",
      description: "Bags, jewelry, watches, and other accessories"
    },
    {
      id: 5,
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d5019f6a2523?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/toys",
      description: "Games, toys, and entertainment for kids of all ages"
    },
    {
      id: 6,
      name: "Restaurants",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/restaurants",
      description: "Local eateries, cafes, and food vendors in the marketplace"
    },
    {
      id: 7,
      name: "Opticians",
      image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/opticians",
      description: "Eyeglasses, sunglasses, and optical services"
    },
    {
      id: 8,
      name: "Beachwear",
      image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/beachwear",
      description: "Swimsuits, cover-ups, and beach accessories"
    },
    {
      id: 9,
      name: "Plus Size Fashion",
      image: "https://images.unsplash.com/photo-1562585195-97aff4b3848c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/plus-size-fashion",
      description: "Fashionable clothing designed for plus-size individuals"
    },
    {
      id: 10,
      name: "Carnival Items",
      image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/carnival-items",
      description: "Costumes, masks, and accessories for carnival festivities"
    },
    {
      id: 11,
      name: "Print Shops",
      image: "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/print-shops",
      description: "Printing services for business cards, flyers, and more"
    },
    {
      id: 12,
      name: "Cell Phones & Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/cell-phones-electronics",
      description: "Mobile phones, accessories, and electronic gadgets"
    },
    {
      id: 13,
      name: "Children's Fashion",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/childrens-fashion",
      description: "Clothing, shoes, and accessories for kids and babies"
    },
    {
      id: 14,
      name: "Home Appliances",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d347a569?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/home-appliances",
      description: "Kitchen appliances, gadgets, and household electronics"
    },
    {
      id: 15,
      name: "Footwear",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/footwear",
      description: "Shoes, sandals, boots, and other footwear for all ages"
    },
    {
      id: 16,
      name: "Jewelry & Semi-Jewelry",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/jewelry",
      description: "Fine jewelry, fashion jewelry, and accessories"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-orange-500 text-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Categories</h1>
              <p className="text-white/90 text-lg mb-8">
                Explore our wide range of categories to find exactly what you're looking for
              </p>

              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={category.url} className="group">
                  <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                    <div className="relative h-48">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-action */}
        <section className="bg-gray-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-gray-600 mb-6">
                We're constantly adding new categories and retailers to our marketplace.
                Let us know what you'd like to see!
              </p>
              <Button size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
