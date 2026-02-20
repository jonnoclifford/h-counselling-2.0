"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terracotta/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-24 md:h-28">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-5xl md:text-6xl text-white tracking-tight hover:text-oat transition-colors"
          style={{ textShadow: "1.5px 1.5px 0px #C7BADA" }}
        >
          H Counselling
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors text-[15px] font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="sm" variant="secondary" className="!bg-lilac !text-white hover:!bg-lilac-dark">
            Book a Free Chat
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-terracotta border-t border-white/20 overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-semibold py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contact"
                size="md"
                className="mt-2 w-full text-center !bg-lilac !text-white hover:!bg-lilac-dark"
                variant="secondary"
              >
                Book a Free Chat
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
