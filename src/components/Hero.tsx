import { motion } from "motion/react";
import { Send, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 relative group"
      >
        {/* Profile Image Container */}
        <div className="w-48 h-48 md:w-56 md:h-56 relative border-4 border-zinc-900 rounded-3xl overflow-hidden bg-zinc-800 rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
          <img
            src="https://i.postimg.cc/W1yqHmbN/bc.png"
            alt="Fahim Faisal"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        {/* Shadow effect */}
        <div className="absolute -inset-4 bg-orange-500/10 blur-3xl -z-10 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-7xl md:text-[160px] uppercase font-bold tracking-tighter mb-4 leading-[0.8] drop-shadow-2xl">
          Fahim Faisal
        </h1>
        <p className="font-outfit text-white/40 text-lg md:text-xl font-light tracking-[0.4em] uppercase">
          Graphics Design & UI/UX Designer
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => {
              const msg = encodeURIComponent("Hello Fahim, I want to discuss about my project!");
              window.open(`https://wa.me/8801868503159?text=${msg}`, '_blank');
            }}
            className="flex items-center gap-3 px-8 py-4 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all border border-white/5 group"
          >
            <Send className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="font-medium">Let's Meet Together</span>
          </button>
          
          <button className="flex items-center gap-3 px-8 py-4 relative group">
            <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-cyan-500 to-emerald-500 rounded-xl opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="relative flex items-center gap-3">
              <Download className="w-5 h-5 text-white" />
              <span className="font-medium text-white">Check My CV</span>
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
