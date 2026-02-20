"use client";

import type {
  SiteConfig,
  StatementConfig,
  ServiceItem,
  ProcessStep,
  Testimonial,
} from "@/types/content";
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
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/admin/ui/select";
import { Plus, Trash2 } from "lucide-react";

interface FormProps {
  config: SiteConfig;
  onChange: (updater: (prev: SiteConfig) => SiteConfig) => void;
}

export default function HomepageSectionsForm({ config, onChange }: FormProps) {
  const homepage = config.homepage;

  // --- Marquee ---
  const updateMarquee = (text: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        marquee: { text },
      },
    }));
  };

  // --- Introduction ---
  const updateIntroduction = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        introduction: {
          ...prev.homepage.introduction,
          [field]: value,
        },
      },
    }));
  };

  const updateIntroParagraph = (index: number, value: string) => {
    onChange((prev) => {
      const paragraphs = [...prev.homepage.introduction.paragraphs];
      paragraphs[index] = value;
      return {
        ...prev,
        homepage: {
          ...prev.homepage,
          introduction: {
            ...prev.homepage.introduction,
            paragraphs,
          },
        },
      };
    });
  };

  const addIntroParagraph = () => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        introduction: {
          ...prev.homepage.introduction,
          paragraphs: [...prev.homepage.introduction.paragraphs, ""],
        },
      },
    }));
  };

  const removeIntroParagraph = (index: number) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        introduction: {
          ...prev.homepage.introduction,
          paragraphs: prev.homepage.introduction.paragraphs.filter(
            (_, i) => i !== index
          ),
        },
      },
    }));
  };

  // --- Statements ---
  const updateStatement = (
    index: number,
    field: keyof StatementConfig,
    value: string
  ) => {
    onChange((prev) => {
      const statements = [...prev.homepage.statements] as [
        StatementConfig,
        StatementConfig,
        StatementConfig,
      ];
      statements[index] = { ...statements[index], [field]: value };
      return {
        ...prev,
        homepage: { ...prev.homepage, statements },
      };
    });
  };

  // --- Services ---
  const updateServicesField = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        services: {
          ...prev.homepage.services,
          [field]: value,
        },
      },
    }));
  };

  const updateServiceItem = (
    index: number,
    field: keyof ServiceItem,
    value: string
  ) => {
    onChange((prev) => {
      const items = [...prev.homepage.services.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        homepage: {
          ...prev.homepage,
          services: { ...prev.homepage.services, items },
        },
      };
    });
  };

  const addServiceItem = () => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        services: {
          ...prev.homepage.services,
          items: [
            ...prev.homepage.services.items,
            { title: "", description: "", illustration: "", bgColor: "" },
          ],
        },
      },
    }));
  };

  const removeServiceItem = (index: number) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        services: {
          ...prev.homepage.services,
          items: prev.homepage.services.items.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- Process ---
  const updateProcessField = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        process: {
          ...prev.homepage.process,
          [field]: value,
        },
      },
    }));
  };

  const updateProcessStep = (
    index: number,
    field: keyof ProcessStep,
    value: string
  ) => {
    onChange((prev) => {
      const steps = [...prev.homepage.process.steps];
      steps[index] = { ...steps[index], [field]: value };
      return {
        ...prev,
        homepage: {
          ...prev.homepage,
          process: { ...prev.homepage.process, steps },
        },
      };
    });
  };

  const addProcessStep = () => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        process: {
          ...prev.homepage.process,
          steps: [
            ...prev.homepage.process.steps,
            { number: "", title: "", description: "" },
          ],
        },
      },
    }));
  };

  const removeProcessStep = (index: number) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        process: {
          ...prev.homepage.process,
          steps: prev.homepage.process.steps.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- Testimonials ---
  const updateTestimonialsField = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        testimonials: {
          ...prev.homepage.testimonials,
          [field]: value,
        },
      },
    }));
  };

  const updateTestimonial = (
    index: number,
    field: keyof Testimonial,
    value: string
  ) => {
    onChange((prev) => {
      const items = [...prev.homepage.testimonials.items];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        homepage: {
          ...prev.homepage,
          testimonials: { ...prev.homepage.testimonials, items },
        },
      };
    });
  };

  const addTestimonial = () => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        testimonials: {
          ...prev.homepage.testimonials,
          items: [
            ...prev.homepage.testimonials.items,
            { quote: "", author: "" },
          ],
        },
      },
    }));
  };

  const removeTestimonial = (index: number) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        testimonials: {
          ...prev.homepage.testimonials,
          items: prev.homepage.testimonials.items.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // --- CTA ---
  const updateCta = (field: string, value: string) => {
    onChange((prev) => ({
      ...prev,
      homepage: {
        ...prev.homepage,
        cta: {
          ...prev.homepage.cta,
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Marquee */}
      <Card>
        <CardHeader>
          <CardTitle>Marquee</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="marquee-text">Marquee Text</Label>
            <Input
              id="marquee-text"
              value={homepage.marquee.text}
              onChange={(e) => updateMarquee(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="intro-label">Label</Label>
            <Input
              id="intro-label"
              value={homepage.introduction.label}
              onChange={(e) => updateIntroduction("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="intro-heading">Heading</Label>
            <Input
              id="intro-heading"
              value={homepage.introduction.heading}
              onChange={(e) => updateIntroduction("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Paragraphs</Label>
            {homepage.introduction.paragraphs.map((p, i) => (
              <div key={i} className="flex gap-2">
                <Textarea
                  value={p}
                  onChange={(e) => updateIntroParagraph(i, e.target.value)}
                  rows={3}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeIntroParagraph(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addIntroParagraph}>
              <Plus className="mr-1 h-4 w-4" />
              Add Paragraph
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="intro-btn-text">Button Text</Label>
              <Input
                id="intro-btn-text"
                value={homepage.introduction.buttonText}
                onChange={(e) =>
                  updateIntroduction("buttonText", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intro-btn-href">Button Href</Label>
              <Input
                id="intro-btn-href"
                value={homepage.introduction.buttonHref}
                onChange={(e) =>
                  updateIntroduction("buttonHref", e.target.value)
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="intro-image">Image</Label>
              <Input
                id="intro-image"
                value={homepage.introduction.image}
                onChange={(e) => updateIntroduction("image", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intro-image-alt">Image Alt</Label>
              <Input
                id="intro-image-alt"
                value={homepage.introduction.imageAlt}
                onChange={(e) => updateIntroduction("imageAlt", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statements */}
      <Card>
        <CardHeader>
          <CardTitle>Statements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {homepage.statements.map((statement, i) => (
            <div key={i} className="space-y-3 rounded-md border p-4">
              <h4 className="text-sm font-semibold text-slate-700">
                Statement {i + 1}
              </h4>
              <div className="space-y-2">
                <Label>Text</Label>
                <Input
                  value={statement.text}
                  onChange={(e) => updateStatement(i, "text", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input
                  value={statement.subtitle || ""}
                  onChange={(e) =>
                    updateStatement(i, "subtitle", e.target.value)
                  }
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Background</Label>
                  <Select
                    value={statement.bg}
                    onValueChange={(val) => updateStatement(i, "bg", val)}
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
                  <Label>Shadow</Label>
                  <Select
                    value={statement.shadow}
                    onValueChange={(val) => updateStatement(i, "shadow", val)}
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
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={homepage.services.label}
              onChange={(e) => updateServicesField("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={homepage.services.heading}
              onChange={(e) => updateServicesField("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={homepage.services.description}
              onChange={(e) =>
                updateServicesField("description", e.target.value)
              }
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <Label>Service Items</Label>
            {homepage.services.items.map((item, i) => (
              <div key={i} className="space-y-3 rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-700">
                    Service {i + 1}
                  </h4>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeServiceItem(i)}
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Remove
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={item.title}
                      onChange={(e) =>
                        updateServiceItem(i, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Illustration</Label>
                    <Input
                      value={item.illustration}
                      onChange={(e) =>
                        updateServiceItem(i, "illustration", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={item.description}
                    onChange={(e) =>
                      updateServiceItem(i, "description", e.target.value)
                    }
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Background Color</Label>
                  <Input
                    value={item.bgColor}
                    onChange={(e) =>
                      updateServiceItem(i, "bgColor", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addServiceItem}>
              <Plus className="mr-1 h-4 w-4" />
              Add Service
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Process */}
      <Card>
        <CardHeader>
          <CardTitle>Process Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={homepage.process.label}
              onChange={(e) => updateProcessField("label", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={homepage.process.heading}
              onChange={(e) => updateProcessField("heading", e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <Label>Steps</Label>
            {homepage.process.steps.map((step, i) => (
              <div key={i} className="space-y-3 rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-700">
                    Step {i + 1}
                  </h4>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeProcessStep(i)}
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Remove
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Number</Label>
                    <Input
                      value={step.number}
                      onChange={(e) =>
                        updateProcessStep(i, "number", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={step.title}
                      onChange={(e) =>
                        updateProcessStep(i, "title", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={step.description}
                    onChange={(e) =>
                      updateProcessStep(i, "description", e.target.value)
                    }
                    rows={2}
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addProcessStep}>
              <Plus className="mr-1 h-4 w-4" />
              Add Step
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle>Testimonials</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Label</Label>
            <Input
              value={homepage.testimonials.label}
              onChange={(e) =>
                updateTestimonialsField("label", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={homepage.testimonials.heading}
              onChange={(e) =>
                updateTestimonialsField("heading", e.target.value)
              }
            />
          </div>

          <div className="space-y-4">
            <Label>Testimonial Items</Label>
            {homepage.testimonials.items.map((item, i) => (
              <div key={i} className="space-y-3 rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-700">
                    Testimonial {i + 1}
                  </h4>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeTestimonial(i)}
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Remove
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Quote</Label>
                  <Textarea
                    value={item.quote}
                    onChange={(e) =>
                      updateTestimonial(i, "quote", e.target.value)
                    }
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Author</Label>
                  <Input
                    value={item.author}
                    onChange={(e) =>
                      updateTestimonial(i, "author", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addTestimonial}>
              <Plus className="mr-1 h-4 w-4" />
              Add Testimonial
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card>
        <CardHeader>
          <CardTitle>Call to Action</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Heading</Label>
            <Input
              value={homepage.cta.heading}
              onChange={(e) => updateCta("heading", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={homepage.cta.description}
              onChange={(e) => updateCta("description", e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Button Text</Label>
              <Input
                value={homepage.cta.buttonText}
                onChange={(e) => updateCta("buttonText", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Button Href</Label>
              <Input
                value={homepage.cta.buttonHref}
                onChange={(e) => updateCta("buttonHref", e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email Text</Label>
              <Input
                value={homepage.cta.emailText}
                onChange={(e) => updateCta("emailText", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={homepage.cta.email}
                onChange={(e) => updateCta("email", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
