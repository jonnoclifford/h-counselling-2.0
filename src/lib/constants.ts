/**
 * Re-exports types and provides helper functions for content lookups.
 * All content now lives in src/content/site-config.json.
 */

export type { HelpTopicPage, CityPage } from '@/types/content';

import { siteConfig } from '@/content/site-config';
import type { HelpTopicPage, CityPage } from '@/types/content';

export const HELP_TOPIC_PAGES: HelpTopicPage[] = siteConfig.helpTopics;
export const CITY_PAGES: CityPage[] = siteConfig.cityPages;

export function getHelpTopicBySlug(slug: string): HelpTopicPage | undefined {
  return HELP_TOPIC_PAGES.find((topic) => topic.slug === slug);
}

export function getCityBySlug(slug: string): CityPage | undefined {
  return CITY_PAGES.find((city) => city.slug === slug);
}

export const HELP_TOPIC_SLUG_MAP: Record<string, string> = Object.fromEntries(
  HELP_TOPIC_PAGES.map((topic) => [topic.title, topic.slug])
);
