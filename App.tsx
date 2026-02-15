
import React, { useState } from 'react';
import { Hero, WhyChoose, Services, SocialProof, FAQSection, Footer, Navbar } from './components/Sections';
import { MarkdownExport } from './components/MarkdownExport';
import { Review, FAQ, Service } from './types';

const REVIEWS: Review[] = [
  {
    author: "Jessie Hollett",
    text: "Amazing service! Our carpets look and smell brand new. The attention to detail was incredible, and you can really tell they care about their work as a team.",
    rating: 5
  },
  {
    author: "Elizabeth Lambert",
    text: "I love that Velvo is a husband and wife team. It made me feel so much more comfortable having them in my home. They were professional, punctual, and did a fantastic job on our sectional!",
    rating: 5
  }
];

const SERVICES: Service[] = [
  {
    title: "Carpet Cleaning",
    description: "Deep-extraction steam cleaning that removes allergens, dirt, and tough stains. We don't just clean the surface; we restore your carpet's life with professional-grade equipment.",
    icon: "🏠"
  },
  {
    title: "Upholstery Cleaning",
    description: "Revitalize your sofas, chairs, and sectionals. Our specialized tools safely deep-clean delicate fabrics, removing odors and oils to bring back that 'new furniture' feel.",
    icon: "🛋️"
  },
  {
    title: "Pet Stain Removal",
    description: "Life happens, and we're here to fix it. Our pet-safe, enzyme-based treatments neutralize odors and break down stains at the molecular level, leaving your home fresh and safe.",
    icon: "🐾"
  }
];

const FAQS: FAQ[] = [
  {
    question: "How long does it take for my carpets to dry?",
    answer: "Thanks to our high-performance extraction equipment, most carpets dry within 4 to 6 hours. Factors like humidity and air circulation can affect this, but we use high-velocity air movers during the job to speed up the process."
  },
  {
    question: "Are your cleaning products safe for my kids and pets?",
    answer: "Absolutely. We use non-toxic, eco-friendly cleaning solutions that are safe for your entire family. We are homeowners and pet owners ourselves, so safety is our top priority."
  },
  {
    question: "How do I get a quote, and are there hidden fees?",
    answer: "Transparency is key at Velvo. You can get a free quote via our HubSpot form or by calling us. The price we quote is the price you pay—no hidden surcharges for deep cleaning or travel."
  }
];

const App: React.FC = () => {
  const [view, setView] = useState<'preview' | 'markdown'>('preview');

  return (
    <div className="min-h-screen">
      <Navbar view={view} setView={setView} />
      
      {view === 'preview' ? (
        <main>
          <Hero />
          <WhyChoose />
          <Services services={SERVICES} />
          <SocialProof reviews={REVIEWS} />
          <FAQSection faqs={FAQS} />
          <Footer />
        </main>
      ) : (
        <MarkdownExport 
          services={SERVICES} 
          reviews={REVIEWS} 
          faqs={FAQS} 
        />
      )}
    </div>
  );
};

export default App;
