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
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

export default function FAQForm({ config, onChange }: FormProps) {
  const faq = config.faq;
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // --- Hero ---
  const updateHero = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        hero: { ...prev.faq.hero, [field]: value },
      },
    }));
  };

  // --- FAQ Items ---
  const updateFAQItem = (index: number, field: "question" | "answer", value: string) => {
    onChange((prev) => {
      const items = [...prev.faq.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        faq: { ...prev.faq, items },
      };
    });
  };

  const addFAQItem = () => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        items: [...prev.faq.items, { question: "", answer: "" }],
      },
    }));
    setExpandedItem(faq.items.length);
  };

  const removeFAQItem = (index: number) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        items: prev.faq.items.filter((_, i) => i !== index),
      },
    }));
    setExpandedItem(null);
  };

  // --- Pricing ---
  const updatePricing = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        pricing: { ...prev.faq.pricing, [field]: value },
      },
    }));
  };

  const updateConsultation = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        pricing: {
          ...prev.faq.pricing,
          consultation: { ...prev.faq.pricing.consultation, [field]: value },
        },
      },
    }));
  };

  const updateSession = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        pricing: {
          ...prev.faq.pricing,
          session: { ...prev.faq.pricing.session, [field]: value },
        },
      },
    }));
  };

  // --- Logistics ---
  const updateLogistics = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        logistics: { ...prev.faq.logistics, [field]: value },
      },
    }));
  };

  const updateLogisticsItem = (index: number, field: "heading" | "description", value: string) => {
    onChange((prev) => {
      const items = [...prev.faq.logistics.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        faq: {
          ...prev.faq,
          logistics: { ...prev.faq.logistics, items },
        },
      };
    });
  };

  const addLogisticsItem = () => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        logistics: {
          ...prev.faq.logistics,
          items: [...prev.faq.logistics.items, { heading: "", description: "" }],
        },
      },
    }));
  };

  const removeLogisticsItem = (index: number) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        logistics: {
          ...prev.faq.logistics,
          items: prev.faq.logistics.items.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- CTA ---
  const updateCta = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      faq: {
        ...prev.faq,
        cta: { ...prev.faq.cta, [field]: value },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card>
        <CardHeader>
          <CardTitle>FAQ Hero</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={faq.hero.label}
              onChange={(e) => updateHero("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={faq.hero.heading}
              onChange={(e) => updateHero("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={faq.hero.description}
              onChange={(e) => updateHero("description", e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* FAQ Items */}
      <Card>
        <CardHeader>
          <CardTitle>FAQ Items ({faq.items.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {faq.items.map((item, i) => (
            <div key={i} className="rounded-lg border border-slate-200">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setExpandedItem(expandedItem === i ? null : i)}
              >
                <span className="truncate pr-4">
                  {item.question || `FAQ item ${i + 1}`}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-7 w-7"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFAQItem(i);
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                  {expandedItem === i ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </div>
              </button>
              {expandedItem === i && (
                <div className="space-y-4 border-t border-slate-200 px-4 py-4">
                  <div className="space-y-2">
                    <Label>Question</Label>
                    <Input
                      value={item.question}
                      onChange={(e) => updateFAQItem(i, "question", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Answer</Label>
                    <Textarea
                      value={item.answer}
                      onChange={(e) => updateFAQItem(i, "answer", e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={addFAQItem}>
            <Plus className="mr-1 h-4 w-4" />
            Add FAQ Item
          </Button>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card>
        <CardHeader>
          <CardTitle>Pricing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Label</Label>
              <Input
                value={faq.pricing.label}
                onChange={(e) => updatePricing("label", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Heading</Label>
              <Input
                value={faq.pricing.heading}
                onChange={(e) => updatePricing("heading", e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 space-y-4">
            <h4 className="text-sm font-semibold text-slate-700">Consultation</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price</Label>
                <Input
                  value={faq.pricing.consultation.price}
                  onChange={(e) => updateConsultation("price", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  value={faq.pricing.consultation.description}
                  onChange={(e) => updateConsultation("description", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Details</Label>
              <Textarea
                value={faq.pricing.consultation.details}
                onChange={(e) => updateConsultation("details", e.target.value)}
                rows={2}
              />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 space-y-4">
            <h4 className="text-sm font-semibold text-slate-700">Session</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Price</Label>
                <Input
                  value={faq.pricing.session.price}
                  onChange={(e) => updateSession("price", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  value={faq.pricing.session.description}
                  onChange={(e) => updateSession("description", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Badge</Label>
                <Input
                  value={faq.pricing.session.badge}
                  onChange={(e) => updateSession("badge", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Details</Label>
              <Textarea
                value={faq.pricing.session.details}
                onChange={(e) => updateSession("details", e.target.value)}
                rows={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logistics */}
      <Card>
        <CardHeader>
          <CardTitle>Logistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Label</Label>
              <Input
                value={faq.logistics.label}
                onChange={(e) => updateLogistics("label", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Heading</Label>
              <Input
                value={faq.logistics.heading}
                onChange={(e) => updateLogistics("heading", e.target.value)}
              />
            </div>
          </div>
          {faq.logistics.items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <div className="flex-1 space-y-2">
                <Input
                  placeholder="Heading"
                  value={item.heading}
                  onChange={(e) => updateLogisticsItem(i, "heading", e.target.value)}
                />
                <Textarea
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) => updateLogisticsItem(i, "description", e.target.value)}
                  rows={2}
                />
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeLogisticsItem(i)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={addLogisticsItem}>
            <Plus className="mr-1 h-4 w-4" />
            Add Logistics Item
          </Button>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card>
        <CardHeader>
          <CardTitle>Call to Action</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={faq.cta.heading}
              onChange={(e) => updateCta("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={faq.cta.description}
              onChange={(e) => updateCta("description", e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Button Text</Label>
              <Input
                value={faq.cta.buttonText}
                onChange={(e) => updateCta("buttonText", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Button Href</Label>
              <Input
                value={faq.cta.buttonHref}
                onChange={(e) => updateCta("buttonHref", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
