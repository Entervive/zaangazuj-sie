import { motion } from 'motion/react';
import { Calendar, Instagram, Users, FileImage, Globe } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      date: "15.03 - 30.06.2026",
      title: "Kampania w Social Mediach",
      description: "Publikacja min. 15 postów i 5 relacji edukacyjno-motywacyjnych na Instagramie. Cel: dotarcie do 500 odbiorców.",
      icon: Instagram
    },
    {
      date: "15.03 - 30.06.2026",
      title: "Warsztaty w szkołach",
      description: "Cykl 6 interaktywnych warsztatów o partycypacji i wolontariacie dla 90 uczniów (średnio 15 osób na grupę).",
      icon: Users
    },
    {
      date: "15.03 - 30.06.2026",
      title: "Plakaty informacyjne",
      description: "Rozwieszenie 30 ekologicznych plakatów w minimum 3 wrocławskich placówkach na osiedlu Grabiszyn.",
      icon: FileImage
    },
    {
      date: "15.03 - 30.06.2026",
      title: "Uruchomienie strony WWW",
      description: "Stworzenie witryny z bazą wiedzy dla uczniów oraz miejscami aktywizacji. Wizytówka projektu.",
      icon: Globe
    }
  ];

  return (
    <section id="dzialania" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Nasz plan działania</h2>
            <p className="text-lg text-gray-600 mb-8">
              Projekt realizujemy od marca do czerwca 2026 roku. Skupiamy się na szkołach średnich na wrocławskim Grabiszynie oraz przestrzeni internetowej.
            </p>
            <div className="bg-[#fece30] p-6 rounded-2xl shadow-md inline-block transform rotate-2">
              <div className="flex items-center gap-3 font-bold text-xl mb-2">
                <Calendar />
                <span>Wiosna 2026</span>
              </div>
              <p className="text-gray-900 font-medium">Czas na zmiany we Wrocławiu!</p>
            </div>
          </div>
          
          <div className="md:w-2/3 w-full">
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 text-gray-600">
                    <activity.icon size={24} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#fece30] uppercase tracking-wider">{activity.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
