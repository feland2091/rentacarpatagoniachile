import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight, BusFront, ExternalLink, Globe, Check, ChevronDown, Clock, Fuel, Gauge, Headset, Infinity as InfinityIcon,
  Mail, MapPin, Mountain, PlaneLanding, ShieldCheck, Star, Users,
} from 'lucide-react'
import { Header } from '@/components/Header'
import { ContactForm, vehicleLabel } from '@/components/ContactForm'
import { QuickBooking, openWhatsApp } from '@/components/QuickBooking'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { I18nProvider, useI18n } from '@/lib/i18n'
import {
  ADDRESS, type Category, FLEET, LOCATION_IDS, MAPS_URL, PARENT_URL, RATING, WHATSAPP_LINK,
} from '@/lib/site'

export const Route = createFileRoute('/')({
  component: () => (
    <I18nProvider>
      <Landing />
    </I18nProvider>
  ),
})

const img = (file: string, w: number) => `/.netlify/images?url=/img/${file}&w=${w}&fm=webp`

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.25em] ${light ? 'text-lagoon' : 'text-glacier'}`}>{children}</p>
  )
}

function Landing() {
  const { t } = useI18n()
  const [toast, setToast] = useState(false)
  const [inquiry, setInquiry] = useState('')
  const showCopied = () => {
    setToast(true)
    setTimeout(() => setToast(false), 5000)
  }

  return (
    <>
      <Header />
      <main>
        <Hero onCopied={showCopied} />
        <TrustBar />
        <ParentBanner />
        <Fleet onCopied={showCopied} onInquire={setInquiry} />
        <Locations />
        <Routes />
        <Included />
        <Faq />
        <Contact vehicle={inquiry} onVehicle={setInquiry} />
        <FinalCta />
      </main>
      <Footer />

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappFab}
        className="pulse-ring group fixed bottom-5 right-5 z-50 isolate flex items-center gap-2 rounded-full bg-whatsapp p-4 text-white shadow-[0_12px_30px_-6px_rgb(37_211_102/0.6)] transition hover:scale-105 md:bottom-7 md:right-7"
      >
        <WhatsAppIcon className="size-7" />
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-bold transition-all duration-300 group-hover:max-w-56 group-hover:pr-1 md:inline">
          {t.whatsappFab}
        </span>
      </a>

      <div
        role="status"
        className={`fixed inset-x-0 bottom-24 z-50 mx-auto w-fit max-w-[90vw] rounded-2xl bg-navy-deep px-5 py-3 text-center text-sm font-semibold text-white shadow-xl transition-all duration-300 ${
          toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {toast && t.quick.copied}
      </div>
    </>
  )
}

