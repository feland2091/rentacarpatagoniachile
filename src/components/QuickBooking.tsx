import { useState } from 'react'
import { CalendarDays, CarFront, MapPin } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { type Category, LOCATION_IDS, WHATSAPP_PHONE, whatsappUrl } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppIcon'

const field =
  'w-full rounded-xl border border-navy/12 bg-mist px-3.5 py-3 text-[15px] font-medium text-navy-deep outline-none transition focus:border-glacier focus:bg-white focus:ring-4 focus:ring-glacier/15'

/** Opens WhatsApp with the request; without a phone number the text is copied so the visitor can paste it. */
export async function openWhatsApp(message: string, onCopied: () => void) {
  const url = whatsappUrl(message)
  if (!WHATSAPP_PHONE) {
    try {
      await navigator.clipboard.writeText(message)
      onCopied()
    } catch {
      // Clipboard may be blocked; WhatsApp still opens.
    }
  }
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function QuickBooking({ onCopied }: { onCopied: () => void }) {
  const { t } = useI18n()
  const [pickup, setPickup] = useState<string>(LOCATION_IDS[0])
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [vehicle, setVehicle] = useState<Category | ''>('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const location = t.locations.items[pickup as keyof typeof t.locations.items][0]
    const lines = [
      t.quick.msgIntro,
      `${t.quick.pickup}: ${location}`,
      from && `${t.quick.from}: ${from}`,
      to && `${t.quick.to}: ${to}`,
      `${t.quick.vehicle}: ${vehicle ? t.fleet.cats[vehicle] : t.quick.any}`,
    ].filter(Boolean)
    openWhatsApp(lines.join('\n'), onCopied)
  }

  return (
    <form
      onSubmit={submit}
      className="rise w-full rounded-3xl bg-white p-6 shadow-[0_30px_80px_-20px_rgb(6_26_61/0.55)] md:p-7"
      style={{ animationDelay: '0.25s' }}
    >
      <h2 className="font-display text-2xl font-semibold text-navy">{t.quick.title}</h2>
      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
            <MapPin className="size-3.5" aria-hidden="true" /> {t.quick.pickup}
          </span>
          <select value={pickup} onChange={(e) => setPickup(e.target.value)} className={field}>
            {LOCATION_IDS.map((id) => (
              <option key={id} value={id}>{t.locations.items[id][0]}</option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {([['from', from, setFrom], ['to', to, setTo]] as const).map(([key, value, set]) => (
            <label key={key} className="block">
              <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
                <CalendarDays className="size-3.5" aria-hidden="true" /> {t.quick[key]}
              </span>
              <input type="date" value={value} min={key === 'to' ? from || undefined : undefined} onChange={(e) => set(e.target.value)} className={field} />
            </label>
          ))}
        </div>
        <label className="block">
          <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
            <CarFront className="size-3.5" aria-hidden="true" /> {t.quick.vehicle}
          </span>
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value as Category | '')} className={field}>
            <option value="">{t.quick.any}</option>
            {(Object.keys(t.fleet.cats) as Category[]).map((c) => (
              <option key={c} value={c}>{t.fleet.cats[c]}</option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-5 py-4 text-base font-extrabold text-navy-deep transition hover:brightness-95 active:scale-[0.99]"
      >
        <WhatsAppIcon /> {t.quick.submit}
      </button>
      <p className="mt-3 text-center text-sm text-navy/60">{t.quick.note}</p>
    </form>
  )
}
