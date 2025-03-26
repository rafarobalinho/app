import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, ArrowRightCircle, Tag, Store, MapPin } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  // Placeholder data - in real app, these would come from an API/database
  const featuredCategories = [
    {
      id: 1,
      name: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/womens-fashion",
    },
    {
      id: 2,
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/mens-fashion",
    },
    {
      id: 3,
      name: "Home Goods",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/home-goods",
    },
    {
      id: 4,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/accessories",
    },
    {
      id: 5,
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d5019f6a2523?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/toys",
    },
    {
      id: 6,
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/categories/electronics",
    },
  ];

  const promotions = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Up to 50% off on all summer items",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/promotions/summer-sale",
    },
    {
      id: 2,
      title: "New Collection",
      description: "Discover the latest fashion arrivals",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/promotions/new-collection",
    },
    {
      id: 3,
      title: "Special Deals",
      description: "Limited time offers on popular items",
      image: "https://images.unsplash.com/photo-1607083206325-cdfbf46bd0ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/promotions/special-deals",
    },
  ];

  const featuredStores = [
    {
      id: 1,
      name: "Fashion Boulevard",
      category: "Women's Fashion",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/stores/1",
    },
    {
      id: 2,
      name: "Tech Haven",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/stores/2",
    },
    {
      id: 3,
      name: "Home Essentials",
      category: "Home Goods",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/stores/3",
    },
    {
      id: 4,
      name: "Toy World",
      category: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d5019f6a2523?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      url: "/stores/4",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen" suppressHydrationWarning>
      <Navbar />
      <div className="flex-grow space-y-16 pb-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Marketplace Connect"
              fill
              priority
              className="object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
              <div className="container h-full flex flex-col justify-center items-start px-4 md:px-6">
                <div className="max-w-xl space-y-4">
                  <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    Discover the Best Local Marketplace Experience
                  </h1>
                  <p className="text-lg text-white/90">
                    Connect with thousands of retailers in popular markets for unique
                    products, special deals, and direct communication with store owners.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <Button size="lg" asChild>
                      <Link href="/categories">
                        Browse Categories <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                      <Link href="/register" className="flex items-center">
                        Join as Retailer <Store className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the component remains the same */}
      </div>
      <Footer />
    </div>
  );
}
