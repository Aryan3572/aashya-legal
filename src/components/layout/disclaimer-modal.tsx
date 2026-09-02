"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function DisclaimerModal() {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasAccepted = localStorage.getItem("aashya_legal_disclaimer_accepted");
    if (!hasAccepted) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("aashya_legal_disclaimer_accepted", "true");
    document.body.style.overflow = "auto";
    setShowModal(false);
  };

  const handleDecline = () => {
    // If they decline, we can redirect them away or just show a message.
    window.location.href = "https://www.google.com";
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-ivory max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-bronze/20"
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-medium text-ink mb-4">Disclaimer</h2>
                <div className="w-16 h-[1px] bg-bronze mx-auto" />
              </div>

              <div className="prose prose-sm md:prose-base max-w-none text-ink/80 font-light space-y-4 mb-10">
                <p>
                  The Bar Council of India does not permit solicitation of work and advertising by legal practitioners and advocates. By clicking on the <strong>"I Agree"</strong> button below, the user acknowledges and agrees to the following:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from AASHYA LEGAL or any of its members to solicit any work through this website.</li>
                  <li>The user wishes to gain more information about AASHYA LEGAL for his/her own information and use.</li>
                  <li>The information about the Firm is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition.</li>
                  <li>Any transmission, receipt or use of this site does not create any lawyer-client relationship.</li>
                  <li>The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement, and does not amount to legal advice.</li>
                  <li>AASHYA LEGAL is not liable for any consequence of any action taken by the user relying on material/information provided under this website.</li>
                </ul>
                <p>
                  If you have any legal issues, you must seek independent legal advice in all cases.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleAccept}
                  className="bg-bronze hover:bg-bronze/90 text-ivory rounded-none h-12 px-8 text-sm font-medium tracking-wide"
                >
                  I AGREE
                </Button>
                <Button 
                  onClick={handleDecline}
                  variant="outline"
                  className="border-ink text-ink hover:bg-ink/5 rounded-none h-12 px-8 text-sm font-medium tracking-wide"
                >
                  I DISAGREE
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
