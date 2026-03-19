import { motion } from 'motion/react';
import { FileText, Brain, Smile, Users } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: FileText,
      title: "Budowanie CV",
      description: "Doświadczenie w wolontariacie to świetny punkt w CV, który wyróżni Cię na rynku pracy i podczas rekrutacji na studia."
    },
    {
      icon: Brain,
      title: "Kompetencje miękkie",
      description: "Praca w zespole, komunikacja, rozwiązywanie problemów - to tzw. soft skills, które najszybciej rozwiniesz w działaniu."
    },
    {
      icon: Smile,
      title: "Zdrowie psychiczne",
      description: "Pomaganie innym obniża poziom stresu, daje poczucie sensu i przynależności, co pozytywnie wpływa na samopoczucie."
    },
    {
      icon: Users,
      title: "Nowe relacje",
      description: "Wyjdź z bańki mediów społecznościowych. Poznaj ludzi o podobnych wartościach i buduj relacje w 'realu'."
    }
  ];

  return (
    <section id="korzysci" className="py-20 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#fece30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fece30] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6">Dlaczego warto się zaangażować?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wolontariat to nie tylko dawanie, ale przede wszystkim branie. Zobacz, co zyskujesz inwestując swój czas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-[#fece30] transition-colors group"
            >
              <div className="w-14 h-14 bg-gray-700 group-hover:bg-[#fece30] rounded-xl flex items-center justify-center mb-6 text-gray-300 group-hover:text-black transition-colors">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
