// Single source of truth for business details shown on the landing page.

// Business WhatsApp (+56 9 3436 3158), international format without "+".
// With a phone number set, booking requests open WhatsApp with the message pre-filled.
export const WHATSAPP_PHONE = '56934363158'
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}`

export function whatsappUrl(message?: string) {
  if (WHATSAPP_PHONE && message) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
  }
  return WHATSAPP_LINK
}

// Vehicle inquiries from the contact form (Netlify Forms) are emailed here.
export const CONTACT_EMAIL = 'info@rentacarpatagonia.com'
export const CONTACT_FORM_NAME = 'contacto-vehiculos'

export const SITE_URL = 'https://rentacarpatagoniachile.cl'
export const PARENT_URL = 'https://rentacarpatagonia.com'
export const ADDRESS = 'Magallanes 258, Puerto Natales, Chile'
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Magallanes+258+Puerto+Natales+Chile'
export const RATING = { score: '5.0', count: 188 }

export type Category = 'sedan' | 'hatchback' | 'suv' | '4x4' | 'family'

export type Vehicle = {
  name: string
  engine: string
  transmission: 'auto' | 'manual'
  seats: number
  fuel: 'gasoline' | 'diesel'
  category: Category
  /** Photo from rentacarpatagonia.com, stored in public/img/fleet/. */
  photo: string
}

export const FLEET: Vehicle[] = [
  { name: 'KIA Sportage 4x4', engine: '2.0', transmission: 'auto', seats: 5, fuel: 'diesel', category: '4x4', photo: 'fleet/kia-sportage.jpg' },
  { name: 'New Subaru XV 4WD', engine: '2.0', transmission: 'auto', seats: 4, fuel: 'gasoline', category: '4x4', photo: 'fleet/subaru-xv.jpg' },
  { name: 'Hyundai Creta', engine: '1.5', transmission: 'auto', seats: 5, fuel: 'gasoline', category: 'suv', photo: 'fleet/hyundai-creta.jpg' },
  { name: 'Changan CS35 Plus', engine: '1.5', transmission: 'auto', seats: 5, fuel: 'gasoline', category: 'suv', photo: 'fleet/changan-cs35-plus.jpg' },
  { name: 'Changan CS35', engine: '1.6', transmission: 'manual', seats: 5, fuel: 'gasoline', category: 'suv', photo: 'fleet/changan-cs35.jpg' },
  { name: 'Suzuki XL7', engine: '1.5', transmission: 'manual', seats: 7, fuel: 'gasoline', category: 'family', photo: 'fleet/suzuki-xl7.jpg' },
  { name: 'Suzuki Baleno', engine: '1.5', transmission: 'auto', seats: 5, fuel: 'gasoline', category: 'hatchback', photo: 'fleet/suzuki-baleno.jpg' },
  { name: 'Changan Alsvin', engine: '1.5', transmission: 'auto', seats: 5, fuel: 'gasoline', category: 'sedan', photo: 'fleet/changan-alsvin.jpg' },
  { name: 'Suzuki Dzire', engine: '1.2', transmission: 'auto', seats: 4, fuel: 'gasoline', category: 'sedan', photo: 'fleet/suzuki-dzire-silver.jpg' },
  { name: 'Suzuki Dzire', engine: '1.2', transmission: 'manual', seats: 4, fuel: 'gasoline', category: 'sedan', photo: 'fleet/suzuki-dzire.jpg' },
  { name: 'Suzuki Celerio', engine: '1.0', transmission: 'auto', seats: 3, fuel: 'gasoline', category: 'hatchback', photo: 'fleet/suzuki-celerio.jpg' },
  { name: 'Suzuki S-Presso', engine: '1.0', transmission: 'auto', seats: 3, fuel: 'gasoline', category: 'hatchback', photo: 'fleet/suzuki-s-presso.jpg' },
]

export const LOCATION_IDS = ['natales', 'terminal', 'pnt', 'puq', 'puntaArenas'] as const
export type LocationId = (typeof LOCATION_IDS)[number]
