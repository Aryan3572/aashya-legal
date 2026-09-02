import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { practiceAreas, practiceCategories } from "@/data/practice-areas";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Practice Areas | Aashya Legal",
  description: "Explore the comprehensive legal practice areas offered by Aashya Legal, spanning Corporate, Litigation, IP, Tech, Real Estate, and more.",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6">Our Practice Areas</h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              Comprehensive and strategic legal solutions tailored to meet the diverse needs of modern businesses, institutions, and individuals across India.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          {practiceCategories.map((category) => {
            const categoryPractices = practiceAreas.filter((p) => p.category === category);
            
            return (
              <div key={category} className="mb-20 last:mb-0">
                <div className="flex items-center mb-10">
                  <h2 className="font-heading text-3xl font-medium text-ink mr-6">{category}</h2>
                  <div className="h-[1px] bg-ink/10 flex-grow" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPractices.map((practice) => (
                    <Link key={practice.slug} href={`/practice-areas/${practice.slug}`} className="block group h-full">
                      <div className="bg-white p-8 h-full border border-ink/10 group-hover:border-bronze transition-colors flex flex-col shadow-sm">
                        <h3 className="font-heading text-xl text-ink mb-4 group-hover:text-bronze transition-colors">
                          {practice.title}
                        </h3>
                        <p className="text-ink/70 font-light leading-relaxed mb-8 flex-grow text-sm">
                          {practice.description}
                        </p>
                        <div className="flex items-center text-sm font-medium text-ink group-hover:text-bronze transition-colors mt-auto">
                          Learn More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-brand/30 border-t border-stone-brand/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-4xl font-medium text-ink mb-6">Need tailored legal advice?</h2>
          <p className="text-ink/70 text-lg font-light leading-relaxed mb-10">
            Our team of legal professionals is ready to assist you with specialized counsel.
          </p>
          <Button asChild size="lg" className="bg-ink hover:bg-ink/90 text-ivory rounded-none h-14 px-10">
            <Link href="/contact">CONTACT US</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
