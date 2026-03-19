export interface VolunteerPlace {
  id: string;
  name: string;
  category: string;
  description: string;
  link: string;
  address?: string;
}

export const volunteerPlaces: VolunteerPlace[] = [
  {
    id: 'mds',
    name: "Młody Dolny Śląsk",
    category: "Stowarzyszenie",
    description: "Zainwestuj w swoją przyszłość! · Współpracuj z zespołem młodych, pomysłowych ludzi. · Zdobądź unikalne doświadczenie, które pomoże Ci na rynku pracy.",
    link: "https://mlodydolnyslask.pl/",
    address: "Księdza Wincentego Kraińskiego 16/10, Wrocław"
  },
  {
    id: 'wcrs',
    name: "Wrocławskie Centrum Rozwoju Społecznego (WCRS)",
    category: "Edukacja / Społeczeństwo",
    description: "Miejskie centrum wspierające wolontariat. Organizuje szkolenia, pośredniczy w ofertach wolontariatu i wspiera lokalne inicjatywy młodzieżowe.",
    link: "https://wolontariat.wroclaw.pl/",
    address: "pl. Dominikański 6, Wrocław"
  },
  {
    id: 'schronisko',
    name: "Schronisko dla Bezdomnych Zwierząt we Wrocławiu",
    category: "Zwierzęta",
    description: "Pomoc przy wyprowadzaniu psów, socjalizacji kotów, pracach porządkowych i promocji adopcji. Idealne miejsce dla miłośników zwierząt.",
    link: "https://schroniskowroclaw.pl/wolontariat/",
    address: "ul. Ślazowa 2, Wrocław"
  },
  {
    id: 'tratwa',
    name: "Stowarzyszenie TRATWA",
    category: "Młodzież / Kultura",
    description: "Działania na rzecz młodzieży, organizacja festiwali, wolontariat międzynarodowy oraz lokalne akcje społeczne w Czasoprzestrzeni.",
    link: "https://tratwa.org/wolontariat/",
    address: "ul. Tramwajowa 1-3 (Czasoprzestrzeń), Wrocław"
  },
  {
    id: 'ekostraz',
    name: "EKOSTRAŻ",
    category: "Zwierzęta / Ekologia",
    description: "Ochrona zwierząt domowych i dzikich. Wolontariusze pomagają w interwencjach, opiece nad zwierzętami w azylu oraz edukacji społecznej.",
    link: "https://ekostraz.pl/Wolontariat/?gad_source=1&gad_campaignid=23576867430&gclid=Cj0KCQjwve7NBhC-ARIsALZy9HVZ9RxqjkZvVX-lYFrCbCtMd09Ai_CBN5chg0yK7libGscq6YxaIrwaAvVFEALw_wcB",
    address: "ul. Miłoszycka 67, Wrocław"
  },
  {
    id: 'bank-zywnosci',
    name: "Bank Żywności we Wrocławiu",
    category: "Pomoc społeczna",
    description: "Pomoc przy sortowaniu żywności, zbiórkach w sklepach i edukacji o niemarnowaniu jedzenia. Realny wpływ na walkę z ubóstwem.",
    link: "http://www.bankzywnosci.wroclaw.pl/wolontariat-pm-85.html",
    address: "ul. Rogowska 117D, Wrocław"
  },
  {
    id: 'hospicjum',
    name: "Fundacja Wrocławskie Hospicjum dla Dzieci",
    category: "Zdrowie / Pomoc społeczna",
    description: "Wolontariat akcyjny (zbiórki, eventy, nakrętki) oraz opiekuńczy. Możliwość wsparcia rodzin i chorych dzieci w trudnych chwilach.",
    link: "https://hospicjum.wroc.pl/zostan-wolontariuszem/",
    address: "ul. Jedności Narodowej 47/47a, Wrocław"
  },
  {
    id: 'szlachetna-paczka',
    name: "Szlachetna Paczka (Wrocław)",
    category: "Pomoc społeczna",
    description: "Zostań wolontariuszem (SuperW) i pomagaj najbardziej potrzebującym rodzinom w swoim rejonie. Świetny trening umiejętności interpersonalnych.",
    link: "https://www.superw.pl/",
    address: "Działanie terenowe (cały Wrocław)"
  },
  {
    id: 'pck-wroclaw',
    name: "Polski Czerwony Krzyż (PCK) - Oddział Wrocław",
    category: "Pomoc społeczna / Zdrowie",
    description: "Wsparcie dla seniorów, organizacja zbiórek żywności, promocja krwiodawstwa oraz pomoc w nagłych wypadkach i kryzysach.",
    link: "https://pck.pl/badz-z-nami/dla-kazdego/zostan-wolontariuszem",
    address: "ul. Bujwida 34, Wrocław"
  },
  {
    id: 'grupa-ratuj',
    name: "Stowarzyszenie Grupa Ratuj",
    category: "Zwierzęta",
    description: "Ratowanie bezdomnych, chorych i skrzywdzonych zwierząt. Wolontariusze pomagają w opiece, transporcie oraz jako domy tymczasowe.",
    link: "https://www.gruparatuj.org.pl/jak-pomoc/",
    address: "Wrocław i okolice"
  },
  {
    id: 'promyk-slonca',
    name: "Fundacja Promyk Słońca",
    category: "Zdrowie / Dzieci",
    description: "Pomoc dzieciom z niepełnosprawnościami. Wolontariusze wspierają organizację wydarzeń, zbiórek oraz pomagają w codziennych zajęciach.",
    link: "https://www.promykslonca.pl/dla-wolontariuszy/",
    address: "ul. Swobodna 8a, Wrocław"
  },
  {
    id: 'fundacja-hobbit',
    name: "Fundacja Hobbit",
    category: "Dzieci / Młodzież",
    description: "Praca z dziećmi i młodzieżą, organizacja czasu wolnego, warsztatów, półkolonii i zajęć żeglarskich.",
    link: "https://fundacja-hobbit.pl/",
    address: "pl. Św. Macieja 5a, Wrocław"
  },
  {
    id: 'centrum-seniora',
    name: "Wrocławskie Centrum Seniora",
    category: "Seniorzy",
    description: "Wsparcie osób starszych, organizacja wydarzeń kulturalnych, pomoc w obsłudze komputera i wspólne spędzanie czasu.",
    link: "https://www.seniorzy.wroclaw.pl/",
    address: "pl. Dominikański 6, Wrocław"
  }
];
