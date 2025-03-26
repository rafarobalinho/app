"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, ChevronDown, LogOut, User, Settings } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Instead of fetching from the server, use static data
  const isAuthenticated = false;
  const userRole = null; // or 'CUSTOMER' or 'RETAILER' if you want to demo those states

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulated logout for static demo
  const handleLogout = () => {
    // Do nothing for static export
  };

  // Hard-coded categories for the demo
  const categories = [
    { name: "Women's Fashion", href: "/categories/womens-fashion" },
    { name: "Men's Fashion", href: "/categories/mens-fashion" },
    { name: "Home Goods", href: "/categories/home-goods" },
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Accessories", href: "/categories/accessories" },
    { name: "Toys", href: "/categories/toys" },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full ${isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-md"} transition-all duration-200`} suppressHydrationWarning>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl bg-orange-500 text-white p-1 rounded-md">MC</span>
            <span className="font-semibold hidden md:inline-block">Marketplace Connect</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {category.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/stores" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Stores
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/promotions" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Promotions
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-4">
                  <Link
                    href="/categories"
                    className="flex items-center justify-between text-base font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Categories
                    <ChevronDown className="h-4 w-4" />
                  </Link>

                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="text-sm hover:text-orange-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/products"
                    className="flex items-center justify-between text-base font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>

                  <Link
                    href="/stores"
                    className="flex items-center justify-between text-base font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Stores
                  </Link>

                  <Link
                    href="/promotions"
                    className="flex items-center justify-between text-base font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Promotions
                  </Link>
                </div>

                <div className="border-t pt-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={""} />
                          <AvatarFallback>
                            {"U"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">User Name</p>
                          <p className="text-xs text-gray-500">user@example.com</p>
                        </div>
                      </div>

                      {userRole === "CUSTOMER" && (
                        <>
                          <Link
                            href="/customer/dashboard"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex w-full items-center rounded-md p-2 hover:bg-accent transition-colors text-sm"
                          >
                            <User className="mr-2 h-4 w-4" />
                            Dashboard
                          </Link>
                          <Link
                            href="/customer/wishlist"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex w-full items-center rounded-md p-2 hover:bg-accent transition-colors text-sm"
                          >
                            <User className="mr-2 h-4 w-4" />
                            Wishlist
                          </Link>
                        </>
                      )}

                      {userRole === "RETAILER" && (
                        <Link
                          href="/retailer/dashboard"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex w-full items-center rounded-md p-2 hover:bg-accent transition-colors text-sm"
                        >
                          <User className="mr-2 h-4 w-4" />
                          Retailer Dashboard
                        </Link>
                      )}

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center rounded-md p-2 hover:bg-accent transition-colors text-sm"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button className="w-full" size="sm" asChild>
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                      </Button>
                      <Button variant="outline" className="w-full" size="sm" asChild>
                        <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>Create Account</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={""} />
                    <AvatarFallback>
                      {"U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {"User Name" && (
                        <p className="font-medium">User Name</p>
                      )}
                      {"user@example.com" && (
                        <p className="text-xs text-gray-500">user@example.com</p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />

                  {userRole === "CUSTOMER" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/customer/dashboard">My Dashboard</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/customer/wishlist">My Wishlist</Link>
                      </DropdownMenuItem>
                    </>
                  )}

                  {userRole === "RETAILER" && (
                    <DropdownMenuItem asChild>
                      <Link href="/retailer/dashboard">Retailer Dashboard</Link>
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem asChild>
                    <Link href="/account">Account Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Create Account</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
