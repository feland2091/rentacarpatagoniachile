import { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'
import { LANGS, type Lang, useI18n } from '@/lib/i18n'
import { WHATSAPP_LINK } from '@/lib/site'
import { WhatsAppIcon } from './WhatsAppIcon'

export function LanguageSelect({ solid }: { solid: boolean }) {
  const { lang, setLang, t } = useI18n()
  return (
    <label
      className={`relative flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
        solid ? 'border-navy/15 text-navy hover:bg-ice' : 'border-white/40 text-white hover:bg-white/10'
      }`}
    >
      <Globe className="size-4" aria-hidden="true" />
      <span className="sr-only">{t.language}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        className="cursor-pointer appearance-none bg-transparent pr-1 outline-none"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code} className="text-navy-deep">
            {l.short} · {l.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export function Header() {
  const { t } = useI18n()
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#flota', t.nav.fleet],
    ['#retiro', t.nav.locations],
    ['#rutas', t.nav.routes],
    ['#preguntas', t.nav.faq],
    ['#contacto', t.nav.contact],
  ] as const

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-[0_1px_0_rgb(10_42_94/0.08)] backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20">
        <a
          href="#inicio"
          aria-label="Rent a Car Patagonia · Puerto Natales"
          className={`flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1.5 transition-shadow ${solid ? '' : 'shadow-lg shadow-navy-deep/20'}`}
        >
          <img
            src="/.netlify/images?url=/img/logo.png&w=360&fm=webp"
            alt="Rent a Car Patagonia"
            width={1600}
            height={534}
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-semibold transition-colors ${solid ? 'text-navy/80 hover:text-glacier' : 'text-white/85 hover:text-white'}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelect solid={solid} />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-bold text-navy-deep transition hover:brightness-95 sm:flex"
          >
            <WhatsAppIcon className="size-4" />
            {t.nav.book}
          </a>
        </div>
      </div>
    </header>
  )
}
