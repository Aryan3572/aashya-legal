import Link from "next/link";
import { GraduationCap, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Careers & Internships | Aashya Legal",
  description: "Join Aashya Legal. We are always looking for exceptional talent to join our team of legal professionals across India.",
};

export default function CareersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6">Careers at Aashya Legal</h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              We are committed to fostering a culture of excellence, integrity, and continuous learning. Build your legal career with us.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Associates */}
            <div className="bg-white p-10 border border-ink/10 shadow-sm">
              <div className="bg-stone-brand/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-bronze" />
              </div>
              <h2 className="font-heading text-3xl font-medium text-ink mb-4">Associates & Lateral Hires</h2>
              <p className="text-ink/70 font-light leading-relaxed mb-8">
                We are always open to engaging with exceptional talent. If you possess a strong academic record, intellectual curiosity, and a commitment to excellence, we invite you to explore opportunities with us.
              </p>
              <div className="space-y-4">
                <h3 className="font-medium text-ink">Application Process</h3>
                <p className="text-sm text-ink/70 font-light mb-6">
                  Please send your updated resume along with a cover letter detailing your practice area of interest and relevant experience.
                </p>
                <Button asChild className="w-full bg-ink hover:bg-ink/90 text-ivory rounded-none">
                  <Link href="mailto:careers@aashyalegal.com?subject=Application for Associate Position">APPLY NOW</Link>
                </Button>
              </div>
            </div>

            {/* Internships */}
            <div className="bg-white p-10 border border-ink/10 shadow-sm">
              <div className="bg-stone-brand/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-bronze" />
              </div>
              <h2 className="font-heading text-3xl font-medium text-ink mb-4">Internship Programme</h2>
              <p className="text-ink/70 font-light leading-relaxed mb-8">
                Our internship programme is designed to provide law students with practical exposure to complex legal matters and the workings of a full-service law firm.
              </p>
              <div className="space-y-4">
                <h3 className="font-medium text-ink">Application Process</h3>
                <p className="text-sm text-ink/70 font-light mb-6">
                  Students in their 3rd year (3-year program) or 4th/5th year (5-year program) are eligible. Apply at least 2 months in advance.
                </p>
                <Button asChild className="w-full bg-ink hover:bg-ink/90 text-ivory rounded-none">
                  <Link href="mailto:internships@aashyalegal.com?subject=Application for Internship">APPLY FOR INTERNSHIP</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* General Enquiry */}
      <section className="py-24 bg-stone-brand/20 border-t border-stone-brand/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <Mail className="w-12 h-12 text-bronze mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-medium text-ink mb-6">General Enquiries</h2>
          <p className="text-ink/80 text-lg font-light leading-relaxed mb-2">
            For any other career-related queries, please write to us at:
          </p>
          <a href="mailto:careers@aashyalegal.com" className="text-xl font-medium text-bronze hover:text-ink transition-colors">
            careers@aashyalegal.com
          </a>
        </div>
      </section>
    </>
  );
}
