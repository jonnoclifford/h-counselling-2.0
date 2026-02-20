import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-terracotta focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
