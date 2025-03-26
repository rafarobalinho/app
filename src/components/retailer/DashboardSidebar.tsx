"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Store,
  Package,
  Tag,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut
} from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

function NavItem({ href, icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
        active && "bg-orange-50 text-orange-600"
      )}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

export default function RetailerDashboardSidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  const navItems = [
    {
      href: "/retailer/dashboard",
      icon: <BarChart3 className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      href: "/retailer/stores",
      icon: <Store className="h-5 w-5" />,
      label: "My Stores",
    },
    {
      href: "/retailer/products",
      icon: <Package className="h-5 w-5" />,
      label: "Products",
    },
    {
      href: "/retailer/promotions",
      icon: <Tag className="h-5 w-5" />,
      label: "Promotions",
    },
    {
      href: "/retailer/collaborators",
      icon: <Users className="h-5 w-5" />,
      label: "Collaborators",
    },
    {
      href: "/retailer/messages",
      icon: <MessageSquare className="h-5 w-5" />,
      label: "Customer Messages",
    },
    {
      href: "/retailer/settings",
      icon: <Settings className="h-5 w-5" />,
      label: "Settings",
    },
  ];

  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-6">Retailer Dashboard</h2>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-500 hover:text-gray-900"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          <span className="text-sm font-medium">Log out</span>
        </Button>
      </div>
    </div>
  );
}
