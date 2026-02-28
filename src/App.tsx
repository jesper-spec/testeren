import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Tour } from "./components/Tour";
import { Discography } from "./components/Discography";
import { Memorial } from "./components/Memorial";
import { News } from "./components/News";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-eternal-black selection:bg-eternal-purple selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-eternal-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Tour />
        <Discography />
        <Memorial />
        <News />
      </main>

      <Footer />

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-eternal-purple/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-eternal-blue/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
