"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkStatus = () => {
      const hasConsented = localStorage.getItem("aashya_legal_cookies_consented");
      const hasAcceptedDisclaimer = sessionStorage.getItem("aashya_legal_disclaimer_accepted");

      if (!hasConsented && hasAcceptedDisclaimer) {
        setShowBanner(true);
      }
    };

    checkStatus();

    window.addEventListener("disclaimer_accepted", checkStatus);
    return () => window.removeEventListener("disclaimer_accepted", checkStatus);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aashya_legal_cookies_consented", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("aashya_legal_cookies_consented", "essential_only");
    setShowBanner(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-40 bg-ink/95 text-ivory backdrop-blur-md border-t border-bronze/30 shadow-2xl py-4 px-4 md:px-8"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start md:items-center gap-3">
              <div className="p-2 bg-bronze/10 rounded-full text-bronze shrink-0 mt-0.5 md:mt-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs md:text-sm text-ivory/80 font-light leading-relaxed">
                We use cookies to improve website functionality and understand user engagement. Please review our{" "}
                <Link
                  href="/privacy"
                  className="text-bronze underline underline-offset-4 hover:text-ivory font-medium transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/cookie"
                  className="text-bronze underline underline-offset-4 hover:text-ivory font-medium transition-colors"
                >
                  Cookie Policy
                </Link>{" "}
                for full details.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
              <button
                type="button"
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-medium text-ivory/70 hover:text-ivory uppercase tracking-wider transition-colors cursor-pointer"
              >
                Essential Only
              </button>
              <Button
                onClick={handleAccept}
                className="bg-bronze hover:bg-bronze/90 text-ivory rounded-none text-xs uppercase tracking-wider font-medium px-5 py-2 cursor-pointer shadow-sm"
              >
                Accept Cookies
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
