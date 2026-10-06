import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { insights } from "@/data/insights";

export const metadata = {
  title: "Insights | Aashya Legal",
  description: "Read the latest legal insights, regulatory updates, and research papers from Aashya Legal.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-14 sm:pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium mb-4 sm:mb-6">Insights & Analysis</h1>
            <div className="w-20 h-[1px] bg-bronze mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              Editorial perspectives, regulatory updates, and scholarly research papers on evolving Indian jurisprudence and statutory frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Insights List */}
      <section className="py-14 sm:py-18 md:py-24 bg-ivory min-h-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="block group h-full">
                <article className="bg-white p-6 sm:p-8 border border-ink/10 h-full flex flex-col hover:border-bronze transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center text-xs text-ink/50 mb-3 sm:mb-4 gap-y-1 gap-x-3">
                    <span className="font-medium text-bronze uppercase tracking-wider">{insight.category}</span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 shrink-0 text-bronze/70" />
                      {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  
                  <h2 className="font-heading text-xl sm:text-2xl font-medium text-ink mb-3 sm:mb-4 group-hover:text-bronze transition-colors leading-snug break-words">
                    {insight.title}
                  </h2>
                  
                  <p className="text-ink/70 font-light leading-relaxed mb-6 sm:mb-8 flex-grow text-sm sm:text-base line-clamp-4">
                    {insight.summary}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-5 sm:pt-6 border-t border-ink/5 gap-3">
                    <div className="flex items-center text-xs text-ink/60 min-w-0 pr-2">
                      {insight.author && (
                        <span className="flex items-center truncate" title={insight.author}>
                          <User className="w-3.5 h-3.5 mr-1.5 shrink-0 text-bronze/70" />
                          <span className="truncate">{insight.author}</span>
                        </span>
                      )}
                    </div>
                    <span className="flex items-center text-sm font-medium text-ink group-hover:text-bronze transition-colors shrink-0">
                      Read <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
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
