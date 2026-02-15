
import React from 'react';
import { Review, FAQ, Service } from '../types';

export const Navbar: React.FC<{ view: string, setView: (v: 'preview' | 'markdown') => void }> = ({ view, setView }) => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#66c8b8]/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#075166] rounded-lg flex items-center justify-center text-white font-bold">V</div>
        <span className="text-xl font-bold tracking-tight text-[#075166] uppercase">Velvo</span>
      </div>
      <div className="flex bg-[#e9f4f5] p-1 rounded-lg">
        <button 
          onClick={() => setView('preview')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'preview' ? 'bg-white shadow-sm text-[#075166]' : 'text-slate-500 hover:text-[#075166]'}`}
        >
          Visual Preview
        </button>
        <button 
          onClick={() => setView('markdown')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${view === 'markdown' ? 'bg-white shadow-sm text-[#075166]' : 'text-slate-500 hover:text-[#075166]'}`}
        >
          HubSpot Markdown
        </button>
      </div>
    </div>
  </nav>
);

export const Hero: React.FC = () => (
  <section className="relative py-20 lg:py-32 bg-[#075166] overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Clean carpet" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#075166] via-[#075166]/90 to-transparent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1 rounded-full bg-[#66c8b8]/20 text-[#66c8b8] text-sm font-semibold mb-6 border border-[#66c8b8]/30">
          Professional Cleaning • 4.9 Stars on Google
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Premium Carpet & Upholstery Cleaning in <span className="text-[#66c8b8]">Charlotte & Fort Mill</span>
        </h1>
        <p className="text-xl text-[#e9f4f5]/80 mb-10 leading-relaxed">
          High-performance cleaning delivered by a husband & wife team. We bring the deep-clean results your home deserves with the punctuality and trust you expect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-[#66c8b8] hover:bg-[#57b3a4] text-[#075166] rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#66c8b8]/20 transform hover:-translate-y-1">
            Get Your Free Quote
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-lg backdrop-blur-sm transition-all">
            View Our Results
          </button>
        </div>
      </div>
    </div>
  </section>
);

export const WhyChoose: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <Feature 
          title="Husband & Wife Team" 
          desc="The trust of a family-run business with extreme attention to detail." 
          icon="🤝"
        />
        <Feature 
          title="High-Performance Tools" 
          desc="Professional, heavy-duty extraction for a deeper, faster-drying clean." 
          icon="⚡"
        />
        <Feature 
          title="Always Punctual" 
          desc="We value your time. We arrive on schedule, every single time." 
          icon="⏰"
        />
        <Feature 
          title="Pet & Child Safe" 
          desc="Eco-friendly, non-toxic solutions for a healthy home environment." 
          icon="🛡️"
        />
      </div>
    </div>
  </section>
);

const Feature: React.FC<{ title: string, desc: string, icon: string }> = ({ title, desc, icon }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-[#e9f4f5] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-[#66c8b8]/20">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#075166] mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export const Services: React.FC<{ services: Service[] }> = ({ services }) => (
  <section className="py-24 bg-[#e9f4f5]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#075166] mb-4 tracking-tight">Expert Local Services</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">From stain removal to full home restoration, we handle it all with care.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-[#66c8b8]/10 shadow-xl shadow-[#075166]/5 hover:border-[#66c8b8] transition-colors group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
            <h3 className="text-2xl font-bold text-[#075166] mb-4">{s.title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{s.description}</p>
            <a href="#" className="text-[#075166] font-bold inline-flex items-center hover:text-[#66c8b8] transition-colors">
              Learn More 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SocialProof: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
  <section className="py-24 bg-white border-y border-[#66c8b8]/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3">
          <div className="inline-flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#66c8b8] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-[#075166] mb-6">What Your Neighbors Are Saying</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            As a local husband & wife team, our reputation is everything. We treat every home as if it were our own.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#e9f4f5] rounded-full flex items-center justify-center text-[#075166] font-bold border border-[#66c8b8]/20">G</div>
            <div>
              <p className="font-bold text-[#075166]">4.9/5 Average Rating</p>
              <p className="text-sm text-slate-500">Based on Google Reviews</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 bg-[#e9f4f5]/50 rounded-3xl italic relative border border-white">
              <span className="absolute -top-4 left-8 text-6xl text-[#66c8b8]/20">"</span>
              <p className="text-slate-700 mb-6 relative z-10 leading-relaxed">{r.text}</p>
              <p className="font-bold text-[#075166]">— {r.author}</p>
              <p className="text-sm text-[#66c8b8] font-semibold uppercase tracking-wider mt-1">Verified Customer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => (
  <section className="py-24 bg-[#e9f4f5]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-[#075166] mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-[#66c8b8]/10 shadow-sm">
            <h3 className="text-xl font-bold text-[#075166] mb-4">{f.question}</h3>
            <p className="text-slate-600 leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-[#075166] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Velvo</h3>
          <p className="text-[#e9f4f5]/70 leading-relaxed">
            The #1 choice for professional carpet and upholstery cleaning in Charlotte and Fort Mill. 
            Experience the family-owned difference today.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Service Areas</h4>
          <ul className="text-[#e9f4f5]/70 space-y-3">
            <li className="hover:text-[#66c8b8] cursor-default transition-colors">Charlotte, NC</li>
            <li className="hover:text-[#66c8b8] cursor-default transition-colors">Fort Mill, SC</li>
            <li className="hover:text-[#66c8b8] cursor-default transition-colors">Rock Hill, SC</li>
            <li className="hover:text-[#66c8b8] cursor-default transition-colors">Ballantyne</li>
            <li className="hover:text-[#66c8b8] cursor-default transition-colors">Pineville</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <p className="text-[#e9f4f5]/70 mb-4">Ready for a deeper clean?</p>
          <button className="px-6 py-3 bg-[#66c8b8] hover:bg-[#57b3a4] text-[#075166] rounded-lg font-bold transition-all w-full md:w-auto">
            Get a Quote Now
          </button>
        </div>
      </div>
      <div className="pt-8 border-t border-[#66c8b8]/20 text-center text-[#e9f4f5]/50 text-sm">
        <p>© {new Date().getFullYear()} Velvo Cleaning Services. Serving the Charlotte Metro Area with Excellence.</p>
      </div>
    </div>
  </footer>
);
