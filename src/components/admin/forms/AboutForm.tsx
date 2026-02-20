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

export default function AboutForm({ config, onChange }: FormProps) {
  const about = config.about;

  // --- Hero ---
  const updateHero = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        hero: { ...prev.about.hero, [field]: value },
      },
    }));
  };

  // --- Story ---
  const updateStory = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        story: { ...prev.about.story, [field]: value },
      },
    }));
  };

  const updateStoryParagraph = (index: number, value: string) => {
    onChange((prev) => {
      const paragraphs = [...prev.about.story.paragraphs];
      paragraphs[index] = value;
      return {
        ...prev,
        about: {
          ...prev.about,
          story: { ...prev.about.story, paragraphs },
        },
      };
    });
  };

  const addStoryParagraph = () => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        story: {
          ...prev.about.story,
          paragraphs: [...prev.about.story.paragraphs, ""],
        },
      },
    }));
  };

  const removeStoryParagraph = (index: number) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        story: {
          ...prev.about.story,
          paragraphs: prev.about.story.paragraphs.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- Approach ---
  const updateApproach = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        approach: { ...prev.about.approach, [field]: value },
      },
    }));
  };

  const updateApproachParagraph = (index: number, value: string) => {
    onChange((prev) => {
      const paragraphs = [...prev.about.approach.paragraphs];
      paragraphs[index] = value;
      return {
        ...prev,
        about: {
          ...prev.about,
          approach: { ...prev.about.approach, paragraphs },
        },
      };
    });
  };

  const addApproachParagraph = () => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        approach: {
          ...prev.about.approach,
          paragraphs: [...prev.about.approach.paragraphs, ""],
        },
      },
    }));
  };

  const removeApproachParagraph = (index: number) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        approach: {
          ...prev.about.approach,
          paragraphs: prev.about.approach.paragraphs.filter(
            (_, i) => i !== index
          ),
        },
      },
    }));
  };

  // --- Qualifications ---
  const updateQualifications = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        qualifications: { ...prev.about.qualifications, [field]: value },
      },
    }));
  };

  const updateQualificationItem = (index: number, value: string) => {
    onChange((prev) => {
      const items = [...prev.about.qualifications.items];
      items[index] = value;
      return {
        ...prev,
        about: {
          ...prev.about,
          qualifications: { ...prev.about.qualifications, items },
        },
      };
    });
  };

  const addQualification = () => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        qualifications: {
          ...prev.about.qualifications,
          items: [...prev.about.qualifications.items, ""],
        },
      },
    }));
  };

  const removeQualification = (index: number) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        qualifications: {
          ...prev.about.qualifications,
          items: prev.about.qualifications.items.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- CTA ---
  const updateCta = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        cta: { ...prev.about.cta, [field]: value },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <Card>
        <CardHeader>
          <CardTitle>About Hero</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={about.hero.heading}
              onChange={(e) => updateHero("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Subtitle</Label>
            <Input
              value={about.hero.subtitle}
              onChange={(e) => updateHero("subtitle", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Story */}
      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={about.story.label}
              onChange={(e) => updateStory("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={about.story.heading}
              onChange={(e) => updateStory("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Paragraphs</Label>
            {about.story.paragraphs.map((p, i) => (
              <div key={i} className="flex gap-2">
                <Textarea
                  value={p}
                  onChange={(e) => updateStoryParagraph(i, e.target.value)}
                  rows={3}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeStoryParagraph(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addStoryParagraph}>
              <Plus className="mr-1 h-4 w-4" />
              Add Paragraph
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Approach */}
      <Card>
        <CardHeader>
          <CardTitle>My Approach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={about.approach.label}
              onChange={(e) => updateApproach("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={about.approach.heading}
              onChange={(e) => updateApproach("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Paragraphs</Label>
            {about.approach.paragraphs.map((p, i) => (
              <div key={i} className="flex gap-2">
                <Textarea
                  value={p}
                  onChange={(e) => updateApproachParagraph(i, e.target.value)}
                  rows={3}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeApproachParagraph(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addApproachParagraph}>
              <Plus className="mr-1 h-4 w-4" />
              Add Paragraph
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Illustration</Label>
              <Input
                value={about.approach.illustration}
                onChange={(e) =>
                  updateApproach("illustration", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Illustration Alt</Label>
              <Input
                value={about.approach.illustrationAlt}
                onChange={(e) =>
                  updateApproach("illustrationAlt", e.target.value)
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Qualifications */}
      <Card>
        <CardHeader>
          <CardTitle>Qualifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={about.qualifications.label}
              onChange={(e) =>
                updateQualifications("label", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={about.qualifications.heading}
              onChange={(e) =>
                updateQualifications("heading", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Items</Label>
            {about.qualifications.items.map((item, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  value={item}
                  onChange={(e) =>
                    updateQualificationItem(i, e.target.value)
                  }
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeQualification(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addQualification}>
              <Plus className="mr-1 h-4 w-4" />
              Add Qualification
            </Button>
          </div>
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
              value={about.cta.heading}
              onChange={(e) => updateCta("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={about.cta.description}
              onChange={(e) => updateCta("description", e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Button Text</Label>
              <Input
                value={about.cta.buttonText}
                onChange={(e) => updateCta("buttonText", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Button Href</Label>
              <Input
                value={about.cta.buttonHref}
                onChange={(e) => updateCta("buttonHref", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
