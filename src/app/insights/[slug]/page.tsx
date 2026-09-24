import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, ChevronRight } from "lucide-react";
import { insights } from "@/data/insights";

const MEME_TO_COURTROOM_SLUG = "meme-to-courtroom-freedom-of-expression";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);
  
  if (!insight) {
    return {
      title: "Insight Not Found | Aashya Legal",
    };
  }

  if (insight.slug === MEME_TO_COURTROOM_SLUG) {
    return {
      title: `${insight.title} | Aashya Legal Insights`,
      description: "The internet has fundamentally changed the way people communicate.",
    };
  }

  return {
    title: `${insight.title} | Aashya Legal Insights`,
    description: insight.summary,
  };
}

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export default async function InsightDetail({ params }: Props) {
  const resolvedParams = await params;
  const insight = insights.find((i) => i.slug === resolvedParams.slug);
  const isMemeToCourtroom = insight?.slug === MEME_TO_COURTROOM_SLUG;

  if (!insight) {
    notFound();
  }

  const displayedAuthor = isMemeToCourtroom
    ? "Ayushi\nB.A.LL.B, 2nd Year\nArmy Law College, Pune"
    : insight.author;

  return (
    <>
      <article className="pt-24 pb-24">
        {/* Header */}
        <header className="bg-ivory py-16 md:py-24 border-b border-ink/10">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="flex items-center text-sm text-ink/60 mb-8 font-medium">
              <Link href="/insights" className="hover:text-ink transition-colors">
                Insights
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-bronze">{insight.category}</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-ink leading-tight mb-8">
              {insight.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-ink/60 gap-6">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              {displayedAuthor && (
                <span className={`flex ${isMemeToCourtroom ? "items-start" : "items-center"}`}>
                  <User className="w-4 h-4 mr-2" />
                  <span className={isMemeToCourtroom ? "whitespace-pre-line" : ""}>{displayedAuthor}</span>
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-4xl py-16">
          {insight.isPlaceholder && (
            <div className="bg-stone-brand/30 border border-stone-brand/50 p-4 mb-8 text-sm text-ink/70 rounded-sm">
              Note: The content below is a placeholder provided during website development. Actual legal articles will be updated by the firm.
            </div>
          )}
          
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-medium prose-a:text-bronze hover:prose-a:text-ink">
            {!isMemeToCourtroom && (
              <p className="text-xl font-light text-ink/80 leading-relaxed mb-8">
                {insight.summary}
              </p>
            )}
            <div className="text-ink/80 leading-relaxed font-light">
              {insight.contentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: insight.contentHtml }} />
              ) : (
                <p>{insight.content}</p>
              )}
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-ink/10">
            <Link href="/insights" className="inline-flex items-center text-ink hover:text-bronze transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
