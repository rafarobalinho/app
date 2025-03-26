import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Facebook, Instagram, MapPin, MessageSquare, Phone, Star, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Store Details | Marketplace Connect',
  description: 'Connect with local retailers in our marketplace',
};

// This would come from a database in a real application
const getStoreById = (id: string) => {
  return {
    id,
    name: 'Fashion Boulevard',
    description: 'Specializing in curated vintage and handmade fashion accessories, Fashion Boulevard brings unique style to the marketplace. Each item is carefully selected for quality and distinctiveness.',
    logo: 'https://images.unsplash.com/photo-1551159675-1f8a8f4822fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    coverImage: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    rating: 4.9,
    reviewCount: 256,
    location: 'Market Square, Booth #24',
    openingHours: [
      { day: 'Monday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '10:00 AM - 8:00 PM' },
      { day: 'Friday', hours: '10:00 AM - 8:00 PM' },
      { day: 'Saturday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Sunday', hours: '11:00 AM - 5:00 PM' },
    ],
    contact: {
      phone: '(555) 123-4567',
      email: 'contact@fashionboulevard.com',
      website: 'www.fashionboulevard.com',
      social: {
        instagram: '@fashionblvd',
        facebook: 'FashionBoulevard',
        twitter: '@fashion_blvd',
      }
    },
    owner: {
      name: 'Sarah Johnson',
      since: '2018',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    products: [
      {
        id: '1',
        name: 'Vintage Leather Crossbody Bag',
        price: 89.99,
        discountPrice: 69.99,
        rating: 4.8,
        reviewCount: 124,
        image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      },
      {
        id: '5',
        name: 'Handwoven Beach Tote Bag',
        price: 45.99,
        discountPrice: 45.99,
        rating: 4.3,
        reviewCount: 58,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      },
      {
        id: '11',
        name: 'Beaded Statement Necklace',
        price: 35.99,
        discountPrice: 29.99,
        rating: 4.7,
        reviewCount: 42,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      },
      {
        id: '12',
        name: 'Vintage Silk Scarf',
        price: 24.99,
        discountPrice: 24.99,
        rating: 4.6,
        reviewCount: 35,
        image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      },
    ],
    reviews: [
      {
        id: '1',
        user: {
          name: 'Emily T.',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        },
        rating: 5,
        date: 'October 15, 2023',
        content: 'Absolutely love this store! The owner is so knowledgeable and helpful. Found a beautiful vintage bag that I get compliments on all the time.',
      },
      {
        id: '2',
        user: {
          name: 'Michael R.',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        },
        rating: 4,
        date: 'September 3, 2023',
        content: 'Great selection of unique items you won\'t find anywhere else. Prices are reasonable for the quality. Will definitely be back!',
      },
      {
        id: '3',
        user: {
          name: 'Jennifer L.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        },
        rating: 5,
        date: 'August 22, 2023',
        content: 'Sarah is amazing and has an incredible eye for fashion. Her recommendations were spot on and I found the perfect accessories for my wedding.',
      },
    ]
  };
};

type Props = {
  params: { id: string };
};

// Static site generation for store pages
export function generateStaticParams() {
  // In a real app, this would fetch from a database
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default function StorePage({ params }: Props) {
  const store = getStoreById(params.id);

  if (!store) {
    return <div>Store not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Store Header */}
        <div className="relative h-80">
          <Image
            src={store.coverImage}
            alt={store.name}
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container px-4 md:px-6 pb-8 relative">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
                <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={store.logo}
                    alt={`${store.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white">
                  <h1 className="text-2xl md:text-3xl font-bold">{store.name}</h1>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(store.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2">
                        {store.rating} ({store.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center ml-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{store.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="about" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">About {store.name}</h2>
                    <p className="text-gray-700">{store.description}</p>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{store.contact.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{store.contact.email}</span>
                        </div>
                        {store.contact.website && (
                          <div className="flex items-center">
                            <Link
                              href={`https://${store.contact.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-orange-600 hover:underline"
                            >
                              {store.contact.website}
                            </Link>
                          </div>
                        )}
                        <div className="flex items-center space-x-3 mt-3">
                          {store.contact.social.instagram && (
                            <Link
                              href={`https://instagram.com/${store.contact.social.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-orange-600"
                            >
                              <Instagram className="h-5 w-5" />
                            </Link>
                          )}
                          {store.contact.social.facebook && (
                            <Link
                              href={`https://facebook.com/${store.contact.social.facebook}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-orange-600"
                            >
                              <Facebook className="h-5 w-5" />
                            </Link>
                          )}
                          {store.contact.social.twitter && (
                            <Link
                              href={`https://twitter.com/${store.contact.social.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-orange-600"
                            >
                              <Twitter className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Opening Hours</h3>
                      <div className="space-y-2">
                        {store.openingHours.map((item) => (
                          <div key={item.day} className="flex items-start">
                            <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                            <div>
                              <span className="font-medium">{item.day}: </span>
                              <span className="text-gray-700">{item.hours}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={store.owner.image}
                        alt={store.owner.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-center sm:text-left">
                        Meet {store.owner.name}, Owner
                      </h3>
                      <p className="text-gray-600 text-sm text-center sm:text-left">
                        Passionate retailer since {store.owner.since}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <Button>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Store
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="products">
                  <h2 className="text-xl font-semibold mb-6">Products from {store.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {store.products.map((product) => (
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
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex justify-center mt-8">
                    <Button variant="outline">
                      View All Products
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-1">Customer Reviews</h2>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {Array(5).fill(0).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(store.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-muted-foreground">
                            Based on {store.reviewCount} reviews
                          </span>
                        </div>
                      </div>
                      <Button>
                        Write a Review
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {store.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6">
                          <div className="flex items-start gap-4">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                              <Image
                                src={review.user.image}
                                alt={review.user.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium">{review.user.name}</h4>
                                  <div className="flex items-center mt-1">
                                    <div className="flex">
                                      {Array(5).fill(0).map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-3 w-3 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        />
                                      ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground ml-2">
                                      {review.date}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <p className="mt-3 text-gray-700">
                                {review.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <Button variant="outline">
                        Load More Reviews
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="sticky top-4 space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Store location map"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-start mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium">{store.name}</p>
                      <p className="text-sm text-gray-600">{store.location}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Contact Store</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about products or availability? Send a message directly to the store owner.
                  </p>
                  <Button className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
