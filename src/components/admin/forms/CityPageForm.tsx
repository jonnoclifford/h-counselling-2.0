"use client";

import { useState } from "react";
import type { SiteConfig, CityPage } from "@/types/content";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/admin/ui/select";
import { Plus, Trash2, ChevronRight, Search, ArrowLeft } from "lucide-react";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

const EMPTY_CITY: CityPage = {
  slug: "",
  city: "",
  title: "",
  metaDescription: "",
  heading: "",
  intro: "",
  sections: [{ heading: "", paragraphs: [""] }],
  ctaText: "",
  illustration: "",
  illustrationAlt: "",
  statementText: "",
  statementBg: "lilac",
  statementShadow: "orange",
};

export default function CityPageForm({ config, onChange }: FormProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const cities = config.cityPages;
  const filtered = cities.filter(
    (c) =>
      c.city.toLowerCase().includes(search.toLowerCase()) ||
      c.slug.toLowerCase().includes(search.toLowerCase())
  );

  const updateCity = (index: number, updates: Partial<CityPage>) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      cityPages[index] = { ...cityPages[index], ...updates };
      return { ...prev, cityPages };
    });
  };

  const addCity = () => {
    onChange((prev) => ({
      ...prev,
      cityPages: [...prev.cityPages, { ...EMPTY_CITY }],
    }));
    setSelectedIndex(cities.length);
    setSearch("");
  };

  const removeCity = (index: number) => {
    onChange((prev) => ({
      ...prev,
      cityPages: prev.cityPages.filter((_, i) => i !== index),
    }));
    setSelectedIndex(null);
  };

  // Section helpers
  const addSection = (cityIndex: number) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      cityPages[cityIndex] = {
        ...cityPages[cityIndex],
        sections: [...cityPages[cityIndex].sections, { heading: "", paragraphs: [""] }],
      };
      return { ...prev, cityPages };
    });
  };

  const removeSection = (cityIndex: number, sectionIndex: number) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      cityPages[cityIndex] = {
        ...cityPages[cityIndex],
        sections: cityPages[cityIndex].sections.filter((_, i) => i !== sectionIndex),
      };
      return { ...prev, cityPages };
    });
  };

  const updateSection = (cityIndex: number, sectionIndex: number, field: "heading", value: string) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      const sections = [...cityPages[cityIndex].sections];
      sections[sectionIndex] = { ...sections[sectionIndex], [field]: value };
      cityPages[cityIndex] = { ...cityPages[cityIndex], sections };
      return { ...prev, cityPages };
    });
  };

  const updateSectionParagraph = (cityIndex: number, sectionIndex: number, paraIndex: number, value: string) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      const sections = [...cityPages[cityIndex].sections];
      const paragraphs = [...sections[sectionIndex].paragraphs];
      paragraphs[paraIndex] = value;
      sections[sectionIndex] = { ...sections[sectionIndex], paragraphs };
      cityPages[cityIndex] = { ...cityPages[cityIndex], sections };
      return { ...prev, cityPages };
    });
  };

  const addSectionParagraph = (cityIndex: number, sectionIndex: number) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      const sections = [...cityPages[cityIndex].sections];
      sections[sectionIndex] = {
        ...sections[sectionIndex],
        paragraphs: [...sections[sectionIndex].paragraphs, ""],
      };
      cityPages[cityIndex] = { ...cityPages[cityIndex], sections };
      return { ...prev, cityPages };
    });
  };

  const removeSectionParagraph = (cityIndex: number, sectionIndex: number, paraIndex: number) => {
    onChange((prev) => {
      const cityPages = [...prev.cityPages];
      const sections = [...cityPages[cityIndex].sections];
      sections[sectionIndex] = {
        ...sections[sectionIndex],
        paragraphs: sections[sectionIndex].paragraphs.filter((_, i) => i !== paraIndex),
      };
      cityPages[cityIndex] = { ...cityPages[cityIndex], sections };
      return { ...prev, cityPages };
    });
  };

  // --- List View ---
  if (selectedIndex === null) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>City Pages ({cities.length})</CardTitle>
            <Button size="sm" onClick={addCity}>
              <Plus className="mr-1 h-4 w-4" />
              Add City
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="space-y-1">
            {filtered.map((city) => {
              const realIndex = cities.indexOf(city);
              return (
                <button
                  key={realIndex}
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-left hover:bg-slate-50"
                  onClick={() => setSelectedIndex(realIndex)}
                >
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {city.city || "Untitled"}
                    </div>
                    <div className="text-xs text-slate-500">/online-therapy-in/{city.slug}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="py-4 text-center text-sm text-slate-500">No cities found.</p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // --- Edit View ---
  const city = cities[selectedIndex];
  if (!city) {
    setSelectedIndex(null);
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => setSelectedIndex(null)}>
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to list
        </Button>
        <h3 className="text-lg font-semibold text-slate-900">
          {city.city || "New City Page"}
        </h3>
        <Button
          variant="destructive"
          size="sm"
          className="ml-auto"
          onClick={() => removeCity(selectedIndex)}
        >
          <Trash2 className="mr-1 h-4 w-4" />
          Delete City
        </Button>
      </div>

      {/* Meta */}
      <Card>
        <CardHeader>
          <CardTitle>Page Meta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>City Name</Label>
              <Input
                value={city.city}
                onChange={(e) => updateCity(selectedIndex, { city: e.target.value })}
                placeholder="e.g. London"
              />
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input
                value={city.slug}
                onChange={(e) => updateCity(selectedIndex, { slug: e.target.value })}
                placeholder="e.g. london"
              />
            </div>
            <div className="space-y-2">
              <Label>Page Title</Label>
              <Input
                value={city.title}
                onChange={(e) => updateCity(selectedIndex, { title: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Meta Description</Label>
            <Textarea
              value={city.metaDescription}
              onChange={(e) => updateCity(selectedIndex, { metaDescription: e.target.value })}
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={city.heading}
              onChange={(e) => updateCity(selectedIndex, { heading: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Intro</Label>
            <Textarea
              value={city.intro}
              onChange={(e) => updateCity(selectedIndex, { intro: e.target.value })}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label>CTA Text</Label>
            <Input
              value={city.ctaText}
              onChange={(e) => updateCity(selectedIndex, { ctaText: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Sections */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sections ({city.sections.length})</CardTitle>
            <Button variant="outline" size="sm" onClick={() => addSection(selectedIndex)}>
              <Plus className="mr-1 h-4 w-4" />
              Add Section
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {city.sections.map((section, si) => (
            <div key={si} className="rounded-lg border border-slate-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-600">Section {si + 1}</h4>
                <Button
                  variant="destructive"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => removeSection(selectedIndex, si)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-2">
                <Label>Heading</Label>
                <Input
                  value={section.heading}
                  onChange={(e) => updateSection(selectedIndex, si, "heading", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Paragraphs</Label>
                {section.paragraphs.map((p, pi) => (
                  <div key={pi} className="flex gap-2">
                    <Textarea
                      value={p}
                      onChange={(e) => updateSectionParagraph(selectedIndex, si, pi, e.target.value)}
                      rows={3}
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeSectionParagraph(selectedIndex, si, pi)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addSectionParagraph(selectedIndex, si)}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add Paragraph
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Illustration</Label>
              <Input
                value={city.illustration}
                onChange={(e) => updateCity(selectedIndex, { illustration: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Illustration Alt</Label>
              <Input
                value={city.illustrationAlt}
                onChange={(e) => updateCity(selectedIndex, { illustrationAlt: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Statement Text</Label>
            <Input
              value={city.statementText}
              onChange={(e) => updateCity(selectedIndex, { statementText: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Statement Background</Label>
              <Select
                value={city.statementBg}
                onValueChange={(value) => updateCity(selectedIndex, { statementBg: value as "lilac" | "terracotta" })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lilac">Lilac</SelectItem>
                  <SelectItem value="terracotta">Terracotta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Statement Shadow</Label>
              <Select
                value={city.statementShadow}
                onValueChange={(value) => updateCity(selectedIndex, { statementShadow: value as "orange" | "purple" })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
