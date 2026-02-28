import { motion } from "motion/react";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-eternal-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-3xl font-black text-gradient-silver mb-4">
              BTNH<span className="text-eternal-purple">99</span>
            </span>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Celebrating the legacy of Cleveland's finest since 1991. Eternal Harmony for the world.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h4 className="text-xs font-bold tracking-[0.4em] text-eternal-silver uppercase">Follow the Harmony</h4>
            <div className="flex items-center gap-8">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#4c1d95" }}
                  className="text-gray-400 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button className="glass-silver px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all mb-4">
              JOIN THE MAFIA
            </button>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              © 2026 Bone Thugs-N-Harmony. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
