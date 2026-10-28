import { useState } from 'react'
import { CalendarDays, CarFront, CheckCircle2, Mail, Phone, Send, User } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { CONTACT_EMAIL, CONTACT_FORM_NAME, FLEET } from '@/lib/site'

const field =
  'w-full rounded-xl border border-navy/12 bg-mist px-3.5 py-3 text-[15px] font-medium text-navy-deep outline-none transition focus:border-glacier focus:bg-white focus:ring-4 focus:ring-glacier/15'
const labelCls = 'mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy/60'

const vehicleLabel = (v: (typeof FLEET)[number], auto: string, manual: string) =>
  `${v.name} ${v.engine} (${v.transmission === 'auto' ? auto : manual})`

/** Vehicle inquiry form handled by Netlify Forms (registered via public/__forms.html). */
export function ContactForm({ vehicle, onVehicle }: { vehicle: string; onVehicle: (v: string) => void }) {
  const { t } = useI18n()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('subject', `Consulta de vehículo: ${data.get('vehicle') || 'sin definir'} — ${data.get('name')}`)
    setStatus('sending')
    try {
      // Must target the static skeleton, not '/', or the SSR handler swallows the POST.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      onVehicle('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-white p-10 text-center ring-1 ring-navy/8">
        <CheckCircle2 className="size-12 text-glacier" aria-hidden="true" />
        <p className="font-display text-2xl font-semibold text-navy">{t.contact.success}</p>
      </div>
    )
  }

  return (
    <form
      name={CONTACT_FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      className="rounded-3xl bg-white p-6 ring-1 ring-navy/8 shadow-[0_24px_50px_-24px_rgb(10_42_94/0.35)] md:p-8"
    >
      <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
      <input type="hidden" name="subject" />
      <p className="hidden">
        <label>No completar: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelCls}><User className="size-3.5" aria-hidden="true" /> {t.contact.name}</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={labelCls}><Mail className="size-3.5" aria-hidden="true" /> {t.contact.email}</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={labelCls}><Phone className="size-3.5" aria-hidden="true" /> {t.contact.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className={labelCls}><CarFront className="size-3.5" aria-hidden="true" /> {t.contact.vehicle}</span>
          <select name="vehicle" value={vehicle} onChange={(e) => onVehicle(e.target.value)} className={field}>
            <option value="">{t.contact.any}</option>
            {FLEET.map((v) => {
              const label = vehicleLabel(v, t.fleet.auto, t.fleet.manual)
              return <option key={label} value={label}>{label}</option>
            })}
          </select>
        </label>
        {(['from', 'to'] as const).map((key) => (
          <label key={key} className="block">
            <span className={labelCls}><CalendarDays className="size-3.5" aria-hidden="true" /> {t.contact[key]}</span>
            <input name={key} type="date" className={field} />
          </label>
        ))}
        <label className="block sm:col-span-2">
          <span className={labelCls}>{t.contact.message}</span>
          <textarea name="message" required rows={4} placeholder={t.contact.messagePh} className={`${field} resize-y`} />
        </label>
      </div>

      {status === 'error' && <p role="alert" className="mt-4 text-sm font-semibold text-red-600">{t.contact.error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-navy px-5 py-4 text-base font-extrabold text-white transition hover:bg-glacier disabled:opacity-60"
      >
        <Send className="size-5" aria-hidden="true" /> {status === 'sending' ? t.contact.sending : t.contact.submit}
      </button>
      <p className="mt-3 text-center text-sm text-navy/60">
        {t.contact.direct} <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-glacier hover:underline">{CONTACT_EMAIL}</a>
      </p>
    </form>
  )
}

export { vehicleLabel }
