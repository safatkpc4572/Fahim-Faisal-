import { motion } from "motion/react";
import { Send, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 select-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full font-display text-[12vw] uppercase leading-none text-white whitespace-nowrap"
          style={{ x: "-5%", y: "10%" }}
        >
          Creative Visionary
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-full font-display text-[12vw] uppercase leading-none text-white whitespace-nowrap text-right"
          style={{ x: "5%", y: "-10%" }}
        >
          Product Design
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10 relative group"
      >
        {/* Profile Image Container */}
        <div className="w-40 h-40 md:w-48 md:h-48 relative border-4 border-zinc-900 rounded-[2rem] overflow-hidden bg-zinc-800 rotate-6 group-hover:rotate-0 transition-transform duration-700 shadow-2xl">
          <img
            src="https://i.postimg.cc/W1yqHmbN/bc.png"
            alt="Fahim Faisal"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        {/* Shadow effect */}
        <div className="absolute -inset-6 bg-orange-500/10 blur-3xl -z-10 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-3 mb-8">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="font-outfit text-orange-500 text-[10px] md:text-xs font-medium tracking-[0.5em] uppercase"
          >
            Multi-Disciplinary Designer
          </motion.p>
          <h1 className="font-display text-6xl md:text-[120px] uppercase leading-[0.8] tracking-tight flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white inline-block"
            >
              Fahim
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="gradient-text italic font-serif normal-case tracking-normal"
            >
              Faisal
            </motion.span>
          </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-outfit text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed tracking-tight"
        >
          Specializing in <span className="text-white/80">Visual Identity</span> and <span className="text-white/80">Digital Experiences</span> that bridge the gap between imagination and reality.
        </motion.p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => {
              const msg = encodeURIComponent("Hello Fahim, I want to discuss about my project!");
              window.open(`https://wa.me/8801868503159?text=${msg}`, '_blank');
            }}
            className="flex items-center gap-3 px-8 py-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all border border-white/5 group"
          >
            <Send className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="font-outfit font-medium text-sm uppercase tracking-wider">Let's Meet Together</span>
          </button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 relative group overflow-hidden rounded-xl border border-white/10"
          >
            {/* Animated RGB Background */}
            <motion.div 
              animate={{
                background: [
                  "linear-gradient(45deg, #ff3d00, #ffea00, #2e7d32, #00e5ff, #651fff, #d500f9, #ff3d00)",
                  "linear-gradient(45deg, #d500f9, #ff3d00, #ffea00, #2e7d32, #00e5ff, #651fff, #d500f9)",
                  "linear-gradient(45deg, #651fff, #d500f9, #ff3d00, #ffea00, #2e7d32, #00e5ff, #651fff)",
                  "linear-gradient(45deg, #ff3d00, #ffea00, #2e7d32, #00e5ff, #651fff, #d500f9, #ff3d00)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 opacity-100 group-hover:opacity-100"
            />
            
            {/* Pulsing Glow */}
            <motion.div 
              animate={{
                boxShadow: [
                  "0 0 0px rgba(255,0,0,0.5)",
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 0px rgba(255,0,0,0.5)",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-xl"
            />

            <div className="relative flex items-center gap-3 z-10">
              <Download className="w-4 h-4 text-white" />
              <span className="font-outfit font-medium text-sm uppercase tracking-wider text-white shadow-sm">Check My CV</span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
