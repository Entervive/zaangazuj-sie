import { motion } from 'motion/react';
import { BookOpen, Globe, Megaphone } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Filar Merytoryczny",
      description: "Przeprowadzimy 6 interaktywnych warsztatów dla 90 osób. Porozmawiamy o narzędziach partycypacji, barierach w działaniu oraz korzyściach dla CV i zdrowia psychicznego."
    },
    {
      icon: Globe,
      title: "Filar Informacyjny",
      description: "Tworzymy tę stronę jako bazę wiedzy. Chcemy, aby była stałym punktem odniesienia dla uczniów szukających sprawdzonych miejsc do aktywizacji."
    },
    {
      icon: Megaphone,
      title: "Filar Promocyjny",
      description: "Prowadzimy kampanię w social mediach (Instagram), docierając do setek odbiorców z edukacyjno-motywacyjnymi treściami, pokazując wolontariat jako ścieżkę rozwoju."
    }
  ];

  return (
    <section id="o-projekcie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">O co w tym chodzi?</h2>
          <p className="text-lg text-gray-600">
            Zauważyliśmy spadek zaangażowania młodych ludzi. Często myślimy "nie chce mi się" albo "po co to robić?". Nasz projekt to kompleksowa inicjatywa, która ma na celu zmianę tego podejścia poprzez trzy kluczowe filary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#fece30] rounded-2xl flex items-center justify-center mb-6 text-black shadow-md transform -rotate-3">
                <pillar.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
