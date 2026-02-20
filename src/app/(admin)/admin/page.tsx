import { redirect } from "next/navigation";
import { isAuthenticated, getCurrentUser } from "@/lib/auth";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }
  const user = await getCurrentUser();
  return <AdminDashboard user={user} />;
}
