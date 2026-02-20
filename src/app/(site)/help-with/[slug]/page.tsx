import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HELP_TOPIC_PAGES, getHelpTopicBySlug } from "@/lib/constants";
import HelpTopicContent from "./HelpTopicContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return HELP_TOPIC_PAGES.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getHelpTopicBySlug(slug);
  if (!topic) return {};

  return {
    title: `${topic.title} — Online Counselling`,
    description: topic.metaDescription,
    openGraph: {
      title: `${topic.title} — Online Counselling | H Counselling`,
      description: topic.metaDescription,
    },
  };
}

export default async function HelpTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getHelpTopicBySlug(slug);
  if (!topic) notFound();

  const relatedTopics = topic.relatedSlugs
    .map((s) => getHelpTopicBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return <HelpTopicContent topic={topic} relatedTopics={relatedTopics} />;
}
