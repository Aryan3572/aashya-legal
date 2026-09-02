import Link from "next/link";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { offices } from "@/data/offices";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Offices | Aashya Legal",
  description: "Aashya Legal serves clients across India through its central offices, associated advocates, and professional network.",
};

export default function OfficesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-l from-stone-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6">Our Offices</h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              Aashya Legal operates through a structured PAN-India network, enabling us to provide seamless representation across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Offices List */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.id} className="bg-white border border-ink/10 p-8 flex flex-col h-full shadow-sm hover:border-bronze transition-colors">
                <div className="flex items-center mb-6">
                  <div className="bg-stone-brand/30 p-3 rounded-full mr-4">
                    <Building2 className="w-6 h-6 text-bronze" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-medium text-ink">{office.city}</h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-bronze">
                      {office.type}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 text-ink/80 font-light flex-grow">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-ink/50" />
                    <div>
                      <p>{office.address}</p>
                      <p>{office.city}, {office.state} {office.pin}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 shrink-0 text-ink/50" />
                    <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-bronze transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 shrink-0 text-ink/50" />
                    <a href={`mailto:${office.email}`} className="hover:text-bronze transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
                
                {office.isPlaceholder && (
                  <div className="mt-8 pt-4 border-t border-ink/10 text-xs text-ink/50 italic">
                    Note: Exact address details are available upon scheduling a consultation.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-ivory border-t border-ink/10">
        <div className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://maps.google.com/maps?q=Panchratan,+Annapoorna+Chowk,+Nagra+Toli,+Ranchi,+Jharkhand+-+834001&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aashya Legal Office Location"
          ></iframe>
        </div>
      </section>

      {/* Network Note */}
      <section className="py-24 bg-stone-brand/20 border-t border-stone-brand/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-medium text-ink mb-6">Associated Advocates & Network</h2>
            <p className="text-ink/80 text-lg font-light leading-relaxed mb-8">
              In addition to our central offices, we work with a trusted network of associated advocates across various tier-2 and tier-3 cities in India. This allows us to provide local expertise while maintaining our institutional quality standards.
            </p>
            <Button asChild className="bg-ink hover:bg-ink/90 text-ivory rounded-none">
              <Link href="/contact">ENQUIRE ABOUT JURISDICTIONAL SUPPORT</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
