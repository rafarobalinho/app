import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { format, formatDistanceToNow } from 'date-fns';
import { ChevronRight, Phone, Send, UserCircle, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import RetailerDashboardSidebar from '@/components/retailer/DashboardSidebar';

export const metadata: Metadata = {
  title: 'Messages | Retailer Dashboard',
  description: 'Communicate with customers in the marketplace',
};

// Mock data - in a real app, this would come from the database
const conversations = [
  {
    id: '1',
    customer: {
      id: '1',
      name: 'Emily Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      lastActive: '5 min ago',
      status: 'online',
      joined: 'August 2022',
      orders: 5,
    },
    unread: 0,
    status: 'open',
    product: {
      id: '1',
      name: 'Vintage Leather Crossbody Bag',
      image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    messages: [
      {
        id: '1',
        sender: 'store',
        text: 'Hi there! Thanks for your interest in our vintage leather bags. How can I help you today?',
        time: new Date(2023, 9, 15, 14, 23),
      },
      {
        id: '2',
        sender: 'user',
        text: 'Hello! I was wondering if you still have the brown crossbody bag I saw on your store page?',
        time: new Date(2023, 9, 15, 14, 25),
      },
      {
        id: '3',
        sender: 'store',
        text: 'Yes, we do! We have two left in stock. Would you like me to hold one for you?',
        time: new Date(2023, 9, 15, 14, 30),
      },
      {
        id: '4',
        sender: 'user',
        text: 'That would be great! Could I come by tomorrow around 2pm to see it in person?',
        time: new Date(2023, 9, 15, 14, 32),
      },
      {
        id: '5',
        sender: 'store',
        text: 'Absolutely! I\'ll put one aside for you. We\'re located at Booth #24 in Market Square. Do you need directions?',
        time: new Date(2023, 9, 15, 14, 34),
      },
      {
        id: '6',
        sender: 'store',
        text: 'Also, if you\'re interested, we just got some matching wallets that go perfectly with the bag.',
        time: new Date(2023, 9, 15, 14, 35),
      },
      {
        id: '7',
        sender: 'store',
        text: 'And we\'re running a promotion - 15% off if you purchase a bag and wallet together!',
        time: new Date(2023, 9, 15, 14, 36),
      },
    ],
  },
  {
    id: '2',
    customer: {
      id: '2',
      name: 'Michael Roberts',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      lastActive: '1 hour ago',
      status: 'away',
      joined: 'March 2023',
      orders: 2,
    },
    unread: 2,
    status: 'open',
    product: {
      id: '5',
      name: 'Handwoven Beach Tote Bag',
      image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    messages: [
      {
        id: '1',
        sender: 'user',
        text: 'Hi, I\'m interested in the beach tote bag. Do you ship to Miami?',
        time: new Date(2023, 9, 16, 10, 15),
      },
      {
        id: '2',
        sender: 'store',
        text: 'Hello Michael! Yes, we do ship to Miami. Shipping is a flat rate of $12, or free for orders over $100.',
        time: new Date(2023, 9, 16, 10, 30),
      },
      {
        id: '3',
        sender: 'user',
        text: 'Great! And how long does shipping usually take?',
        time: new Date(2023, 9, 16, 10, 33),
      },
    ],
  },
  {
    id: '3',
    customer: {
      id: '3',
      name: 'Jennifer Lopez',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      lastActive: 'Yesterday',
      status: 'offline',
      joined: 'January 2023',
      orders: 7,
    },
    unread: 1,
    status: 'closed',
    product: {
      id: '12',
      name: 'Vintage Silk Scarf',
      image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    messages: [
      {
        id: '1',
        sender: 'user',
        text: 'Hi, I received my silk scarf yesterday and it\'s absolutely beautiful! Thank you so much!',
        time: new Date(2023, 9, 12, 14, 45),
      },
      {
        id: '2',
        sender: 'store',
        text: 'You\'re welcome, Jennifer! We\'re so glad you like it. Would you mind leaving a review on our store page?',
        time: new Date(2023, 9, 12, 15, 10),
      },
      {
        id: '3',
        sender: 'user',
        text: 'Of course! I\'ll do that right now.',
        time: new Date(2023, 9, 12, 15, 15),
      },
      {
        id: '4',
        sender: 'store',
        text: 'Thank you so much! By the way, we just got some new silk scarves in different patterns if you\'re interested.',
        time: new Date(2023, 9, 12, 15, 20),
      },
    ],
  },
];

// Quick replies for retailers
const quickReplies = [
  "Thanks for your message! How can I help you today?",
  "Yes, we have that item in stock and ready for pickup.",
  "This item is available in the following colors: black, brown, and tan.",
  "We're located at Booth #24 in Market Square. Our hours are 10am-6pm Monday-Saturday.",
  "We can hold this item for you for up to 48 hours.",
  "Would you like to reserve this item for in-store pickup?",
  "We offer a 30-day return policy on all unused items with original receipt.",
  "Thank you for your purchase! We appreciate your business."
];

export default function RetailerMessagesPage() {
  // For demo purposes, show the first conversation
  const activeConversation = conversations[0];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex">
        <RetailerDashboardSidebar />

        <div className="flex-1 flex flex-col">
          <header className="py-4 px-6 border-b bg-white">
            <h1 className="text-2xl font-bold">Customer Messages</h1>
            <p className="text-muted-foreground">
              Communicate directly with your customers
            </p>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Conversations List */}
            <div className="w-80 border-r bg-white overflow-y-auto">
              <div className="p-4">
                <Tabs defaultValue="all">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
                    <TabsTrigger value="closed" className="flex-1">Closed</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-2">
                    {conversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                          conversation.id === activeConversation.id
                            ? 'bg-orange-50'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="relative">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={conversation.customer.image}
                              alt={conversation.customer.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {conversation.customer.status === 'online' && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                          )}
                          {conversation.unread > 0 && (
                            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                              {conversation.unread}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">
                              {conversation.customer.name}
                            </h3>
                            <span className="text-xs text-gray-500">
                              {formatDistanceToNow(
                                conversation.messages[conversation.messages.length - 1].time,
                                { addSuffix: true }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="truncate">{conversation.product.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="unread" className="space-y-2">
                    {conversations.filter(c => c.unread > 0).map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <div className="relative">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={conversation.customer.image}
                              alt={conversation.customer.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {conversation.unread > 0 && (
                            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                              {conversation.unread}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">
                              {conversation.customer.name}
                            </h3>
                            <span className="text-xs text-gray-500">
                              {formatDistanceToNow(
                                conversation.messages[conversation.messages.length - 1].time,
                                { addSuffix: true }
                              )}
                            </span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="truncate">{conversation.product.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="closed" className="space-y-2">
                    {conversations.filter(c => c.status === 'closed').map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <div className="relative">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={conversation.customer.image}
                              alt={conversation.customer.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">
                              {conversation.customer.name}
                            </h3>
                            <Badge variant="outline" className="text-xs">Closed</Badge>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="truncate">{conversation.product.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {activeConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="bg-white border-b p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={activeConversation.customer.image}
                          alt={activeConversation.customer.name}
                          fill
                          className="object-cover"
                        />
                        {activeConversation.customer.status === 'online' && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{activeConversation.customer.name}</h3>
                        <p className="text-xs text-gray-500">
                          Customer since {activeConversation.customer.joined} • {activeConversation.customer.orders} orders
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <Button size="icon" variant="ghost">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/retailer/customers/${activeConversation.customer.id}`}>
                          <UserCircle className="h-4 w-4 mr-1" />
                          View Profile
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-b p-3 flex items-center">
                    <div className="relative h-10 w-10 mr-3 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={activeConversation.product.image}
                        alt={activeConversation.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <span className="text-sm font-medium truncate">
                          Discussing: {activeConversation.product.name}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="ml-auto">
                      View Product <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    <div className="space-y-4">
                      {activeConversation.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === 'store' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === 'store'
                                ? 'bg-orange-500 text-white'
                                : 'bg-white border'
                            }`}
                          >
                            <p>{message.text}</p>
                            <div
                              className={`text-xs mt-1 ${
                                message.sender === 'store'
                                  ? 'text-orange-100'
                                  : 'text-gray-500'
                              }`}
                            >
                              {format(message.time, 'h:mm a')}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Replies */}
                  <div className="bg-white border-t p-2 overflow-x-auto">
                    <div className="flex space-x-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full whitespace-nowrap"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="bg-white border-t p-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        className="flex-1"
                      />
                      <Button>
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <h3 className="font-medium">No conversation selected</h3>
                    <p className="text-gray-500 mt-1">
                      Select a conversation from the sidebar to start chatting
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
