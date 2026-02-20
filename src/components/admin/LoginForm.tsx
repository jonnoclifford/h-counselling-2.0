"use client";

import { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/admin/ui/button";

const ERROR_MESSAGES: Record<string, string> = {
  unauthorized:
    "Your GitHub account is not authorized to access this dashboard. Contact the site administrator.",
  server_error:
    "An unexpected error occurred during authentication. Please try again.",
  invalid_callback:
    "The authentication callback was invalid or expired. Please try signing in again.",
};

interface LoginFormProps {
  error?: string;
  redirectTo?: string;
}

export default function LoginForm({ error, redirectTo }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const errorMessage = error ? ERROR_MESSAGES[error] ?? error : null;

  function handleLogin() {
    setIsLoading(true);
    const params = new URLSearchParams();
    if (redirectTo) {
      params.set("redirect", redirectTo);
    }
    const query = params.toString();
    window.location.href = `/api/auth/github${query ? `?${query}` : ""}`;
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      {errorMessage && (
        <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <p className="mb-6 text-center text-sm text-slate-600">
        Sign in with your GitHub account to manage site content.
      </p>

      <Button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full"
        size="lg"
      >
        <Github className="size-5" />
        {isLoading ? "Redirecting..." : "Sign in with GitHub"}
      </Button>

      <p className="mt-4 text-center text-xs text-slate-400">
        Only authorized GitHub accounts can access the admin area.
      </p>
    </div>
  );
}
