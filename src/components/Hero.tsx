import { motion } from "motion/react";

const members = [
  { name: "Krayzie Bone", role: "The Flow", img: "https://picsum.photos/seed/krayzie/600/800" },
  { name: "Layzie Bone", role: "The Heart", img: "https://picsum.photos/seed/layzie/600/800" },
  { name: "Bizzy Bone", role: "The Energy", img: "https://picsum.photos/seed/bizzy/600/800" },
  { name: "Wish Bone", role: "The Soul", img: "https://picsum.photos/seed/wish/600/800" },
  { name: "Flesh-n-Bone", role: "The Rhythm", img: "https://picsum.photos/seed/flesh/600/800" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-eternal-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-eternal-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-6 text-gradient-silver"
        >
          ETERNAL LEGACY
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light tracking-widest uppercase"
        >
          Cleveland's Finest. The World's Greatest Harmony.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 container mx-auto px-4">
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl glass border-white/5"
          >
            <img 
              src={member.img} 
              alt={member.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eternal-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="font-display text-sm md:text-lg font-bold text-white">{member.name}</h3>
              <p className="text-[10px] md:text-xs text-eternal-silver uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
