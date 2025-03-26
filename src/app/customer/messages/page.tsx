import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { format, formatDistanceToNow } from 'date-fns';
import { Phone, Send, Store, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomerDashboardSidebar from '@/components/customer/DashboardSidebar';

export const metadata: Metadata = {
  title: 'Messages | Marketplace Connect',
  description: 'Direct message with store owners in our marketplace',
};

// Mock data - in a real app, this would come from the database
const conversations = [
  {
    id: '1',
    store: {
      id: '1',
      name: 'Fashion Boulevard',
      image: 'https://images.unsplash.com/photo-1551159675-1f8a8f4822fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      lastActive: '2 hours ago',
      unread: 3,
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
    store: {
      id: '2',
      name: 'Tech Haven',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      lastActive: '5 min ago',
      unread: 0,
    },
    messages: [
      {
        id: '1',
        sender: 'user',
        text: 'Hello, do you offer device repairs as well as selling products?',
        time: new Date(2023, 9, 10, 11, 15),
      },
      {
        id: '2',
        sender: 'store',
        text: 'Hi! Yes, we do offer repair services for smartphones, tablets, and laptops. What device do you need help with?',
        time: new Date(2023, 9, 10, 11, 20),
      },
      {
        id: '3',
        sender: 'user',
        text: 'Great! I have an iPhone with a cracked screen. Do you know roughly how much it would cost to repair?',
        time: new Date(2023, 9, 10, 11, 23),
      },
      {
        id: '4',
        sender: 'store',
        text: 'For iPhone screen repairs, it depends on the model. Could you let me know which iPhone model you have?',
        time: new Date(2023, 9, 10, 11, 25),
      },
      {
        id: '5',
        sender: 'user',
        text: 'It\'s an iPhone 13 Pro',
        time: new Date(2023, 9, 10, 11, 26),
      },
      {
        id: '6',
        sender: 'store',
        text: 'For an iPhone 13 Pro screen replacement, it would be $229. We also offer a 90-day warranty on all repairs. Would you like to schedule an appointment?',
        time: new Date(2023, 9, 10, 11, 30),
      },
    ],
  },
  {
    id: '3',
    store: {
      id: '3',
      name: 'Home Essentials',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      lastActive: 'Yesterday',
      unread: 1,
    },
    messages: [
      {
        id: '1',
        sender: 'user',
        text: 'Hi, I saw your bamboo dinnerware set online. Do you have it in stock?',
        time: new Date(2023, 9, 8, 16, 45),
      },
      {
        id: '2',
        sender: 'store',
        text: 'Hello! Yes, we currently have 3 sets in stock. Would you like us to hold one for you?',
        time: new Date(2023, 9, 8, 16, 50),
      },
      {
        id: '3',
        sender: 'store',
        text: 'We also have matching serving utensils if you\'re interested!',
        time: new Date(2023, 9, 9, 10, 15),
      },
    ],
  },
];

export default function MessagesPage() {
  // For demo purposes, show the first conversation
  const activeConversation = conversations[0];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex">
        <CustomerDashboardSidebar />

        <div className="flex-1 flex flex-col">
          <header className="py-4 px-6 border-b bg-white">
            <h1 className="text-2xl font-bold">Messages</h1>
            <p className="text-muted-foreground">
              Direct messages with store owners
            </p>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Conversations List */}
            <div className="w-80 border-r bg-white overflow-y-auto">
              <div className="p-4">
                <h2 className="font-semibold mb-4">Recent Conversations</h2>
                <div className="space-y-2">
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
                            src={conversation.store.image}
                            alt={conversation.store.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {conversation.store.unread > 0 && (
                          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                            {conversation.store.unread}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium truncate">
                            {conversation.store.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {formatDistanceToNow(
                              conversation.messages[conversation.messages.length - 1].time,
                              { addSuffix: true }
                            )}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {
                            conversation.messages[conversation.messages.length - 1]
                              .text
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col">
              {activeConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="bg-white border-b p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={activeConversation.store.image}
                          alt={activeConversation.store.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{activeConversation.store.name}</h3>
                        <p className="text-xs text-gray-500">
                          Last active: {activeConversation.store.lastActive}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="icon" variant="ghost">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/stores/${activeConversation.store.id}`}>
                          <Store className="h-4 w-4 mr-1" />
                          View Store
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    <div className="space-y-4">
                      {activeConversation.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === 'user'
                                ? 'bg-orange-500 text-white'
                                : 'bg-white border'
                            }`}
                          >
                            <p>{message.text}</p>
                            <div
                              className={`text-xs mt-1 ${
                                message.sender === 'user'
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
