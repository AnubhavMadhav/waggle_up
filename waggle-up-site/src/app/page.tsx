import React from 'react';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: "Signature Spa & Grooming",
      desc: "Full baths, haircuts, and 'Tail-wag makeovers' by our experts Rahul & Kabir.",
      icon: "🛁"
    },
    {
      title: "Husky & Dense Coat Care",
      desc: "Specialized de-shedding and grooming for double-coated breeds like Huskies.",
      icon: "❄️"
    },
    {
      title: "Senior Pet Support",
      desc: "Gentle grooming and arthritis-friendly handling for your older furry family members.",
      icon: "🐕"
    },
    {
      title: "Premium Pet Store",
      desc: "Handpicked nutrition, treats, and accessories curated by our knowledgeable staff.",
      icon: "🍖"
    }
  ];

  const reviews = [
    {
      name: "Leo's Parent",
      text: "I'm extremely satisfied. The care, hygiene, and attention to detail are excellent. Special shoutout to Rahul and Kabir—they are absolutely mind-blowing with dogs.",
      tags: "Grooming"
    },
    {
      name: "Senior Dog Owner",
      text: "They do a great job here. My dog is pretty old and has arthritis, they took care of him and I have zero complaints. Rahul is a great guy!",
      tags: "Senior Care"
    },
    {
      name: "Snowie's Parent",
      text: "My husky has a very dense coat which is difficult to groom. I was out of words post grooming. He was just looking so handsome.",
      tags: "Husky Expert"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F5] font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Waggle Up Logo" className="h-10 md:h-12 w-auto" />
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-bold uppercase tracking-widest text-gray-900">
          <a href="#services" className="hover:text-[#F3B323] transition">Services</a>
          <a href="#reviews" className="hover:text-[#F3B323] transition">Reviews</a>
          <a href="#about" className="hover:text-[#F3B323] transition">About</a>
        </div>
        <button className="bg-[#1A1A1A] text-white px-4 md:px-6 py-2 rounded font-bold text-xs md:text-sm hover:bg-[#F3B323] hover:text-black transition-all">
          BOOK NOW
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 lg:flex items-center gap-16">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-5xl lg:text-7xl font-black mb-2 leading-none">
              <span className="text-[#F3B323]">WAGGLE UP</span>
            </h1>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-none text-white">
              GIVE YOUR PET THE ULTIMATE <span className="text-[#F3B323]">GLOW-UP.</span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#F3B323] text-black px-3 py-1 font-black text-lg border-2 border-black">4.6</div>
              <div>
                <div className="text-[#F3B323] text-xl">★★★★★</div>
                <p className="text-gray-300 text-[10px] font-bold tracking-widest uppercase">Google Maps Rating</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-lg font-medium">
              Expert grooming, premium treats, and the best spa day in HSR Layout. 
              We don't just groom; we care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F3B323] text-black px-10 py-5 rounded font-black text-lg hover:bg-white transition-all shadow-xl">
                BOOK AN APPOINTMENT
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded font-black text-lg hover:bg-white hover:text-black transition-all">
                EXPLORE SERVICES
              </button>
            </div>
          </div>

          {/* FIX 1: Dog Image Mobile Responsiveness */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-[#F3B323] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                alt="Happy Dog Grooming" 
                className="w-full h-[350px] md:h-[550px] object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-[#F3B323] rounded-full z-0 flex items-center justify-center shadow-lg">
               <span className="text-2xl md:text-4xl">🐾</span>
            </div>
          </div>
        </div>
      </section>

      {/* FIX 2: Trust Bar Mobile Fix (Grid on Mobile, Row on Desktop) */}
      <section className="bg-[#F3B323] py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:flex md:flex-wrap justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-black text-xl md:text-2xl text-black uppercase leading-tight">HSR SECTOR 2</span>
            <span className="text-[10px] font-bold text-black/80 uppercase tracking-widest">Location</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-black text-xl md:text-2xl text-black uppercase leading-tight">EST. 2020</span>
            <span className="text-[10px] font-bold text-black/80 uppercase tracking-widest">Establishment</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-black text-xl md:text-2xl text-black uppercase leading-tight text-center">LGBTQ+ FRIENDLY</span>
            <span className="text-[10px] font-bold text-black/80 uppercase tracking-widest">Inclusive Space</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-black text-xl md:text-2xl text-black uppercase leading-tight">RAHUL & KABIR</span>
            <span className="text-[10px] font-bold text-black/80 uppercase tracking-widest">Expert Groomers</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] mb-4">PROFESSIONAL CARE SYSTEMS</h2>
            <div className="h-2 w-24 bg-[#F3B323]"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-[#F9F9F9] border-t-4 border-[#F3B323] hover:shadow-xl transition-all group">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-xl font-black mb-4 uppercase text-gray-900">{s.title}</h3>
                <p className="text-slate-700 font-semibold text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Wall of Love */}
      <section id="reviews" className="py-20 md:py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#F3B323] mb-12 md:mb-16 text-center uppercase tracking-tighter">The Wall of Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-xl relative shadow-xl">
                <div className="text-[#F3B323] text-4xl mb-4 font-serif">“</div>
                <p className="text-gray-900 font-bold italic mb-6 leading-relaxed">
                  {r.text}
                </p>
                <div className="flex justify-between items-center border-t border-gray-200 pt-6">
                  <span className="font-black text-xs uppercase tracking-wider text-gray-900">{r.name}</span>
                  <span className="bg-[#F3B323] text-black text-[10px] font-black px-2 py-1 rounded">
                    {r.tags}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[#1A1A1A] uppercase tracking-tighter">HSR'S FAVORITE ONE-STOP PET SOLUTION</h2>
          <p className="text-base md:text-lg text-slate-800 font-medium leading-loose">
            Located in the heart of HSR Layout, Waggle Up is more than just a pet store. 
            Whether it's a "Tail-wag makeover" by our specialists Rahul and Kabir or finding 
            the perfect nutrition for your senior pet, we're dedicated to every furry baby 
            that walks through our doors.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 text-center">
        <p className="text-gray-900 text-[10px] md:text-sm font-black uppercase tracking-tighter px-4">
          © 2026 WAGGLE UP • DEPLOYED BY <span className="text-[#F3B323]">TECHNOSYS</span>
        </p>
      </footer>
    </main>
  );
}