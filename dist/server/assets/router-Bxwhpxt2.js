import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/lib/site.ts
var WHATSAPP_PHONE = "56920893939";
var WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}`;
function whatsappUrl(message) {
	if (message) return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
	return WHATSAPP_LINK;
}
var CONTACT_EMAIL = "info@rentacarpatagonia.com";
var CONTACT_FORM_NAME = "contacto-vehiculos";
var SITE_URL = "https://rentarpatagoniachile.cl";
var PARENT_URL = "https://rentacarpatagonia.com";
var ADDRESS = "Magallanes 258, Puerto Natales, Chile";
var MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Magallanes+258+Puerto+Natales+Chile";
var RATING = {
	score: "5.0",
	count: 188
};
var FLEET = [
	{
		name: "KIA Sportage 4x4",
		engine: "2.0",
		transmission: "auto",
		seats: 5,
		fuel: "diesel",
		category: "4x4",
		photo: "fleet/kia-sportage.jpg"
	},
	{
		name: "New Subaru XV 4WD",
		engine: "2.0",
		transmission: "auto",
		seats: 4,
		fuel: "gasoline",
		category: "4x4",
		photo: "fleet/subaru-xv.jpg"
	},
	{
		name: "Hyundai Creta",
		engine: "1.5",
		transmission: "auto",
		seats: 5,
		fuel: "gasoline",
		category: "suv",
		photo: "fleet/hyundai-creta.jpg"
	},
	{
		name: "Changan CS35 Plus",
		engine: "1.5",
		transmission: "auto",
		seats: 5,
		fuel: "gasoline",
		category: "suv",
		photo: "fleet/changan-cs35-plus.jpg"
	},
	{
		name: "Changan CS35",
		engine: "1.6",
		transmission: "manual",
		seats: 5,
		fuel: "gasoline",
		category: "suv",
		photo: "fleet/changan-cs35.jpg"
	},
	{
		name: "Suzuki XL7",
		engine: "1.5",
		transmission: "manual",
		seats: 7,
		fuel: "gasoline",
		category: "family",
		photo: "fleet/suzuki-xl7.jpg"
	},
	{
		name: "Suzuki Baleno",
		engine: "1.5",
		transmission: "auto",
		seats: 5,
		fuel: "gasoline",
		category: "hatchback",
		photo: "fleet/suzuki-baleno.jpg"
	},
	{
		name: "Changan Alsvin",
		engine: "1.5",
		transmission: "auto",
		seats: 5,
		fuel: "gasoline",
		category: "sedan",
		photo: "fleet/changan-alsvin.jpg"
	},
	{
		name: "Suzuki Dzire",
		engine: "1.2",
		transmission: "auto",
		seats: 4,
		fuel: "gasoline",
		category: "sedan",
		photo: "fleet/suzuki-dzire-silver.jpg"
	},
	{
		name: "Suzuki Dzire",
		engine: "1.2",
		transmission: "manual",
		seats: 4,
		fuel: "gasoline",
		category: "sedan",
		photo: "fleet/suzuki-dzire.jpg"
	},
	{
		name: "Suzuki Celerio",
		engine: "1.0",
		transmission: "auto",
		seats: 3,
		fuel: "gasoline",
		category: "hatchback",
		photo: "fleet/suzuki-celerio.jpg"
	},
	{
		name: "Suzuki S-Presso",
		engine: "1.0",
		transmission: "auto",
		seats: 3,
		fuel: "gasoline",
		category: "hatchback",
		photo: "fleet/suzuki-s-presso.jpg"
	}
];
var LOCATION_IDS = [
	"natales",
	"terminal",
	"pnt",
	"puq",
	"puntaArenas"
];
//#endregion
//#region src/routes/__root.tsx
var siteName = "Arriendo de Autos en Puerto Natales | Rent a Car Patagonia Chile";
var siteDescription = "Arriendo de autos, SUV y 4x4 en Puerto Natales para recorrer Torres del Paine. Seguro incluido, km libres, entrega en aeropuertos de Puerto Natales y Punta Arenas. Reserva por WhatsApp.";
var ogImage = `${SITE_URL}/.netlify/images?url=/img/hero.png&w=1200&h=630&fit=cover&fm=jpg`;
var structuredData = {
	"@context": "https://schema.org",
	"@type": "AutoRental",
	name: "Rent a Car Patagonia Chile",
	url: SITE_URL,
	image: ogImage,
	description: siteDescription,
	logo: `${SITE_URL}/img/logo.png`,
	telephone: "+56920893939",
	sameAs: [PARENT_URL, WHATSAPP_LINK],
	address: {
		"@type": "PostalAddress",
		streetAddress: "Magallanes 258",
		addressLocality: "Puerto Natales",
		addressRegion: "Magallanes y la Antártica Chilena",
		postalCode: "6160000",
		addressCountry: "CL"
	},
	areaServed: [
		"Puerto Natales",
		"Torres del Paine",
		"Punta Arenas"
	],
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: RATING.score,
		reviewCount: RATING.count
	},
	openingHours: "Mo-Su 00:00-23:59",
	makesOffer: FLEET.map((v) => ({
		"@type": "Offer",
		itemOffered: {
			"@type": "Car",
			name: `${v.name} ${v.engine}`,
			seatingCapacity: v.seats
		}
	})),
	hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
};
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteName },
			{
				name: "description",
				content: siteDescription
			},
			{
				name: "keywords",
				content: "arriendo de autos Puerto Natales, rent a car Puerto Natales, car rental Puerto Natales, arriendo 4x4 Torres del Paine, rent a car Punta Arenas aeropuerto, Patagonia Chile"
			},
			{
				name: "theme-color",
				content: "#1b4f9c"
			},
			{
				name: "geo.region",
				content: "CL-MA"
			},
			{
				name: "geo.placename",
				content: "Puerto Natales"
			},
			{
				property: "og:title",
				content: siteName
			},
			{
				property: "og:description",
				content: siteDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: SITE_URL
			},
			{
				property: "og:image",
				content: ogImage
			},
			{
				property: "og:locale",
				content: "es_CL"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "canonical",
				href: `${SITE_URL}/`
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/img/logo-icon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/img/logo-icon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(structuredData)
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "es",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DKMBp9RB.js");
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { FLEET as a, PARENT_URL as c, WHATSAPP_PHONE as d, whatsappUrl as f, getRouter, CONTACT_FORM_NAME as i, RATING as l, ADDRESS as n, LOCATION_IDS as o, CONTACT_EMAIL as r, MAPS_URL as s, router_exports as t, WHATSAPP_LINK as u };
