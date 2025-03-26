import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomerDashboardSidebar from "@/components/customer/DashboardSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { auth } from "@/lib/auth";

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Mock authentication for static site
  const isAuthenticated = true;
  const userRole = "CUSTOMER";

  // In a real app, we would use server-side authentication
  // const session = await auth();
  // if (!session || session.user.role !== "CUSTOMER") {
  //   redirect("/login");
  // }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex">
        <CustomerDashboardSidebar />
        <div className="flex-1 p-6">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
