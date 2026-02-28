import { motion } from "motion/react";
import { MapPin, Calendar, Ticket } from "lucide-react";

const tourDates = [
  { date: "APR 12, 2026", city: "Memphis, TN", venue: "FedExForum", note: "Thuggish Ruggish Mafia w/ Three 6 Mafia" },
  { date: "APR 15, 2026", city: "Cleveland, OH", venue: "Rocket Mortgage FieldHouse", note: "Homecoming Show" },
  { date: "APR 20, 2026", city: "Los Angeles, CA", venue: "The Forum", note: "Thuggish Ruggish Mafia" },
  { date: "MAY 05, 2026", city: "Sydney, AU", venue: "Qudos Bank Arena", note: "Australia/NZ Leg" },
  { date: "MAY 08, 2026", city: "Melbourne, AU", venue: "Rod Laver Arena", note: "Australia/NZ Leg" },
  { date: "MAY 12, 2026", city: "Auckland, NZ", venue: "Spark Arena", note: "Australia/NZ Leg" },
  { date: "JUN 02, 2026", city: "London, UK", venue: "O2 Arena", note: "European Summer Tour" },
];

export function Tour() {
  return (
    <section id="tour" className="py-24 bg-eternal-black/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-gradient-silver mb-2">TOUR 2026</h2>
            <p className="text-eternal-purple font-bold tracking-[0.3em] uppercase text-sm">The World Invasion Continues</p>
          </div>
          <div className="glass px-6 py-2 rounded-full text-xs font-bold tracking-widest text-white/60">
            LIMITED TICKETS REMAINING
          </div>
        </div>

        <div className="space-y-4">
          {tourDates.map((tour, i) => (
            <motion.div
              key={tour.date + tour.city}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass hover:bg-white/10 transition-all group rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center min-w-[80px] py-2 px-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-eternal-purple">{tour.date.split(",")[0]}</span>
                  <span className="text-lg font-black text-white">{tour.date.split(",")[1].trim()}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <MapPin size={18} className="text-eternal-blue" />
                    {tour.city}
                  </h3>
                  <p className="text-gray-500 text-sm">{tour.venue}</p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-eternal-silver uppercase bg-white/5 px-3 py-1 rounded-full">
                  {tour.note}
                </span>
                <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-xl font-bold text-sm hover:bg-eternal-silver transition-colors">
                  <Ticket size={16} />
                  GET TICKETS
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
