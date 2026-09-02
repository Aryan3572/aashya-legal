import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const practice = practiceAreas.find((p) => p.slug === resolvedParams.slug);
  
  if (!practice) {
    return {
      title: "Practice Area Not Found | Aashya Legal",
    };
  }

  return {
    title: practice.metadata.title,
    description: practice.metadata.description,
  };
}

export async function generateStaticParams() {
  return practiceAreas.map((practice) => ({
    slug: practice.slug,
  }));
}

export default async function PracticeAreaDetail({ params }: Props) {
  const resolvedParams = await params;
  const practice = practiceAreas.find((p) => p.slug === resolvedParams.slug);

  if (!practice) {
    notFound();
  }

  const relatedPractices = practiceAreas
    .filter((p) => p.category === practice.category && p.slug !== practice.slug)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center text-sm text-ivory/60 mb-8 font-medium">
            <Link href="/practice-areas" className="hover:text-ivory transition-colors">
              Practice Areas
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-bronze">{practice.category}</span>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              {practice.title}
            </h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              {practice.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-ink/80 leading-relaxed font-light text-lg mb-8">
                  {practice.content}
                </p>
                {/* Additional simulated content for realistic layout */}
                <h3 className="font-heading text-2xl text-ink font-medium mb-4 mt-12">Our Approach</h3>
                <p className="text-ink/80 leading-relaxed font-light mb-8">
                  At Aashya Legal, we understand that {practice.title.toLowerCase()} matters require a nuanced approach. Our team combines deep legal expertise with commercial awareness to provide strategic advice that aligns with our clients' objectives. We focus on risk mitigation, regulatory compliance, and effective resolution of complex issues.
                </p>
                
                <h3 className="font-heading text-2xl text-ink font-medium mb-4 mt-12">Key Services</h3>
                <ul className="list-disc pl-5 text-ink/80 space-y-3 font-light mb-8">
                  <li>Strategic advisory and regulatory compliance</li>
                  <li>Drafting, reviewing, and negotiating contracts</li>
                  <li>Representation before courts, tribunals, and authorities</li>
                  <li>Comprehensive legal audits and due diligence</li>
                  <li>Risk management and dispute resolution</li>
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 border border-ink/10 shadow-sm sticky top-32">
                <h3 className="font-heading text-xl font-medium text-ink mb-6">Consult Our Experts</h3>
                <p className="text-sm text-ink/70 mb-8 font-light">
                  To discuss a matter related to {practice.title}, please reach out to our specialized team.
                </p>
                <Button asChild className="w-full bg-ink hover:bg-ink/90 text-ivory rounded-none mb-4">
                  <Link href="/contact">REQUEST CONSULTATION</Link>
                </Button>
                
                {relatedPractices.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-ink/10">
                    <h3 className="font-heading text-lg font-medium text-ink mb-6">Related Practices</h3>
                    <ul className="space-y-4">
                      {relatedPractices.map((rp) => (
                        <li key={rp.slug}>
                          <Link href={`/practice-areas/${rp.slug}`} className="text-sm text-ink/70 hover:text-bronze transition-colors flex items-center">
                            <ChevronRight className="w-3 h-3 mr-2" />
                            {rp.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-stone-brand/20 py-16 border-t border-stone-brand/50">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/practice-areas" className="inline-flex items-center text-ink hover:text-bronze transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Practice Areas
          </Link>
        </div>
      </section>
    </>
  );
}
