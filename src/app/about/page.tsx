import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Award, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Aashya Legal",
  description: "Aashya Legal is a full-service law firm providing strategic legal advisory, transactional support, and dispute resolution.",
};

const teamMembers = [
  {
    name: "Shyam Kumar",
    role: "Advocate | Founder & Managing Partner",
    credentials: "M.A., LL.B. | Jharkhand High Court & Civil Courts",
    experience: "25+ Years of Legal Experience",
    bio: "With over 25 years of experience in legal practice, Mr. Shyam Kumar brings extensive courtroom experience, strategic legal insight, and a deep understanding of litigation and dispute resolution. His practice is built on strong advocacy, meticulous legal analysis, and a client-focused approach to complex legal matters.",
    areas: ["Litigation & Dispute Resolution", "Civil & Commercial Matters", "Legal Advisory", "Court Representation"]
  },
  {
    name: "Aastha Prakash",
    role: "Advocate | Co-Founder & Partner",
    credentials: "B.B.A., LL.B.",
    bio: "Aastha Prakash is a legal professional with a focus on Corporate & Commercial Law, Contractual Advisory, Dispute Resolution, and Legal Strategy. She combines contemporary legal practice with a commercially oriented approach, assisting clients in navigating complex legal and business requirements. Her practice encompasses corporate advisory, commercial contracts, regulatory matters, legal documentation, dispute management, and strategic legal counsel.",
    areas: ["Corporate & Commercial Law", "Contracts & Agreements", "Dispute Resolution", "Legal Advisory", "Regulatory & Compliance"]
  },
  {
    name: "Adv. Aiswarya",
    role: "Advocate | Legal Associate",
    credentials: "B.B.A., LL.B.",
    bio: "Adv. Aiswarya is a legal professional engaged in legal research, drafting, documentation, and litigation support. She works across matters requiring detailed legal analysis and assists in developing well-structured and practical legal strategies for clients. Her approach combines strong research capabilities with attention to detail and a commitment to delivering precise and effective legal work.",
    areas: ["Legal Research", "Drafting & Documentation", "Litigation Support", "Corporate & Commercial Matters"]
  },
  {
    name: "Shaiwal Kumar",
    role: "Advocate | Legal Associate",
    credentials: "B.A., LL.B.",
    bio: "Adv. Shaiwal Kumar is engaged in legal research, drafting, case preparation, and litigation assistance. He contributes to the firm's work through structured legal analysis, preparation of pleadings and legal documents, and comprehensive case research. He brings a diligent and analytical approach to legal practice, with a focus on developing clear, well-researched, and strategically sound legal solutions.",
    areas: ["Legal Research", "Drafting", "Litigation Support", "Case Preparation", "Legal Advisory"]
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            Firm Profile
          </h1>
          <div className="w-20 h-[1px] bg-bronze mb-8" />
          <p className="text-xl md:text-2xl text-ivory/80 font-light leading-relaxed mb-6">
            AASHYA LEGAL is a full-service law firm providing strategic legal advisory, transactional support, dispute resolution and litigation services to individuals, businesses, entrepreneurs, institutions and organisations across a wide range of legal and commercial matters.
          </p>
          <p className="text-lg text-ivory/70 font-light leading-relaxed">
            Founded on a foundation of more than 25 years of legal practice and courtroom experience, AASHYA LEGAL combines established legal knowledge and practical courtroom insight with a contemporary, commercially focused approach to legal practice.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-stone-brand">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-ink mb-4">Our Approach</h2>
            <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
            <p className="text-lg text-ink/70 font-light max-w-3xl mx-auto">
              At AASHYA LEGAL, we believe that effective legal representation requires more than knowledge of the law. It requires sound judgment, strategic thinking, responsiveness, attention to detail and an understanding of the realities within which our clients operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { title: "Strategic Legal Counsel", desc: "Developing legal strategies aligned with the client's objectives and long-term interests." },
              { title: "Commercial Understanding", desc: "Appreciating the business, financial and practical considerations underlying every legal matter." },
              { title: "Rigorous Legal Analysis", desc: "Conducting detailed legal research, factual assessment and risk analysis." },
              { title: "Precision in Drafting", desc: "Preparing clear, comprehensive and legally robust agreements, pleadings, notices, opinions and other legal documents." },
              { title: "Strong Representation", desc: "Providing focused advocacy and effective representation in contentious and complex matters." },
              { title: "Preventive Legal Advisory", desc: "Identifying and addressing potential legal risks before they develop into disputes." },
              { title: "Client-Centric Service", desc: "Maintaining accessibility, responsiveness and clear communication throughout the engagement." },
              { title: "Integrity & Professionalism", desc: "Upholding the highest standards of professional ethics, confidentiality and professional responsibility." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-2 h-2 bg-bronze rounded-full mt-2 mr-4 shrink-0" />
                <div>
                  <h3 className="font-heading text-xl font-medium text-ink mb-2">{item.title}</h3>
                  <p className="text-ink/70 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-ink mb-4">Our Team</h2>
            <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
            <p className="text-lg text-ink/70 font-light max-w-2xl mx-auto">
              Strategic Counsel. Strong Representation. Our lawyers work collaboratively across practice areas to provide an integrated and strategic approach to complex legal matters.
            </p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 md:p-12 border border-ink/5 flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="lg:w-1/3 shrink-0">
                  <h3 className="font-heading text-2xl font-bold text-ink mb-1">{member.name}</h3>
                  <p className="text-bronze font-medium text-sm tracking-wide uppercase mb-3">{member.role}</p>
                  <p className="text-ink/60 text-sm font-medium mb-1">{member.credentials}</p>
                  {member.experience && (
                    <p className="text-ink/60 text-sm font-medium">{member.experience}</p>
                  )}
                </div>
                <div className="lg:w-2/3">
                  <p className="text-ink/80 font-light leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink/50 mb-3">Core Practice Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.areas.map((area, idx) => (
                        <span key={idx} className="px-3 py-1 bg-stone-brand text-ink text-xs font-medium rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-ink text-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">Our Commitment</h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-8" />
          <p className="text-lg md:text-xl text-ivory/80 font-light leading-relaxed mb-10">
            We recognise that legal matters can have significant commercial, financial, professional and personal consequences. Our role is therefore to provide clients with clarity in the face of legal uncertainty, strategic direction in complex situations and effective representation when their interests require protection.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-bronze hover:bg-bronze/90 text-ivory rounded-none h-14 px-10 text-sm font-medium tracking-wide">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-ivory text-ivory hover:bg-ivory hover:text-ink rounded-none h-14 px-10 text-sm font-medium tracking-wide">
              <Link href="/practice-areas">View Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
