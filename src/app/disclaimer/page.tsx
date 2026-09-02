import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Disclaimer | Aashya Legal",
  description: "Legal disclaimer regarding the use of the Aashya Legal website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-ink text-ivory pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-medium mb-6">Disclaimer</h1>
          <div className="w-20 h-[1px] bg-bronze mb-8" />
          <p className="text-xl text-ivory/80 font-light leading-relaxed">
            Please read this disclaimer carefully before using our website.
          </p>
        </div>
      </section>

      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-ink/80 font-light">
            <p>
              The Bar Council of India does not permit solicitation of work and advertising by legal practitioners and advocates. By accessing the Aashya Legal website (our website), the user acknowledges that:
            </p>
            <ul>
              <li>The user wishes to gain more information about us for his/her information and use. He/She also acknowledges that there has been no attempt by us to advertise or solicit work.</li>
              <li>Any information obtained or downloaded by the user from our website does not lead to the creation of the client – attorney relationship between the Firm and the user.</li>
              <li>None of the information contained in our website amounts to any form of legal opinion or legal advice.</li>
              <li>Our website uses cookies to improve your user experience. By using our site, you agree to our use of cookies. To find out more, please see our <Link href="/cookie" className="text-bronze hover:text-ink transition-colors">Cookies Policy</Link> & <Link href="/privacy" className="text-bronze hover:text-ink transition-colors">Privacy Policy</Link>.</li>
              <li>All information contained in our website is the intellectual property of the Firm.</li>
            </ul>
          </div>
          
          <div className="mt-16 pt-8 border-t border-ink/10">
            <Link href="/" className="inline-flex items-center text-ink hover:text-bronze transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
