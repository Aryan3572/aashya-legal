"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Building2, ExternalLink, Navigation } from "lucide-react";
import { Office } from "@/data/offices";
import { Button } from "@/components/ui/button";

interface OfficesViewProps {
  offices: Office[];
}

export default function OfficesView({ offices }: OfficesViewProps) {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>(offices[0]?.id || "ranchi-hq");

  const selectedOffice = offices.find((o) => o.id === selectedOfficeId) || offices[0];

  const getEmbedUrl = (office: Office) => {
    const queries: Record<string, string> = {
      "ranchi-hq": "Panchratan, Annapoorna Chowk, Nagra Toli, Ranchi, Jharkhand - 834001",
      "Patna-branch": "Plot Number 213, Kautilya Nagar Vidhayak Colony, Raza Bazar, Patna, Bihar 800014",
      "Delhi-branch": "D-280 Nawada Housing Complex Kakrola Mode, New Delhi 110059",
      "Kerala-branch": "Kunnoth, kiliyanthara, Iritty, Kannur, Kerala 670706",
    };

    const query = queries[office.id] || `${office.address}, ${office.city}, ${office.state} ${office.pin}`;
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  const handleLocateOnMap = (officeId: string) => {
    setSelectedOfficeId(officeId);
    const element = document.getElementById("office-map-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office) => {
              const mapUrl = office.map || `https://maps.google.com/?q=${encodeURIComponent(`${office.address}, ${office.city}, ${office.state} ${office.pin}`)}`;

              return (
                <div
                  key={office.id}
                  className="bg-white border border-ink/10 p-8 flex flex-col h-full shadow-sm hover:border-bronze hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-stone-brand/30 p-3 rounded-full mr-4 group-hover:bg-bronze/10 transition-colors">
                        <Building2 className="w-6 h-6 text-bronze" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-medium text-ink">{office.city}</h3>
                        <span className="text-xs font-medium uppercase tracking-wider text-bronze">
                          {office.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-ink/80 font-light flex-grow">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-bronze" />
                      <div>
                        <p className="text-ink font-normal">{office.name}</p>
                        <p className="text-ink/80 text-sm mt-0.5">{office.address}</p>
                        <p className="text-ink/80 text-sm">{office.city}{office.state ? `, ${office.state}` : ""} - {office.pin}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 shrink-0 text-ink/50" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-bronze transition-colors text-sm">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 shrink-0 text-ink/50" />
                      <a href={`mailto:${office.email}`} className="hover:text-bronze transition-colors text-sm">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {office.isPlaceholder && (
                    <div className="mt-6 pt-4 border-t border-ink/10 text-xs text-ink/50 italic">
                      Note: Exact address details are available upon scheduling a consultation.
                    </div>
                  )}

                  {/* Office Map Actions */}
                  <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-bronze hover:text-ink transition-colors group/link"
                    >
                      <MapPin className="w-3.5 h-3.5 text-bronze group-hover/link:scale-110 transition-transform" />
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleLocateOnMap(office.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-ink/60 hover:text-ink font-medium tracking-wide transition-colors cursor-pointer"
                    >
                      <Navigation className="w-3 h-3 text-bronze" />
                      <span>Locate on Map Below</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="office-map-section" className="bg-ivory border-t border-ink/10 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-bronze block mb-2">Location Map</span>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-ink">Explore Our Offices</h2>
            </div>

            {/* Office Filter / Switcher Tabs */}
            <div className="flex flex-wrap gap-2">
              {offices.map((office) => {
                const isActive = selectedOffice?.id === office.id;
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOfficeId(office.id)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-ink text-ivory border-ink shadow-sm"
                        : "bg-white text-ink/70 border-ink/10 hover:border-bronze hover:text-ink"
                    }`}
                  >
                    {office.city} ({office.type === "Headquarters" ? "HQ" : "Branch"})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Office Details Card */}
          {selectedOffice && (
            <div className="bg-white border border-ink/10 p-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg font-medium text-ink">{selectedOffice.name}</h3>
                  <span className="text-[11px] uppercase tracking-wider text-bronze px-2 py-0.5 bg-stone-brand/30">
                    {selectedOffice.type}
                  </span>
                </div>
                <p className="text-sm text-ink/70">
                  {selectedOffice.address}, {selectedOffice.city}
                  {selectedOffice.state ? `, ${selectedOffice.state}` : ""} - {selectedOffice.pin}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selectedOffice.map || `https://maps.google.com/?q=${encodeURIComponent(`${selectedOffice.address}, ${selectedOffice.city}, ${selectedOffice.state} ${selectedOffice.pin}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-bronze text-white text-xs uppercase tracking-wider font-medium hover:bg-ink transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Map Iframe */}
        <div className="w-full h-[450px] md:h-[520px] grayscale hover:grayscale-0 transition-all duration-700 relative bg-stone-brand/20">
          {selectedOffice && (
            <iframe
              key={selectedOffice.id}
              src={getEmbedUrl(selectedOffice)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${selectedOffice.name} Location Map`}
            />
          )}
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
