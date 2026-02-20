import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
