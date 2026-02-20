import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";
import LoginForm from "@/components/admin/LoginForm";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; redirect?: string }>;
}) {
  if (await isAuthenticated()) {
    redirect("/admin");
  }

  const params = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">H Counselling</h1>
          <p className="text-slate-500 mt-2">Admin Dashboard</p>
        </div>
        <LoginForm error={params.error} redirectTo={params.redirect} />
      </div>
    </div>
  );
}
