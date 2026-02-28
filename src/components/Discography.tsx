import { motion } from "motion/react";

const albums = [
  { title: "Faces of Death", year: "1993", img: "https://picsum.photos/seed/facesofdeath/600/600" },
  { title: "Creepin on ah Come Up", year: "1994", img: "https://picsum.photos/seed/creepin/600/600" },
  { title: "E. 1999 Eternal", year: "1995", img: "https://picsum.photos/seed/e1999/600/600" },
  { title: "The Art of War", year: "1997", img: "https://picsum.photos/seed/artofwar/600/600" },
  { title: "BTNHResurrection", year: "2000", img: "https://picsum.photos/seed/resurrection/600/600" },
  { title: "Thug World Order", year: "2002", img: "https://picsum.photos/seed/thugworld/600/600" },
  { title: "Uni-5: The World's Enemy", year: "2010", img: "https://picsum.photos/seed/uni5/600/600" },
];

export function Discography() {
  return (
    <section id="discography" className="py-24 relative overflow-hidden bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gradient-silver mb-4 uppercase">DISCOGRAPHY</h2>
          <div className="h-1 w-24 bg-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, i) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900"
            >
              <img 
                src={album.img} 
                alt={album.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-purple-500 font-black text-4xl mb-2">#{album.year}</span>
                <h3 className="text-xl font-bold text-center text-white mb-4">{album.title}</h3>
                <button className="px-6 py-2 border border-white/50 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-colors">
                  LISTEN NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}