import { motion } from "motion/react";
import { Music, Calendar, Disc, Heart, Newspaper, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Music },
  { name: "Tour", href: "#tour", icon: Calendar },
  { name: "Discography", href: "#discography", icon: Disc },
  { name: "Crossroads", href: "#memorial", icon: Heart },
  { name: "News", href: "#news", icon: Newspaper },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-silver rounded-2xl px-6 py-3 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-display text-2xl font-bold tracking-tighter text-gradient-silver">
              BTNH<span className="text-eternal-purple">99</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <item.icon size={14} />
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white flex items-center gap-3 py-2"
            >
              <item.icon size={18} />
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
