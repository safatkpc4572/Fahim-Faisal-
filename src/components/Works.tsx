import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Branding Design",
    image: "https://i.postimg.cc/N0npsrsR/Branding.png",
    rotate: -12,
    x: -280,
    y: 20,
    zIndex: 20,
    gallery: Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      img: `https://picsum.photos/seed/brand${i}/800/800`,
      title: `Identity Vol. ${i + 1}`
    }))
  },
  {
    id: 4,
    title: "UI/UX Design",
    image: "https://i.postimg.cc/mrn8LFLQ/UI-UX-Design.png",
    rotate: 5,
    x: 0,
    y: -180,
    zIndex: 10,
    gallery: Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      img: `https://picsum.photos/seed/ui${i}/800/800`,
      title: `Interface ${i + 1}`
    }))
  },
  {
    id: 3,
    title: "Social Media Design",
    image: "https://i.postimg.cc/rpHQVtVG/Social-Media.png",
    rotate: 12,
    x: 280,
    y: 60,
    zIndex: 15,
    gallery: Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      img: `https://picsum.photos/seed/social${i}/800/800`,
      title: `Campaign ${i + 1}`
    }))
  },
  {
    id: 2,
    title: "Logo Design",
    image: "https://i.postimg.cc/7LRmHTH3/Logo-card.png",
    rotate: -4,
    x: 0,
    y: 140,
    zIndex: 40,
    gallery: Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      img: `https://picsum.photos/seed/logo${i}/800/800`,
      title: `Mark ${i + 1}`
    }))
  }
];

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragged, setDragged] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="min-h-full w-full flex flex-col items-center justify-center relative px-4 md:px-10">
      <AnimatePresence mode="wait">
        {!selectedWork ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full h-[85vh] flex items-center justify-center"
          >
            {works.map((work, idx) => (
              <motion.div
                key={work.id}
                drag
                dragConstraints={{ left: -700, right: 700, top: -450, bottom: 450 }}
                dragElastic={0.1}
                onDragStart={() => setDragged(true)}
                onDragEnd={() => setTimeout(() => setDragged(false), 100)}
                initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: [work.rotate, work.rotate + 1, work.rotate],
                  x: work.x, 
                  y: [work.y, work.y - 15, work.y]
                }}
                transition={{
                  y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  zIndex: 300,
                  rotate: 0,
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
                onClick={() => !dragged && setSelectedWork(work)}
                viewport={{ once: true }}
                style={{ zIndex: work.zIndex }}
                className="absolute w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-[0_40px_100px_rgba(0,0,0,0.9)] cursor-grab active:cursor-grabbing group hover:border-orange-500/50 transition-all duration-700"
              >
                <div className="w-full h-full relative">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/95 via-black/20 to-transparent pointer-events-none">
                    <p className="text-[10px] text-orange-500 font-black uppercase tracking-[0.5em] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">Explore Cases</p>
                    <h3 className="text-xl md:text-2xl font-display text-white group-hover:text-orange-500 transition-colors uppercase tracking-tighter leading-none">
                      {work.title}
                    </h3>
                  </div>
                  
                  {/* Subtle Border Glow on Hover */}
                  <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[2.5rem] group-hover:border-orange-500/30 transition-colors pointer-events-none" />
                </div>
              </motion.div>
            ))}
            <div className="absolute bottom-4 text-center w-full z-0 pointer-events-none">
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-[1.5em] text-white/[0.01]">Gallery</h2>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-screen md:h-[90vh] flex flex-col pt-28 md:pt-32 pb-4"
          >
            {/* Header / Sub-Nav */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-8 gap-6 md:gap-8 shrink-0">
              <div className="text-center md:text-left">
                <motion.h2 
                  layoutId={`title-${selectedWork.id}`}
                  className="font-display text-5xl md:text-8xl uppercase tracking-tighter gradient-text leading-none mb-4"
                >
                  {selectedWork.title}
                </motion.h2>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-medium">
                  {selectedWork.gallery.length} Curated Masterpieces
                </p>
              </div>

              <button 
                onClick={() => setSelectedWork(null)}
                className="w-16 h-16 flex items-center justify-center bg-white/5 hover:bg-white text-white hover:text-black rounded-full transition-all border border-white/10 group backdrop-blur-3xl"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Gallery Content Area - Fixed Height for Scrolling */}
            <div className="flex-1 w-full max-w-7xl mx-auto px-8 custom-scrollbar overflow-y-auto min-h-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-20">
                {selectedWork.gallery.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedImage(item.img)}
                    className="aspect-square bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden shadow-xl group relative cursor-pointer"
                  >
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                      alt="" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                      <p className="text-[8px] text-orange-500 font-black uppercase tracking-widest mb-1">Project {idx + 1}</p>
                      <h4 className="text-[10px] text-white font-bold uppercase tracking-tight">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Full Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 mb-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={selectedImage} className="w-full h-full object-contain bg-zinc-950" alt="" />
              
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all border border-white/10 backdrop-blur-xl group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
