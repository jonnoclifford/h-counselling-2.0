import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITY_PAGES, getCityBySlug } from "@/lib/constants";
import CityContent from "./CityContent";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return CITY_PAGES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getCityBySlug(city);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: `${page.title} | H Counselling`,
      description: page.metaDescription,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const page = getCityBySlug(city);
  if (!page) notFound();

  return <CityContent page={page} />;
}
