"use client";

import type { SiteConfig } from "@/types/content";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/admin/ui/card";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

export default function HomepageHeroForm({ config, onChange }: FormProps) {
  const hero = config.homepage.hero;

  const updateHero = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        hero: {
          ...prev.homepage.hero,
          [field]: value,
        },
      },
    }));
  };

  const updateCta = (
    ctaKey: "primaryCta" | "secondaryCta",
    field: "text" | "href",
    value: string
  ) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        hero: {
          ...prev.homepage.hero,
          [ctaKey]: {
            ...prev.homepage.hero[ctaKey],
            [field]: value,
          },
        },
      },
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Homepage Hero</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hero-label">Label</Label>
          <Input
            id="hero-label"
            value={hero.label}
            onChange={(e) => updateHero("label", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hero-heading">Heading</Label>
          <Input
            id="hero-heading"
            value={hero.heading}
            onChange={(e) => updateHero("heading", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hero-subheading">Subheading</Label>
          <Input
            id="hero-subheading"
            value={hero.subheading}
            onChange={(e) => updateHero("subheading", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hero-primary-text">Primary CTA Text</Label>
            <Input
              id="hero-primary-text"
              value={hero.primaryCta.text}
              onChange={(e) => updateCta("primaryCta", "text", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hero-primary-href">Primary CTA Href</Label>
            <Input
              id="hero-primary-href"
              value={hero.primaryCta.href}
              onChange={(e) => updateCta("primaryCta", "href", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hero-secondary-text">Secondary CTA Text</Label>
            <Input
              id="hero-secondary-text"
              value={hero.secondaryCta.text}
              onChange={(e) =>
                updateCta("secondaryCta", "text", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hero-secondary-href">Secondary CTA Href</Label>
            <Input
              id="hero-secondary-href"
              value={hero.secondaryCta.href}
              onChange={(e) =>
                updateCta("secondaryCta", "href", e.target.value)
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hero-illustration">Illustration Filename</Label>
            <Input
              id="hero-illustration"
              value={hero.illustration}
              onChange={(e) => updateHero("illustration", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hero-illustration-alt">Illustration Alt Text</Label>
            <Input
              id="hero-illustration-alt"
              value={hero.illustrationAlt}
              onChange={(e) => updateHero("illustrationAlt", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
