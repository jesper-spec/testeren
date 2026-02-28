import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Memorial() {
  return (
    <section id="memorial" className="py-32 relative bg-gradient-to-b from-eternal-black to-[#0a0a0a]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-block"
        >
          <div className="w-20 h-20 rounded-full glass-silver flex items-center justify-center text-eternal-purple">
            <Heart size={40} fill="currentColor" />
          </div>
        </motion.div>

        <h2 className="text-4xl md:text-7xl font-display font-black text-gradient-silver mb-6">THE CROSSROADS</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light italic mb-16">
          "And I'm gonna miss everybody... I'm gonna miss everybody."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-eternal-purple/30 mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://picsum.photos/seed/eazye/400/400" alt="Eazy-E" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">EAZY-E</h3>
            <p className="text-eternal-silver text-xs tracking-widest uppercase">The Godfather of G-Funk</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-eternal-blue/30 mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://picsum.photos/seed/tupac/400/400" alt="Tupac" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">2PAC</h3>
            <p className="text-eternal-silver text-xs tracking-widest uppercase">The Eternal Poet</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-500/30 mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://picsum.photos/seed/biggie/400/400" alt="Notorious BIG" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">BIGGIE</h3>
            <p className="text-eternal-silver text-xs tracking-widest uppercase">The King of NY</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-8 glass rounded-3xl max-w-2xl mx-auto"
        >
          <p className="text-gray-300 leading-relaxed">
            A tribute to the legends who paved the way. Bone Thugs-N-Harmony continues to carry the torch for the fallen, 
            keeping their spirits alive through the harmony that changed the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
