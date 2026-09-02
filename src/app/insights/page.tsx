import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Insights | Aashya Legal",
  description: "Read the latest legal insights, regulatory updates, and analysis from Aashya Legal.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6">Insights & Analysis</h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              Editorial perspectives, regulatory updates, and legal analysis on the evolving Indian jurisprudence.
            </p>
          </div>
        </div>
      </section>

      {/* Insights List */}
      <section className="py-24 bg-ivory min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="block group h-full">
                <article className="bg-white p-8 border border-ink/10 h-full flex flex-col hover:border-bronze transition-colors shadow-sm">
                  <div className="flex items-center text-xs text-ink/50 mb-4 space-x-4">
                    <span className="font-medium text-bronze uppercase tracking-wider">{insight.category}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  
                  <h2 className="font-heading text-2xl font-medium text-ink mb-4 group-hover:text-bronze transition-colors leading-snug">
                    {insight.title}
                  </h2>
                  
                  <p className="text-ink/70 font-light leading-relaxed mb-8 flex-grow">
                    {insight.summary}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-ink/5">
                    <span className="flex items-center text-xs text-ink/60">
                      <User className="w-3 h-3 mr-1" /> {insight.author}
                    </span>
                    <span className="flex items-center text-sm font-medium text-ink group-hover:text-bronze transition-colors">
                      Read <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          {insights.length === 0 && (
            <div className="text-center py-20 text-ink/50 font-light">
              No insights published yet. Please check back later.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
