import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, Search, SlidersHorizontal, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Products | Marketplace Connect',
  description: 'Browse products from local retailers in our marketplace',
};

// This would come from a database in a real application
const products = [
  {
    id: '1',
    name: 'Vintage Leather Crossbody Bag',
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Fashion Boulevard',
      location: 'Market Square, Booth #24',
    },
    categories: ['Accessories', 'Women\'s Fashion'],
  },
  {
    id: '2',
    name: 'Handmade Ceramic Coffee Mug',
    price: 24.99,
    discountPrice: 24.99,
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Home Essentials',
      location: 'Market Square, Booth #12',
    },
    categories: ['Home Goods'],
  },
  {
    id: '3',
    name: 'Wooden Cutting Board Set',
    price: 59.99,
    discountPrice: 49.99,
    rating: 4.7,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1606545190262-f4ca0b1cf4e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Home Essentials',
      location: 'Market Square, Booth #12',
    },
    categories: ['Home Goods', 'Kitchen'],
  },
  {
    id: '4',
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    discountPrice: 99.99,
    rating: 4.6,
    reviewCount: 213,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Tech Haven',
      location: 'Market Square, Booth #35',
    },
    categories: ['Electronics', 'Accessories'],
  },
  {
    id: '5',
    name: 'Handwoven Beach Tote Bag',
    price: 45.99,
    discountPrice: 45.99,
    rating: 4.3,
    reviewCount: 58,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Fashion Boulevard',
      location: 'Market Square, Booth #24',
    },
    categories: ['Accessories', 'Women\'s Fashion'],
  },
  {
    id: '6',
    name: 'Artisan Soap Collection',
    price: 18.99,
    discountPrice: 15.99,
    rating: 4.9,
    reviewCount: 42,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Natural Essentials',
      location: 'Market Square, Booth #8',
    },
    categories: ['Bath & Body', 'Home Goods'],
  },
  {
    id: '7',
    name: 'Wooden Desk Organizer',
    price: 34.99,
    discountPrice: 29.99,
    rating: 4.5,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Home Essentials',
      location: 'Market Square, Booth #12',
    },
    categories: ['Home Goods', 'Office'],
  },
  {
    id: '8',
    name: 'Hand-Knitted Winter Scarf',
    price: 29.99,
    discountPrice: 24.99,
    rating: 4.7,
    reviewCount: 31,
    image: 'https://images.unsplash.com/photo-1520903159849-8e4ded35a8fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Craft Corner',
      location: 'Market Square, Booth #17',
    },
    categories: ['Accessories', 'Winter Collection'],
  },
  {
    id: '9',
    name: 'Vintage Pocket Watch',
    price: 79.99,
    discountPrice: 69.99,
    rating: 4.8,
    reviewCount: 24,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Antique Treasures',
      location: 'Market Square, Booth #42',
    },
    categories: ['Accessories', 'Men\'s Fashion'],
  },
  {
    id: '10',
    name: 'Sustainable Bamboo Dinnerware Set',
    price: 49.99,
    discountPrice: 39.99,
    rating: 4.4,
    reviewCount: 47,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      name: 'Eco Living',
      location: 'Market Square, Booth #30',
    },
    categories: ['Home Goods', 'Kitchen'],
  },
];

export default function ProductsPage() {
  // Get all unique categories
  const allCategories = Array.from(
    new Set(products.flatMap(product => product.categories))
  ).sort();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-orange-50 py-8">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Products</h1>
                <p className="text-muted-foreground mt-1">
                  Discover unique items from local retailers
                </p>
              </div>
              <div className="w-full md:w-auto flex gap-2">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    className="pl-9"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="sticky top-4 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Filters</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Category
                      </label>
                      <div className="space-y-2">
                        {allCategories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`category-${category}`}
                              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                            />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm text-gray-700"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Price Range
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Min" type="number" />
                        <Input placeholder="Max" type="number" />
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Rating
                      </label>
                      <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`rating-${rating}`}
                              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                            />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="text-sm text-gray-700 flex items-center"
                            >
                              {Array(5).fill(0).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="ml-1">& Up</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Store
                      </label>
                      <div className="space-y-2">
                        {Array.from(new Set(products.map(p => p.store.name))).map((store) => (
                          <div key={store} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`store-${store}`}
                              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                            />
                            <label
                              htmlFor={`store-${store}`}
                              className="text-sm text-gray-700"
                            >
                              {store}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{products.length}</span> products
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm whitespace-nowrap hidden sm:inline-block">Sort by:</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px] h-9">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group"
                  >
                    <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
                      <div className="relative aspect-square">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.price !== product.discountPrice && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            SALE
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-1 mb-1">
                          {Array(5).fill(0).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">
                            ({product.reviewCount})
                          </span>
                        </div>

                        <h3 className="font-medium group-hover:text-orange-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>

                        <div className="flex items-baseline mt-1 gap-2">
                          <span className="font-semibold">${product.discountPrice}</span>
                          {product.price !== product.discountPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.price}
                            </span>
                          )}
                        </div>

                        <div className="text-xs text-muted-foreground mt-2">
                          {product.store.name}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
