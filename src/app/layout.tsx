import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "H Counselling | Online Therapy with Harriet Frank",
    template: "%s | H Counselling",
  },
  description:
    "Person-centred counselling online and by telephone. A safe, warm space to talk, at your pace. BACP accredited. Book a free 15-minute consultation.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "online therapy",
    "counselling",
    "person-centred therapy",
    "BACP accredited",
    "anxiety",
    "depression",
    "young adults therapy",
    "online counselling UK",
    "telephone therapy",
  ],
  openGraph: {
    title: "H Counselling | Online Therapy with Harriet Frank",
    description:
      "Person-centred counselling online and by telephone. A safe, warm space to talk, at your pace.",
    type: "website",
    locale: "en_GB",
    siteName: "H Counselling",
  },
  twitter: {
    card: "summary_large_image",
    title: "H Counselling | Online Therapy with Harriet Frank",
    description:
      "Person-centred counselling online and by telephone. A safe, warm space to talk, at your pace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "H Counselling",
              description:
                "BACP-accredited person-centred counselling online and by telephone. A safe, warm space to talk, at your pace.",
              provider: {
                "@type": "Person",
                name: "Harriet Frank",
              },
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
              serviceType: "Counselling",
              url: "https://hcounselling.com",
              email: "hcounselling@outlook.com",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "BACP Accredited",
              },
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-terracotta focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
