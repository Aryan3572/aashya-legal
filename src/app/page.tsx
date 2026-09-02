"use client";

import Link from "next/link";
import { ArrowRight, Scale, Shield, Globe2, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/data/practice-areas";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } },
};

export default function Home() {
  const featuredPractices = practiceAreas.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden flex items-end md:items-center shadow-2xl">
            <div className="absolute inset-0">
              <img 
                src="/media/office.jpeg" 
                alt="Aashya Legal Office" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-4xl w-full">
              <motion.div
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                <motion.h1 
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6"
                >
                  LEGAL COUNSEL FOR A <br className="hidden md:block" />
                  <span className="text-bronze italic">CHANGING INDIA</span>
                </motion.h1>
                <motion.p 
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="text-lg md:text-xl text-ivory/90 max-w-2xl mb-10 font-light leading-relaxed"
                >
                  Full-service legal counsel for businesses, institutions and individuals across India. Delivering strategic, pragmatic, and sophisticated solutions.
                </motion.p>
                <motion.div 
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="bg-bronze hover:bg-bronze/90 text-white rounded-none h-14 px-8 text-sm font-medium tracking-wide">
                    <Link href="/contact">BOOK A CONSULTATION</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-none h-14 px-8 text-sm font-medium tracking-wide border-white text-white hover:bg-white hover:text-ink transition-colors">
                    <Link href="/practice-areas">OUR PRACTICE AREAS</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-ink text-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">Institutional Grade Legal Services</h2>
              <div className="w-20 h-[1px] bg-bronze mb-8" />
              <p className="text-ivory/80 text-lg leading-relaxed mb-6 font-light">
                Aashya Legal is positioned as a PAN-India full-service legal firm, providing legal services through its offices, associated advocates and professional network across India.
              </p>
              <p className="text-ivory/80 text-lg leading-relaxed mb-8 font-light">
                We combine deep legal expertise with commercial pragmatism to deliver outcomes that matter for our clients in an increasingly complex regulatory environment.
              </p>
              <Link href="/about" className="inline-flex items-center text-bronze hover:text-ivory transition-colors font-medium">
                Discover our firm <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Scale, title: "Integrity", desc: "Uncompromising ethical standards in every engagement." },
                { icon: Shield, title: "Excellence", desc: "Rigorous attention to detail and robust legal strategies." },
                { icon: Globe2, title: "PAN-India", desc: "Seamless representation across multiple jurisdictions." },
                { icon: Briefcase, title: "Commercial", desc: "Solutions aligned with your business objectives." },
              ].map((item, i) => (
                <div key={i} className="bg-ivory/5 p-8 border border-ivory/10 hover:border-bronze/50 transition-colors">
                  <item.icon className="w-8 h-8 text-bronze mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-ivory/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-stone-brand/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl md:text-5xl font-medium text-ink mb-6">Key Practice Areas</h2>
              <p className="text-ink/70 text-lg font-light leading-relaxed">
                Comprehensive legal solutions tailored to meet the diverse needs of modern businesses and individuals.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-none border-ink text-ink hover:bg-ink hover:text-ivory transition-colors shrink-0">
              <Link href="/practice-areas">VIEW ALL PRACTICES</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPractices.map((practice, index) => (
              <motion.div
                key={practice.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
              >
                <Link href={`/practice-areas/${practice.slug}`} className="block group h-full">
                  <div className="bg-ivory p-8 h-full border border-ink/10 group-hover:border-bronze transition-colors flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-bronze mb-4">
                      {practice.category}
                    </span>
                    <h3 className="font-heading text-2xl text-ink mb-4 group-hover:text-bronze transition-colors">
                      {practice.title}
                    </h3>
                    <p className="text-ink/70 font-light leading-relaxed mb-8 flex-grow">
                      {practice.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-ink group-hover:text-bronze transition-colors mt-auto">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAN India Presence */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-ink p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-stone-brand/10 to-transparent pointer-events-none" />
            
            <div className="flex-1 relative z-10 text-ivory">
              <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">PAN-India Presence</h2>
              <div className="w-20 h-[1px] bg-bronze mb-8" />
              <p className="text-ivory/80 text-lg leading-relaxed mb-8 font-light">
                Aashya Legal serves clients across India through its central offices, associated advocates, and an extensive professional network. This structure allows us to provide seamless representation before various High Courts, Tribunals, and the Supreme Court of India.
              </p>
              <Button asChild className="bg-bronze hover:bg-bronze/90 text-ivory rounded-none">
                <Link href="/offices">VIEW OUR OFFICES</Link>
              </Button>
            </div>
            
            <div className="flex-1 relative z-10 grid sm:grid-cols-2 gap-6 w-full">
              {[
                { title: "Central Offices", desc: "Core strategic hubs." },
                { title: "Associated Advocates", desc: "Trusted independent counsels." },
                { title: "Professional Network", desc: "Domain experts & consultants." },
                { title: "Jurisdictions", desc: "Representation across India." },
              ].map((stat, i) => (
                <div key={i} className="border border-ivory/20 p-6">
                  <h3 className="font-heading text-xl text-bronze mb-2">{stat.title}</h3>
                  <p className="text-sm text-ivory/60">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-brand/30 border-y border-stone-brand/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-ink mb-6">Ready to discuss your legal matter?</h2>
          <p className="text-ink/70 text-lg font-light leading-relaxed mb-10">
            Schedule a consultation with our legal experts to explore how we can assist you with strategic legal counsel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-ink hover:bg-ink/90 text-ivory rounded-none h-14 px-10 text-sm font-medium tracking-wide">
              <Link href="/contact">REQUEST A CONSULTATION</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none h-14 px-10 text-sm font-medium tracking-wide border-ink text-ink hover:bg-ink/5">
              <Link href="tel:+910000000000">CALL US</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
