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

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Automatically close mobile menu if resized to desktop screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
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
            className="lg:hidden p-2 -mr-2 text-ink hover:text-bronze transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer: Outside <header> so backdrop-blur-md never breaks its containing block */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden bg-ivory flex flex-col transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-ink/10 bg-ivory">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex flex-col"
          >
            <span className="font-heading text-2xl font-bold tracking-tight text-ink">
              AASHYA LEGAL
            </span>
            <span className="text-[0.6rem] font-medium tracking-[0.2em] text-bronze uppercase">
              Advocates & Consultants
            </span>
          </Link>

          <button
            className="p-2 -mr-2 text-ink hover:text-bronze transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Menu Links & Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <nav className="flex flex-col space-y-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-heading text-2xl tracking-tight transition-colors py-1 flex items-center justify-between group",
                  pathname === link.href ? "text-bronze font-semibold" : "text-ink hover:text-bronze"
                )}
              >
                <span>{link.label}</span>
                <span
                  className={cn(
                    "text-sm font-sans tracking-widest text-bronze transition-transform",
                    pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                >
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom Actions and Firm Info */}
          <div className="pt-8 mt-6 border-t border-ink/10 flex flex-col space-y-6">
            <Button
              asChild
              className="bg-ink hover:bg-ink/90 text-ivory rounded-none w-full h-12 text-sm uppercase tracking-wider font-medium"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                BOOK A CONSULTATION
              </Link>
            </Button>

            <div className="text-center text-xs text-ink/60 space-y-1">
              <p className="font-medium text-ink/80">Delhi • Ranchi • Kerala • Patna</p>
              <p>aashyalegal@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

