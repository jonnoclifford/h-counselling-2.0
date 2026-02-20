import type { MetadataRoute } from "next";
import { HELP_TOPIC_PAGES, CITY_PAGES } from "@/lib/constants";

const BASE_URL = "https://hcounselling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const helpTopicPages: MetadataRoute.Sitemap = HELP_TOPIC_PAGES.map(
    (topic) => ({
      url: `${BASE_URL}/help-with/${topic.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const cityPages: MetadataRoute.Sitemap = CITY_PAGES.map((city) => ({
    url: `${BASE_URL}/online-therapy-in/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...mainPages, ...helpTopicPages, ...cityPages];
}
