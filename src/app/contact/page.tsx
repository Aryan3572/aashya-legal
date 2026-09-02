"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6">Contact Us</h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              Schedule a consultation or reach out to our team for strategic legal counsel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-brand">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 overflow-hidden shadow-2xl border border-ink/10">
            
            {/* Contact Information & Image */}
            <div className="relative bg-ink text-ivory flex flex-col justify-center p-10 md:p-16 min-h-[600px]">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/media/office.jpeg" 
                  fill 
                  alt="Aashya Legal Office" 
                  className="object-cover opacity-20 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="font-heading text-4xl font-medium text-white mb-4">Get in Touch</h2>
                  <p className="text-ivory/80 font-light mb-12 max-w-md">
                    Our team is ready to provide you with the legal assistance you need. Reach out to us through any of the following channels.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-bronze/20 p-3 rounded-full mr-6 shrink-0 backdrop-blur-sm">
                        <MapPin className="w-6 h-6 text-bronze" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-medium text-white mb-2">Headquarters</h3>
                        <p className="text-ivory/70 font-light leading-relaxed">
                          Panchratan, Annapoorna Chowk, <br />
                          Nagra Toli, Ranchi, <br />
                          Jharkhand - 834001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-bronze/20 p-3 rounded-full mr-6 shrink-0 backdrop-blur-sm">
                        <Phone className="w-6 h-6 text-bronze" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-medium text-white mb-2">Phone</h3>
                        <p className="text-ivory/70 font-light leading-relaxed">
                          <a href="tel:+919739456288" className="hover:text-bronze transition-colors">
                            +91 9739456288
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-bronze/20 p-3 rounded-full mr-6 shrink-0 backdrop-blur-sm">
                        <Mail className="w-6 h-6 text-bronze" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-medium text-white mb-2">Email</h3>
                        <p className="text-ivory/70 font-light leading-relaxed">
                          <a href="mailto:aashyalegal@gmail.com" className="hover:text-bronze transition-colors">
                            aashyalegal@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-bronze/20 p-3 rounded-full mr-6 shrink-0 backdrop-blur-sm">
                        <MessageSquare className="w-6 h-6 text-bronze" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-medium text-white mb-2">WhatsApp</h3>
                        <p className="text-ivory/70 font-light leading-relaxed">
                          <a href="https://wa.me/919739456288" target="_blank" rel="noopener noreferrer" className="hover:text-bronze transition-colors">
                            Message us on WhatsApp
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-medium text-ink mb-2">Request a Consultation</h2>
              <p className="text-ink/60 font-light mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              {isSubmitted ? (
                <div className="bg-stone-brand/20 border border-stone-brand/50 p-8 text-center h-full flex flex-col justify-center items-center min-h-[400px]">
                  <div className="bg-ink text-ivory rounded-full p-4 mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl text-ink mb-2">Request Received</h3>
                  <p className="text-ink/70 font-light">
                    Thank you for reaching out to Aashya Legal. Our team will review your enquiry and contact you shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8 rounded-none border-ink text-ink hover:bg-ink hover:text-white transition-colors"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-ink">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink focus:outline-none focus:border-bronze transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-ink">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink focus:outline-none focus:border-bronze transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-ink">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink focus:outline-none focus:border-bronze transition-colors"
                      placeholder="@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="matter" className="text-sm font-medium text-ink">Nature of Matter</label>
                    <select 
                      id="matter" 
                      required
                      className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink focus:outline-none focus:border-bronze transition-colors"
                    >
                      <option value="">Select a practice area...</option>
                      <option value="corporate">Corporate & Commercial</option>
                      <option value="litigation">Civil Litigation</option>
                      <option value="ip">Intellectual Property</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink">Brief Description</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink focus:outline-none focus:border-bronze transition-colors resize-none"
                      placeholder="Please provide a brief overview of your legal requirement..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-bronze hover:bg-bronze/90 text-ivory rounded-none h-14 text-sm tracking-wide font-medium mt-4"
                  >
                    {isSubmitting ? "SUBMITTING..." : "REQUEST CONSULTATION"}
                  </Button>
                  
                  <p className="text-xs text-ink/50 text-center font-light pt-2">
                    Any information shared will be kept strictly confidential.
                  </p>
                </form>
              )}
            </div>

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
    </>
  );
}
