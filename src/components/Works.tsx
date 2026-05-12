import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragged, setDragged] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!selectedWork) return;
    setCurrentIndex((prev) => (prev + 1) % selectedWork.gallery.length);
  };

  const handlePrev = () => {
    if (!selectedWork) return;
    setCurrentIndex((prev) => (prev - 1 + selectedWork.gallery.length) % selectedWork.gallery.length);
  };

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
                onClick={() => {
                  if (!dragged) {
                    setSelectedWork(work);
                    setCurrentIndex(0);
                  }
                }}
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
                    <p className="text-[10px] text-orange-500 font-medium font-outfit uppercase tracking-[0.5em] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">Cases / 0{idx + 1}</p>
                    <h3 className="text-2xl md:text-3xl font-display text-white group-hover:text-orange-500 transition-colors uppercase tracking-[-0.05em] leading-none">
                      {work.title.split(' ').map((word, i) => i === work.title.split(' ').length - 1 ? (
                        <span key={i} className="italic font-serif normal-case tracking-normal block mt-1 opacity-50 group-hover:opacity-100 transition-opacity">{word}</span>
                      ) : <span key={i}>{word} </span>)}
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
            className="w-full h-screen md:h-[90vh] flex flex-col pt-24 md:pt-28 pb-8"
          >
            {/* Header / Sub-Nav */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-8 md:px-16 gap-6 shrink-0">
              <div className="text-center md:text-left">
                <p className="text-[10px] text-orange-500 uppercase tracking-[0.5em] font-medium mb-2 font-outfit">Selected Works / Archive</p>
                <motion.h2 
                  layoutId={`title-${selectedWork.id}`}
                  className="font-display text-5xl md:text-[80px] uppercase tracking-tighter leading-[0.8] mb-2"
                >
                  {selectedWork.title.split(' ')[0]} <span className="gradient-text italic font-serif normal-case tracking-normal">{selectedWork.title.split(' ').slice(1).join(' ')}</span>
                </motion.h2>
              </div>

              <button 
                onClick={() => setSelectedWork(null)}
                className="w-16 h-16 flex items-center justify-center bg-white/5 hover:bg-white text-white hover:text-black rounded-full transition-all border border-white/10 group backdrop-blur-3xl"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-700" />
              </button>
            </div>

            {/* Slider Content Area - Improved sizing and spacing */}
            <div className="flex-1 w-full relative group/slider flex flex-col items-center justify-center min-h-0 px-4">
              <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 35 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -100) handleNext();
                      else if (info.offset.x > 100) handlePrev();
                    }}
                    onClick={() => setSelectedImage(selectedWork.gallery[currentIndex].img)}
                    className="w-full h-full max-h-[45vh] md:max-h-[55vh] aspect-video md:aspect-[16/9] bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing group/img"
                  >
                    <img 
                      src={selectedWork.gallery[currentIndex].img} 
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-1000" 
                      alt="" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-10 left-10 text-left pointer-events-none">
                        <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-orange-500 font-medium font-outfit uppercase tracking-[0.5em] mb-2"
                      >
                        Frame {currentIndex + 1} / {selectedWork.gallery.length}
                      </motion.p>
                      <motion.h4 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display text-white uppercase tracking-tighter leading-none"
                      >
                        {selectedWork.gallery[currentIndex].title.split(' ').length > 1 ? (
                          <>
                            {selectedWork.gallery[currentIndex].title.split(' ')[0]} <span className="italic font-serif normal-case tracking-normal opacity-40">{selectedWork.gallery[currentIndex].title.split(' ').slice(1).join(' ')}</span>
                          </>
                        ) : selectedWork.gallery[currentIndex].title}
                      </motion.h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Desktop Buttons - More intentional design */}
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute -left-6 md:-left-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 hover:bg-orange-500 text-white rounded-full border border-white/10 transition-all opacity-0 group-hover/slider:opacity-100 z-10 hidden xl:flex hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute -right-6 md:-right-4 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 hover:bg-orange-500 text-white rounded-full border border-white/10 transition-all opacity-0 group-hover/slider:opacity-100 z-10 hidden xl:flex hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                </button>
              </div>

              {/* Navigation Indicators - Improved rhythm */}
              <div className="shrink-0 flex flex-col items-center gap-6 mt-8 mb-12">
                <div className="flex gap-2.5">
                  {selectedWork.gallery.map((_, idx) => {
                    // Only show dots around current index for long galleries
                    const isNear = Math.abs(idx - currentIndex) < 3 || idx === 0 || idx === selectedWork.gallery.length - 1;
                    if (!isNear) return null;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 transition-all duration-700 rounded-full ${
                          idx === currentIndex ? "w-12 bg-orange-500" : "w-3 bg-white/10 hover:bg-white/30"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center gap-12">
                   <button 
                    onClick={handlePrev}
                    className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors flex items-center gap-2 group/btn font-medium font-outfit"
                   >
                     <ChevronLeft className="w-3 h-3 group-hover/btn:-translate-x-1 transition-transform" /> PREV
                   </button>
                   <div className="text-[10px] uppercase tracking-[0.5em] font-medium font-outfit text-white/30">
                     Swipe to Explore
                   </div>
                   <button 
                    onClick={handleNext}
                    className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors flex items-center gap-2 group/btn font-medium font-outfit"
                   >
                     NEXT <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
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
