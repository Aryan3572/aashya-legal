"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/offices", label: "Our Offices" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex flex-col z-50">
          <span className="font-heading text-2xl font-bold tracking-tight text-ink">
            AASHYA LEGAL
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.2em] text-bronze uppercase">
            Advocates & Consultants
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-bronze relative group",
                pathname === link.href ? "text-bronze" : "text-ink/80"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-full h-[1px] bg-bronze transition-transform origin-left",
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </Link>
          ))}
          <Button asChild className="bg-ink hover:bg-ink/90 text-ivory rounded-none px-6">
            <Link href="/contact">BOOK A CONSULTATION</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 -mr-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-ivory z-40 lg:hidden flex flex-col justify-center px-8 transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-heading text-2xl transition-colors",
                pathname === link.href ? "text-bronze" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8 flex justify-center">
            <Button asChild className="bg-ink hover:bg-ink/90 text-ivory rounded-none w-full max-w-sm h-12 text-base">
              <Link href="/contact">BOOK A CONSULTATION</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
