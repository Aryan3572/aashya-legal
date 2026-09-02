import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/80 pt-16 pb-8 border-t border-ink">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-tight text-ivory">
                AASHYA LEGAL
              </span>
              <span className="text-[0.6rem] font-medium tracking-[0.2em] text-bronze uppercase">
                Advocates & Consultants
              </span>
            </Link>
            <p className="text-sm mt-4 leading-relaxed max-w-xs">
              A PAN-India full-service legal firm providing sophisticated legal counsel for businesses, institutions, and individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ivory mb-6">Firm</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-bronze transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-bronze transition-colors">Practice Areas</Link>
              </li>
              <li>
                <Link href="/offices" className="hover:text-bronze transition-colors">Our Offices</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-bronze transition-colors">Insights</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-bronze transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ivory mb-6">Key Practices</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/practice-areas/corporate-commercial-law" className="hover:text-bronze transition-colors">Corporate & Commercial</Link>
              </li>
              <li>
                <Link href="/practice-areas/civil-law-litigation" className="hover:text-bronze transition-colors">Civil Law & Litigation</Link>
              </li>
              <li>
                <Link href="/practice-areas/technology-ai-law" className="hover:text-bronze transition-colors">Technology & AI</Link>
              </li>
              <li>
                <Link href="/practice-areas/intellectual-property" className="hover:text-bronze transition-colors">Intellectual Property</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-bronze transition-colors text-bronze italic">View All Practices &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-ivory mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 shrink-0 text-bronze" size={16} />
                <div className="flex flex-col">
                  <span>
                    Panchratan, Annapoorna Chowk,
                    <br />
                    Nagra Toli, Ranchi,
                    <br />
                    Jharkhand - 834001
                  </span>
                  <a 
                    href="https://share.google/ZDO4gv0XfSgHvIJg3" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-bronze hover:text-ivory transition-colors mt-2 underline underline-offset-4 font-medium"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 shrink-0 text-bronze" size={16} />
                <a href="tel:+919739456288" className="hover:text-bronze transition-colors">
                  +91 9739456288
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 shrink-0 text-bronze" size={16} />
                <a href="mailto:aashyalegal@gmail.com" className="hover:text-bronze transition-colors">
                  aashyalegal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Aashya Legal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-bronze transition-colors">Cookie Policy</Link>
            <Link href="/disclaimer" className="hover:text-bronze transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
