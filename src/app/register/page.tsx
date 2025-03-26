import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">
              Choose your account type to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="customer" className="mt-4">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="customer">Customer</TabsTrigger>
                <TabsTrigger value="retailer">Retailer</TabsTrigger>
              </TabsList>

              <TabsContent value="customer" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-name">Full Name</Label>
                  <Input id="customer-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-email">Email</Label>
                  <Input id="customer-email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-password">Password</Label>
                  <Input id="customer-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-confirm-password">Confirm Password</Label>
                  <Input id="customer-confirm-password" type="password" />
                </div>
                <Button className="w-full">Create Customer Account</Button>
              </TabsContent>

              <TabsContent value="retailer" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="retailer-name">Full Name</Label>
                  <Input id="retailer-name" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Your Store" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retailer-email">Email</Label>
                  <Input id="retailer-email" type="email" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retailer-password">Password</Label>
                  <Input id="retailer-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="retailer-confirm-password">Confirm Password</Label>
                  <Input id="retailer-confirm-password" type="password" />
                </div>
                <Button className="w-full">Create Retailer Account</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">Already have an account?</span>{" "}
              <Link href="/login" className="text-sm text-orange-600 hover:text-orange-500 font-medium">
                Sign in
              </Link>
            </div>
            <div className="text-xs text-center text-gray-500 mt-4">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
