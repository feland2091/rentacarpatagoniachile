# Rent a Car Patagonia Chile — rentacarpatagoniachile.cl

Landing page for car rental in Puerto Natales (Chilean Patagonia), a satellite site of [rentacarpatagonia.com](https://rentacarpatagonia.com). The page is built for local SEO ("arriendo de autos Puerto Natales", "rent a car Torres del Paine") and sends every booking to WhatsApp.

## Features

- Blue and white design with photography of Torres del Paine, Puerto Natales and Ruta 9
- Quick booking card (pickup point, dates, vehicle type) that opens WhatsApp with the request
- Fleet of 12 vehicles with filters (City car, SUV, 4x4, 7 seats) and a WhatsApp booking button on each card
- Pickup and drop-off points, routes from Puerto Natales, included services and FAQ
- Floating WhatsApp button
- Five languages: Spanish (default), English, French, Portuguese and Chinese. The choice is saved in the browser and can be forced with `?lang=en|fr|pt|zh`
- SEO: Spanish metadata, canonical URL, Open Graph, and `AutoRental` JSON-LD with address, rating and fleet

## Technologies

TanStack Start (React 19), Tailwind CSS v4, lucide-react, Netlify Image CDN. Images were generated with Netlify AI Gateway (Gemini).

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

## Configuration

Business details (WhatsApp link, address, rating, fleet) are in `src/lib/site.ts`. The current WhatsApp link is the short link from the main site, and short links can't pre-fill text, so the booking request is copied to the clipboard for the visitor to paste. Set `WHATSAPP_PHONE` (for example `56912345678`) to have WhatsApp open with the message already filled in.
