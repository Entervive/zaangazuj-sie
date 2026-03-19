import Logo from './Logo';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="text-3xl mb-6" />
            <p className="text-gray-600 max-w-md mb-6">
              Projekt edukacyjny skierowany do uczniów szkół średnich z wrocławskiego Grabiszyna. Budujemy zaangażowane społeczeństwo obywatelskie we Wrocławiu.
            </p>
            <div className="flex space-x-4">
              {/*<a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#fece30] hover:text-black hover:border-[#fece30] transition-all">
                <Instagram size={20} />
              </a>*/}
              <a href="mailto:aleksanderstaszkow@proton.me" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#fece30] hover:text-black hover:border-[#fece30] transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Na skróty</h4>
            <ul className="space-y-3">
              <li><a href="#o-projekcie" className="text-gray-600 hover:text-[#fece30]">O projekcie</a></li>
              <li><a href="#korzysci" className="text-gray-600 hover:text-[#fece30]">Korzyści</a></li>
              <li><a href="#dzialania" className="text-gray-600 hover:text-[#fece30]">Harmonogram</a></li>
              <li><a href="#baza-wiedzy" className="text-gray-600 hover:text-[#fece30]">Baza wiedzy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Kordynator Projektu: Aleksander Staszków</li>
              <li style={{maxWidth: "100%"}}>Mail: <a style={{color: "#fece30"}} href="mailto:aleksanderstaszkow@proton.me">Kliknij tutaj</a></li>
              <li>Tel: 508 510 207</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
              &copy; 2026 Projekt "Zaangażuj się!". Wszelkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
