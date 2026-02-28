import { motion } from "motion/react";
import { Star, Mic2, Award } from "lucide-react";

const newsItems = [
  {
    title: "Hollywood Walk of Fame 2026",
    date: "JAN 15, 2026",
    category: "Milestone",
    icon: Star,
    content: "The legendary group is officially set to receive their star on the Hollywood Walk of Fame in Summer 2026. A long-overdue honor for the Cleveland pioneers."
  },
  {
    title: "New Album: 'Eternal Harmony'",
    date: "FEB 02, 2026",
    category: "Music",
    icon: Mic2,
    content: "Krayzie, Layzie, Bizzy, Wish, and Flesh have reunited in the studio for their first full-length project in over a decade. Expect that classic 90s flow with a modern twist."
  },
  {
    title: "Grammy Lifetime Achievement",
    date: "FEB 20, 2026",
    category: "Award",
    icon: Award,
    content: "Rumors are swirling about a special tribute performance at the 2026 Grammys, celebrating 30+ years of 'E. 1999 Eternal'."
  }
];

export function News() {
  return (
    <section id="news" className="py-24 bg-eternal-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-gradient-silver mb-16 text-center">LATEST NEWS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-silver p-8 rounded-3xl flex flex-col h-full group hover:border-eternal-purple/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-eternal-purple/20 flex items-center justify-center text-eternal-purple group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{item.date}</span>
              </div>
              
              <span className="text-eternal-blue text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-eternal-silver transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {item.content}
              </p>
              
              <button className="mt-8 text-xs font-bold text-white flex items-center gap-2 hover:gap-4 transition-all">
                READ MORE <span className="text-eternal-purple">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
