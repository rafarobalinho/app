import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Info, MapPin, Star } from 'lucide-react';
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Reserve Product | Marketplace Connect',
  description: 'Reserve products from local retailers in our marketplace',
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
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    store: {
      id: '1',
      name: 'Fashion Boulevard',
      location: 'Market Square, Booth #24',
      rating: 4.9,
      openingHours: [
        { day: 'Monday', hours: '10:00 AM - 6:00 PM' },
        { day: 'Tuesday', hours: '10:00 AM - 6:00 PM' },
        { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
        { day: 'Thursday', hours: '10:00 AM - 8:00 PM' },
        { day: 'Friday', hours: '10:00 AM - 8:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 7:00 PM' },
        { day: 'Sunday', hours: '11:00 AM - 5:00 PM' },
      ],
    },
    categories: ['Accessories', 'Women\'s Fashion'],
    colors: ['Brown', 'Black', 'Tan'],
  };
};

type Props = {
  params: { id: string };
};

// Static site generation for product reservation pages
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

// Update the function signature to match the NextJS Page type
export default function ReservePage({ params }: Props) {
  const product = getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Get the next 7 days for the date picker
  const getDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
      dates.push({ value: dateString, label: dateString });
    }

    return dates;
  };

  // Get time slots for the selected day (simplified for demo)
  const getTimeSlots = () => {
    return [
      { value: '10:00 AM', label: '10:00 AM' },
      { value: '11:00 AM', label: '11:00 AM' },
      { value: '12:00 PM', label: '12:00 PM' },
      { value: '1:00 PM', label: '1:00 PM' },
      { value: '2:00 PM', label: '2:00 PM' },
      { value: '3:00 PM', label: '3:00 PM' },
      { value: '4:00 PM', label: '4:00 PM' },
      { value: '5:00 PM', label: '5:00 PM' },
    ];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container px-4 py-8 md:py-12">
          <div className="mb-6">
            <Link
              href={`/products/${product.id}`}
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to product
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Reserve Item for Pickup</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Product Details */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-medium">{product.name}</h2>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-1">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-baseline mt-1">
                        <span className="font-semibold">${product.discountPrice}</span>
                        {product.price !== product.discountPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            ${product.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Store Details */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Pickup Location</h3>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-orange-500 mt-1 mr-2" />
                      <div>
                        <p className="font-medium">{product.store.name}</p>
                        <p className="text-sm text-gray-600">{product.store.location}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Today's Hours:</span>{' '}
                        {product.store.openingHours[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].hours}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="mb-8" />

                {/* Reservation Form */}
                <div>
                  <h2 className="text-xl font-semibold mb-6">Reservation Details</h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block font-medium mb-1">Select Date</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a date" />
                            </SelectTrigger>
                            <SelectContent>
                              {getDates().map((date) => (
                                <SelectItem key={date.value} value={date.value}>
                                  {date.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block font-medium mb-1">Select Time</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              {getTimeSlots().map((time) => (
                                <SelectItem key={time.value} value={time.value}>
                                  {time.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {product.colors.length > 0 && (
                          <div>
                            <label className="block font-medium mb-1">Select Color</label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a color" />
                              </SelectTrigger>
                              <SelectContent>
                                {product.colors.map((color) => (
                                  <SelectItem key={color} value={color}>
                                    {color}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div>
                          <label className="block font-medium mb-1">Quantity</label>
                          <Select defaultValue="1">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Special Instructions (Optional)</label>
                      <Input placeholder="Add any special instructions or requests..." />
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox id="terms" className="mt-1" />
                      <div>
                        <label htmlFor="terms" className="text-sm font-medium cursor-pointer">
                          I agree to the pickup terms and conditions
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          Items will be held for 24 hours after your selected pickup time.
                          If not picked up, your reservation will be cancelled.
                        </p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg flex items-start gap-3">
                      <Info className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-orange-800">Reservation Information</p>
                        <p className="text-orange-700 mt-1">
                          This reservation holds the item at the store for you to examine and purchase in person.
                          No payment is collected online - you'll pay at the store during pickup.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex-1">
                      <Calendar className="mr-2 h-5 w-5" />
                      Confirm Reservation
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href={`/products/${product.id}`}>
                        Cancel
                      </Link>
                    </Button>
                  </div>
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
