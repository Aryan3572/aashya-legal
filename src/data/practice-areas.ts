export type PracticeArea = {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
  metadata: {
    title: string;
    description: string;
  };
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    category: "Corporate & Advisory",
    description: "Corporate Advisory, Business Structuring, and Commercial Transactions.",
    content: "Our Corporate & Commercial practice includes Corporate Advisory, Business Structuring, Commercial Transactions, Corporate Documentation, Joint Ventures & Business Arrangements, Regulatory Advisory, and Legal Risk Assessment.",
    metadata: {
      title: "Corporate & Commercial Law | Aashya Legal",
      description: "Expert corporate advisory and business structuring services.",
    },
  },
  {
    slug: "contracts-commercial-agreements",
    title: "Contracts & Commercial Agreements",
    category: "Corporate & Advisory",
    description: "Drafting, review, and negotiation of all commercial contracts.",
    content: "We provide comprehensive services in Contract Drafting & Review, Contract Negotiation, Commercial Agreements, Service Agreements, Vendor Agreements, Lease & Licence Agreements, MoUs, NDAs, Employment Agreements, and Contractual Risk Assessment.",
    metadata: {
      title: "Contracts & Commercial Agreements | Aashya Legal",
      description: "Drafting and negotiation of commercial contracts and agreements.",
    },
  },
  {
    slug: "employment-labour-advisory",
    title: "Employment & Labour Advisory",
    category: "Corporate & Advisory",
    description: "Advisory on HR policies, employment agreements, and workplace disputes.",
    content: "Our practice covers Employment Agreements, HR & Workplace Documentation, Employment Policies, Confidentiality & Non-Disclosure Agreements, Workplace Disputes, Termination-Related Advisory, Employee-Employer Disputes, and Employment-Related Legal Notices.",
    metadata: {
      title: "Employment & Labour Advisory | Aashya Legal",
      description: "Employment and labour law advisory for businesses.",
    },
  },
  {
    slug: "regulatory-compliance",
    title: "Regulatory & Compliance",
    category: "Corporate & Advisory",
    description: "Legal compliance reviews and corporate compliance frameworks.",
    content: "We offer Regulatory Compliance, Legal Compliance Reviews, Corporate Compliance, Compliance Documentation, Regulatory Correspondence, Legal Risk Assessment, Regulatory Advisory, and Internal Compliance Frameworks.",
    metadata: {
      title: "Regulatory & Compliance | Aashya Legal",
      description: "Corporate regulatory compliance and risk assessment.",
    },
  },
  {
    slug: "technology-digital-data",
    title: "Technology, Digital & Data Advisory",
    category: "Corporate & Advisory",
    description: "Technology agreements, IT contracts, and digital compliance.",
    content: "Our expertise includes Technology Agreements, IT & Software Contracts, Data Protection & Privacy, Website Terms & Policies, Digital Transactions, Technology-Related Disputes, Online Business Advisory, and Digital Compliance.",
    metadata: {
      title: "Technology & Data Advisory | Aashya Legal",
      description: "Legal advisory on technology, digital business, and data privacy.",
    },
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    category: "Corporate & Advisory",
    description: "Trademark and copyright protection, licensing, and infringement matters.",
    content: "We assist with Trademark Advisory, Trademark Protection, Copyright Advisory, IP Licensing, Intellectual Property Agreements, IP Infringement Matters, Brand Protection, and IP-Related Legal Notices.",
    metadata: {
      title: "Intellectual Property | Aashya Legal",
      description: "Trademark, copyright, and IP protection services.",
    },
  },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    category: "Disputes & Litigation",
    description: "Civil and commercial litigation, interim relief, and settlement.",
    content: "Our dispute resolution practice handles Civil Litigation, Commercial Litigation, Contractual Disputes, Recovery Proceedings, Injunction Matters, Interim Relief, Legal Notices, Pleadings & Applications, Settlement & Negotiation, and Alternative Dispute Resolution.",
    metadata: {
      title: "Litigation & Dispute Resolution | Aashya Legal",
      description: "Civil and commercial litigation and dispute resolution.",
    },
  },
  {
    slug: "corporate-litigation-commercial-disputes",
    title: "Corporate Litigation & Commercial Disputes",
    category: "Disputes & Litigation",
    description: "Breach of contract, recovery disputes, and shareholder matters.",
    content: "We represent clients in cases of Breach of Contract, Payment & Recovery Disputes, Business & Partnership Disputes, Commercial Claims, Contract Enforcement, Shareholder & Management Disputes, Pre-Litigation Strategy, and Negotiated Settlements.",
    metadata: {
      title: "Corporate Litigation & Commercial Disputes | Aashya Legal",
      description: "Representation in corporate and commercial disputes.",
    },
  },
  {
    slug: "consumer-law-product-disputes",
    title: "Consumer Law & Product Disputes",
    category: "Disputes & Litigation",
    description: "Consumer complaints, product liability, and deficiency in services.",
    content: "We handle Consumer Complaints, Deficiency in Services, Defective Goods, Product Liability, Unfair Trade Practices, Consumer Disputes, Legal Notices, Consumer Commission Representation, and Compensation & Recovery Claims.",
    metadata: {
      title: "Consumer Law & Product Disputes | Aashya Legal",
      description: "Legal assistance for consumer complaints and product liability.",
    },
  },
  {
    slug: "banking-financial-disputes",
    title: "Banking & Financial Disputes",
    category: "Disputes & Litigation",
    description: "Loan recovery, cheque dishonour, and financial services disputes.",
    content: "Our banking practice covers Banking Disputes, Loan & Recovery Matters, Recovery Proceedings, Cheque Dishonour Matters, Financial Services Disputes, Banking-Related Legal Notices, Consumer Claims Against Financial Service Providers, and Negotiation & Settlement.",
    metadata: {
      title: "Banking & Financial Disputes | Aashya Legal",
      description: "Representation in banking, finance, and recovery disputes.",
    },
  },
  {
    slug: "insurance-law",
    title: "Insurance Law",
    category: "Disputes & Litigation",
    description: "Insurance claims, repudiation, and policy disputes.",
    content: "We provide counsel on Insurance Claims, Insurance Disputes, Repudiation of Claims, Mis-Selling & Misrepresentation, Policy-Related Disputes, Insurance Legal Notices, Consumer Proceedings, and Regulatory & Compliance Advisory.",
    metadata: {
      title: "Insurance Law | Aashya Legal",
      description: "Insurance claims and policy dispute resolution.",
    },
  },
  {
    slug: "criminal-regulatory-litigation",
    title: "Criminal & Regulatory Litigation",
    category: "Disputes & Litigation",
    description: "Criminal complaints, bail matters, and regulatory offences.",
    content: "Our services include Criminal Complaints, Bail Matters, Criminal Defence, Cheque Dishonour Proceedings, Regulatory Offences, Criminal Legal Notices, and Representation before Appropriate Courts & Authorities.",
    metadata: {
      title: "Criminal & Regulatory Litigation | Aashya Legal",
      description: "Defence and representation in criminal and regulatory matters.",
    },
  },
  {
    slug: "alternative-dispute-resolution",
    title: "Alternative Dispute Resolution",
    category: "Disputes & Litigation",
    description: "Arbitration, mediation, conciliation, and pre-litigation settlement.",
    content: "We facilitate Arbitration, Mediation, Conciliation, Negotiation, Pre-Litigation Settlement, Commercial Dispute Resolution, Settlement Documentation, and Arbitration-Related Court Proceedings.",
    metadata: {
      title: "Alternative Dispute Resolution | Aashya Legal",
      description: "Arbitration, mediation, and out-of-court settlements.",
    },
  },
  {
    slug: "legal-notices-pre-litigation-advisory",
    title: "Legal Notices & Pre-Litigation Advisory",
    category: "Disputes & Litigation",
    description: "Demand notices, pre-litigation strategy, and dispute assessment.",
    content: "Our pre-litigation services include Demand Notices, Legal Notices, Replies to Legal Notices, Recovery Notices, Contractual Dispute Notices, Pre-Litigation Strategy, Settlement Negotiations, Dispute Assessment, and Recovery Strategy.",
    metadata: {
      title: "Legal Notices & Pre-Litigation | Aashya Legal",
      description: "Drafting legal notices and formulating pre-litigation strategies.",
    },
  },
  {
    slug: "real-estate-property-leasing",
    title: "Real Estate, Property & Leasing",
    category: "Property & Transactions",
    description: "Property transactions, due diligence, and leasing agreements.",
    content: "We advise on Property Transactions, Sale & Purchase Documentation, Property Due Diligence, Title Verification, Lease & Licence Agreements, Commercial Leasing, Property Documentation, Property Disputes, Landlord-Tenant Disputes, and Property-Related Legal Advisory.",
    metadata: {
      title: "Real Estate, Property & Leasing | Aashya Legal",
      description: "Real estate transactions, leasing, and property disputes.",
    },
  },
  {
    slug: "legal-research-drafting",
    title: "Legal Research, Drafting & Documentation",
    category: "Property & Transactions",
    description: "Legal opinions, case briefs, and comprehensive legal drafting.",
    content: "Our team provides Legal Research, Legal Opinions, Petitions, Applications, Written Statements & Replies, Written Submissions, Agreements & Contracts, Legal Notices, Case Briefs, and Pleadings & Court Documents.",
    metadata: {
      title: "Legal Research & Drafting | Aashya Legal",
      description: "Comprehensive legal research and document drafting services.",
    },
  }
];

export const practiceCategories = Array.from(new Set(practiceAreas.map(p => p.category)));
