/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [contactForm, setContactForm] = useState({ name: '', email: '', details: '' });

  const handleSendEmail = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.details) return;

    const subject = encodeURIComponent(`Project Inquiry from ${contactForm.name}`);
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nProject Details:\n${contactForm.details}`);
    const mailtoUrl = `mailto:safatkpc4572@gmail.com?subject=${subject}&body=${body}`;
    
    // Using a temporary anchor to trigger mailto reliably
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white selection:bg-orange-500/30 font-sans">
      {/* Background radial gradient */}
      <div className="fixed inset-0 -z-50 bg-black" />
      <motion.div 
        animate={{ 
          x: activeTab === 'home' ? 0 : activeTab === 'work' ? -100 : 100,
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 1, repeat: Infinity }}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-orange-500/10 blur-[160px] rounded-full -z-40" 
      />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3
            }}
            animate={{ 
              y: [null, (Math.random() * -100 - 50) + "%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="h-full w-full relative overflow-visible">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="h-full w-full overflow-y-auto custom-scrollbar py-24 md:py-0"
            >
              <Hero />
            </motion.div>
          )}

          {activeTab === "work" && (
            <motion.div
              key="work"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="h-full w-full"
            >
              <Works />
            </motion.div>
          )}

          {activeTab === "service" && (
            <motion.div
              key="service"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              className="h-full w-full overflow-y-auto custom-scrollbar py-24 md:py-0"
            >
              <div className="min-h-full w-full flex items-center justify-center p-6 md:p-8">
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                    { title: "Brand Identity", desc: "Crafting unique visual stories for modern brands.", icon: "✦" },
                    { title: "UI/UX Experience", desc: "Building intuitive interfaces for digital products.", icon: "◈" },
                    { title: "Digital Strategy", desc: "Scaling businesses through data-driven design.", icon: "❖" }
                  ].map((s, i) => (
                    <motion.div 
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-all hover:-translate-y-2 backdrop-blur-3xl relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-6 text-white/5 text-7xl font-black">{i + 1}</div>
                      <div className="text-4xl mb-8 text-orange-500">{s.icon}</div>
                      <h3 className="text-2xl font-display uppercase mb-4 tracking-wider">{s.title}</h3>
                      <p className="text-base text-white/50 leading-relaxed font-outfit">{s.desc}</p>
                      <div className="mt-10 pt-6 border-t border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 group-hover:text-orange-500 transition-colors">Learn More →</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="h-full w-full overflow-y-auto custom-scrollbar py-24 md:py-0"
            >
              <div className="min-h-full w-full flex items-center justify-center px-4 md:px-8">
                <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                  <div className="space-y-8">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-display text-5xl md:text-8xl uppercase mb-6 leading-[0.9] tracking-tighter"
                    >
                      Let's <span className="gradient-text">Meet</span> Together.
                    </motion.h2>
                    <p className="text-white/40 font-outfit text-lg leading-relaxed max-w-md">Currently available for select freelance opportunities and creative collaborations worldwide.</p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-5 group cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-500">
                          <span className="text-xl">✉</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Email Me</p>
                          <p className="text-xl font-outfit border-b border-transparent group-hover:border-orange-500/50 transition-all">safatkpc4572@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 group cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500">
                          <span className="text-xl">📍</span>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Location</p>
                          <p className="text-xl font-outfit border-b border-transparent group-hover:border-cyan-500/50 transition-all">Dhaka, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] backdrop-blur-3xl"
                  >
                    <div className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="YOUR NAME" 
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm uppercase tracking-widest focus:outline-none focus:border-orange-500/50 transition-colors" 
                      />
                      <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS" 
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm uppercase tracking-widest focus:outline-none focus:border-orange-500/50 transition-colors" 
                      />
                      <textarea 
                        rows={4} 
                        placeholder="PROJECT DETAILS" 
                        value={contactForm.details}
                        onChange={(e) => setContactForm({ ...contactForm, details: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm uppercase tracking-widest focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                      ></textarea>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <button 
                          onClick={handleSendEmail}
                          className="h-16 bg-white text-black font-display text-sm uppercase tracking-widest rounded-2xl hover:bg-zinc-200 transition-all transform active:scale-95 duration-500"
                        >
                          Send Email
                        </button>
                        <button 
                          onClick={() => {
                            const msg = encodeURIComponent("Hello Fahim, I'm reaching out from your portfolio. I'd love to discuss a potential project with you!");
                            window.open(`https://wa.me/8801868503159?text=${msg}`, '_blank');
                          }}
                          className="h-16 bg-[#25D366] text-white font-display text-sm uppercase tracking-widest rounded-2xl hover:bg-[#20ba59] shadow-2xl hover:shadow-[#25D366]/20 transition-all transform active:scale-95 duration-500 flex items-center justify-center gap-2"
                        >
                          <span className="text-xl">WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
        <div className="text-white/10 text-[10px] uppercase tracking-[0.5em] vertical-text">
          Est. 2024
        </div>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
          Portfolio of Fahim Faisal
        </p>
      </footer>
    </div>
  );
}
