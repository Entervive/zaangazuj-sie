import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ExternalLink } from 'lucide-react';
import { volunteerPlaces } from '../data/knowledgeBase';

export default function KnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlaces = volunteerPlaces.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="baza-wiedzy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Baza Wiedzy i Miejsc</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nie wiesz od czego zacząć? Przygotowaliśmy dla Ciebie listę sprawdzonych miejsc we Wrocławiu, gdzie możesz rozpocząć swoją przygodę z wolontariatem.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fece30] focus:border-transparent shadow-sm" 
            placeholder="Szukaj organizacji lub dziedziny..."
          />
        </div>

        {filteredPlaces.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Nie znaleziono organizacji pasujących do Twojego wyszukiwania.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPlaces.map((place, index) => (
              <motion.div 
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl p-6 hover:border-[#fece30] hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3">
                      {place.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#fece30] group-hover:text-black transition-colors flex-shrink-0 ml-4">
                    <MapPin size={20} />
                  </div>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">
                  {place.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  {place.address && (
                    <span className="text-sm text-gray-500 flex items-center">
                      <MapPin size={14} className="mr-1" /> {place.address}
                    </span>
                  )}
                  <a href={place.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-[#fece30] transition-colors">
                    Sprawdź szczegóły <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Contact CTA for new places */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#fece30]/10 border border-[#fece30]/30 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Brakuje jakiegoś miejsca?</h3>
          <p className="text-gray-700 mb-6">
            Znasz organizację, która szuka wolontariuszy, a nie ma jej na naszej liście? 
            Napisz do mnie podając nazwę, krótki opis i link do strony, a z chęcią dodamy ją do naszej bazy!
          </p>
          <a 
            href="mailto:aleksanderstaszkow@proton.me" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-full text-black bg-[#fece30] hover:bg-yellow-400 transition-all shadow-sm hover:shadow-md"
          >
            aleksanderstaszkow@proton.me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
