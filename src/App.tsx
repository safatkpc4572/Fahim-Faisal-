/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, ArrowRight, Instagram, Facebook, MessageCircle, Layers } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

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
      
      {/* Social Media Links - Top Right */}
      <AnimatePresence>
        {activeTab === "home" && (
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            className="fixed top-8 right-8 z-50 hidden md:flex items-center gap-4"
          >
            {[
              { icon: <Instagram className="w-4 h-4" />, href: "#", name: "Instagram" },
              { icon: <Facebook className="w-4 h-4" />, href: "#", name: "Facebook" },
              { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/8801868503159", name: "WhatsApp" },
              { icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M9 13c.5 0 1-.5 1-1s-.5-1-1-1H7v2h2zM9 17c.5 0 1-.5 1-1s-.5-1-1-1H7v2h2z" />
                  <path d="M12 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4" />
                  <path d="M15 13h4" />
                  <path d="M7 9v10" />
                  <path d="M15 10c0-1 1-1 2-1s2 0 2 1" />
                </svg>
              ), href: "#", name: "Behance" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1, backgroundColor: "rgb(249 115 22)" }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all text-white/40 hover:text-white"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
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
                      className="group p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-all hover:-translate-y-2 backdrop-blur-3xl relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 text-white/5 text-6xl font-black">{i + 1}</div>
                      <div className="text-3xl mb-6 text-orange-500">{s.icon}</div>
                      <h3 className="text-xl font-display uppercase mb-3 tracking-wider">{s.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed font-outfit">{s.desc}</p>
                      <div className="mt-8 pt-4 border-t border-white/5">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-medium font-outfit text-white/20 group-hover:text-orange-500 transition-colors">Learn More →</span>
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
              className="h-full w-full overflow-y-auto custom-scrollbar py-24 md:py-0 relative"
            >
              <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
                <div className="absolute inset-0 filter-goo opacity-40">
                  <motion.div 
                    animate={{ 
                      x: [0, 150, -100, 0], 
                      y: [0, -100, 150, 0],
                      scale: [1, 1.4, 0.7, 1] 
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-orange-600/30 rounded-full blur-[80px]" 
                  />
                  <motion.div 
                    animate={{ 
                      x: [0, -200, 100, 0], 
                      y: [0, 150, -100, 0],
                      scale: [1, 0.8, 1.3, 1] 
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[10%] w-[50rem] h-[50rem] bg-cyan-600/20 rounded-full blur-[100px]" 
                  />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.03 }}
                  transition={{ duration: 2 }}
                  className="absolute -top-10 -left-10 font-display text-[25vw] uppercase leading-none text-white whitespace-nowrap"
                >
                  Contact
                </motion.div>
              </div>

              {/* SVG Filter for Gooey Effect */}
              <svg className="hidden">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>

              <div className="min-h-full w-full flex items-center justify-center px-6 md:px-12 py-16 relative z-10">
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
                  {/* Left Column: Evangelism */}
                  <div className="space-y-16">
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.5em] text-orange-500 font-medium font-outfit backdrop-blur-3xl"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse" />
                        Status: Forming Ideas
                      </motion.div>
                      
                      <motion.h2 
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         className="font-display text-7xl lg:text-[140px] uppercase leading-[0.8] tracking-tighter"
                      >
                        Let's form <span className="block gradient-text italic font-serif normal-case tracking-normal py-4">Liquid Gold</span> together.
                      </motion.h2>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/40 font-outfit text-lg md:text-xl max-w-xl leading-relaxed tracking-tight"
                      >
                        The best visions aren't static—they evolve. Let's merge your goals with my craft to create something visceral and enduring.
                      </motion.p>
                    </div>

                    <div className="flex flex-wrap gap-12 sm:gap-20">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="space-y-3"
                        >
                          <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-medium font-outfit">Direct Drop</p>
                          <a href="mailto:safatkpc4572@gmail.com" className="text-xl md:text-2xl font-outfit hover:text-orange-500 transition-all tracking-tight block">safatkpc4572@gmail.com</a>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="space-y-3"
                        >
                          <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-medium font-outfit">Current Base</p>
                          <p className="text-xl md:text-2xl font-outfit tracking-tight text-white/80">Dhaka, Bangladesh</p>
                        </motion.div>
                    </div>
                  </div>

                  {/* Right Column: Physical Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    className="relative"
                  >
                    <div className="absolute -inset-10 bg-orange-500/10 blur-[120px] rounded-full -z-10 group-hover:bg-orange-500/20 transition-all duration-1000" />
                    
                    <div className="relative p-1 bg-linear-to-b from-white/10 via-white/5 to-transparent rounded-[3.5rem] overflow-hidden group">
                      <div className="relative p-10 md:p-16 bg-zinc-950 rounded-[3.4rem] space-y-16 backdrop-blur-3xl border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
                        
                        <div className="space-y-6">
                           <div className="flex items-center gap-4">
                              <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ x: "-100%" }}
                                  whileInView={{ x: "0%" }}
                                  transition={{ duration: 1.5, ease: "circOut" }}
                                  className="h-full w-full bg-orange-500" 
                                />
                              </div>
                              <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-medium font-outfit">The Bridge</span>
                           </div>
                           <h3 className="font-display text-5xl md:text-6xl uppercase tracking-tighter leading-none">Start the <br/> <span className="italic font-serif normal-case opacity-50">Reaction</span></h3>
                        </div>

                        <div className="space-y-6">
                           <motion.button 
                              whileHover={{ y: -8, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                const subject = encodeURIComponent("Project Vision | Collab");
                                const body = encodeURIComponent("Hello Fahim,\n\nI have a project in mind...");
                                window.location.href = `mailto:safatkpc4572@gmail.com?subject=${subject}&body=${body}`;
                              }}
                              className="w-full h-28 bg-white hover:bg-orange-500 text-black hover:text-white rounded-[2rem] flex items-center justify-between px-12 transition-all duration-700 group/btn shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-orange-500/40 relative overflow-hidden"
                           >
                              <div className="relative z-10 flex items-center gap-6">
                                <Mail className="w-6 h-6 stroke-[2.5]" />
                                <span className="font-display text-xl uppercase tracking-wider pt-1">Email Vision</span>
                              </div>
                              <ArrowRight className="w-8 h-8 relative z-10 group-hover/btn:translate-x-3 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                           </motion.button>

                           <motion.button 
                              whileHover={{ y: -8, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                window.open(`https://wa.me/8801868503159`, '_blank');
                              }}
                              className="w-full h-28 bg-zinc-900 border border-white/10 hover:border-emerald-500/50 text-white rounded-[2rem] flex items-center justify-between px-12 transition-all duration-700 group/btn2 overflow-hidden"
                           >
                              <div className="flex items-center gap-6">
                                <div className="relative">
                                   <div className="absolute -inset-4 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover/btn2:opacity-100 transition-opacity animate-pulse" />
                                   <MessageSquare className="w-6 h-6 group-hover/btn2:text-emerald-500 transition-colors duration-700" />
                                </div>
                                <span className="font-display text-xl uppercase tracking-wider pt-1">Fast Signal</span>
                              </div>
                              <ArrowRight className="w-8 h-8 text-white/10 group-hover/btn2:text-white group-hover/btn2:translate-x-3 transition-all duration-700" />
                           </motion.button>
                        </div>

                        <div className="pt-8 flex items-end justify-between border-t border-white/5">
                           <div className="space-y-4">
                              <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-medium font-outfit">Est. Response</p>
                              <div className="flex items-center gap-3">
                                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                                 <span className="text-sm text-white/60 font-outfit italic tracking-tight">Under 2 Hours</span>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-[10px] text-white/10 uppercase tracking-[0.5em] font-medium font-outfit mb-2">Portfolio 2024</p>
                              <div className="h-6 w-px bg-white/10 ml-auto" />
                           </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-4 left-8 right-8 flex justify-between items-end pointer-events-none">
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
