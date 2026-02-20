import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-terracotta text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-3xl text-white hover:text-oat transition-colors"
            >
              H Counselling
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
              Person-centred counselling online and by telephone.
              <br />
              A safe space to talk, at your pace.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Credentials Column */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">
              Get In Touch
            </h4>
            <a
              href="mailto:hcounselling@outlook.com"
              className="text-white/80 hover:text-white transition-colors text-sm block mb-6"
            >
              hcounselling@outlook.com
            </a>

            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-white/90 mb-3">
              Credentials
            </h4>
            <p className="text-white/70 text-xs leading-relaxed">
              BACP Accredited Member (MBACP)
              <br />
              Membership No. 407181
            </p>
          </div>
        </div>

        {/* Divider & Bottom */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} H Counselling. All rights
            reserved.
          </p>
          <p className="text-white/60 text-xs">
            Sessions from <span className="text-white/80 font-semibold">&pound;50</span> per
            50-minute session
          </p>
        </div>
      </div>
    </footer>
  );
}
