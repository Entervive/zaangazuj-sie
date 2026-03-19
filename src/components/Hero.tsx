import { motion } from 'motion/react';
import { ArrowRight, Users, HeartHandshake, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#fece30]/10 -z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}></div>
      
      {/* Abstract Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          className="absolute top-10 left-10 md:left-1/4 w-64 h-64 bg-[#fece30]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-10 md:right-1/4 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute -bottom-10 left-1/3 w-80 h-80 bg-[#fece30]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
          animate={{ x: [0, 50, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#fece30]/20 text-yellow-800 font-semibold text-sm mb-6 border border-[#fece30]/30">
              Wrocław • Grabiszyn • Szkoły Średnie • Szkoły Podstawowe
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
              Odczarujmy <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fece30] to-yellow-500">
                wolontariat!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Jesteśmy grupą wrocławskich licealistów. Chcemy pokazać Ci, że działanie społeczne to nie nuda, ale świetna okazja do rozwoju, poznania nowych ludzi i zadbania o swoje zdrowie psychiczne.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#baza-wiedzy" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-black bg-[#fece30] hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Znajdź miejsce dla siebie
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#o-projekcie" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                Dowiedz się więcej
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { icon: Users, title: "90+ Uczestników", desc: "Tylu uczniów weźmie udział w naszych warsztatach." },
            { icon: Sparkles, title: "Nowe Kompetencje", desc: "Zdobądź soft skills, które wzbogacą Twoje CV." },
            { icon: HeartHandshake, title: "Realny Wpływ", desc: "Zmieniaj swoje otoczenie i buduj lokalną społeczność." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-[#fece30]/20 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
