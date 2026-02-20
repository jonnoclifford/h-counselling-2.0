"use client";

import type { SiteConfig } from "@/types/content";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { Textarea } from "@/components/admin/ui/textarea";
import { Button } from "@/components/admin/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/admin/ui/card";
import { Plus, Trash2 } from "lucide-react";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

export default function AdminContactForm({ config, onChange }: FormProps) {
  const contact = config.contact;

  // --- Hero ---
  const updateHero = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        hero: { ...prev.contact.hero, [field]: value },
      },
    }));
  };

  // --- Top-level fields ---
  const updateContact = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  // --- What Happens Next ---
  const updateWhatHappensNext = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        whatHappensNext: { ...prev.contact.whatHappensNext, [field]: value },
      },
    }));
  };

  const updateStep = (index: number, value: string) => {
    onChange((prev) => {
      const steps = [...prev.contact.whatHappensNext.steps];
      steps[index] = value;
      return {
        ...prev,
        contact: {
          ...prev.contact,
          whatHappensNext: { ...prev.contact.whatHappensNext, steps },
        },
      };
    });
  };

  const addStep = () => {
    onChange((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        whatHappensNext: {
          ...prev.contact.whatHappensNext,
          steps: [...prev.contact.whatHappensNext.steps, ""],
        },
      },
    }));
  };

  const removeStep = (index: number) => {
    onChange((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        whatHappensNext: {
          ...prev.contact.whatHappensNext,
          steps: prev.contact.whatHappensNext.steps.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- Book Directly ---
  const updateBookDirectly = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        bookDirectly: { ...prev.contact.bookDirectly, [field]: value },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Hero</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={contact.hero.label}
              onChange={(e) => updateHero("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={contact.hero.heading}
              onChange={(e) => updateHero("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={contact.hero.description}
              onChange={(e) => updateHero("description", e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Email Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Email Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input
                value={contact.email}
                onChange={(e) => updateContact("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Response Time</Label>
              <Input
                value={contact.emailResponseTime}
                onChange={(e) => updateContact("emailResponseTime", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Happens Next */}
      <Card>
        <CardHeader>
          <CardTitle>What Happens Next</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={contact.whatHappensNext.heading}
              onChange={(e) => updateWhatHappensNext("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Steps</Label>
            {contact.whatHappensNext.steps.map((step, i) => (
              <div key={i} className="flex gap-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-100 text-sm font-medium text-slate-600">
                  {i + 1}
                </div>
                <Input
                  value={step}
                  onChange={(e) => updateStep(i, e.target.value)}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeStep(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addStep}>
              <Plus className="mr-1 h-4 w-4" />
              Add Step
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Book Directly */}
      <Card>
        <CardHeader>
          <CardTitle>Book Directly</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={contact.bookDirectly.heading}
              onChange={(e) => updateBookDirectly("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={contact.bookDirectly.description}
              onChange={(e) => updateBookDirectly("description", e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
