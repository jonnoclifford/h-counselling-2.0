"use client";

import { useState, useEffect, useCallback } from "react";
import type { SiteConfig } from "@/types/content";
import { Button } from "@/components/admin/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/admin/ui/tabs";
import { Save, LogOut, Loader2, Check, AlertCircle } from "lucide-react";

import HomepageHeroForm from "@/components/admin/forms/HomepageHeroForm";
import HomepageSectionsForm from "@/components/admin/forms/HomepageSectionsForm";
import AboutForm from "@/components/admin/forms/AboutForm";
import FAQForm from "@/components/admin/forms/FAQForm";
import AdminContactForm from "@/components/admin/forms/AdminContactForm";
import HelpTopicForm from "@/components/admin/forms/HelpTopicForm";
import CityPageForm from "@/components/admin/forms/CityPageForm";
import SettingsForm from "@/components/admin/forms/SettingsForm";

interface AdminDashboardProps {
  user: { login: string; name: string | null; avatar_url: string } | null;
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>("");

  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/api/admin/config");
        if (!res.ok) throw new Error("Failed to load config");
        const data = await res.json();
        setConfig(data);
      } catch (err) {
        console.error("Failed to load config:", err);
        setSaveStatus("error");
      } finally {
        setLoading(false);
      }
    }
    loadConfig();
  }, []);

  const handleChange = useCallback(
    (updater: (prev: SiteConfig) => SiteConfig) => {
      setConfig((prev) => {
        if (!prev) return prev;
        return updater(prev);
      });
      setSaveStatus("");
    },
    []
  );

  const handleSave = async () => {
    if (!config) return;
    setSaving(true);
    setSaveStatus("");
    try {
      const res = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (!res.ok) throw new Error("Failed to save");
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(""), 3000);
    } catch (err) {
      console.error("Failed to save config:", err);
      setSaveStatus("error");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        <span className="ml-2 text-slate-500">Loading configuration...</span>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <AlertCircle className="h-8 w-8 text-red-500" />
        <span className="ml-2 text-red-600">
          Failed to load configuration. Please refresh.
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold text-slate-900">
            H Counselling Admin
          </h1>

          <div className="flex items-center gap-4">
            {/* Save Status */}
            {saveStatus === "saved" && (
              <span className="flex items-center gap-1 text-sm text-green-600">
                <Check className="h-4 w-4" />
                Saved
              </span>
            )}
            {saveStatus === "error" && (
              <span className="flex items-center gap-1 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" />
                Error saving
              </span>
            )}

            {/* Save Button */}
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {saving ? "Saving..." : "Save Changes"}
            </Button>

            {/* User Info */}
            {user && (
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={user.avatar_url}
                  alt={user.name || user.login}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-sm text-slate-600">
                  {user.name || user.login}
                </span>
              </div>
            )}

            {/* Logout */}
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Tabs defaultValue="hero">
          <TabsList className="mb-6 flex w-full flex-wrap gap-1">
            <TabsTrigger value="hero">Homepage Hero</TabsTrigger>
            <TabsTrigger value="sections">Homepage Sections</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="faq">FAQ &amp; Pricing</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="topics">Help Topics</TabsTrigger>
            <TabsTrigger value="cities">City Pages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <HomepageHeroForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="sections">
            <HomepageSectionsForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="about">
            <AboutForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="faq">
            <FAQForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="contact">
            <AdminContactForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="topics">
            <HelpTopicForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="cities">
            <CityPageForm config={config} onChange={handleChange} />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsForm config={config} onChange={handleChange} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
