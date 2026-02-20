"use client";

import { useState, useEffect } from "react";
import type { SiteConfig } from "@/types/content";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { Button } from "@/components/admin/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/admin/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/admin/ui/alert-dialog";
import { Plus, Trash2, RotateCcw, Loader2, ExternalLink } from "lucide-react";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

interface Commit {
  sha: string;
  message: string;
  author: string;
  date: string;
  htmlUrl: string;
  avatarUrl?: string;
}

export default function SettingsForm({ config, onChange }: FormProps) {
  const nav = config.navigation;
  const footer = config.footer;

  // --- Version History State ---
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [reverting, setReverting] = useState<string | null>(null);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setLoadingHistory(true);
    try {
      const res = await fetch("/api/admin/history?limit=20");
      if (res.ok) {
        const data = await res.json();
        setCommits(data.commits || []);
      }
    } catch (err) {
      console.error("Failed to load history:", err);
    } finally {
      setLoadingHistory(false);
    }
  };

  const handleRevert = async (sha: string) => {
    setReverting(sha);
    try {
      const res = await fetch("/api/admin/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sha }),
      });
      if (res.ok) {
        window.location.reload();
      }
    } catch (err) {
      console.error("Failed to revert:", err);
    } finally {
      setReverting(null);
    }
  };

  // --- Navigation ---
  const updateNavLink = (index: number, field: "label" | "href", value: string) => {
    onChange((prev) => {
      const links = [...prev.navigation.links];
      links[index] = { ...links[index], [field]: value };
      return {
        ...prev,
        navigation: { ...prev.navigation, links },
      };
    });
  };

  const addNavLink = () => {
    onChange((prev) => ({
      ...prev,
      navigation: {
        ...prev.navigation,
        links: [...prev.navigation.links, { label: "", href: "" }],
      },
    }));
  };

  const removeNavLink = (index: number) => {
    onChange((prev) => ({
      ...prev,
      navigation: {
        ...prev.navigation,
        links: prev.navigation.links.filter((_, i) => i !== index),
      },
    }));
  };

  const updateNavCta = (field: "ctaText" | "ctaHref", value: string) => {
    onChange((prev) => ({
      ...prev,
      navigation: { ...prev.navigation, [field]: value },
    }));
  };

  // --- Footer ---
  const updateFooter = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      footer: { ...prev.footer, [field]: value },
    }));
  };

  const updateFooterLink = (index: number, field: "label" | "href", value: string) => {
    onChange((prev) => {
      const links = [...prev.footer.links];
      links[index] = { ...links[index], [field]: value };
      return {
        ...prev,
        footer: { ...prev.footer, links },
      };
    });
  };

  const addFooterLink = () => {
    onChange((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        links: [...prev.footer.links, { label: "", href: "" }],
      },
    }));
  };

  const removeFooterLink = (index: number) => {
    onChange((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        links: prev.footer.links.filter((_, i) => i !== index),
      },
    }));
  };

  const updateCredential = (index: number, value: string) => {
    onChange((prev) => {
      const credentials = [...prev.footer.credentials];
      credentials[index] = value;
      return {
        ...prev,
        footer: { ...prev.footer, credentials },
      };
    });
  };

  const addCredential = () => {
    onChange((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        credentials: [...prev.footer.credentials, ""],
      },
    }));
  };

  const removeCredential = (index: number) => {
    onChange((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        credentials: prev.footer.credentials.filter((_, i) => i !== index),
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Navigation Links</Label>
            {nav.links.map((link, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  placeholder="Label"
                  value={link.label}
                  onChange={(e) => updateNavLink(i, "label", e.target.value)}
                />
                <Input
                  placeholder="Href"
                  value={link.href}
                  onChange={(e) => updateNavLink(i, "href", e.target.value)}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeNavLink(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addNavLink}>
              <Plus className="mr-1 h-4 w-4" />
              Add Link
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>CTA Button Text</Label>
              <Input
                value={nav.ctaText}
                onChange={(e) => updateNavCta("ctaText", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>CTA Button Href</Label>
              <Input
                value={nav.ctaHref}
                onChange={(e) => updateNavCta("ctaHref", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card>
        <CardHeader>
          <CardTitle>Footer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Tagline</Label>
            <Input
              value={footer.tagline}
              onChange={(e) => updateFooter("tagline", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={footer.email}
                onChange={(e) => updateFooter("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Session Price</Label>
              <Input
                value={footer.sessionPrice}
                onChange={(e) => updateFooter("sessionPrice", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Credentials</Label>
            {footer.credentials.map((cred, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  value={cred}
                  onChange={(e) => updateCredential(i, e.target.value)}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeCredential(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addCredential}>
              <Plus className="mr-1 h-4 w-4" />
              Add Credential
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Footer Links</Label>
            {footer.links.map((link, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  placeholder="Label"
                  value={link.label}
                  onChange={(e) => updateFooterLink(i, "label", e.target.value)}
                />
                <Input
                  placeholder="Href"
                  value={link.href}
                  onChange={(e) => updateFooterLink(i, "href", e.target.value)}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFooterLink(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addFooterLink}>
              <Plus className="mr-1 h-4 w-4" />
              Add Link
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Version History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Version History</CardTitle>
            <Button variant="outline" size="sm" onClick={loadHistory} disabled={loadingHistory}>
              {loadingHistory ? (
                <Loader2 className="mr-1 h-4 w-4 animate-spin" />
              ) : (
                <RotateCcw className="mr-1 h-4 w-4" />
              )}
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loadingHistory && commits.length === 0 ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
              <span className="ml-2 text-sm text-slate-500">Loading history...</span>
            </div>
          ) : commits.length === 0 ? (
            <p className="py-4 text-center text-sm text-slate-500">
              No version history available.
            </p>
          ) : (
            <div className="space-y-2">
              {commits.map((commit) => (
                <div
                  key={commit.sha}
                  className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-slate-900">
                      {commit.message.split("\n")[0]}
                    </div>
                    <div className="text-xs text-slate-500">
                      {commit.author} &middot;{" "}
                      {new Date(commit.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    {commit.htmlUrl && (
                      <a
                        href={commit.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" disabled={reverting !== null}>
                          {reverting === commit.sha ? (
                            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                          ) : (
                            <RotateCcw className="mr-1 h-3 w-3" />
                          )}
                          Revert
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Revert to this version?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This will revert the site configuration to the state at commit{" "}
                            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                              {commit.sha.slice(0, 7)}
                            </code>
                            . A new commit will be created with the reverted content. This cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleRevert(commit.sha)}>
                            Revert
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