function Hero({ onCopied }: { onCopied: () => void }) {
  const { t } = useI18n()
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={img('hero.png', 2000)}
        srcSet={`${img('hero.png', 900)} 900w, ${img('hero.png', 1400)} 1400w, ${img('hero.png', 2000)} 2000w`}
        sizes="100vw"
        alt="Auto de arriendo en camino de ripio frente a los Cuernos del Paine, Torres del Paine"
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover object-[50%_60%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/90 via-navy/60 to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-[1.25fr_0.85fr] lg:pt-24">
        <div className="rise max-w-2xl text-white">
          <p className="mb-5 font-display text-2xl font-medium text-lagoon md:text-3xl">{t.hero.welcome}</p>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur">
            <MapPin className="size-3.5" aria-hidden="true" /> {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            {t.hero.title}{' '}
            <em className="block font-medium text-lagoon not-italic md:italic">{t.hero.accent}</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{t.hero.sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#flota" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-navy transition hover:bg-ice">
              {t.hero.secondary} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <div className="flex items-center gap-2 text-sm text-white/85">
              <span className="flex text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" aria-hidden="true" />)}
              </span>
              <strong className="text-white">{RATING.score}</strong> · {RATING.count} {t.trust.ratingSub}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md lg:ml-auto">
          <QuickBooking onCopied={onCopied} />
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const { t } = useI18n()
  const items = [
    [Star, `${RATING.score} ${t.trust.rating}`, `${RATING.count} ${t.trust.ratingSub}`],
    [InfinityIcon, t.trust.km, t.trust.kmSub],
    [ShieldCheck, t.trust.ins, t.trust.insSub],
    [Headset, t.trust.support, t.trust.supportSub],
  ] as const
  return (
    <section className="border-b border-navy/10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-navy/10 lg:grid-cols-4">
        {items.map(([Icon, title, sub]) => (
          <div key={title} className="flex items-center gap-4 bg-white px-5 py-6 md:px-8">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-ice text-glacier">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold text-navy">{title}</p>
              <p className="text-sm text-navy/60">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ParentBanner() {
  const { t } = useI18n()
  return (
    <section aria-labelledby="parent-banner" className="bg-white px-5 py-12">
      <a
        href={PARENT_URL}
        target="_blank"
        rel="noopener"
        className="group relative isolate mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[2rem] bg-navy-deep px-7 py-10 text-white shadow-[0_24px_50px_-24px_rgb(10_42_94/0.5)] md:flex-row md:items-center md:justify-between md:px-12 md:py-12"
      >
        <img
          src={img('road.png', 1400)}
          srcSet={`${img('road.png', 800)} 800w, ${img('road.png', 1400)} 1400w`}
          sizes="(min-width: 1280px) 1280px, 100vw"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-glacier/50" />
        <div className="flex items-center gap-5">
          <img
            src={img('logo-icon.png', 160)}
            alt=""
            width={80}
            height={80}
            loading="lazy"
            className="hidden size-20 shrink-0 rounded-2xl bg-white p-2.5 sm:block"
          />
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-lagoon">
              <Globe className="size-3.5" aria-hidden="true" /> {t.parentBanner.eyebrow}
            </p>
            <h2 id="parent-banner" className="mt-2 font-display text-3xl font-semibold leading-tight md:text-4xl">
              {t.parentBanner.title}
            </h2>
            <p className="mt-2 max-w-xl text-white/80">{t.parentBanner.sub}</p>
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3.5 font-bold text-navy transition group-hover:bg-ice md:self-auto">
          {t.parentBanner.button} <ExternalLink className="size-4" aria-hidden="true" />
        </span>
      </a>
    </section>
  )
}

function Fleet({ onCopied, onInquire }: { onCopied: () => void; onInquire: (vehicle: string) => void }) {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const cats = Object.keys(t.fleet.cats) as Category[]
  const shown = FLEET.filter((v) => filter === 'all' || v.category === filter)

  return (
    <section id="flota" className="topo bg-mist py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>{t.fleet.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">{t.fleet.title}</h2>
            <p className="mt-4 text-lg text-navy/70">{t.fleet.sub}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', ...cats] as const).map((c) => (
              <button
                key={c}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  filter === c ? 'bg-navy text-white' : 'bg-white text-navy ring-1 ring-navy/10 hover:ring-glacier/40'
                }`}
              >
                {c === 'all' ? t.fleet.all : t.fleet.cats[c]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((v) => {
            const label = vehicleLabel(v, t.fleet.auto, t.fleet.manual)
            return (
              <article
                key={`${v.name}-${v.transmission}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/8 transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(10_42_94/0.35)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-ice">
                  <img
                    src={img(v.photo, 600)}
                    srcSet={`${img(v.photo, 400)} 400w, ${img(v.photo, 600)} 600w, ${img(v.photo, 900)} 900w`}
                    sizes="(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    alt={`${v.name} ${v.engine}`}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    v.category === '4x4' ? 'bg-navy text-white' : 'bg-ice text-glacier'
                  }`}>
                    {t.fleet.cats[v.category]}
                  </span>
                  <span className="font-display text-3xl font-semibold text-navy/15 transition group-hover:text-glacier/30">{v.engine}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{v.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-navy/70">
                  <li className="flex items-center gap-2"><Users className="size-4 text-glacier" aria-hidden="true" /> {v.seats} {t.fleet.seats}</li>
                  <li className="flex items-center gap-2"><Gauge className="size-4 text-glacier" aria-hidden="true" /> {v.transmission === 'auto' ? t.fleet.auto : t.fleet.manual}</li>
                  <li className="flex items-center gap-2"><Fuel className="size-4 text-glacier" aria-hidden="true" /> {t.fleet[v.fuel]}</li>
                </ul>
                <button
                  onClick={() => openWhatsApp(`${t.quick.msgVehicle} ${label}.`, onCopied)}
                  className="mt-6 flex items-center justify-center gap-2 rounded-2xl border-2 border-navy/10 px-4 py-3 text-sm font-bold text-navy transition hover:border-whatsapp hover:bg-whatsapp hover:text-navy-deep"
                >
                  <WhatsAppIcon className="size-4" /> {t.fleet.book}
                </button>
                <a
                  href="#contacto"
                  onClick={() => onInquire(label)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold text-glacier transition hover:bg-ice"
                >
                  <Mail className="size-4" aria-hidden="true" /> {t.fleet.inquire}
                </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Locations() {
  const { t } = useI18n()
  const icons = { natales: MapPin, terminal: BusFront, pnt: PlaneLanding, puq: PlaneLanding, puntaArenas: MapPin }
  return (
    <section id="retiro" className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="absolute -right-40 -top-40 size-[30rem] rounded-full bg-glacier/30 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow light>{t.locations.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">{t.locations.title}</h2>
          <p className="mt-4 text-lg text-white/75">{t.locations.sub}</p>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img
              src={img('natales.png', 1000)}
              alt="Costanera de Puerto Natales frente al seno Última Esperanza"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
        <ol className="space-y-3">
          {LOCATION_IDS.map((id, i) => {
            const Icon = icons[id]
            const [name, detail] = t.locations.items[id]
            return (
              <li key={id} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                <span className="font-display text-sm text-lagoon">0{i + 1}</span>
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-navy">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-bold">{name}</p>
                  <p className="text-sm text-white/65">{detail}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function Routes() {
  const { t } = useI18n()
  return (
    <section id="rutas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>{t.routes.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">{t.routes.title}</h2>
          </div>
          <p className="text-lg text-navy/70">{t.routes.sub}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-80 overflow-hidden rounded-3xl">
            <img
              src={img('road.png', 1200)}
              alt="Auto de arriendo en la Ruta 9 de la Patagonia chilena"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
            <p className="absolute bottom-6 left-6 flex items-center gap-2 font-display text-2xl text-white">
              <Mountain className="size-6" aria-hidden="true" /> Ruta del Fin del Mundo
            </p>
          </div>
          <ul className="divide-y divide-navy/10 rounded-3xl bg-mist px-6 ring-1 ring-navy/8">
            {t.routes.items.map(([name, km, desc]) => (
              <li key={name} className="flex gap-5 py-6">
                <div className="w-24 shrink-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-navy/50">{t.routes.distance}</p>
                  <p className="font-display text-2xl font-semibold text-glacier">{km}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{name}</h3>
                  <p className="mt-1 text-navy/65">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Included() {
  const { t } = useI18n()
  return (
    <section className="topo bg-ice py-24">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <Eyebrow>{t.included.eyebrow}</Eyebrow>
        <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">{t.included.title}</h2>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {t.included.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 rounded-full bg-white px-5 py-3 font-semibold text-navy shadow-sm ring-1 ring-navy/8">
              <span className="grid size-6 place-items-center rounded-full bg-glacier text-white">
                <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-navy/55">{t.included.footnote}</p>
      </div>
    </section>
  )
}

function Faq() {
  const { t } = useI18n()
  return (
    <section id="preguntas" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">{t.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.items.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group rounded-2xl bg-mist p-6 ring-1 ring-navy/8 open:bg-white open:shadow-[0_18px_40px_-24px_rgb(10_42_94/0.4)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown className="size-5 shrink-0 text-glacier transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-navy/70">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ vehicle, onVehicle }: { vehicle: string; onVehicle: (v: string) => void }) {
  const { t } = useI18n()
  return (
    <section id="contacto" className="topo bg-mist py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="max-w-xl">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-navy/70">{t.contact.sub}</p>
        </div>
        <ContactForm vehicle={vehicle} onVehicle={onVehicle} />
      </div>
    </section>
  )
}

function FinalCta() {
  const { t } = useI18n()
  return (
    <section className="px-5 py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-glacier via-navy to-navy-deep px-8 py-16 text-center text-white md:py-20">
        <div className="absolute -left-20 -bottom-24 size-80 rounded-full bg-lagoon/30 blur-3xl" aria-hidden="true" />
        <h2 className="relative font-display text-4xl font-semibold md:text-5xl">{t.cta.title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">{t.cta.sub}</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-lg font-extrabold text-navy-deep transition hover:brightness-95"
        >
          <WhatsAppIcon /> {t.cta.button}
        </a>
        <p className="relative mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
          <Clock className="size-4" aria-hidden="true" /> {t.trust.support}
        </p>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <img
            src={img('logo.png', 440)}
            alt="Rent a Car Patagonia Chile"
            width={1600}
            height={534}
            loading="lazy"
            className="h-16 w-auto rounded-xl bg-white px-3 py-2"
          />
          <p className="mt-2 text-sm">{t.footer.tagline}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2"><MapPin className="size-4 text-lagoon" aria-hidden="true" /> {ADDRESS}</p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block font-semibold text-white hover:text-lagoon">{t.footer.maps} →</a>
          <a href={PARENT_URL} target="_blank" rel="noopener" className="block font-semibold text-white hover:text-lagoon">{t.footer.parent}: rentacarpatagonia.com →</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Rent a Car Patagonia. {t.footer.rights}
      </div>
    </footer>
  )
}
