import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, MapPin, Share, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Product Details | Marketplace Connect',
  description: 'View product details and connect with local retailers',
};

// This would come from a database in a real application
const getProductById = (id: string) => {
  return {
    id,
    name: 'Vintage Leather Crossbody Bag',
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.8,
    reviewCount: 124,
    description: 'Handcrafted with premium genuine leather, this versatile crossbody bag features multiple compartments, adjustable strap, and antique brass hardware. Perfect for everyday use or special occasions.',
    features: [
      'Genuine full-grain leather',
      'Adjustable shoulder strap',
      'Interior zip pocket and card slots',
      'Magnetic snap closure',
      'Dimensions: 9" x 7" x 3"'
    ],
    images: [
      'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1574361848550-84518854ff04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    ],
    categories: ['Accessories', 'Women\'s Fashion'],
    colors: ['Brown', 'Black', 'Tan'],
    availableInStore: true,
    store: {
      id: '1',
      name: 'Fashion Boulevard',
      location: 'Market Square, Booth #24',
      rating: 4.9,
      reviewCount: 256,
    }
  };
};

type Props = {
  params: { id: string };
};

// Static site generation for product pages
export function generateStaticParams() {
  // In a real app, this would fetch from a database
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container px-4 py-8 md:py-12">
          <div className="mb-6">
            <Link href="/categories" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer">
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {product.categories.map((category) => (
                      <Link
                        key={category}
                        href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full hover:bg-orange-200 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold">${product.discountPrice}</span>
                  {product.price !== product.discountPrice && (
                    <span className="text-xl text-muted-foreground line-through">${product.price}</span>
                  )}
                  {product.price !== product.discountPrice && (
                    <span className="text-sm text-green-600 font-medium">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground">{product.description}</p>

                <div className="space-y-2">
                  <h3 className="font-medium">Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {product.colors.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-medium">Colors:</h3>
                    <div className="flex space-x-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          className="px-3 py-1 border rounded-md text-sm hover:bg-secondary transition-colors"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-medium">Available at:</h3>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        <MapPin className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <Link href={`/stores/${product.store.id}`} className="font-medium hover:text-orange-600 transition-colors">
                          {product.store.name}
                        </Link>
                        <div className="text-sm text-muted-foreground">{product.store.location}</div>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-xs">
                            {product.store.rating} ({product.store.reviewCount} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Reserve in Store
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" size="icon" className="hidden sm:flex">
                    <Share className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array(4).fill(0).map((_, index) => (
                <Link key={index} href={`/products/${index + 10}`} className="group">
                  <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={`https://images.unsplash.com/photo-155956345${index + 8}-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`}
                      alt={`Related product ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-orange-600 transition-colors">Handcrafted Item {index + 1}</h3>
                  <p className="text-muted-foreground">$59.99</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
