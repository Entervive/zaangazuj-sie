export default function PartnersBanner() {
  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 
          Obrazek belki. 
          Aby zadziałał, musisz wgrać plik z belką do folderu "public" 
          i nazwać go "belka.png".
        */}
        <img 
          src="/belka.png" 
          alt="Partnerzy projektu: Mikrogranty młodzieżowe, Umbrella, Tratwa, Wrocław miasto spotkań, Wrocławski Instytut Kultury" 
          className="w-full h-auto object-contain max-h-24 mx-auto"
        />
      </div>
    </section>
  );
}
