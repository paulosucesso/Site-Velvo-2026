
import React, { useState } from 'react';
import { Review, FAQ, Service } from '../types';

interface Props {
  reviews: Review[];
  faqs: FAQ[];
  services: Service[];
}

export const MarkdownExport: React.FC<Props> = ({ reviews, faqs, services }) => {
  const [copied, setCopied] = useState(false);

  const markdown = `
# SEO Meta Tags
**Title:** Velvo | Carpet & Upholstery Cleaning Charlotte NC & Fort Mill SC
**Description:** High-performance carpet cleaning delivered by a husband & wife team in Charlotte and Fort Mill. Pet-safe, 4.9 stars on Google, and fast drying times. Get your free quote today!

---

# Hero Section
**H1:** Professional Carpet & Upholstery Cleaning You Can Trust
**Subtitle:** High-performance cleaning for homes in Charlotte, NC and Fort Mill, SC. Delivered by your local husband & wife team.
**CTA Button:** [Get Your Free Quote]

---

# Why Choose Velvo
1. **Husband & Wife Team:** The security and trust of a family-run business with extreme attention to detail.
2. **High-Performance Tools:** Professional, heavy-duty extraction for a deeper, faster-drying clean.
3. **Always Punctual:** We value your time. We arrive on schedule, every single time.
4. **Pet & Child Safe:** Eco-friendly, non-toxic solutions for a healthy home environment.

---

# Services Module
${services.map(s => `
### ${s.title}
${s.description}
`).join('\n')}

---

# Social Proof (Testimonials)
*   **Jessie Hollett:** "Amazing service! Our carpets look and smell brand new. The attention to detail was incredible, and you can really tell they care about their work as a team."
*   **Elizabeth Lambert:** "I love that Velvo is a husband & wife team. It made me feel so much more comfortable having them in my home. They were professional, punctual, and did a fantastic job on our sectional!"

---

# Conversion FAQ
${faqs.map(f => `
**Q: ${f.question}**
A: ${f.answer}
`).join('\n')}

---

# Footer (Authority Statement)
**Velvo Cleaning Services:** The #1 choice for professional carpet and upholstery cleaning in Charlotte and Fort Mill. Locally owned, family-operated, and committed to excellence. Serving Charlotte, Fort Mill, Ballantyne, and Pineville.
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 py-16">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#66c8b8]/20 overflow-hidden">
        <div className="p-6 bg-[#075166] flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">HubSpot Markdown Export</h2>
          <button 
            onClick={handleCopy}
            className="px-6 py-2 bg-[#66c8b8] hover:bg-[#57b3a4] text-[#075166] rounded-xl font-bold transition-all flex items-center gap-2"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                Copy to Clipboard
              </>
            )}
          </button>
        </div>
        <div className="p-8">
          <p className="text-slate-500 mb-6 text-sm">
            This content is formatted in Markdown for easy copying into HubSpot CMS rich text modules or blog posts.
          </p>
          <pre className="bg-[#e9f4f5] p-6 rounded-xl border border-[#66c8b8]/20 text-[#075166] whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto">
            {markdown}
          </pre>
        </div>
      </div>
    </div>
  );
};
