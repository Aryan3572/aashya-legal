export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  isPlaceholder?: boolean;
};

export const insights: Insight[] = [
  {
    slug: "navigating-dpdp-act-2023",
    title: "Navigating the Digital Personal Data Protection Act, 2023",
    category: "Data Protection",
    date: "2023-09-15",
    summary: "An overview of the key compliance requirements for businesses under India's new data protection framework.",
    content: "The Digital Personal Data Protection Act, 2023 marks a significant shift in how personal data is handled in India. This article explores the core principles of consent, purpose limitation, and the rights of data principals. Businesses must begin auditing their data processing activities to ensure alignment with the new obligations. [Placeholder Content - Actual legal article to be provided by Aashya Legal]",
    author: "Aashya Legal Tech Desk",
    isPlaceholder: true
  },
  {
    slug: "impact-of-ai-on-copyright",
    title: "The Impact of Generative AI on Copyright Law in India",
    category: "Technology & AI",
    date: "2023-11-22",
    summary: "Analyzing the intersection of AI-generated content and traditional copyright protections.",
    content: "As generative AI tools become ubiquitous, questions arise regarding the ownership of AI-created works. Under the Indian Copyright Act, 1957, authorship typically requires human intervention. This piece discusses recent judicial observations and the potential need for legislative reform to address AI's role in creative industries. [Placeholder Content - Actual legal article to be provided by Aashya Legal]",
    author: "Aashya Legal IP Desk",
    isPlaceholder: true
  },
  {
    slug: "recent-trends-in-commercial-arbitration",
    title: "Recent Trends in Domestic Commercial Arbitration",
    category: "Litigation",
    date: "2024-01-10",
    summary: "A review of recent Supreme Court judgments shaping the arbitration landscape in India.",
    content: "The pro-arbitration stance of Indian courts continues to strengthen. Recent rulings have clarified the scope of judicial intervention under Section 34 of the Arbitration and Conciliation Act. This update highlights key precedents that reinforce the finality of arbitral awards. [Placeholder Content - Actual legal article to be provided by Aashya Legal]",
    author: "Aashya Legal Dispute Resolution Team",
    isPlaceholder: true
  }
];

export const insightCategories = Array.from(new Set(insights.map(i => i.category)));
