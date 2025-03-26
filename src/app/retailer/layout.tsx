import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import RetailerDashboardSidebar from "@/components/retailer/DashboardSidebar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function RetailerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock authentication for static site
  const isAuthenticated = true;
  const userRole = "RETAILER";

  // In a real app, we would use server-side authentication
  // const session = await auth();
  // if (!session || session.user.role !== "RETAILER") {
  //   redirect("/login");
  // }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex">
        <div className="hidden md:block w-64 overflow-y-auto">
          <RetailerDashboardSidebar />
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
