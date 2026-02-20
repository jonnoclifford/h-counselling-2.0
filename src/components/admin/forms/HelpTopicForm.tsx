"use client";

import { useState } from "react";
import type { SiteConfig, HelpTopicPage } from "@/types/content";
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
import { Plus, Trash2, ChevronDown, ChevronRight, Search, ArrowLeft } from "lucide-react";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

const EMPTY_TOPIC: HelpTopicPage = {
  slug: "",
  title: "",
  metaDescription: "",
  heading: "",
  intro: "",
  sections: [{ heading: "", paragraphs: [""] }],
  ctaText: "",
  relatedSlugs: [],
  illustration: "",
  illustrationAlt: "",
  statementText: "",
  statementBg: "lilac",
  statementShadow: "orange",
};

export default function HelpTopicForm({ config, onChange }: FormProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const topics = config.helpTopics;
  const filtered = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.slug.toLowerCase().includes(search.toLowerCase())
  );

  const updateTopic = (index: number, updates: Partial<HelpTopicPage>) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      helpTopics[index] = { ...helpTopics[index], ...updates };
      return { ...prev, helpTopics };
    });
  };

  const addTopic = () => {
    onChange((prev) => ({
      ...prev,
      helpTopics: [...prev.helpTopics, { ...EMPTY_TOPIC }],
    }));
    setSelectedIndex(topics.length);
    setSearch("");
  };

  const removeTopic = (index: number) => {
    onChange((prev) => ({
      ...prev,
      helpTopics: prev.helpTopics.filter((_, i) => i !== index),
    }));
    setSelectedIndex(null);
  };

  // Section helpers
  const addSection = (topicIndex: number) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      helpTopics[topicIndex] = {
        ...helpTopics[topicIndex],
        sections: [...helpTopics[topicIndex].sections, { heading: "", paragraphs: [""] }],
      };
      return { ...prev, helpTopics };
    });
  };

  const removeSection = (topicIndex: number, sectionIndex: number) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      helpTopics[topicIndex] = {
        ...helpTopics[topicIndex],
        sections: helpTopics[topicIndex].sections.filter((_, i) => i !== sectionIndex),
      };
      return { ...prev, helpTopics };
    });
  };

  const updateSection = (topicIndex: number, sectionIndex: number, field: "heading", value: string) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      const sections = [...helpTopics[topicIndex].sections];
      sections[sectionIndex] = { ...sections[sectionIndex], [field]: value };
      helpTopics[topicIndex] = { ...helpTopics[topicIndex], sections };
      return { ...prev, helpTopics };
    });
  };

  const updateSectionParagraph = (topicIndex: number, sectionIndex: number, paraIndex: number, value: string) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      const sections = [...helpTopics[topicIndex].sections];
      const paragraphs = [...sections[sectionIndex].paragraphs];
      paragraphs[paraIndex] = value;
      sections[sectionIndex] = { ...sections[sectionIndex], paragraphs };
      helpTopics[topicIndex] = { ...helpTopics[topicIndex], sections };
      return { ...prev, helpTopics };
    });
  };

  const addSectionParagraph = (topicIndex: number, sectionIndex: number) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      const sections = [...helpTopics[topicIndex].sections];
      sections[sectionIndex] = {
        ...sections[sectionIndex],
        paragraphs: [...sections[sectionIndex].paragraphs, ""],
      };
      helpTopics[topicIndex] = { ...helpTopics[topicIndex], sections };
      return { ...prev, helpTopics };
    });
  };

  const removeSectionParagraph = (topicIndex: number, sectionIndex: number, paraIndex: number) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      const sections = [...helpTopics[topicIndex].sections];
      sections[sectionIndex] = {
        ...sections[sectionIndex],
        paragraphs: sections[sectionIndex].paragraphs.filter((_, i) => i !== paraIndex),
      };
      helpTopics[topicIndex] = { ...helpTopics[topicIndex], sections };
      return { ...prev, helpTopics };
    });
  };

  // Related slugs
  const addRelatedSlug = (topicIndex: number) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      helpTopics[topicIndex] = {
        ...helpTopics[topicIndex],
        relatedSlugs: [...helpTopics[topicIndex].relatedSlugs, ""],
      };
      return { ...prev, helpTopics };
    });
  };

  const updateRelatedSlug = (topicIndex: number, slugIndex: number, value: string) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      const relatedSlugs = [...helpTopics[topicIndex].relatedSlugs];
      relatedSlugs[slugIndex] = value;
      helpTopics[topicIndex] = { ...helpTopics[topicIndex], relatedSlugs };
      return { ...prev, helpTopics };
    });
  };

  const removeRelatedSlug = (topicIndex: number, slugIndex: number) => {
    onChange((prev) => {
      const helpTopics = [...prev.helpTopics];
      helpTopics[topicIndex] = {
        ...helpTopics[topicIndex],
        relatedSlugs: helpTopics[topicIndex].relatedSlugs.filter((_, i) => i !== slugIndex),
      };
      return { ...prev, helpTopics };
    });
  };

  // --- List View ---
  if (selectedIndex === null) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Help Topics ({topics.length})</CardTitle>
            <Button size="sm" onClick={addTopic}>
              <Plus className="mr-1 h-4 w-4" />
              Add Topic
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="space-y-1">
            {filtered.map((topic) => {
              const realIndex = topics.indexOf(topic);
              return (
                <button
                  key={realIndex}
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-left hover:bg-slate-50"
                  onClick={() => setSelectedIndex(realIndex)}
                >
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {topic.title || "Untitled"}
                    </div>
                    <div className="text-xs text-slate-500">/help-with/{topic.slug}</div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="py-4 text-center text-sm text-slate-500">No topics found.</p>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // --- Edit View ---
  const topic = topics[selectedIndex];
  if (!topic) {
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
          {topic.title || "New Help Topic"}
        </h3>
        <Button
          variant="destructive"
          size="sm"
          className="ml-auto"
          onClick={() => removeTopic(selectedIndex)}
        >
          <Trash2 className="mr-1 h-4 w-4" />
          Delete Topic
        </Button>
      </div>

      {/* Meta */}
      <Card>
        <CardHeader>
          <CardTitle>Page Meta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input
                value={topic.slug}
                onChange={(e) => updateTopic(selectedIndex, { slug: e.target.value })}
                placeholder="e.g. anxiety"
              />
            </div>
            <div className="space-y-2">
              <Label>Page Title</Label>
              <Input
                value={topic.title}
                onChange={(e) => updateTopic(selectedIndex, { title: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Meta Description</Label>
            <Textarea
              value={topic.metaDescription}
              onChange={(e) => updateTopic(selectedIndex, { metaDescription: e.target.value })}
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
              value={topic.heading}
              onChange={(e) => updateTopic(selectedIndex, { heading: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Intro</Label>
            <Textarea
              value={topic.intro}
              onChange={(e) => updateTopic(selectedIndex, { intro: e.target.value })}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label>CTA Text</Label>
            <Input
              value={topic.ctaText}
              onChange={(e) => updateTopic(selectedIndex, { ctaText: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Sections */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Sections ({topic.sections.length})</CardTitle>
            <Button variant="outline" size="sm" onClick={() => addSection(selectedIndex)}>
              <Plus className="mr-1 h-4 w-4" />
              Add Section
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {topic.sections.map((section, si) => (
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
                value={topic.illustration}
                onChange={(e) => updateTopic(selectedIndex, { illustration: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Illustration Alt</Label>
              <Input
                value={topic.illustrationAlt}
                onChange={(e) => updateTopic(selectedIndex, { illustrationAlt: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Statement Text</Label>
            <Input
              value={topic.statementText}
              onChange={(e) => updateTopic(selectedIndex, { statementText: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Statement Background</Label>
              <Select
                value={topic.statementBg}
                onValueChange={(value) => updateTopic(selectedIndex, { statementBg: value as "lilac" | "terracotta" })}
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
                value={topic.statementShadow}
                onValueChange={(value) => updateTopic(selectedIndex, { statementShadow: value as "orange" | "purple" })}
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

      {/* Related Topics */}
      <Card>
        <CardHeader>
          <CardTitle>Related Topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topic.relatedSlugs.map((slug, i) => (
            <div key={i} className="flex gap-2">
              <Select
                value={slug}
                onValueChange={(value) => updateRelatedSlug(selectedIndex, i, value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a topic..." />
                </SelectTrigger>
                <SelectContent>
                  {topics
                    .filter((t) => t.slug !== topic.slug)
                    .map((t) => (
                      <SelectItem key={t.slug} value={t.slug}>
                        {t.title}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeRelatedSlug(selectedIndex, i)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={() => addRelatedSlug(selectedIndex)}>
            <Plus className="mr-1 h-4 w-4" />
            Add Related Topic
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
