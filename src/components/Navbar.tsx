import { motion } from "motion/react";

const navItems = ["Home", "Work", "Service", "Contact"];

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="rgb-border rounded-full p-[2px]"
      >
        <nav className="flex items-center space-x-4 md:space-x-8 px-6 md:px-8 py-3 rounded-full bg-black/90 backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item.toLowerCase())}
              className={`text-sm font-medium transition-all relative px-2 py-1 ${
                activeTab === item.toLowerCase() ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {item}
              {activeTab === item.toLowerCase() && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
