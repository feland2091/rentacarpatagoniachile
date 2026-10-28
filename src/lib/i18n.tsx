import { createContext, useContext, useEffect, useState } from 'react'

export const LANGS = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'zh', label: '中文', short: '中文' },
] as const

export type Lang = (typeof LANGS)[number]['code']

const es = {
  nav: { fleet: 'Flota', locations: 'Retiro y entrega', routes: 'Rutas', faq: 'Preguntas', contact: 'Contacto', book: 'Reservar' },
  hero: {
    welcome: '¡Bienvenido a Rentacar Patagonia!',
    eyebrow: 'Puerto Natales · Patagonia chilena',
    title: 'Arriendo de autos en Puerto Natales',
    accent: 'para recorrer Torres del Paine',
    sub: 'Autos, SUV y 4x4 con seguro incluido, kilómetros libres y entrega en los aeropuertos de Puerto Natales y Punta Arenas. Reserva en minutos por WhatsApp.',
    secondary: 'Ver la flota',
  },
  quick: {
    title: 'Reserva rápida',
    pickup: 'Lugar de retiro',
    from: 'Retiro',
    to: 'Devolución',
    vehicle: 'Tipo de vehículo',
    any: 'Cualquiera',
    submit: 'Reservar por WhatsApp',
    note: 'Te respondemos directamente por WhatsApp.',
    copied: 'Copiamos tu solicitud: pégala en el chat de WhatsApp.',
    msgIntro: 'Hola, quiero arrendar un vehículo en Rent a Car Patagonia.',
    msgVehicle: 'Hola, quiero reservar el',
  },
  trust: {
    rating: 'en Google', ratingSub: 'reseñas verificadas',
    km: 'Km libres', kmSub: 'en arriendos sobre 2 días',
    ins: 'Seguro incluido', insSub: 'Conduce con tranquilidad',
    support: 'Asistencia 24/7', supportSub: 'Durante todo tu viaje',
  },
  fleet: {
    eyebrow: 'Nuestra flota',
    title: 'Un vehículo para cada ruta patagónica',
    sub: 'Sedanes y hatchbacks eficientes para la carretera, SUV y 4x4 para los caminos de ripio del Parque Nacional Torres del Paine.',
    all: 'Todos',
    cats: { sedan: 'Sedán', hatchback: 'Hatchback', suv: 'SUV', '4x4': '4x4', family: '7 pasajeros' },
    seats: 'pasajeros', auto: 'Automático', manual: 'Mecánico', gasoline: 'Bencina', diesel: 'Diésel',
    book: 'Reservar', inquire: 'Consultar por correo',
  },
  locations: {
    eyebrow: 'Retiro y entrega',
    title: 'Retira y devuelve donde más te acomode',
    sub: 'Coordinamos la entrega con tu vuelo o bus, en Puerto Natales o en Punta Arenas.',
    items: {
      natales: ['Puerto Natales centro', 'Oficina en Magallanes 258'],
      terminal: ['Terminal Rodoviario', 'Llegas en bus y te esperamos'],
      pnt: ['Aeropuerto Puerto Natales', 'Entrega coordinada con tu vuelo'],
      puq: ['Aeropuerto Punta Arenas', 'Comienza tu viaje al aterrizar'],
      puntaArenas: ['Punta Arenas ciudad', 'Retiro coordinado en la ciudad'],
    },
  },
  routes: {
    eyebrow: 'Rutas desde Puerto Natales',
    title: 'La Patagonia a tu propio ritmo',
    sub: 'Con tu propio vehículo llegas al amanecer a los miradores, te detienes donde quieras y vuelves cuando el viento lo permita.',
    distance: 'aprox.',
    items: [
      ['Torres del Paine', '112 km', 'Cuernos, lagos turquesa y glaciares en el parque más famoso de Chile.'],
      ['Cueva del Milodón', '24 km', 'Monumento natural a pocos minutos de la ciudad.'],
      ['Punta Arenas', '247 km', 'Ruta 9 por la estepa magallánica hasta el Estrecho.'],
      ['El Calafate, Argentina', '360 km', 'Glaciar Perito Moreno. Requiere permiso de cruce coordinado con anticipación.'],
    ],
  },
  included: {
    eyebrow: 'Incluido en tu arriendo',
    title: 'Todo listo para salir a la ruta',
    items: ['Kilómetros libres sobre 2 días', 'Conductor adicional', 'Estanque lleno', 'Asistencia 24/7', 'Retiro y devolución flexibles', 'Seguro incluido', 'Permiso para cruzar a Argentina*'],
    footnote: '*Sujeto a coordinación previa.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de arrendar en Puerto Natales',
    items: [
      ['¿Necesito un 4x4 para ir a Torres del Paine?', 'No es obligatorio, pero gran parte de los caminos del parque son de ripio. Un SUV o 4x4 entrega más comodidad y seguridad, sobre todo con viento o lluvia.'],
      ['¿Puedo cruzar a Argentina con el vehículo?', 'Sí. Gestionamos el permiso de cruce fronterizo, que debe coordinarse con anticipación. Escríbenos por WhatsApp con tus fechas.'],
      ['¿Entregan el auto en el aeropuerto?', 'Sí, en el aeropuerto de Puerto Natales y en el de Punta Arenas, además del terminal de buses y nuestra oficina en el centro.'],
      ['¿Cómo reservo?', 'Completa la reserva rápida o toca el botón de WhatsApp. Te confirmamos disponibilidad y condiciones directamente por chat.'],
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Consulta por un vehículo',
    sub: 'Déjanos tus datos y el vehículo que te interesa. Te respondemos por correo desde info@rentacarpatagonia.com.',
    name: 'Nombre', email: 'Correo electrónico', phone: 'Teléfono (opcional)', vehicle: 'Vehículo de interés',
    any: 'Aún no lo decido', from: 'Retiro', to: 'Devolución', message: 'Mensaje',
    messagePh: 'Cuéntanos tu itinerario, número de pasajeros o cualquier duda.',
    submit: 'Enviar consulta', sending: 'Enviando…',
    success: '¡Gracias! Recibimos tu consulta y te escribiremos pronto.',
    error: 'No pudimos enviar tu consulta. Inténtalo de nuevo o escríbenos por WhatsApp.',
    direct: 'O escríbenos directamente a',
  },
  cta: {
    title: '¿Listo para recorrer el fin del mundo?',
    sub: 'Cuéntanos tus fechas y te confirmamos disponibilidad por WhatsApp.',
    button: 'Reservar por WhatsApp',
  },
  footer: {
    tagline: 'Arriendo de autos en Puerto Natales y Punta Arenas, Patagonia chilena.',
    maps: 'Ver en Google Maps',
    parent: 'Sitio principal',
    rights: 'Todos los derechos reservados.',
  },
  whatsappFab: 'Reservar por WhatsApp',
  language: 'Idioma',
}

export type Dict = typeof es

const en: Dict = {
  nav: { fleet: 'Fleet', locations: 'Pick-up & drop-off', routes: 'Routes', faq: 'FAQ', contact: 'Contact', book: 'Book' },
  hero: {
    welcome: 'Welcome to Rentacar Patagonia!',
    eyebrow: 'Puerto Natales · Chilean Patagonia',
    title: 'Car rental in Puerto Natales',
    accent: 'to explore Torres del Paine',
    sub: 'Cars, SUVs and 4x4s with insurance included, free kilometers and delivery at Puerto Natales and Punta Arenas airports. Book in minutes on WhatsApp.',
    secondary: 'See the fleet',
  },
  quick: {
    title: 'Quick booking',
    pickup: 'Pick-up location',
    from: 'Pick-up',
    to: 'Return',
    vehicle: 'Vehicle type',
    any: 'Any',
    submit: 'Book on WhatsApp',
    note: 'We reply directly on WhatsApp.',
    copied: 'Your request was copied: paste it in the WhatsApp chat.',
    msgIntro: 'Hello, I would like to rent a vehicle with Rent a Car Patagonia.',
    msgVehicle: 'Hello, I would like to book the',
  },
  trust: {
    rating: 'on Google', ratingSub: 'verified reviews',
    km: 'Free km', kmSub: 'on rentals over 2 days',
    ins: 'Insurance included', insSub: 'Drive with peace of mind',
    support: '24/7 assistance', supportSub: 'Throughout your trip',
  },
  fleet: {
    eyebrow: 'Our fleet',
    title: 'A vehicle for every Patagonian route',
    sub: 'Fuel-efficient sedans and hatchbacks for the highway, SUVs and 4x4s for the gravel roads of Torres del Paine National Park.',
    all: 'All',
    cats: { sedan: 'Sedan', hatchback: 'Hatchback', suv: 'SUV', '4x4': '4x4', family: '7 seats' },
    seats: 'passengers', auto: 'Automatic', manual: 'Manual', gasoline: 'Gasoline', diesel: 'Diesel',
    book: 'Book', inquire: 'Ask by email',
  },
  locations: {
    eyebrow: 'Pick-up & drop-off',
    title: 'Pick up and return wherever suits you',
    sub: 'We coordinate delivery with your flight or bus, in Puerto Natales or Punta Arenas.',
    items: {
      natales: ['Puerto Natales downtown', 'Office at Magallanes 258'],
      terminal: ['Bus terminal', 'Arrive by bus, we will be waiting'],
      pnt: ['Puerto Natales Airport', 'Delivery timed with your flight'],
      puq: ['Punta Arenas Airport', 'Start your trip as you land'],
      puntaArenas: ['Punta Arenas city', 'Coordinated pick-up in town'],
    },
  },
  routes: {
    eyebrow: 'Routes from Puerto Natales',
    title: 'Patagonia at your own pace',
    sub: 'With your own vehicle you reach the viewpoints at sunrise, stop wherever you like and head back when the wind allows.',
    distance: 'approx.',
    items: [
      ['Torres del Paine', '112 km', 'Granite horns, turquoise lakes and glaciers in Chile’s most famous park.'],
      ['Milodon Cave', '24 km', 'A natural monument just minutes from town.'],
      ['Punta Arenas', '247 km', 'Route 9 across the Magellanic steppe to the Strait.'],
      ['El Calafate, Argentina', '360 km', 'Perito Moreno Glacier. Requires a border permit arranged in advance.'],
    ],
  },
  included: {
    eyebrow: 'Included in your rental',
    title: 'Everything ready to hit the road',
    items: ['Free kilometers over 2 days', 'Additional driver', 'Full tank', '24/7 assistance', 'Flexible pick-up and return', 'Insurance included', 'Permit to cross into Argentina*'],
    footnote: '*Subject to prior arrangement.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Before you rent in Puerto Natales',
    items: [
      ['Do I need a 4x4 for Torres del Paine?', 'It is not mandatory, but many roads in the park are gravel. An SUV or 4x4 offers more comfort and safety, especially in wind or rain.'],
      ['Can I cross into Argentina with the car?', 'Yes. We arrange the border-crossing permit, which must be coordinated in advance. Message us on WhatsApp with your dates.'],
      ['Do you deliver at the airport?', 'Yes, at both Puerto Natales and Punta Arenas airports, as well as the bus terminal and our downtown office.'],
      ['How do I book?', 'Fill in the quick booking or tap the WhatsApp button. We confirm availability and terms directly in the chat.'],
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ask about a vehicle',
    sub: 'Leave your details and the vehicle you are interested in. We reply by email from info@rentacarpatagonia.com.',
    name: 'Name', email: 'Email', phone: 'Phone (optional)', vehicle: 'Vehicle of interest',
    any: 'Not sure yet', from: 'Pick-up', to: 'Return', message: 'Message',
    messagePh: 'Tell us your itinerary, number of passengers or any questions.',
    submit: 'Send inquiry', sending: 'Sending…',
    success: 'Thank you! We received your inquiry and will write back soon.',
    error: 'We could not send your inquiry. Please try again or message us on WhatsApp.',
    direct: 'Or email us directly at',
  },
  cta: {
    title: 'Ready to explore the end of the world?',
    sub: 'Tell us your dates and we will confirm availability on WhatsApp.',
    button: 'Book on WhatsApp',
  },
  footer: {
    tagline: 'Car rental in Puerto Natales and Punta Arenas, Chilean Patagonia.',
    maps: 'View on Google Maps',
    parent: 'Main website',
    rights: 'All rights reserved.',
  },
  whatsappFab: 'Book on WhatsApp',
  language: 'Language',
}

const fr: Dict = {
  nav: { fleet: 'Flotte', locations: 'Prise en charge', routes: 'Itinéraires', faq: 'FAQ', contact: 'Contact', book: 'Réserver' },
  hero: {
    welcome: 'Bienvenue chez Rentacar Patagonia !',
    eyebrow: 'Puerto Natales · Patagonie chilienne',
    title: 'Location de voitures à Puerto Natales',
    accent: 'pour explorer Torres del Paine',
    sub: 'Voitures, SUV et 4x4 avec assurance incluse, kilomètres gratuits et livraison aux aéroports de Puerto Natales et Punta Arenas. Réservez en quelques minutes sur WhatsApp.',
    secondary: 'Voir la flotte',
  },
  quick: {
    title: 'Réservation rapide',
    pickup: 'Lieu de prise en charge',
    from: 'Départ',
    to: 'Retour',
    vehicle: 'Type de véhicule',
    any: 'Peu importe',
    submit: 'Réserver sur WhatsApp',
    note: 'Nous répondons directement sur WhatsApp.',
    copied: 'Votre demande a été copiée : collez-la dans le chat WhatsApp.',
    msgIntro: 'Bonjour, je souhaite louer un véhicule chez Rent a Car Patagonia.',
    msgVehicle: 'Bonjour, je souhaite réserver le',
  },
  trust: {
    rating: 'sur Google', ratingSub: 'avis vérifiés',
    km: 'Km gratuits', kmSub: 'pour les locations de plus de 2 jours',
    ins: 'Assurance incluse', insSub: 'Conduisez l’esprit tranquille',
    support: 'Assistance 24h/24', supportSub: 'Pendant tout votre voyage',
  },
  fleet: {
    eyebrow: 'Notre flotte',
    title: 'Un véhicule pour chaque route de Patagonie',
    sub: 'Des berlines et compactes économes pour la route, des SUV et 4x4 pour les pistes de gravier du parc national Torres del Paine.',
    all: 'Tous',
    cats: { sedan: 'Berline', hatchback: 'Compacte', suv: 'SUV', '4x4': '4x4', family: '7 places' },
    seats: 'passagers', auto: 'Automatique', manual: 'Manuelle', gasoline: 'Essence', diesel: 'Diesel',
    book: 'Réserver', inquire: 'Demander par e-mail',
  },
  locations: {
    eyebrow: 'Prise en charge et retour',
    title: 'Récupérez et rendez le véhicule où vous voulez',
    sub: 'Nous coordonnons la livraison avec votre vol ou votre bus, à Puerto Natales ou à Punta Arenas.',
    items: {
      natales: ['Centre de Puerto Natales', 'Agence au 258 Magallanes'],
      terminal: ['Gare routière', 'Vous arrivez en bus, nous vous attendons'],
      pnt: ['Aéroport de Puerto Natales', 'Livraison selon votre vol'],
      puq: ['Aéroport de Punta Arenas', 'Commencez votre voyage dès l’atterrissage'],
      puntaArenas: ['Ville de Punta Arenas', 'Prise en charge coordonnée en ville'],
    },
  },
  routes: {
    eyebrow: 'Itinéraires depuis Puerto Natales',
    title: 'La Patagonie à votre rythme',
    sub: 'Avec votre propre véhicule, vous atteignez les belvédères à l’aube, vous vous arrêtez où vous voulez et rentrez quand le vent le permet.',
    distance: 'env.',
    items: [
      ['Torres del Paine', '112 km', 'Cornes de granit, lacs turquoise et glaciers dans le parc le plus célèbre du Chili.'],
      ['Grotte du Milodon', '24 km', 'Un monument naturel à quelques minutes de la ville.'],
      ['Punta Arenas', '247 km', 'La route 9 à travers la steppe magellanique jusqu’au détroit.'],
      ['El Calafate, Argentine', '360 km', 'Glacier Perito Moreno. Nécessite un permis de passage organisé à l’avance.'],
    ],
  },
  included: {
    eyebrow: 'Inclus dans votre location',
    title: 'Tout est prêt pour prendre la route',
    items: ['Kilomètres gratuits au-delà de 2 jours', 'Conducteur supplémentaire', 'Réservoir plein', 'Assistance 24h/24', 'Prise en charge et retour flexibles', 'Assurance incluse', 'Permis pour passer en Argentine*'],
    footnote: '*Sous réserve d’organisation préalable.',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Avant de louer à Puerto Natales',
    items: [
      ['Ai-je besoin d’un 4x4 pour Torres del Paine ?', 'Ce n’est pas obligatoire, mais de nombreuses routes du parc sont en gravier. Un SUV ou un 4x4 offre plus de confort et de sécurité, surtout par vent ou pluie.'],
      ['Puis-je passer en Argentine avec le véhicule ?', 'Oui. Nous gérons le permis de passage de frontière, à organiser à l’avance. Écrivez-nous sur WhatsApp avec vos dates.'],
      ['Livrez-vous à l’aéroport ?', 'Oui, aux aéroports de Puerto Natales et de Punta Arenas, ainsi qu’à la gare routière et à notre agence du centre.'],
      ['Comment réserver ?', 'Remplissez la réservation rapide ou appuyez sur le bouton WhatsApp. Nous confirmons la disponibilité et les conditions directement dans le chat.'],
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Demande sur un véhicule',
    sub: 'Laissez vos coordonnées et le véhicule qui vous intéresse. Nous répondons par e-mail depuis info@rentacarpatagonia.com.',
    name: 'Nom', email: 'E-mail', phone: 'Téléphone (facultatif)', vehicle: 'Véhicule souhaité',
    any: 'Je ne sais pas encore', from: 'Prise en charge', to: 'Restitution', message: 'Message',
    messagePh: 'Indiquez votre itinéraire, le nombre de passagers ou vos questions.',
    submit: 'Envoyer la demande', sending: 'Envoi…',
    success: 'Merci ! Nous avons reçu votre demande et vous répondrons bientôt.',
    error: 'Impossible d’envoyer votre demande. Réessayez ou écrivez-nous sur WhatsApp.',
    direct: 'Ou écrivez-nous directement à',
  },
  cta: {
    title: 'Prêt à explorer le bout du monde ?',
    sub: 'Indiquez-nous vos dates et nous confirmons la disponibilité sur WhatsApp.',
    button: 'Réserver sur WhatsApp',
  },
  footer: {
    tagline: 'Location de voitures à Puerto Natales et Punta Arenas, Patagonie chilienne.',
    maps: 'Voir sur Google Maps',
    parent: 'Site principal',
    rights: 'Tous droits réservés.',
  },
  whatsappFab: 'Réserver sur WhatsApp',
  language: 'Langue',
}

const pt: Dict = {
  nav: { fleet: 'Frota', locations: 'Retirada e entrega', routes: 'Roteiros', faq: 'Perguntas', contact: 'Contato', book: 'Reservar' },
  hero: {
    welcome: 'Bem-vindo à Rentacar Patagonia!',
    eyebrow: 'Puerto Natales · Patagônia chilena',
    title: 'Aluguel de carros em Puerto Natales',
    accent: 'para conhecer Torres del Paine',
    sub: 'Carros, SUVs e 4x4 com seguro incluso, quilometragem livre e entrega nos aeroportos de Puerto Natales e Punta Arenas. Reserve em minutos pelo WhatsApp.',
    secondary: 'Ver a frota',
  },
  quick: {
    title: 'Reserva rápida',
    pickup: 'Local de retirada',
    from: 'Retirada',
    to: 'Devolução',
    vehicle: 'Tipo de veículo',
    any: 'Qualquer',
    submit: 'Reservar pelo WhatsApp',
    note: 'Respondemos diretamente pelo WhatsApp.',
    copied: 'Copiamos seu pedido: cole-o no chat do WhatsApp.',
    msgIntro: 'Olá, quero alugar um veículo na Rent a Car Patagonia.',
    msgVehicle: 'Olá, quero reservar o',
  },
  trust: {
    rating: 'no Google', ratingSub: 'avaliações verificadas',
    km: 'Km livre', kmSub: 'em aluguéis acima de 2 dias',
    ins: 'Seguro incluso', insSub: 'Dirija com tranquilidade',
    support: 'Assistência 24h', supportSub: 'Durante toda a viagem',
  },
  fleet: {
    eyebrow: 'Nossa frota',
    title: 'Um veículo para cada estrada da Patagônia',
    sub: 'Sedãs e hatches econômicos para a estrada, SUVs e 4x4 para as estradas de cascalho do Parque Nacional Torres del Paine.',
    all: 'Todos',
    cats: { sedan: 'Sedã', hatchback: 'Hatch', suv: 'SUV', '4x4': '4x4', family: '7 lugares' },
    seats: 'passageiros', auto: 'Automático', manual: 'Manual', gasoline: 'Gasolina', diesel: 'Diesel',
    book: 'Reservar', inquire: 'Consultar por e-mail',
  },
  locations: {
    eyebrow: 'Retirada e entrega',
    title: 'Retire e devolva onde for melhor para você',
    sub: 'Coordenamos a entrega com seu voo ou ônibus, em Puerto Natales ou Punta Arenas.',
    items: {
      natales: ['Centro de Puerto Natales', 'Escritório na Magallanes 258'],
      terminal: ['Rodoviária', 'Chegou de ônibus? Estamos esperando'],
      pnt: ['Aeroporto de Puerto Natales', 'Entrega combinada com seu voo'],
      puq: ['Aeroporto de Punta Arenas', 'Comece a viagem ao pousar'],
      puntaArenas: ['Cidade de Punta Arenas', 'Retirada combinada na cidade'],
    },
  },
  routes: {
    eyebrow: 'Roteiros a partir de Puerto Natales',
    title: 'A Patagônia no seu ritmo',
    sub: 'Com seu próprio veículo você chega aos mirantes ao amanhecer, para onde quiser e volta quando o vento permitir.',
    distance: 'aprox.',
    items: [
      ['Torres del Paine', '112 km', 'Chifres de granito, lagos turquesa e geleiras no parque mais famoso do Chile.'],
      ['Caverna do Milodon', '24 km', 'Monumento natural a poucos minutos da cidade.'],
      ['Punta Arenas', '247 km', 'Rota 9 pela estepe magalhânica até o Estreito.'],
      ['El Calafate, Argentina', '360 km', 'Geleira Perito Moreno. Exige autorização de fronteira combinada com antecedência.'],
    ],
  },
  included: {
    eyebrow: 'Incluso no aluguel',
    title: 'Tudo pronto para pegar a estrada',
    items: ['Quilometragem livre acima de 2 dias', 'Motorista adicional', 'Tanque cheio', 'Assistência 24h', 'Retirada e devolução flexíveis', 'Seguro incluso', 'Autorização para cruzar à Argentina*'],
    footnote: '*Sujeito a coordenação prévia.',
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Antes de alugar em Puerto Natales',
    items: [
      ['Preciso de um 4x4 para ir a Torres del Paine?', 'Não é obrigatório, mas muitas estradas do parque são de cascalho. Um SUV ou 4x4 oferece mais conforto e segurança, principalmente com vento ou chuva.'],
      ['Posso cruzar para a Argentina com o veículo?', 'Sim. Providenciamos a autorização de fronteira, que deve ser combinada com antecedência. Fale conosco pelo WhatsApp com suas datas.'],
      ['Vocês entregam no aeroporto?', 'Sim, nos aeroportos de Puerto Natales e Punta Arenas, além da rodoviária e do nosso escritório no centro.'],
      ['Como faço a reserva?', 'Preencha a reserva rápida ou toque no botão do WhatsApp. Confirmamos disponibilidade e condições diretamente no chat.'],
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Consulte sobre um veículo',
    sub: 'Deixe seus dados e o veículo de interesse. Respondemos por e-mail a partir de info@rentacarpatagonia.com.',
    name: 'Nome', email: 'E-mail', phone: 'Telefone (opcional)', vehicle: 'Veículo de interesse',
    any: 'Ainda não decidi', from: 'Retirada', to: 'Devolução', message: 'Mensagem',
    messagePh: 'Conte seu roteiro, número de passageiros ou qualquer dúvida.',
    submit: 'Enviar consulta', sending: 'Enviando…',
    success: 'Obrigado! Recebemos sua consulta e responderemos em breve.',
    error: 'Não foi possível enviar sua consulta. Tente novamente ou fale conosco pelo WhatsApp.',
    direct: 'Ou escreva diretamente para',
  },
  cta: {
    title: 'Pronto para explorar o fim do mundo?',
    sub: 'Conte suas datas e confirmamos a disponibilidade pelo WhatsApp.',
    button: 'Reservar pelo WhatsApp',
  },
  footer: {
    tagline: 'Aluguel de carros em Puerto Natales e Punta Arenas, Patagônia chilena.',
    maps: 'Ver no Google Maps',
    parent: 'Site principal',
    rights: 'Todos os direitos reservados.',
  },
  whatsappFab: 'Reservar pelo WhatsApp',
  language: 'Idioma',
}

const zh: Dict = {
  nav: { fleet: '车队', locations: '取还车地点', routes: '自驾路线', faq: '常见问题', contact: '联系', book: '预订' },
  hero: {
    welcome: '欢迎来到 Rentacar Patagonia！',
    eyebrow: '纳塔莱斯港 · 智利巴塔哥尼亚',
    title: '纳塔莱斯港租车',
    accent: '自驾畅游百内国家公园',
    sub: '轿车、SUV 与四驱车，含保险、不限里程，可在纳塔莱斯港机场和蓬塔阿雷纳斯机场交车。通过 WhatsApp 几分钟即可预订。',
    secondary: '查看车队',
  },
  quick: {
    title: '快速预订',
    pickup: '取车地点',
    from: '取车日期',
    to: '还车日期',
    vehicle: '车型',
    any: '不限',
    submit: '通过 WhatsApp 预订',
    note: '我们将直接在 WhatsApp 上回复您。',
    copied: '已复制您的预订信息，请粘贴到 WhatsApp 聊天中。',
    msgIntro: '您好，我想在 Rent a Car Patagonia 租车。',
    msgVehicle: '您好，我想预订',
  },
  trust: {
    rating: 'Google 评分', ratingSub: '条真实评价',
    km: '不限里程', kmSub: '租期超过 2 天',
    ins: '含保险', insSub: '安心驾驶',
    support: '24/7 道路救援', supportSub: '全程为您服务',
  },
  fleet: {
    eyebrow: '我们的车队',
    title: '每条巴塔哥尼亚路线都有合适的车',
    sub: '省油的三厢与两厢轿车适合公路行驶，SUV 与四驱车适合百内国家公园的砂石路。',
    all: '全部',
    cats: { sedan: '三厢轿车', hatchback: '两厢车', suv: 'SUV', '4x4': '四驱', family: '7 座' },
    seats: '座', auto: '自动挡', manual: '手动挡', gasoline: '汽油', diesel: '柴油',
    book: '预订', inquire: '邮件咨询',
  },
  locations: {
    eyebrow: '取车与还车',
    title: '在您方便的地点取还车',
    sub: '我们会根据您的航班或巴士时间，在纳塔莱斯港或蓬塔阿雷纳斯安排交车。',
    items: {
      natales: ['纳塔莱斯港市中心', '办公室：Magallanes 258'],
      terminal: ['长途汽车站', '乘巴士抵达，我们等您'],
      pnt: ['纳塔莱斯港机场', '按航班时间交车'],
      puq: ['蓬塔阿雷纳斯机场', '落地即可出发'],
      puntaArenas: ['蓬塔阿雷纳斯市区', '市区预约取车'],
    },
  },
  routes: {
    eyebrow: '从纳塔莱斯港出发',
    title: '按自己的节奏探索巴塔哥尼亚',
    sub: '自驾让您清晨抵达观景台，随心停留，风小时再返程。',
    distance: '约',
    items: [
      ['百内国家公园', '112 km', '花岗岩角峰、碧绿湖泊与冰川，智利最著名的国家公园。'],
      ['米洛登洞穴', '24 km', '距市区仅几分钟车程的自然遗迹。'],
      ['蓬塔阿雷纳斯', '247 km', '沿 9 号公路穿越麦哲伦草原直达海峡。'],
      ['阿根廷卡拉法特', '360 km', '莫雷诺冰川。需提前办理过境许可。'],
    ],
  },
  included: {
    eyebrow: '租金包含',
    title: '一切就绪，即刻上路',
    items: ['超过 2 天不限里程', '额外驾驶员', '满油交车', '24/7 道路救援', '灵活取还车', '含保险', '前往阿根廷的过境许可*'],
    footnote: '*需提前协调。',
  },
  faq: {
    eyebrow: '常见问题',
    title: '在纳塔莱斯港租车前须知',
    items: [
      ['去百内国家公园需要四驱车吗？', '不是必须的，但公园内很多道路是砂石路。SUV 或四驱车更舒适、更安全，尤其是在大风或下雨时。'],
      ['可以开车去阿根廷吗？', '可以。我们代办过境许可，需提前协调。请通过 WhatsApp 告诉我们您的日期。'],
      ['可以在机场交车吗？', '可以，纳塔莱斯港机场和蓬塔阿雷纳斯机场均可，也可在长途汽车站或市中心办公室交车。'],
      ['如何预订？', '填写快速预订表或点击 WhatsApp 按钮，我们会在聊天中直接确认车辆和条件。'],
    ],
  },
  contact: {
    eyebrow: '联系我们',
    title: '车辆咨询',
    sub: '留下您的联系方式和感兴趣的车型，我们将通过 info@rentacarpatagonia.com 邮件回复您。',
    name: '姓名', email: '电子邮箱', phone: '电话（选填）', vehicle: '意向车型',
    any: '尚未决定', from: '取车', to: '还车', message: '留言',
    messagePh: '请告诉我们您的行程、乘客人数或任何问题。',
    submit: '发送咨询', sending: '发送中…',
    success: '谢谢！我们已收到您的咨询，将尽快回复。',
    error: '咨询发送失败，请重试或通过 WhatsApp 联系我们。',
    direct: '或直接发送邮件至',
  },
  cta: {
    title: '准备好探索世界尽头了吗？',
    sub: '告诉我们您的日期，我们将通过 WhatsApp 确认车辆。',
    button: '通过 WhatsApp 预订',
  },
  footer: {
    tagline: '智利巴塔哥尼亚纳塔莱斯港与蓬塔阿雷纳斯租车。',
    maps: '在 Google 地图中查看',
    parent: '主站',
    rights: '版权所有。',
  },
  whatsappFab: '通过 WhatsApp 预订',
  language: '语言',
}

export const DICTS: Record<Lang, Dict> = { es, en, fr, pt, zh }

const STORAGE_KEY = 'rcp-lang'

type I18n = { lang: Lang; t: Dict; setLang: (lang: Lang) => void }
const I18nContext = createContext<I18n>({ lang: 'es', t: es, setLang: () => {} })

function isLang(value: string | null | undefined): value is Lang {
  return !!value && Object.hasOwn(DICTS, value)
}

// Spanish renders on the server; the visitor's saved, ?lang= or browser language is applied after hydration.
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const fromQuery = new URLSearchParams(window.location.search).get('lang')
    const saved = localStorage.getItem(STORAGE_KEY)
    const browser = navigator.language.slice(0, 2)
    const initial = [fromQuery, saved, browser].find(isLang)
    if (initial) setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return <I18nContext.Provider value={{ lang, t: DICTS[lang], setLang }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
