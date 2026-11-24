import { a as FLEET, c as PARENT_URL, f as whatsappUrl, i as CONTACT_FORM_NAME, l as RATING, n as ADDRESS, o as LOCATION_IDS, r as CONTACT_EMAIL, s as MAPS_URL, u as WHATSAPP_LINK } from "./router-Bxwhpxt2.js";
import { createContext, useContext, useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BusFront, CalendarDays, CarFront, Check, CheckCircle2, ChevronDown, Clock, ExternalLink, Fuel, Gauge, Globe, Headset, Infinity as Infinity$1, Mail, MapPin, Mountain, Phone, PlaneLanding, Send, ShieldCheck, Star, User, Users } from "lucide-react";
//#region src/lib/i18n.tsx
var LANGS = [
	{
		code: "es",
		label: "Español",
		short: "ES"
	},
	{
		code: "en",
		label: "English",
		short: "EN"
	},
	{
		code: "fr",
		label: "Français",
		short: "FR"
	},
	{
		code: "pt",
		label: "Português",
		short: "PT"
	},
	{
		code: "zh",
		label: "中文",
		short: "中文"
	}
];
var es = {
	nav: {
		fleet: "Flota",
		locations: "Retiro y entrega",
		routes: "Rutas",
		faq: "Preguntas",
		contact: "Contacto",
		book: "Reservar"
	},
	hero: {
		welcome: "¡Bienvenido a Rentacar Patagonia!",
		eyebrow: "Puerto Natales · Patagonia chilena",
		title: "Arriendo de autos en Puerto Natales",
		accent: "para recorrer Torres del Paine",
		sub: "Autos, SUV y 4x4 con seguro incluido, kilómetros libres y entrega en los aeropuertos de Puerto Natales y Punta Arenas. Reserva en minutos por WhatsApp.",
		secondary: "Ver la flota"
	},
	quick: {
		title: "Reserva rápida",
		pickup: "Lugar de retiro",
		from: "Retiro",
		to: "Devolución",
		vehicle: "Tipo de vehículo",
		any: "Cualquiera",
		submit: "Reservar por WhatsApp",
		note: "Te respondemos directamente por WhatsApp.",
		copied: "Copiamos tu solicitud: pégala en el chat de WhatsApp.",
		msgIntro: "Hola, quiero arrendar un vehículo en Rent a Car Patagonia.",
		msgVehicle: "Hola, quiero reservar el"
	},
	trust: {
		rating: "en Google",
		ratingSub: "reseñas verificadas",
		km: "Km libres",
		kmSub: "en arriendos sobre 2 días",
		ins: "Seguro incluido",
		insSub: "Conduce con tranquilidad",
		support: "Asistencia 24/7",
		supportSub: "Durante todo tu viaje"
	},
	fleet: {
		eyebrow: "Nuestra flota",
		title: "Un vehículo para cada ruta patagónica",
		sub: "Sedanes y hatchbacks eficientes para la carretera, SUV y 4x4 para los caminos de ripio del Parque Nacional Torres del Paine.",
		all: "Todos",
		cats: {
			sedan: "Sedán",
			hatchback: "Hatchback",
			suv: "SUV",
			"4x4": "4x4",
			family: "7 pasajeros"
		},
		seats: "pasajeros",
		auto: "Automático",
		manual: "Mecánico",
		gasoline: "Bencina",
		diesel: "Diésel",
		book: "Reservar",
		inquire: "Consultar por correo"
	},
	locations: {
		eyebrow: "Retiro y entrega",
		title: "Retira y devuelve donde más te acomode",
		sub: "Coordinamos la entrega con tu vuelo o bus, en Puerto Natales o en Punta Arenas.",
		items: {
			natales: ["Puerto Natales centro", "Oficina en Magallanes 258"],
			terminal: ["Terminal Rodoviario", "Llegas en bus y te esperamos"],
			pnt: ["Aeropuerto Puerto Natales", "Entrega coordinada con tu vuelo"],
			puq: ["Aeropuerto Punta Arenas", "Comienza tu viaje al aterrizar"],
			puntaArenas: ["Punta Arenas ciudad", "Retiro coordinado en la ciudad"]
		}
	},
	routes: {
		eyebrow: "Rutas desde Puerto Natales",
		title: "La Patagonia a tu propio ritmo",
		sub: "Con tu propio vehículo llegas al amanecer a los miradores, te detienes donde quieras y vuelves cuando el viento lo permita.",
		distance: "aprox.",
		items: [
			[
				"Torres del Paine",
				"112 km",
				"Cuernos, lagos turquesa y glaciares en el parque más famoso de Chile."
			],
			[
				"Cueva del Milodón",
				"24 km",
				"Monumento natural a pocos minutos de la ciudad."
			],
			[
				"Punta Arenas",
				"247 km",
				"Ruta 9 por la estepa magallánica hasta el Estrecho."
			],
			[
				"El Calafate, Argentina",
				"360 km",
				"Glaciar Perito Moreno. Requiere permiso de cruce coordinado con anticipación."
			]
		]
	},
	included: {
		eyebrow: "Incluido en tu arriendo",
		title: "Todo listo para salir a la ruta",
		items: [
			"Kilómetros libres sobre 2 días",
			"Conductor adicional",
			"Estanque lleno",
			"Asistencia 24/7",
			"Retiro y devolución flexibles",
			"Seguro incluido",
			"Permiso para cruzar a Argentina*"
		],
		footnote: "*Sujeto a coordinación previa."
	},
	faq: {
		eyebrow: "Preguntas frecuentes",
		title: "Antes de arrendar en Puerto Natales",
		items: [
			["¿Necesito un 4x4 para ir a Torres del Paine?", "No es obligatorio, pero gran parte de los caminos del parque son de ripio. Un SUV o 4x4 entrega más comodidad y seguridad, sobre todo con viento o lluvia."],
			["¿Puedo cruzar a Argentina con el vehículo?", "Sí. Gestionamos el permiso de cruce fronterizo, que debe coordinarse con anticipación. Escríbenos por WhatsApp con tus fechas."],
			["¿Entregan el auto en el aeropuerto?", "Sí, en el aeropuerto de Puerto Natales y en el de Punta Arenas, además del terminal de buses y nuestra oficina en el centro."],
			["¿Cómo reservo?", "Completa la reserva rápida o toca el botón de WhatsApp. Te confirmamos disponibilidad y condiciones directamente por chat."]
		]
	},
	contact: {
		eyebrow: "Contacto",
		title: "Consulta por un vehículo",
		sub: "Déjanos tus datos y el vehículo que te interesa. Te respondemos por correo desde info@rentacarpatagonia.com.",
		name: "Nombre",
		email: "Correo electrónico",
		phone: "Teléfono (opcional)",
		vehicle: "Vehículo de interés",
		any: "Aún no lo decido",
		from: "Retiro",
		to: "Devolución",
		message: "Mensaje",
		messagePh: "Cuéntanos tu itinerario, número de pasajeros o cualquier duda.",
		submit: "Enviar consulta",
		sending: "Enviando…",
		success: "¡Gracias! Recibimos tu consulta y te escribiremos pronto.",
		error: "No pudimos enviar tu consulta. Inténtalo de nuevo o escríbenos por WhatsApp.",
		direct: "O escríbenos directamente a"
	},
	cta: {
		title: "¿Listo para recorrer el fin del mundo?",
		sub: "Cuéntanos tus fechas y te confirmamos disponibilidad por WhatsApp.",
		button: "Reservar por WhatsApp"
	},
	parentBanner: {
		eyebrow: "Sitio web oficial",
		title: "Reserva online en rentacarpatagonia.com",
		sub: "Nuestro sitio principal tiene la flota completa, disponibilidad en tiempo real y reservas online.",
		button: "Ir a rentacarpatagonia.com"
	},
	torres: {
		eyebrow: "Tu próxima aventura",
		title: "Descubre Torres del Paine",
		sub: "Planifica tu visita al parque y encuentra inspiración para recorrer uno de los paisajes más increíbles de la Patagonia.",
		button: "Visita TorresdelPaine.com"
	},
	footer: {
		tagline: "Arriendo de autos en Puerto Natales y Punta Arenas, Patagonia chilena.",
		maps: "Ver en Google Maps",
		parent: "Sitio principal",
		rights: "Todos los derechos reservados."
	},
	whatsappFab: "Reservar por WhatsApp",
	language: "Idioma"
};
var DICTS = {
	es,
	en: {
		nav: {
			fleet: "Fleet",
			locations: "Pick-up & drop-off",
			routes: "Routes",
			faq: "FAQ",
			contact: "Contact",
			book: "Book"
		},
		hero: {
			welcome: "Welcome to Rentacar Patagonia!",
			eyebrow: "Puerto Natales · Chilean Patagonia",
			title: "Car rental in Puerto Natales",
			accent: "to explore Torres del Paine",
			sub: "Cars, SUVs and 4x4s with insurance included, free kilometers and delivery at Puerto Natales and Punta Arenas airports. Book in minutes on WhatsApp.",
			secondary: "See the fleet"
		},
		quick: {
			title: "Quick booking",
			pickup: "Pick-up location",
			from: "Pick-up",
			to: "Return",
			vehicle: "Vehicle type",
			any: "Any",
			submit: "Book on WhatsApp",
			note: "We reply directly on WhatsApp.",
			copied: "Your request was copied: paste it in the WhatsApp chat.",
			msgIntro: "Hello, I would like to rent a vehicle with Rent a Car Patagonia.",
			msgVehicle: "Hello, I would like to book the"
		},
		trust: {
			rating: "on Google",
			ratingSub: "verified reviews",
			km: "Free km",
			kmSub: "on rentals over 2 days",
			ins: "Insurance included",
			insSub: "Drive with peace of mind",
			support: "24/7 assistance",
			supportSub: "Throughout your trip"
		},
		fleet: {
			eyebrow: "Our fleet",
			title: "A vehicle for every Patagonian route",
			sub: "Fuel-efficient sedans and hatchbacks for the highway, SUVs and 4x4s for the gravel roads of Torres del Paine National Park.",
			all: "All",
			cats: {
				sedan: "Sedan",
				hatchback: "Hatchback",
				suv: "SUV",
				"4x4": "4x4",
				family: "7 seats"
			},
			seats: "passengers",
			auto: "Automatic",
			manual: "Manual",
			gasoline: "Gasoline",
			diesel: "Diesel",
			book: "Book",
			inquire: "Ask by email"
		},
		locations: {
			eyebrow: "Pick-up & drop-off",
			title: "Pick up and return wherever suits you",
			sub: "We coordinate delivery with your flight or bus, in Puerto Natales or Punta Arenas.",
			items: {
				natales: ["Puerto Natales downtown", "Office at Magallanes 258"],
				terminal: ["Bus terminal", "Arrive by bus, we will be waiting"],
				pnt: ["Puerto Natales Airport", "Delivery timed with your flight"],
				puq: ["Punta Arenas Airport", "Start your trip as you land"],
				puntaArenas: ["Punta Arenas city", "Coordinated pick-up in town"]
			}
		},
		routes: {
			eyebrow: "Routes from Puerto Natales",
			title: "Patagonia at your own pace",
			sub: "With your own vehicle you reach the viewpoints at sunrise, stop wherever you like and head back when the wind allows.",
			distance: "approx.",
			items: [
				[
					"Torres del Paine",
					"112 km",
					"Granite horns, turquoise lakes and glaciers in Chile’s most famous park."
				],
				[
					"Milodon Cave",
					"24 km",
					"A natural monument just minutes from town."
				],
				[
					"Punta Arenas",
					"247 km",
					"Route 9 across the Magellanic steppe to the Strait."
				],
				[
					"El Calafate, Argentina",
					"360 km",
					"Perito Moreno Glacier. Requires a border permit arranged in advance."
				]
			]
		},
		included: {
			eyebrow: "Included in your rental",
			title: "Everything ready to hit the road",
			items: [
				"Free kilometers over 2 days",
				"Additional driver",
				"Full tank",
				"24/7 assistance",
				"Flexible pick-up and return",
				"Insurance included",
				"Permit to cross into Argentina*"
			],
			footnote: "*Subject to prior arrangement."
		},
		faq: {
			eyebrow: "FAQ",
			title: "Before you rent in Puerto Natales",
			items: [
				["Do I need a 4x4 for Torres del Paine?", "It is not mandatory, but many roads in the park are gravel. An SUV or 4x4 offers more comfort and safety, especially in wind or rain."],
				["Can I cross into Argentina with the car?", "Yes. We arrange the border-crossing permit, which must be coordinated in advance. Message us on WhatsApp with your dates."],
				["Do you deliver at the airport?", "Yes, at both Puerto Natales and Punta Arenas airports, as well as the bus terminal and our downtown office."],
				["How do I book?", "Fill in the quick booking or tap the WhatsApp button. We confirm availability and terms directly in the chat."]
			]
		},
		contact: {
			eyebrow: "Contact",
			title: "Ask about a vehicle",
			sub: "Leave your details and the vehicle you are interested in. We reply by email from info@rentacarpatagonia.com.",
			name: "Name",
			email: "Email",
			phone: "Phone (optional)",
			vehicle: "Vehicle of interest",
			any: "Not sure yet",
			from: "Pick-up",
			to: "Return",
			message: "Message",
			messagePh: "Tell us your itinerary, number of passengers or any questions.",
			submit: "Send inquiry",
			sending: "Sending…",
			success: "Thank you! We received your inquiry and will write back soon.",
			error: "We could not send your inquiry. Please try again or message us on WhatsApp.",
			direct: "Or email us directly at"
		},
		cta: {
			title: "Ready to explore the end of the world?",
			sub: "Tell us your dates and we will confirm availability on WhatsApp.",
			button: "Book on WhatsApp"
		},
		parentBanner: {
			eyebrow: "Official website",
			title: "Book online at rentacarpatagonia.com",
			sub: "Our main website has the full fleet, real-time availability and online booking.",
			button: "Go to rentacarpatagonia.com"
		},
		torres: {
			eyebrow: "Your next adventure",
			title: "Discover Torres del Paine",
			sub: "Plan your visit to the park and find inspiration for exploring one of Patagonia’s most incredible landscapes.",
			button: "Visit TorresdelPaine.com"
		},
		footer: {
			tagline: "Car rental in Puerto Natales and Punta Arenas, Chilean Patagonia.",
			maps: "View on Google Maps",
			parent: "Main website",
			rights: "All rights reserved."
		},
		whatsappFab: "Book on WhatsApp",
		language: "Language"
	},
	fr: {
		nav: {
			fleet: "Flotte",
			locations: "Prise en charge",
			routes: "Itinéraires",
			faq: "FAQ",
			contact: "Contact",
			book: "Réserver"
		},
		hero: {
			welcome: "Bienvenue chez Rentacar Patagonia !",
			eyebrow: "Puerto Natales · Patagonie chilienne",
			title: "Location de voitures à Puerto Natales",
			accent: "pour explorer Torres del Paine",
			sub: "Voitures, SUV et 4x4 avec assurance incluse, kilomètres gratuits et livraison aux aéroports de Puerto Natales et Punta Arenas. Réservez en quelques minutes sur WhatsApp.",
			secondary: "Voir la flotte"
		},
		quick: {
			title: "Réservation rapide",
			pickup: "Lieu de prise en charge",
			from: "Départ",
			to: "Retour",
			vehicle: "Type de véhicule",
			any: "Peu importe",
			submit: "Réserver sur WhatsApp",
			note: "Nous répondons directement sur WhatsApp.",
			copied: "Votre demande a été copiée : collez-la dans le chat WhatsApp.",
			msgIntro: "Bonjour, je souhaite louer un véhicule chez Rent a Car Patagonia.",
			msgVehicle: "Bonjour, je souhaite réserver le"
		},
		trust: {
			rating: "sur Google",
			ratingSub: "avis vérifiés",
			km: "Km gratuits",
			kmSub: "pour les locations de plus de 2 jours",
			ins: "Assurance incluse",
			insSub: "Conduisez l’esprit tranquille",
			support: "Assistance 24h/24",
			supportSub: "Pendant tout votre voyage"
		},
		fleet: {
			eyebrow: "Notre flotte",
			title: "Un véhicule pour chaque route de Patagonie",
			sub: "Des berlines et compactes économes pour la route, des SUV et 4x4 pour les pistes de gravier du parc national Torres del Paine.",
			all: "Tous",
			cats: {
				sedan: "Berline",
				hatchback: "Compacte",
				suv: "SUV",
				"4x4": "4x4",
				family: "7 places"
			},
			seats: "passagers",
			auto: "Automatique",
			manual: "Manuelle",
			gasoline: "Essence",
			diesel: "Diesel",
			book: "Réserver",
			inquire: "Demander par e-mail"
		},
		locations: {
			eyebrow: "Prise en charge et retour",
			title: "Récupérez et rendez le véhicule où vous voulez",
			sub: "Nous coordonnons la livraison avec votre vol ou votre bus, à Puerto Natales ou à Punta Arenas.",
			items: {
				natales: ["Centre de Puerto Natales", "Agence au 258 Magallanes"],
				terminal: ["Gare routière", "Vous arrivez en bus, nous vous attendons"],
				pnt: ["Aéroport de Puerto Natales", "Livraison selon votre vol"],
				puq: ["Aéroport de Punta Arenas", "Commencez votre voyage dès l’atterrissage"],
				puntaArenas: ["Ville de Punta Arenas", "Prise en charge coordonnée en ville"]
			}
		},
		routes: {
			eyebrow: "Itinéraires depuis Puerto Natales",
			title: "La Patagonie à votre rythme",
			sub: "Avec votre propre véhicule, vous atteignez les belvédères à l’aube, vous vous arrêtez où vous voulez et rentrez quand le vent le permet.",
			distance: "env.",
			items: [
				[
					"Torres del Paine",
					"112 km",
					"Cornes de granit, lacs turquoise et glaciers dans le parc le plus célèbre du Chili."
				],
				[
					"Grotte du Milodon",
					"24 km",
					"Un monument naturel à quelques minutes de la ville."
				],
				[
					"Punta Arenas",
					"247 km",
					"La route 9 à travers la steppe magellanique jusqu’au détroit."
				],
				[
					"El Calafate, Argentine",
					"360 km",
					"Glacier Perito Moreno. Nécessite un permis de passage organisé à l’avance."
				]
			]
		},
		included: {
			eyebrow: "Inclus dans votre location",
			title: "Tout est prêt pour prendre la route",
			items: [
				"Kilomètres gratuits au-delà de 2 jours",
				"Conducteur supplémentaire",
				"Réservoir plein",
				"Assistance 24h/24",
				"Prise en charge et retour flexibles",
				"Assurance incluse",
				"Permis pour passer en Argentine*"
			],
			footnote: "*Sous réserve d’organisation préalable."
		},
		faq: {
			eyebrow: "Questions fréquentes",
			title: "Avant de louer à Puerto Natales",
			items: [
				["Ai-je besoin d’un 4x4 pour Torres del Paine ?", "Ce n’est pas obligatoire, mais de nombreuses routes du parc sont en gravier. Un SUV ou un 4x4 offre plus de confort et de sécurité, surtout par vent ou pluie."],
				["Puis-je passer en Argentine avec le véhicule ?", "Oui. Nous gérons le permis de passage de frontière, à organiser à l’avance. Écrivez-nous sur WhatsApp avec vos dates."],
				["Livrez-vous à l’aéroport ?", "Oui, aux aéroports de Puerto Natales et de Punta Arenas, ainsi qu’à la gare routière et à notre agence du centre."],
				["Comment réserver ?", "Remplissez la réservation rapide ou appuyez sur le bouton WhatsApp. Nous confirmons la disponibilité et les conditions directement dans le chat."]
			]
		},
		contact: {
			eyebrow: "Contact",
			title: "Demande sur un véhicule",
			sub: "Laissez vos coordonnées et le véhicule qui vous intéresse. Nous répondons par e-mail depuis info@rentacarpatagonia.com.",
			name: "Nom",
			email: "E-mail",
			phone: "Téléphone (facultatif)",
			vehicle: "Véhicule souhaité",
			any: "Je ne sais pas encore",
			from: "Prise en charge",
			to: "Restitution",
			message: "Message",
			messagePh: "Indiquez votre itinéraire, le nombre de passagers ou vos questions.",
			submit: "Envoyer la demande",
			sending: "Envoi…",
			success: "Merci ! Nous avons reçu votre demande et vous répondrons bientôt.",
			error: "Impossible d’envoyer votre demande. Réessayez ou écrivez-nous sur WhatsApp.",
			direct: "Ou écrivez-nous directement à"
		},
		cta: {
			title: "Prêt à explorer le bout du monde ?",
			sub: "Indiquez-nous vos dates et nous confirmons la disponibilité sur WhatsApp.",
			button: "Réserver sur WhatsApp"
		},
		parentBanner: {
			eyebrow: "Site officiel",
			title: "Réservez en ligne sur rentacarpatagonia.com",
			sub: "Notre site principal présente toute la flotte, la disponibilité en temps réel et la réservation en ligne.",
			button: "Aller sur rentacarpatagonia.com"
		},
		torres: {
			eyebrow: "Votre prochaine aventure",
			title: "Découvrez Torres del Paine",
			sub: "Préparez votre visite du parc et trouvez l’inspiration pour explorer l’un des plus beaux paysages de Patagonie.",
			button: "Visiter TorresdelPaine.com"
		},
		footer: {
			tagline: "Location de voitures à Puerto Natales et Punta Arenas, Patagonie chilienne.",
			maps: "Voir sur Google Maps",
			parent: "Site principal",
			rights: "Tous droits réservés."
		},
		whatsappFab: "Réserver sur WhatsApp",
		language: "Langue"
	},
	pt: {
		nav: {
			fleet: "Frota",
			locations: "Retirada e entrega",
			routes: "Roteiros",
			faq: "Perguntas",
			contact: "Contato",
			book: "Reservar"
		},
		hero: {
			welcome: "Bem-vindo à Rentacar Patagonia!",
			eyebrow: "Puerto Natales · Patagônia chilena",
			title: "Aluguel de carros em Puerto Natales",
			accent: "para conhecer Torres del Paine",
			sub: "Carros, SUVs e 4x4 com seguro incluso, quilometragem livre e entrega nos aeroportos de Puerto Natales e Punta Arenas. Reserve em minutos pelo WhatsApp.",
			secondary: "Ver a frota"
		},
		quick: {
			title: "Reserva rápida",
			pickup: "Local de retirada",
			from: "Retirada",
			to: "Devolução",
			vehicle: "Tipo de veículo",
			any: "Qualquer",
			submit: "Reservar pelo WhatsApp",
			note: "Respondemos diretamente pelo WhatsApp.",
			copied: "Copiamos seu pedido: cole-o no chat do WhatsApp.",
			msgIntro: "Olá, quero alugar um veículo na Rent a Car Patagonia.",
			msgVehicle: "Olá, quero reservar o"
		},
		trust: {
			rating: "no Google",
			ratingSub: "avaliações verificadas",
			km: "Km livre",
			kmSub: "em aluguéis acima de 2 dias",
			ins: "Seguro incluso",
			insSub: "Dirija com tranquilidade",
			support: "Assistência 24h",
			supportSub: "Durante toda a viagem"
		},
		fleet: {
			eyebrow: "Nossa frota",
			title: "Um veículo para cada estrada da Patagônia",
			sub: "Sedãs e hatches econômicos para a estrada, SUVs e 4x4 para as estradas de cascalho do Parque Nacional Torres del Paine.",
			all: "Todos",
			cats: {
				sedan: "Sedã",
				hatchback: "Hatch",
				suv: "SUV",
				"4x4": "4x4",
				family: "7 lugares"
			},
			seats: "passageiros",
			auto: "Automático",
			manual: "Manual",
			gasoline: "Gasolina",
			diesel: "Diesel",
			book: "Reservar",
			inquire: "Consultar por e-mail"
		},
		locations: {
			eyebrow: "Retirada e entrega",
			title: "Retire e devolva onde for melhor para você",
			sub: "Coordenamos a entrega com seu voo ou ônibus, em Puerto Natales ou Punta Arenas.",
			items: {
				natales: ["Centro de Puerto Natales", "Escritório na Magallanes 258"],
				terminal: ["Rodoviária", "Chegou de ônibus? Estamos esperando"],
				pnt: ["Aeroporto de Puerto Natales", "Entrega combinada com seu voo"],
				puq: ["Aeroporto de Punta Arenas", "Comece a viagem ao pousar"],
				puntaArenas: ["Cidade de Punta Arenas", "Retirada combinada na cidade"]
			}
		},
		routes: {
			eyebrow: "Roteiros a partir de Puerto Natales",
			title: "A Patagônia no seu ritmo",
			sub: "Com seu próprio veículo você chega aos mirantes ao amanhecer, para onde quiser e volta quando o vento permitir.",
			distance: "aprox.",
			items: [
				[
					"Torres del Paine",
					"112 km",
					"Chifres de granito, lagos turquesa e geleiras no parque mais famoso do Chile."
				],
				[
					"Caverna do Milodon",
					"24 km",
					"Monumento natural a poucos minutos da cidade."
				],
				[
					"Punta Arenas",
					"247 km",
					"Rota 9 pela estepe magalhânica até o Estreito."
				],
				[
					"El Calafate, Argentina",
					"360 km",
					"Geleira Perito Moreno. Exige autorização de fronteira combinada com antecedência."
				]
			]
		},
		included: {
			eyebrow: "Incluso no aluguel",
			title: "Tudo pronto para pegar a estrada",
			items: [
				"Quilometragem livre acima de 2 dias",
				"Motorista adicional",
				"Tanque cheio",
				"Assistência 24h",
				"Retirada e devolução flexíveis",
				"Seguro incluso",
				"Autorização para cruzar à Argentina*"
			],
			footnote: "*Sujeito a coordenação prévia."
		},
		faq: {
			eyebrow: "Perguntas frequentes",
			title: "Antes de alugar em Puerto Natales",
			items: [
				["Preciso de um 4x4 para ir a Torres del Paine?", "Não é obrigatório, mas muitas estradas do parque são de cascalho. Um SUV ou 4x4 oferece mais conforto e segurança, principalmente com vento ou chuva."],
				["Posso cruzar para a Argentina com o veículo?", "Sim. Providenciamos a autorização de fronteira, que deve ser combinada com antecedência. Fale conosco pelo WhatsApp com suas datas."],
				["Vocês entregam no aeroporto?", "Sim, nos aeroportos de Puerto Natales e Punta Arenas, além da rodoviária e do nosso escritório no centro."],
				["Como faço a reserva?", "Preencha a reserva rápida ou toque no botão do WhatsApp. Confirmamos disponibilidade e condições diretamente no chat."]
			]
		},
		contact: {
			eyebrow: "Contato",
			title: "Consulte sobre um veículo",
			sub: "Deixe seus dados e o veículo de interesse. Respondemos por e-mail a partir de info@rentacarpatagonia.com.",
			name: "Nome",
			email: "E-mail",
			phone: "Telefone (opcional)",
			vehicle: "Veículo de interesse",
			any: "Ainda não decidi",
			from: "Retirada",
			to: "Devolução",
			message: "Mensagem",
			messagePh: "Conte seu roteiro, número de passageiros ou qualquer dúvida.",
			submit: "Enviar consulta",
			sending: "Enviando…",
			success: "Obrigado! Recebemos sua consulta e responderemos em breve.",
			error: "Não foi possível enviar sua consulta. Tente novamente ou fale conosco pelo WhatsApp.",
			direct: "Ou escreva diretamente para"
		},
		cta: {
			title: "Pronto para explorar o fim do mundo?",
			sub: "Conte suas datas e confirmamos a disponibilidade pelo WhatsApp.",
			button: "Reservar pelo WhatsApp"
		},
		parentBanner: {
			eyebrow: "Site oficial",
			title: "Reserve online em rentacarpatagonia.com",
			sub: "Nosso site principal tem a frota completa, disponibilidade em tempo real e reservas online.",
			button: "Ir para rentacarpatagonia.com"
		},
		torres: {
			eyebrow: "Sua próxima aventura",
			title: "Descubra Torres del Paine",
			sub: "Planeje sua visita ao parque e encontre inspiração para explorar uma das paisagens mais incríveis da Patagônia.",
			button: "Visitar TorresdelPaine.com"
		},
		footer: {
			tagline: "Aluguel de carros em Puerto Natales e Punta Arenas, Patagônia chilena.",
			maps: "Ver no Google Maps",
			parent: "Site principal",
			rights: "Todos os direitos reservados."
		},
		whatsappFab: "Reservar pelo WhatsApp",
		language: "Idioma"
	},
	zh: {
		nav: {
			fleet: "车队",
			locations: "取还车地点",
			routes: "自驾路线",
			faq: "常见问题",
			contact: "联系",
			book: "预订"
		},
		hero: {
			welcome: "欢迎来到 Rentacar Patagonia！",
			eyebrow: "纳塔莱斯港 · 智利巴塔哥尼亚",
			title: "纳塔莱斯港租车",
			accent: "自驾畅游百内国家公园",
			sub: "轿车、SUV 与四驱车，含保险、不限里程，可在纳塔莱斯港机场和蓬塔阿雷纳斯机场交车。通过 WhatsApp 几分钟即可预订。",
			secondary: "查看车队"
		},
		quick: {
			title: "快速预订",
			pickup: "取车地点",
			from: "取车日期",
			to: "还车日期",
			vehicle: "车型",
			any: "不限",
			submit: "通过 WhatsApp 预订",
			note: "我们将直接在 WhatsApp 上回复您。",
			copied: "已复制您的预订信息，请粘贴到 WhatsApp 聊天中。",
			msgIntro: "您好，我想在 Rent a Car Patagonia 租车。",
			msgVehicle: "您好，我想预订"
		},
		trust: {
			rating: "Google 评分",
			ratingSub: "条真实评价",
			km: "不限里程",
			kmSub: "租期超过 2 天",
			ins: "含保险",
			insSub: "安心驾驶",
			support: "24/7 道路救援",
			supportSub: "全程为您服务"
		},
		fleet: {
			eyebrow: "我们的车队",
			title: "每条巴塔哥尼亚路线都有合适的车",
			sub: "省油的三厢与两厢轿车适合公路行驶，SUV 与四驱车适合百内国家公园的砂石路。",
			all: "全部",
			cats: {
				sedan: "三厢轿车",
				hatchback: "两厢车",
				suv: "SUV",
				"4x4": "四驱",
				family: "7 座"
			},
			seats: "座",
			auto: "自动挡",
			manual: "手动挡",
			gasoline: "汽油",
			diesel: "柴油",
			book: "预订",
			inquire: "邮件咨询"
		},
		locations: {
			eyebrow: "取车与还车",
			title: "在您方便的地点取还车",
			sub: "我们会根据您的航班或巴士时间，在纳塔莱斯港或蓬塔阿雷纳斯安排交车。",
			items: {
				natales: ["纳塔莱斯港市中心", "办公室：Magallanes 258"],
				terminal: ["长途汽车站", "乘巴士抵达，我们等您"],
				pnt: ["纳塔莱斯港机场", "按航班时间交车"],
				puq: ["蓬塔阿雷纳斯机场", "落地即可出发"],
				puntaArenas: ["蓬塔阿雷纳斯市区", "市区预约取车"]
			}
		},
		routes: {
			eyebrow: "从纳塔莱斯港出发",
			title: "按自己的节奏探索巴塔哥尼亚",
			sub: "自驾让您清晨抵达观景台，随心停留，风小时再返程。",
			distance: "约",
			items: [
				[
					"百内国家公园",
					"112 km",
					"花岗岩角峰、碧绿湖泊与冰川，智利最著名的国家公园。"
				],
				[
					"米洛登洞穴",
					"24 km",
					"距市区仅几分钟车程的自然遗迹。"
				],
				[
					"蓬塔阿雷纳斯",
					"247 km",
					"沿 9 号公路穿越麦哲伦草原直达海峡。"
				],
				[
					"阿根廷卡拉法特",
					"360 km",
					"莫雷诺冰川。需提前办理过境许可。"
				]
			]
		},
		included: {
			eyebrow: "租金包含",
			title: "一切就绪，即刻上路",
			items: [
				"超过 2 天不限里程",
				"额外驾驶员",
				"满油交车",
				"24/7 道路救援",
				"灵活取还车",
				"含保险",
				"前往阿根廷的过境许可*"
			],
			footnote: "*需提前协调。"
		},
		faq: {
			eyebrow: "常见问题",
			title: "在纳塔莱斯港租车前须知",
			items: [
				["去百内国家公园需要四驱车吗？", "不是必须的，但公园内很多道路是砂石路。SUV 或四驱车更舒适、更安全，尤其是在大风或下雨时。"],
				["可以开车去阿根廷吗？", "可以。我们代办过境许可，需提前协调。请通过 WhatsApp 告诉我们您的日期。"],
				["可以在机场交车吗？", "可以，纳塔莱斯港机场和蓬塔阿雷纳斯机场均可，也可在长途汽车站或市中心办公室交车。"],
				["如何预订？", "填写快速预订表或点击 WhatsApp 按钮，我们会在聊天中直接确认车辆和条件。"]
			]
		},
		contact: {
			eyebrow: "联系我们",
			title: "车辆咨询",
			sub: "留下您的联系方式和感兴趣的车型，我们将通过 info@rentacarpatagonia.com 邮件回复您。",
			name: "姓名",
			email: "电子邮箱",
			phone: "电话（选填）",
			vehicle: "意向车型",
			any: "尚未决定",
			from: "取车",
			to: "还车",
			message: "留言",
			messagePh: "请告诉我们您的行程、乘客人数或任何问题。",
			submit: "发送咨询",
			sending: "发送中…",
			success: "谢谢！我们已收到您的咨询，将尽快回复。",
			error: "咨询发送失败，请重试或通过 WhatsApp 联系我们。",
			direct: "或直接发送邮件至"
		},
		cta: {
			title: "准备好探索世界尽头了吗？",
			sub: "告诉我们您的日期，我们将通过 WhatsApp 确认车辆。",
			button: "通过 WhatsApp 预订"
		},
		parentBanner: {
			eyebrow: "官方网站",
			title: "在 rentacarpatagonia.com 在线预订",
			sub: "我们的主站提供完整车队、实时空车查询和在线预订。",
			button: "前往 rentacarpatagonia.com"
		},
		torres: {
			eyebrow: "ä¸‹ä¸€æ¬¡å†’é™©",
			title: "æŽ¢ç´¢ Torres del Paine",
			sub: "è§„åˆ’å…¬å›­ä¹‹æ—…ï¼Œä¸ºæŽ¢ç´¢å·´å¡”å“¥å°¼äºšæœ€ä»¤äººéœ‡æ’¼çš„æ™¯è‰²ä¹‹ä¸€å¯»æ‰¾çµæ„Ÿã€‚",
			button: "è®¿é—® TorresdelPaine.com"
		},
		footer: {
			tagline: "智利巴塔哥尼亚纳塔莱斯港与蓬塔阿雷纳斯租车。",
			maps: "在 Google 地图中查看",
			parent: "主站",
			rights: "版权所有。"
		},
		whatsappFab: "通过 WhatsApp 预订",
		language: "语言"
	}
};
var STORAGE_KEY = "rcp-lang";
var I18nContext = createContext({
	lang: "es",
	t: es,
	setLang: () => {}
});
function isLang(value) {
	return !!value && Object.hasOwn(DICTS, value);
}
function I18nProvider({ children }) {
	const [lang, setLangState] = useState("es");
	useEffect(() => {
		const initial = [
			new URLSearchParams(window.location.search).get("lang"),
			localStorage.getItem(STORAGE_KEY),
			navigator.language.slice(0, 2)
		].find(isLang);
		if (initial) setLangState(initial);
	}, []);
	useEffect(() => {
		document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
	}, [lang]);
	const setLang = (next) => {
		setLangState(next);
		localStorage.setItem(STORAGE_KEY, next);
	};
	return /* @__PURE__ */ jsx(I18nContext.Provider, {
		value: {
			lang,
			t: DICTS[lang],
			setLang
		},
		children
	});
}
var useI18n = () => useContext(I18nContext);
//#endregion
//#region src/components/WhatsAppIcon.tsx
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ jsx("path", { d: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.45 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.65l6.04-1.58a11.33 11.33 0 0 0 5.43 1.38h.01c6.26 0 11.36-5.1 11.37-11.36 0-3.04-1.18-5.9-3.33-8.05" })
	});
}
//#endregion
//#region src/components/Header.tsx
function LanguageSelect({ solid }) {
	const { lang, setLang, t } = useI18n();
	return /* @__PURE__ */ jsxs("label", {
		className: `relative flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${solid ? "border-navy/15 text-navy hover:bg-ice" : "border-white/40 text-white hover:bg-white/10"}`,
		children: [
			/* @__PURE__ */ jsx(Globe, {
				className: "size-4",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: t.language
			}),
			/* @__PURE__ */ jsx("select", {
				value: lang,
				onChange: (e) => setLang(e.target.value),
				className: "cursor-pointer appearance-none bg-transparent pr-1 outline-none",
				children: LANGS.map((l) => /* @__PURE__ */ jsxs("option", {
					value: l.code,
					className: "text-navy-deep",
					children: [
						l.short,
						" · ",
						l.label
					]
				}, l.code))
			})
		]
	});
}
function Header() {
	const { t } = useI18n();
	const [solid, setSolid] = useState(false);
	useEffect(() => {
		const onScroll = () => setSolid(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const links = [
		["#flota", t.nav.fleet],
		["#retiro", t.nav.locations],
		["#rutas", t.nav.routes],
		["#preguntas", t.nav.faq],
		["#contacto", t.nav.contact]
	];
	return /* @__PURE__ */ jsx("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all duration-300 ${solid ? "bg-white/95 shadow-[0_1px_0_rgb(10_42_94/0.08)] backdrop-blur" : "bg-transparent"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#inicio",
					"aria-label": "Rent a Car Patagonia · Puerto Natales",
					className: `flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5 transition-shadow ${solid ? "" : "shadow-lg shadow-navy-deep/20"}`,
					children: /* @__PURE__ */ jsx("img", {
						src: "/.netlify/images?url=/img/logo.png&w=360&fm=webp",
						alt: "Rent a Car Patagonia",
						width: 1600,
						height: 534,
						className: "h-9 w-auto md:h-11"
					})
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Principal",
					children: links.map(([href, label]) => /* @__PURE__ */ jsx("a", {
						href,
						className: `text-sm font-semibold transition-colors ${solid ? "text-navy/80 hover:text-glacier" : "text-white/85 hover:text-white"}`,
						children: label
					}, href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(LanguageSelect, { solid }), /* @__PURE__ */ jsxs("a", {
						href: WHATSAPP_LINK,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-navy-deep transition hover:brightness-95 sm:flex",
						children: [/* @__PURE__ */ jsx(WhatsAppIcon, { className: "size-4" }), t.nav.book]
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/ContactForm.tsx
var field$1 = "w-full rounded-xl border border-navy/12 bg-mist px-3.5 py-3 text-[15px] font-medium text-navy-deep outline-none transition focus:border-glacier focus:bg-white focus:ring-4 focus:ring-glacier/15";
var labelCls = "mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60";
var vehicleLabel = (v, auto, manual) => `${v.name} ${v.engine} (${v.transmission === "auto" ? auto : manual})`;
/** Vehicle inquiry form handled by Netlify Forms (registered via public/__forms.html). */
function ContactForm({ vehicle, onVehicle }) {
	const { t } = useI18n();
	const [status, setStatus] = useState("idle");
	const submit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		data.set("subject", `Consulta de vehículo: ${data.get("vehicle") || "sin definir"} — ${data.get("name")}`);
		setStatus("sending");
		try {
			const res = await fetch("/__forms.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(data).toString()
			});
			if (!res.ok) throw new Error(String(res.status));
			form.reset();
			onVehicle("");
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	};
	if (status === "sent") return /* @__PURE__ */ jsxs("div", {
		role: "status",
		className: "flex flex-col items-center justify-center gap-4 rounded-3xl bg-white p-10 text-center ring-1 ring-navy/8",
		children: [/* @__PURE__ */ jsx(CheckCircle2, {
			className: "size-12 text-glacier",
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsx("p", {
			className: "font-display text-2xl font-semibold text-navy",
			children: t.contact.success
		})]
	});
	return /* @__PURE__ */ jsxs("form", {
		name: CONTACT_FORM_NAME,
		method: "POST",
		"data-netlify": "true",
		"netlify-honeypot": "bot-field",
		onSubmit: submit,
		className: "rounded-3xl bg-white p-6 ring-1 ring-navy/8 shadow-[0_24px_50px_-24px_rgb(10_42_94/0.35)] md:p-8",
		children: [
			/* @__PURE__ */ jsx("input", {
				type: "hidden",
				name: "form-name",
				value: CONTACT_FORM_NAME
			}),
			/* @__PURE__ */ jsx("input", {
				type: "hidden",
				name: "subject"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "hidden",
				children: /* @__PURE__ */ jsxs("label", { children: ["No completar: ", /* @__PURE__ */ jsx("input", {
					name: "bot-field",
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: labelCls,
							children: [
								/* @__PURE__ */ jsx(User, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.contact.name
							]
						}), /* @__PURE__ */ jsx("input", {
							name: "name",
							required: true,
							autoComplete: "name",
							className: field$1
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: labelCls,
							children: [
								/* @__PURE__ */ jsx(Mail, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.contact.email
							]
						}), /* @__PURE__ */ jsx("input", {
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email",
							className: field$1
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: labelCls,
							children: [
								/* @__PURE__ */ jsx(Phone, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.contact.phone
							]
						}), /* @__PURE__ */ jsx("input", {
							name: "phone",
							type: "tel",
							autoComplete: "tel",
							className: field$1
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: labelCls,
							children: [
								/* @__PURE__ */ jsx(CarFront, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.contact.vehicle
							]
						}), /* @__PURE__ */ jsxs("select", {
							name: "vehicle",
							value: vehicle,
							onChange: (e) => onVehicle(e.target.value),
							className: field$1,
							children: [/* @__PURE__ */ jsx("option", {
								value: "",
								children: t.contact.any
							}), FLEET.map((v) => {
								const label = vehicleLabel(v, t.fleet.auto, t.fleet.manual);
								return /* @__PURE__ */ jsx("option", {
									value: label,
									children: label
								}, label);
							})]
						})]
					}),
					["from", "to"].map((key) => /* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: labelCls,
							children: [
								/* @__PURE__ */ jsx(CalendarDays, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.contact[key]
							]
						}), /* @__PURE__ */ jsx("input", {
							name: key,
							type: "date",
							className: field$1
						})]
					}, key)),
					/* @__PURE__ */ jsxs("label", {
						className: "block sm:col-span-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: labelCls,
							children: t.contact.message
						}), /* @__PURE__ */ jsx("textarea", {
							name: "message",
							required: true,
							rows: 4,
							placeholder: t.contact.messagePh,
							className: `${field$1} resize-y`
						})]
					})
				]
			}),
			status === "error" && /* @__PURE__ */ jsx("p", {
				role: "alert",
				className: "mt-4 text-sm font-semibold text-red-600",
				children: t.contact.error
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "submit",
				disabled: status === "sending",
				className: "mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-navy px-5 py-4 text-base font-extrabold text-white transition hover:bg-glacier disabled:opacity-60",
				children: [
					/* @__PURE__ */ jsx(Send, {
						className: "size-5",
						"aria-hidden": "true"
					}),
					" ",
					status === "sending" ? t.contact.sending : t.contact.submit
				]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-3 text-center text-sm text-navy/60",
				children: [
					t.contact.direct,
					" ",
					/* @__PURE__ */ jsx("a", {
						href: `mailto:${CONTACT_EMAIL}`,
						className: "font-semibold text-glacier hover:underline",
						children: CONTACT_EMAIL
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/QuickBooking.tsx
var field = "w-full rounded-xl border border-navy/12 bg-mist px-3.5 py-3 text-[15px] font-medium text-navy-deep outline-none transition focus:border-glacier focus:bg-white focus:ring-4 focus:ring-glacier/15";
/** Opens WhatsApp with the request; without a phone number the text is copied so the visitor can paste it. */
async function openWhatsApp(message, onCopied) {
	const url = whatsappUrl(message);
	window.open(url, "_blank", "noopener,noreferrer");
}
function QuickBooking({ onCopied }) {
	const { t } = useI18n();
	const [pickup, setPickup] = useState(LOCATION_IDS[0]);
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [vehicle, setVehicle] = useState("");
	const submit = (e) => {
		e.preventDefault();
		const location = t.locations.items[pickup][0];
		openWhatsApp([
			t.quick.msgIntro,
			`${t.quick.pickup}: ${location}`,
			from && `${t.quick.from}: ${from}`,
			to && `${t.quick.to}: ${to}`,
			`${t.quick.vehicle}: ${vehicle ? t.fleet.cats[vehicle] : t.quick.any}`
		].filter(Boolean).join("\n"), onCopied);
	};
	return /* @__PURE__ */ jsxs("form", {
		onSubmit: submit,
		className: "rise w-full rounded-3xl bg-white p-6 shadow-[0_30px_80px_-20px_rgb(6_26_61/0.55)] md:p-7",
		style: { animationDelay: "0.25s" },
		children: [
			/* @__PURE__ */ jsx("h2", {
				className: "font-display text-2xl font-semibold text-navy",
				children: t.quick.title
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 space-y-4",
				children: [
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60",
							children: [
								/* @__PURE__ */ jsx(MapPin, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.quick.pickup
							]
						}), /* @__PURE__ */ jsx("select", {
							value: pickup,
							onChange: (e) => setPickup(e.target.value),
							className: field,
							children: LOCATION_IDS.map((id) => /* @__PURE__ */ jsx("option", {
								value: id,
								children: t.locations.items[id][0]
							}, id))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3",
						children: [[
							"from",
							from,
							setFrom
						], [
							"to",
							to,
							setTo
						]].map(([key, value, set]) => /* @__PURE__ */ jsxs("label", {
							className: "block",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60",
								children: [
									/* @__PURE__ */ jsx(CalendarDays, {
										className: "size-3.5",
										"aria-hidden": "true"
									}),
									" ",
									t.quick[key]
								]
							}), /* @__PURE__ */ jsx("input", {
								type: "date",
								value,
								min: key === "to" ? from || void 0 : void 0,
								onChange: (e) => set(e.target.value),
								className: field
							})]
						}, key))
					}),
					/* @__PURE__ */ jsxs("label", {
						className: "block",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60",
							children: [
								/* @__PURE__ */ jsx(CarFront, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.quick.vehicle
							]
						}), /* @__PURE__ */ jsxs("select", {
							value: vehicle,
							onChange: (e) => setVehicle(e.target.value),
							className: field,
							children: [/* @__PURE__ */ jsx("option", {
								value: "",
								children: t.quick.any
							}), Object.keys(t.fleet.cats).map((c) => /* @__PURE__ */ jsx("option", {
								value: c,
								children: t.fleet.cats[c]
							}, c))]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("button", {
				type: "submit",
				className: "mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-5 py-4 text-base font-extrabold text-navy-deep transition hover:brightness-95 active:scale-[0.99]",
				children: [
					/* @__PURE__ */ jsx(WhatsAppIcon, {}),
					" ",
					t.quick.submit
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-center text-sm text-navy/60",
				children: t.quick.note
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var img = (file, w) => `/.netlify/images?url=/img/${file}&w=${w}&fm=webp`;
function Eyebrow({ children, light }) {
	return /* @__PURE__ */ jsx("p", {
		className: `text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-lagoon" : "text-glacier"}`,
		children
	});
}
function Landing() {
	const { t } = useI18n();
	const [toast, setToast] = useState(false);
	const [inquiry, setInquiry] = useState("");
	const showCopied = () => {
		setToast(true);
		setTimeout(() => setToast(false), 5e3);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Header, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, { onCopied: showCopied }),
			/* @__PURE__ */ jsx(TrustBar, {}),
			/* @__PURE__ */ jsx(ParentBanner, {}),
			/* @__PURE__ */ jsx(Fleet, {
				onCopied: showCopied,
				onInquire: setInquiry
			}),
			/* @__PURE__ */ jsx(Locations, {}),
			/* @__PURE__ */ jsx(Routes, {}),
			/* @__PURE__ */ jsx(Included, {}),
			/* @__PURE__ */ jsx(Faq, {}),
			/* @__PURE__ */ jsx(Contact, {
				vehicle: inquiry,
				onVehicle: setInquiry
			}),
			/* @__PURE__ */ jsx(FinalCta, {}),
			/* @__PURE__ */ jsx(TorresDelPaine, {})
		] }),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsxs("a", {
			href: WHATSAPP_LINK,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": t.whatsappFab,
			className: "pulse-ring group fixed bottom-5 right-5 z-50 isolate flex items-center gap-2 rounded-full bg-whatsapp p-4 text-white shadow-[0_12px_30px_-6px_rgb(37_211_102/0.6)] transition hover:scale-105 md:bottom-7 md:right-7",
			children: [/* @__PURE__ */ jsx(WhatsAppIcon, { className: "size-7" }), /* @__PURE__ */ jsx("span", {
				className: "hidden max-w-0 overflow-hidden whitespace-nowrap font-bold transition-all duration-300 group-hover:max-w-56 group-hover:pr-1 md:inline",
				children: t.whatsappFab
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			role: "status",
			className: `fixed inset-x-0 bottom-24 z-50 mx-auto w-fit max-w-[90vw] rounded-2xl bg-navy-deep px-5 py-3 text-center text-sm font-semibold text-white shadow-xl transition-all duration-300 ${toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`,
			children: toast && t.quick.copied
		})
	] });
}
function Hero({ onCopied }) {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs("section", {
		id: "inicio",
		className: "relative isolate overflow-hidden bg-navy-deep",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: img("hero.png", 2e3),
				srcSet: `${img("hero.png", 900)} 900w, ${img("hero.png", 1400)} 1400w, ${img("hero.png", 2e3)} 2000w`,
				sizes: "100vw",
				alt: "Auto de arriendo en camino de ripio frente a los Cuernos del Paine, Torres del Paine",
				fetchPriority: "high",
				className: "absolute inset-0 -z-10 size-full object-cover object-[50%_60%]"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/90 via-navy/60 to-navy/10" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.25fr_0.85fr] lg:pt-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rise max-w-2xl text-white",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-5 font-display text-2xl font-medium text-lagoon md:text-3xl",
							children: t.hero.welcome
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur",
							children: [
								/* @__PURE__ */ jsx(MapPin, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.hero.eyebrow
							]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl",
							children: [
								t.hero.title,
								" ",
								/* @__PURE__ */ jsx("em", {
									className: "block font-medium text-lagoon not-italic md:italic",
									children: t.hero.accent
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-white/85",
							children: t.hero.sub
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "#flota",
								className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-navy transition hover:bg-ice",
								children: [
									t.hero.secondary,
									" ",
									/* @__PURE__ */ jsx(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-sm text-white/85",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "flex text-amber-300",
										children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, {
											className: "size-4 fill-current",
											"aria-hidden": "true"
										}, i))
									}),
									/* @__PURE__ */ jsx("strong", {
										className: "text-white",
										children: RATING.score
									}),
									" · ",
									RATING.count,
									" ",
									t.trust.ratingSub
								]
							})]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mx-auto w-full max-w-md lg:ml-auto",
					children: /* @__PURE__ */ jsx(QuickBooking, { onCopied })
				})]
			})
		]
	});
}
function TrustBar() {
	const { t } = useI18n();
	const items = [
		[
			Star,
			`${RATING.score} ${t.trust.rating}`,
			`${RATING.count} ${t.trust.ratingSub}`
		],
		[
			Infinity$1,
			t.trust.km,
			t.trust.kmSub
		],
		[
			ShieldCheck,
			t.trust.ins,
			t.trust.insSub
		],
		[
			Headset,
			t.trust.support,
			t.trust.supportSub
		]
	];
	return /* @__PURE__ */ jsx("section", {
		className: "border-b border-navy/10 bg-white",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-px bg-navy/10 lg:grid-cols-4",
			children: items.map(([Icon, title, sub]) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 bg-white px-5 py-6 md:px-8",
				children: [/* @__PURE__ */ jsx("span", {
					className: "grid size-11 shrink-0 place-items-center rounded-2xl bg-ice text-glacier",
					children: /* @__PURE__ */ jsx(Icon, {
						className: "size-5",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "font-bold text-navy",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-navy/60",
					children: sub
				})] })]
			}, title))
		})
	});
}
function ParentBanner() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("section", {
		"aria-labelledby": "parent-banner",
		className: "bg-white px-5 py-12",
		children: /* @__PURE__ */ jsxs("a", {
			href: PARENT_URL,
			target: "_blank",
			rel: "noopener",
			className: "group relative isolate mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[2rem] bg-navy-deep px-7 py-10 text-white shadow-[0_24px_50px_-24px_rgb(10_42_94/0.5)] md:flex-row md:items-center md:justify-between md:px-12 md:py-12",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: img("road.png", 1400),
					srcSet: `${img("road.png", 800)} 800w, ${img("road.png", 1400)} 1400w`,
					sizes: "(min-width: 1280px) 1280px, 100vw",
					alt: "",
					loading: "lazy",
					className: "absolute inset-0 -z-10 size-full object-cover transition duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-glacier/50" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ jsx("img", {
						src: img("logo-icon.png", 160),
						alt: "",
						width: 80,
						height: 80,
						loading: "lazy",
						className: "hidden size-20 shrink-0 rounded-2xl bg-white p-2.5 sm:block"
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-lagoon",
							children: [
								/* @__PURE__ */ jsx(Globe, {
									className: "size-3.5",
									"aria-hidden": "true"
								}),
								" ",
								t.parentBanner.eyebrow
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "parent-banner",
							className: "mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl",
							children: t.parentBanner.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 max-w-xl text-white/80",
							children: t.parentBanner.sub
						})
					] })]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3.5 font-bold text-navy transition group-hover:bg-ice md:self-auto",
					children: [
						t.parentBanner.button,
						" ",
						/* @__PURE__ */ jsx(ExternalLink, {
							className: "size-4",
							"aria-hidden": "true"
						})
					]
				})
			]
		})
	});
}
function Fleet({ onCopied, onInquire }) {
	const { t } = useI18n();
	const [filter, setFilter] = useState("all");
	const cats = Object.keys(t.fleet.cats);
	const shown = FLEET.filter((v) => filter === "all" || v.category === filter);
	return /* @__PURE__ */ jsx("section", {
		id: "flota",
		className: "topo bg-mist py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col justify-between gap-8 lg:flex-row lg:items-end",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx(Eyebrow, { children: t.fleet.eyebrow }),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl",
							children: t.fleet.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg text-navy/70",
							children: t.fleet.sub
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: ["all", ...cats].map((c) => /* @__PURE__ */ jsx("button", {
						"aria-pressed": filter === c,
						onClick: () => setFilter(c),
						className: `rounded-full px-4 py-2 text-sm font-bold transition ${filter === c ? "bg-navy text-white" : "bg-white text-navy ring-1 ring-navy/10 hover:ring-glacier/40"}`,
						children: c === "all" ? t.fleet.all : t.fleet.cats[c]
					}, c))
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: shown.map((v) => {
					const label = vehicleLabel(v, t.fleet.auto, t.fleet.manual);
					return /* @__PURE__ */ jsxs("article", {
						className: "group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/8 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(10_42_94/0.35)]",
						children: [/* @__PURE__ */ jsx("div", {
							className: "relative aspect-[3/2] overflow-hidden bg-ice",
							children: /* @__PURE__ */ jsx("img", {
								src: img(v.photo, 600),
								srcSet: `${img(v.photo, 400)} 400w, ${img(v.photo, 600)} 600w, ${img(v.photo, 900)} 900w`,
								sizes: "(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
								alt: `${v.name} ${v.engine}`,
								width: 600,
								height: 400,
								loading: "lazy",
								className: "size-full object-cover transition duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: `rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${v.category === "4x4" ? "bg-navy text-white" : "bg-ice text-glacier"}`,
										children: t.fleet.cats[v.category]
									}), /* @__PURE__ */ jsx("span", {
										className: "font-display text-3xl font-semibold text-navy/15 transition group-hover:text-glacier/30",
										children: v.engine
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-5 font-display text-2xl font-semibold text-navy",
									children: v.name
								}),
								/* @__PURE__ */ jsxs("ul", {
									className: "mt-4 space-y-2 text-sm text-navy/70",
									children: [
										/* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx(Users, {
													className: "size-4 text-glacier",
													"aria-hidden": "true"
												}),
												" ",
												v.seats,
												" ",
												t.fleet.seats
											]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx(Gauge, {
													className: "size-4 text-glacier",
													"aria-hidden": "true"
												}),
												" ",
												v.transmission === "auto" ? t.fleet.auto : t.fleet.manual
											]
										}),
										/* @__PURE__ */ jsxs("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ jsx(Fuel, {
													className: "size-4 text-glacier",
													"aria-hidden": "true"
												}),
												" ",
												t.fleet[v.fuel]
											]
										})
									]
								}),
								/* @__PURE__ */ jsxs("button", {
									onClick: () => openWhatsApp(`${t.quick.msgVehicle} ${label}.`, onCopied),
									className: "mt-6 flex items-center justify-center gap-2 rounded-2xl border-2 border-navy/10 px-4 py-3 text-sm font-bold text-navy transition hover:border-whatsapp hover:bg-whatsapp hover:text-navy-deep",
									children: [
										/* @__PURE__ */ jsx(WhatsAppIcon, { className: "size-4" }),
										" ",
										t.fleet.book
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "#contacto",
									onClick: () => onInquire(label),
									className: "mt-2 flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold text-glacier transition hover:bg-ice",
									children: [
										/* @__PURE__ */ jsx(Mail, {
											className: "size-4",
											"aria-hidden": "true"
										}),
										" ",
										t.fleet.inquire
									]
								})
							]
						})]
					}, `${v.name}-${v.transmission}`);
				})
			})]
		})
	});
}
function Locations() {
	const { t } = useI18n();
	const icons = {
		natales: MapPin,
		terminal: BusFront,
		pnt: PlaneLanding,
		puq: PlaneLanding,
		puntaArenas: MapPin
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "retiro",
		className: "relative overflow-hidden bg-navy py-24 text-white",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute -right-40 -top-40 size-[30rem] rounded-full bg-glacier/30 blur-3xl",
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Eyebrow, {
					light: true,
					children: t.locations.eyebrow
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl",
					children: t.locations.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg text-white/75",
					children: t.locations.sub
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8 overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ jsx("img", {
						src: img("natales.png", 1e3),
						alt: "Costanera de Puerto Natales frente al seno Última Esperanza",
						loading: "lazy",
						className: "aspect-[16/10] w-full object-cover"
					})
				})
			] }), /* @__PURE__ */ jsx("ol", {
				className: "space-y-3",
				children: LOCATION_IDS.map((id, i) => {
					const Icon = icons[id];
					const [name, detail] = t.locations.items[id];
					return /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "font-display text-sm text-lagoon",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-navy",
								children: /* @__PURE__ */ jsx(Icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-lg font-bold",
								children: name
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-white/65",
								children: detail
							})] })
						]
					}, id);
				})
			})]
		})]
	});
}
function Routes() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("section", {
		id: "rutas",
		className: "bg-white py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Eyebrow, { children: t.routes.eyebrow }), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl",
					children: t.routes.title
				})] }), /* @__PURE__ */ jsx("p", {
					className: "text-lg text-navy/70",
					children: t.routes.sub
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative min-h-80 overflow-hidden rounded-3xl",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: img("road.png", 1200),
							alt: "Auto de arriendo en la Ruta 9 de la Patagonia chilena",
							loading: "lazy",
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" }),
						/* @__PURE__ */ jsxs("p", {
							className: "absolute bottom-6 left-6 flex items-center gap-2 font-display text-2xl text-white",
							children: [/* @__PURE__ */ jsx(Mountain, {
								className: "size-6",
								"aria-hidden": "true"
							}), " Ruta del Fin del Mundo"]
						})
					]
				}), /* @__PURE__ */ jsx("ul", {
					className: "divide-y divide-navy/10 rounded-3xl bg-mist px-6 ring-1 ring-navy/8",
					children: t.routes.items.map(([name, km, desc]) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-5 py-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "w-24 shrink-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[11px] font-bold uppercase tracking-wider text-navy/50",
								children: t.routes.distance
							}), /* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl font-semibold text-glacier",
								children: km
							})]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-bold text-navy",
							children: name
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-navy/65",
							children: desc
						})] })]
					}, name))
				})]
			})]
		})
	});
}
function Included() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("section", {
		className: "topo bg-ice py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-5 text-center",
			children: [
				/* @__PURE__ */ jsx(Eyebrow, { children: t.included.eyebrow }),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl font-semibold text-navy md:text-5xl",
					children: t.included.title
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-12 flex flex-wrap justify-center gap-3",
					children: t.included.items.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-2.5 rounded-full bg-white px-5 py-3 font-semibold text-navy shadow-sm ring-1 ring-navy/8",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid size-6 place-items-center rounded-full bg-glacier text-white",
							children: /* @__PURE__ */ jsx(Check, {
								className: "size-3.5",
								strokeWidth: 3,
								"aria-hidden": "true"
							})
						}), item]
					}, item))
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 text-sm text-navy/55",
					children: t.included.footnote
				})
			]
		})
	});
}
function Faq() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("section", {
		id: "preguntas",
		className: "bg-white py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Eyebrow, { children: t.faq.eyebrow }), /* @__PURE__ */ jsx("h2", {
				className: "mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl",
				children: t.faq.title
			})] }), /* @__PURE__ */ jsx("div", {
				className: "space-y-3",
				children: t.faq.items.map(([q, a], i) => /* @__PURE__ */ jsxs("details", {
					open: i === 0,
					className: "group rounded-2xl bg-mist p-6 ring-1 ring-navy/8 open:bg-white open:shadow-[0_18px_40px_-24px_rgb(10_42_94/0.4)]",
					children: [/* @__PURE__ */ jsxs("summary", {
						className: "flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy [&::-webkit-details-marker]:hidden",
						children: [q, /* @__PURE__ */ jsx(ChevronDown, {
							className: "size-5 shrink-0 text-glacier transition group-open:rotate-180",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 leading-relaxed text-navy/70",
						children: a
					})]
				}, q))
			})]
		})
	});
}
function Contact({ vehicle, onVehicle }) {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("section", {
		id: "contacto",
		className: "topo bg-mist py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ jsx(Eyebrow, { children: t.contact.eyebrow }),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl",
						children: t.contact.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg text-navy/70",
						children: t.contact.sub
					})
				]
			}), /* @__PURE__ */ jsx(ContactForm, {
				vehicle,
				onVehicle
			})]
		})
	});
}
function FinalCta() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsx("section", {
		className: "px-5 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-glacier via-navy to-navy-deep px-8 py-16 text-center text-white md:py-20",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute -left-20 -bottom-24 size-80 rounded-full bg-lagoon/30 blur-3xl",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "relative font-display text-4xl font-semibold md:text-5xl",
					children: t.cta.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "relative mx-auto mt-4 max-w-xl text-lg text-white/80",
					children: t.cta.sub
				}),
				/* @__PURE__ */ jsxs("a", {
					href: WHATSAPP_LINK,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "relative mt-8 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-lg font-extrabold text-navy-deep transition hover:brightness-95",
					children: [
						/* @__PURE__ */ jsx(WhatsAppIcon, {}),
						" ",
						t.cta.button
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "relative mt-6 flex items-center justify-center gap-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ jsx(Clock, {
							className: "size-4",
							"aria-hidden": "true"
						}),
						" ",
						t.trust.support
					]
				})
			]
		})
	});
}
function TorresDelPaine() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs("section", {
		className: "relative isolate overflow-hidden bg-gradient-to-b from-ice via-white to-white px-5 py-20 text-center",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-lagoon/15 to-transparent",
			"aria-hidden": "true"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ jsx(Eyebrow, { children: t.torres.eyebrow }),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl",
					children: t.torres.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-4 max-w-2xl text-lg text-navy/70",
					children: t.torres.sub
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "https://torresdelpaine.com",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-bold text-white transition hover:bg-glacier",
					children: [
						t.torres.button,
						" ",
						/* @__PURE__ */ jsx(ExternalLink, {
							className: "size-4",
							"aria-hidden": "true"
						})
					]
				})
			]
		})]
	});
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative overflow-hidden bg-navy-deep text-white/70",
		children: [
			/* @__PURE__ */ jsxs("svg", {
				className: "absolute inset-x-0 top-0 h-24 w-full text-glacier/30",
				viewBox: "0 0 1440 120",
				preserveAspectRatio: "none",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ jsx("path", {
					fill: "currentColor",
					d: "M0 120 150 55l78 35 130-70 112 73 115-48 102 58 137-82 119 77 106-55 135 61 104-45 152 41v120H0z"
				}), /* @__PURE__ */ jsx("path", {
					fill: "#103b7a",
					d: "m0 92 125-45 83 47 143-64 122 68 126-54 127 58 130-69 131 66 113-43 122 48 118-41 100 36v57H0z"
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-12 pt-28 md:flex-row md:items-start md:justify-between",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-sm",
					children: [/* @__PURE__ */ jsx("img", {
						src: img("logo.png", 440),
						alt: "Rent a Car Patagonia Chile",
						width: 1600,
						height: 534,
						loading: "lazy",
						className: "h-16 w-auto rounded-xl bg-white px-3 py-2"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm",
						children: t.footer.tagline
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(MapPin, {
									className: "size-4 text-lagoon",
									"aria-hidden": "true"
								}),
								" ",
								ADDRESS
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: MAPS_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "block font-semibold text-white hover:text-lagoon",
							children: [t.footer.maps, " →"]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: PARENT_URL,
							target: "_blank",
							rel: "noopener",
							className: "block font-semibold text-white hover:text-lagoon",
							children: [t.footer.parent, ": rentacarpatagonia.com →"]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-white/10 py-5 text-center text-xs text-white/50",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Rent a Car Patagonia. ",
					t.footer.rights
				]
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsx(Landing, {}) });
//#endregion
export { SplitComponent as component };
