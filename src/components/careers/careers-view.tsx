"use client";

import { useState } from "react";
import { GraduationCap, Briefcase, Mail, CheckCircle2, Copy, Check, ArrowDown, Send, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersView() {
  const [roleType, setRoleType] = useState<"associate" | "internship">("associate");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    practiceArea: "Litigation & Dispute Resolution",
    resumeLink: "",
    coverNote: "",
  });

  const handleRoleSelect = (role: "associate" | "internship") => {
    setRoleType(role);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aashyalegal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roleType,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or email us directly at aashyalegal@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      education: "",
      practiceArea: "Litigation & Dispute Resolution",
      resumeLink: "",
      coverNote: "",
    });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-l from-stone-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6">Careers at Aashya Legal</h1>
            <div className="w-20 h-[1px] bg-bronze mb-8" />
            <p className="text-xl text-ivory/80 font-light leading-relaxed max-w-2xl">
              We are committed to fostering a culture of excellence, integrity, and continuous learning. Build your legal career with our nationwide practice.
            </p>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Associates & Lateral Hires */}
            <div className="bg-white p-10 border border-ink/10 shadow-sm flex flex-col justify-between hover:border-bronze transition-colors">
              <div>
                <div className="bg-stone-brand/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-bronze" />
                </div>
                <h2 className="font-heading text-3xl font-medium text-ink mb-4">Associates & Lateral Hires</h2>
                <p className="text-ink/70 font-light leading-relaxed mb-8">
                  We are always open to engaging with exceptional legal talent. If you possess a strong academic record, intellectual curiosity, and a commitment to professional diligence, we invite you to explore career opportunities with us.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium text-ink text-sm uppercase tracking-wider">Candidate Profile</h3>
                  <p className="text-sm text-ink/70 font-light leading-relaxed">
                    Qualified advocates with 1–7 years of experience in dispute resolution, corporate advisory, intellectual property, or regulatory practice.
                  </p>
                </div>
              </div>
              <Button
                type="button"
                onClick={() => handleRoleSelect("associate")}
                className="w-full bg-ink hover:bg-ink/90 text-ivory rounded-none py-6 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>APPLY AS ASSOCIATE</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* Internships */}
            <div className="bg-white p-10 border border-ink/10 shadow-sm flex flex-col justify-between hover:border-bronze transition-colors">
              <div>
                <div className="bg-stone-brand/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-bronze" />
                </div>
                <h2 className="font-heading text-3xl font-medium text-ink mb-4">Internship Programme</h2>
                <p className="text-ink/70 font-light leading-relaxed mb-8">
                  Our internship programme provides law students with structured exposure to courtroom advocacy, legal research, case strategy, and drafting across multiple jurisdictions in India.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium text-ink text-sm uppercase tracking-wider">Eligibility Criteria</h3>
                  <p className="text-sm text-ink/70 font-light leading-relaxed">
                    Students in their 3rd year of 3-year LL.B or 4th/5th year of 5-year integrated B.A./B.B.A. LL.B programs. Applications should ideally be submitted 1–2 months in advance.
                  </p>
                </div>
              </div>
              <Button
                type="button"
                onClick={() => handleRoleSelect("internship")}
                className="w-full bg-ink hover:bg-ink/90 text-ivory rounded-none py-6 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>APPLY FOR INTERNSHIP</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Form Section */}
      <section id="apply-form" className="py-20 bg-stone-brand/30 border-t border-ink/10 scroll-mt-12">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Guidance Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-bronze block mb-2">Application Portal</span>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-ink mb-4">Submit Your Application</h2>
                <div className="w-16 h-[1px] bg-bronze mb-6" />
                <p className="text-ink/80 font-light text-base leading-relaxed">
                  Complete the application form below. Our recruitment committee reviews each candidate's background thoroughly.
                </p>
              </div>

              <div className="bg-white border border-ink/10 p-6 space-y-4">
                <h4 className="font-heading text-lg font-medium text-ink">Prefer Email?</h4>
                <p className="text-sm text-ink/70 font-light leading-relaxed">
                  You can also email your CV and cover letter directly to our recruitment team:
                </p>
                <div className="flex items-center justify-between gap-2 p-3 bg-ivory border border-ink/10">
                  <span className="text-xs md:text-sm font-mono text-ink select-all">aashyalegal@gmail.com</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-bronze hover:text-ink transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-green-700 font-medium">Copied to clipboard!</p>
                )}
              </div>

              <div className="border-l-2 border-bronze pl-4 space-y-2">
                <h4 className="text-sm font-medium text-ink">Review Timeline</h4>
                <p className="text-xs text-ink/60 font-light leading-relaxed">
                  Applications are reviewed on a rolling basis. Shortlisted candidates are contacted within 7–10 working days.
                </p>
              </div>
            </div>

            {/* Application Form Box */}
            <div className="lg:col-span-8 bg-white border border-ink/10 p-8 md:p-12 shadow-md">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-stone-brand/40 text-bronze flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-3xl font-medium text-ink">Application Submitted</h3>
                  <p className="text-ink/70 font-light max-w-lg mx-auto leading-relaxed">
                    Thank you for applying to Aashya Legal for the{" "}
                    <span className="font-medium text-ink">
                      {roleType === "associate" ? "Associate / Lateral Hire" : "Internship Programme"}
                    </span>{" "}
                    position. We have received your application and will review your profile shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      type="button"
                      onClick={handleReset}
                      variant="outline"
                      className="border-ink text-ink hover:bg-ink hover:text-ivory rounded-none uppercase tracking-wider text-xs px-6 py-3 cursor-pointer"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs leading-relaxed">
                      {errorMessage}
                    </div>
                  )}
                  
                  {/* Position Toggle */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-ink block mb-3">
                      Position Applying For *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setRoleType("associate")}
                        className={`p-4 text-left border transition-all cursor-pointer ${
                          roleType === "associate"
                            ? "border-ink bg-ink text-ivory"
                            : "border-ink/20 bg-ivory/50 text-ink hover:border-bronze"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-bronze" />
                          <span className="font-medium text-sm">Associate Position</span>
                        </div>
                        <span className={`text-xs block mt-1 ${roleType === "associate" ? "text-ivory/70" : "text-ink/60"}`}>
                          Lateral & Full-Time
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRoleType("internship")}
                        className={`p-4 text-left border transition-all cursor-pointer ${
                          roleType === "internship"
                            ? "border-ink bg-ink text-ivory"
                            : "border-ink/20 bg-ivory/50 text-ink hover:border-bronze"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-bronze" />
                          <span className="font-medium text-sm">Internship</span>
                        </div>
                        <span className={`text-xs block mt-1 ${roleType === "internship" ? "text-ivory/70" : "text-ink/60"}`}>
                          Law Students
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-medium uppercase tracking-wider text-ink">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Adv. John Doe"
                        className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-ink">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john.doe@example.com"
                        className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-ink">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="education" className="text-xs font-medium uppercase tracking-wider text-ink">
                        {roleType === "associate" ? "Bar Council / Law School *" : "Law School & Current Year *"}
                      </label>
                      <input
                        type="text"
                        id="education"
                        required
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        placeholder={roleType === "associate" ? "e.g. NLU / Bar Enrolment No." : "e.g. 4th Year, B.A. LL.B."}
                        className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                    </div>
                  </div>

                  {/* Practice Area Preference */}
                  <div className="space-y-2">
                    <label htmlFor="practiceArea" className="text-xs font-medium uppercase tracking-wider text-ink">
                      Practice Area of Interest *
                    </label>
                    <select
                      id="practiceArea"
                      required
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink text-sm focus:outline-none focus:border-bronze transition-colors"
                    >
                      <option value="Litigation & Dispute Resolution">Civil & Commercial Litigation</option>
                      <option value="Corporate & Commercial Advisory">Corporate & Commercial Law</option>
                      <option value="Criminal Defense & White Collar">Criminal Defense & Trial Advocacy</option>
                      <option value="Intellectual Property Rights">Intellectual Property Rights</option>
                      <option value="Technology, AI & Data Protection">Technology, AI & Cyber Law</option>
                      <option value="Constitutional & High Court Practice">Constitutional & Appellate Practice</option>
                      <option value="General Practice">General / Cross-Practice</option>
                    </select>
                  </div>

                  {/* Resume / Portfolio Link */}
                  <div className="space-y-2">
                    <label htmlFor="resumeLink" className="text-xs font-medium uppercase tracking-wider text-ink flex items-center justify-between">
                      <span>Resume Link (Google Drive / LinkedIn / Dropbox) *</span>
                      <span className="text-[11px] text-ink/50 normal-case font-normal">Must be publicly viewable</span>
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="resumeLink"
                        required
                        value={formData.resumeLink}
                        onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                        placeholder="https://drive.google.com/file/d/... or https://linkedin.com/in/..."
                        className="w-full bg-ivory/30 border border-ink/20 p-3 pl-10 text-ink text-sm focus:outline-none focus:border-bronze transition-colors"
                      />
                      <FileText className="w-4 h-4 text-ink/40 absolute left-3 top-3.5" />
                    </div>
                  </div>

                  {/* Cover Note */}
                  <div className="space-y-2">
                    <label htmlFor="coverNote" className="text-xs font-medium uppercase tracking-wider text-ink">
                      Cover Note / Statement of Interest
                    </label>
                    <textarea
                      id="coverNote"
                      rows={4}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Briefly state your relevant legal experience, career aspirations, or availability dates..."
                      className="w-full bg-ivory/30 border border-ink/20 p-3 text-ink text-sm focus:outline-none focus:border-bronze transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ink hover:bg-ink/90 text-ivory rounded-none py-6 uppercase tracking-wider font-medium text-xs flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>SUBMITTING APPLICATION...</span>
                    ) : (
                      <>
                        <span>SUBMIT APPLICATION</span>
                        <Send className="w-3.5 h-3.5 text-bronze" />
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-ink/50 text-center font-light">
                    By submitting this form, you confirm that the information provided is accurate and consent to Aashya Legal reviewing your credentials.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* General Enquiry */}
      <section className="py-20 bg-stone-brand/20 border-t border-stone-brand/50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <Mail className="w-12 h-12 text-bronze mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-medium text-ink mb-4">General Career Enquiries</h2>
          <p className="text-ink/80 text-base font-light leading-relaxed mb-6">
            For academic collaborations, judicial clerkship transitions, or general career queries, please reach out to:
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:aashyalegal@gmail.com?subject=Career Enquiry - Aashya Legal"
              className="text-lg md:text-xl font-medium text-bronze hover:text-ink transition-colors"
            >
              aashyalegal@gmail.com
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3 py-1 bg-white border border-ink/10 text-xs font-medium text-ink/70 hover:text-ink hover:border-bronze transition-all cursor-pointer"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
