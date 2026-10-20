import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Shovel,
  Sparkles,
  Trees,
  X,
} from 'lucide-react'

const phoneNumber = 'tel:8603541735'
const businessEmail = 'contact@cosmos-landscaping.com'
const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=376+Danbury+Rd%2C+New+Milford%2C+CT+06776'

const services = [
  {
    number: '01',
    title: 'Custom Hardscaping & Masonry',
    description:
      'A natural gathering place, made to last. From bluestone patios and garden walkways to retaining walls, stone steps, and poolscapes.',
    icon: Shovel,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    alt: 'Stone terrace with carefully designed outdoor living space',
    id: 'hardscapes',
  },
  {
    number: '02',
    title: 'Landscape Design & Plantings',
    description:
      'Thoughtful garden layouts, fresh sod, specimen trees, and ornamental shrubs that feel at home in your landscape.',
    icon: Trees,
    image:
      'https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1000&q=85',
    alt: 'Lush green garden with layered plantings',
    id: 'design',
  },
  {
    number: '03',
    title: 'Sitework, Grading & Drainage',
    description:
      'Get ahead of water where it starts. Professional excavation, grading, and drainage solutions protect your property.',
    icon: Shovel,
    image:
      'https://images.unsplash.com/photo-1598908314732-07113901949e?auto=format&fit=crop&w=1000&q=85',
    alt: 'Professionally landscaped property with a graded lawn',
    id: 'drainage',
  },
  {
    number: '04',
    title: 'Property Care & Cleanups',
    description:
      'Seasonal cleanups, fresh mulch, and detailed bed care keep your grounds polished and ready for every season.',
    icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85',
    alt: 'Freshly maintained garden beds and lush landscaping',
    id: 'property-care',
  },
]

const trustPoints = [
  '25+ Years Family Owned',
  'Free Consultations & Estimates',
  'Custom Patios & Masonry',
  'Fully Licensed & Insured',
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-stone-950 text-stone-100">
      <div className="bg-emerald-800 px-4 py-2.5 text-center text-xs font-medium tracking-wide text-emerald-50 sm:text-sm">
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span aria-hidden="true" className="text-base">🌿</span>
          <span>25+ Years Family-Run Landscaping &amp; Hardscaping</span>
          <span className="hidden text-emerald-300 sm:inline">•</span>
          <span>376 Danbury Rd, New Milford</span>
          <span className="hidden text-emerald-300 sm:inline">•</span>
          <a className="font-semibold text-white underline-offset-4 hover:underline" href={phoneNumber}>
            Call: (860) 354-1735
          </a>
        </span>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/95 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8"
        >
          <a
            aria-label="Cosmo's Landscaping home"
            className="flex shrink-0 items-center gap-3"
            href="#home"
            onClick={closeMenu}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
              <Trees aria-hidden="true" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-[0.14em] text-white sm:text-base">
                COSMO&apos;S
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.22em] text-stone-400 sm:text-[11px]">
                LANDSCAPING INC.
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <a className="text-sm text-stone-300 transition hover:text-emerald-300" href="#hardscapes">
              Hardscapes
            </a>
            <a className="text-sm text-stone-300 transition hover:text-emerald-300" href="#design">
              Design
            </a>
            <a className="text-sm text-stone-300 transition hover:text-emerald-300" href="#drainage">
              Drainage
            </a>
            <a className="text-sm text-stone-300 transition hover:text-emerald-300" href="#portfolio">
              Portfolio
            </a>
            <a className="text-sm text-stone-300 transition hover:text-emerald-300" href="#estimate">
              Free Estimate
            </a>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-stone-200 transition hover:text-emerald-300"
              href={phoneNumber}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span className="hidden xl:inline">Call</span> (860) 354-1735
            </a>
            <a
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-stone-950 transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              href="#estimate"
            >
              Get Free Estimate
            </a>
          </div>

          <a
            className="ml-auto rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-stone-950 sm:hidden"
            href="#estimate"
            onClick={closeMenu}
          >
            Free Estimate
          </a>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white sm:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-stone-950 px-5 py-4 sm:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ['Hardscapes', '#hardscapes'],
                ['Design', '#design'],
                ['Drainage', '#drainage'],
                ['Portfolio', '#portfolio'],
                ['Free Estimate', '#estimate'],
              ].map(([label, href]) => (
                <a
                  className="rounded-lg px-3 py-3 text-sm font-medium text-stone-200 hover:bg-white/5 hover:text-emerald-300"
                  href={href}
                  key={label}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ))}
              <a className="mt-2 inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-emerald-300" href={phoneNumber}>
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call (860) 354-1735
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          className="relative isolate min-h-[680px] overflow-hidden sm:min-h-[730px]"
          id="home"
        >
          <img
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/15" />

          <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:min-h-[730px] lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-stone-950/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200 backdrop-blur-sm sm:text-sm">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                Outdoor spaces, made exceptional
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Outdoor Living Space.
                <span className="mt-2 block text-emerald-300">Built for Beauty.</span>
                <span className="block text-white">Built to Last.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-stone-200 sm:text-lg sm:leading-8">
                New Milford&apos;s trusted family-run landscaping and masonry experts
                for over 25 years. Specializing in custom stone patios, retaining
                walls, poolscapes, and complete property transformations.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-base font-bold text-stone-950 shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                  href="#estimate"
                >
                  Request a Free Consultation
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
                  href={phoneNumber}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Call (860) 354-1735
                </a>
              </div>
              <div className="mt-12 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-4 border-t border-white/20 pt-6 sm:grid-cols-4">
                {trustPoints.map((point) => (
                  <div className="flex items-start gap-2 text-xs font-medium leading-5 text-stone-200 sm:text-sm" key={point}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 hidden max-w-xs rounded-2xl border border-white/15 bg-stone-950/70 p-5 backdrop-blur-md xl:block">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Rooted in New Milford
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-200">
              Local knowledge. Personal service. A property you&apos;ll love coming
              home to.
            </p>
          </div>
        </section>

        <section className="bg-stone-900 py-20 sm:py-24" id="services">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  What we do
                </p>
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Thoughtful design. <span className="text-stone-400">Lasting workmanship.</span>
                </h2>
              </div>
              <p className="max-w-lg text-base leading-7 text-stone-400">
                From the first sketch to the final stone, we bring together every
                detail for a landscape that feels like it belongs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article
                    className="group overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
                    id={service.id}
                    key={service.number}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        alt={service.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        src={service.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                      <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-stone-950/65 text-emerald-300 backdrop-blur-sm">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="absolute bottom-4 right-5 text-xs font-bold tracking-[0.18em] text-white/75">
                        {service.number}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold leading-snug text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 min-h-[84px] text-sm leading-6 text-stone-400">
                        {service.description}
                      </p>
                      <a
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:gap-3"
                        href="#estimate"
                      >
                        Plan your project
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-stone-900 py-20 sm:py-24" id="portfolio">
          <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Made for the way you live
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Your property&apos;s next chapter starts outside.
              </h2>
              <p className="mt-5 text-base leading-7 text-stone-400">
                Imagine dinner on a hand-laid stone patio, a quiet garden path
                through new plantings, or a yard that finally drains the way it
                should. We&apos;ll help you make it real.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-6 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
                href="#estimate"
              >
                Talk through your ideas
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                alt="Stone patio surrounded by a lush garden"
                className="h-52 w-full rounded-2xl object-cover sm:h-72"
                loading="lazy"
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"
              />
              <img
                alt="Thoughtfully designed outdoor living space"
                className="mt-8 h-52 w-full rounded-2xl object-cover sm:mt-12 sm:h-72"
                loading="lazy"
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"
              />
            </div>
          </div>
        </section>

        <section className="bg-stone-950 py-20 sm:py-24" id="estimate">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
            <div className="lg:pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Start with a conversation
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Tell us what you&apos;re dreaming up.
              </h2>
              <p className="mt-5 text-base leading-7 text-stone-400">
                Share a few details and our team will be in touch to learn more
                about your property and schedule a free consultation.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-stone-300">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300">
                    <Phone aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <a className="font-semibold hover:text-emerald-300" href={phoneNumber}>
                    (860) 354-1735
                  </a>
                </div>
                <div className="flex items-center gap-3 text-stone-300">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span>Serving New Milford and surrounding communities</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-800 bg-stone-900/90 p-6 shadow-2xl shadow-black/20 sm:p-9">
              {isSubmitted ? (
                <div
                  aria-live="polite"
                  className="flex min-h-[440px] flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <CheckCircle2 aria-hidden="true" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    Thanks for reaching out!
                  </h3>
                  <p className="mt-3 max-w-md leading-7 text-stone-300">
                    Estimate request received! The Cosmo&apos;s team will review
                    your project scope and call you shortly to schedule a
                    consultation.
                  </p>
                  <button
                    className="mt-7 rounded-full border border-stone-700 px-5 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
                    onClick={() => setIsSubmitted(false)}
                    type="button"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                      Free estimate
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Let&apos;s plan something great.
                    </h3>
                  </div>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-stone-200">
                        Full Name <span className="text-emerald-400">*</span>
                        <input
                          autoComplete="name"
                          className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </label>
                      <label className="block text-sm font-medium text-stone-200">
                        Phone Number <span className="text-emerald-400">*</span>
                        <input
                          autoComplete="tel"
                          className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          name="phone"
                          placeholder="(860) 555-0123"
                          required
                          type="tel"
                        />
                      </label>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-sm font-medium text-stone-200">
                        Town / City <span className="text-emerald-400">*</span>
                        <input
                          autoComplete="address-level2"
                          className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          name="town"
                          placeholder="New Milford"
                          required
                        />
                      </label>
                      <label className="block text-sm font-medium text-stone-200">
                        Project Type <span className="text-emerald-400">*</span>
                        <select
                          className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          defaultValue=""
                          name="projectType"
                          required
                        >
                          <option disabled value="">
                            Choose a project type
                          </option>
                          <option>Custom Patio / Hardscape</option>
                          <option>Retaining Wall / Masonry</option>
                          <option>Complete Landscape Design</option>
                          <option>Drainage / Grading</option>
                          <option>General Maintenance</option>
                        </select>
                      </label>
                    </div>
                    <label className="block text-sm font-medium text-stone-200">
                      Approximate Timeline
                      <select
                        className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        defaultValue=""
                        name="timeline"
                      >
                        <option disabled value="">
                          When are you hoping to get started?
                        </option>
                        <option>As soon as possible</option>
                        <option>Within 1–3 months</option>
                        <option>Within 3–6 months</option>
                        <option>Just exploring ideas</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium text-stone-200">
                      Project Details / Message
                      <textarea
                        className="mt-2 min-h-32 w-full resize-y rounded-xl border border-stone-700 bg-stone-950 px-4 py-3 text-base text-white outline-none transition placeholder:text-stone-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        name="message"
                        placeholder="Tell us a little about your property and what you have in mind..."
                        rows={4}
                      />
                    </label>
                    <button
                      className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 font-bold text-stone-950 transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                      type="submit"
                    >
                      Request My Free Consultation
                      <ArrowRight aria-hidden="true" className="h-5 w-5" />
                    </button>
                    <p className="text-center text-xs leading-5 text-stone-500">
                      No pressure, no obligation. Just a friendly conversation
                      about your project.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-800 bg-stone-900 py-16 sm:py-20" id="location">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Come say hello
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Local to New Milford. Here for your property.
              </h2>
            </div>
            <div className="grid overflow-hidden rounded-3xl border border-stone-800 bg-stone-950 md:grid-cols-2">
              <div className="p-7 sm:p-10">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                    <MapPin aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Find us on Route 7</h3>
                    <p className="mt-2 leading-6 text-stone-400">
                      376 Danbury Rd
                      <br />
                      New Milford, CT 06776
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex items-start gap-4 border-t border-stone-800 pt-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                    <Clock aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Hours</h3>
                    <p className="mt-2 leading-6 text-stone-400">
                      Consultations by appointment
                      <br />
                      Call for current availability
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-emerald-400"
                    href={phoneNumber}
                  >
                    <Phone aria-hidden="true" className="h-4 w-4" />
                    Call (860) 354-1735
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
                    href={`mailto:${businessEmail}`}
                  >
                    Email Our Team
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative min-h-72 overflow-hidden bg-stone-800 md:min-h-full">
                <iframe
                  className="absolute inset-0 h-full w-full border-0 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=376+Danbury+Rd,+New+Milford,+CT+06776&output=embed"
                  title="Map to Cosmo's Landscaping Inc. in New Milford, Connecticut"
                />
                <a
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-stone-950/90 px-5 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-emerald-500 hover:text-stone-950"
                  href={directionsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Get Directions on Google Maps
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 bg-stone-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a className="flex items-center gap-2 font-semibold tracking-wide text-stone-300" href="#home">
            <Trees aria-hidden="true" className="h-5 w-5 text-emerald-400" />
            COSMO&apos;S LANDSCAPING INC.
          </a>
          <p>© {new Date().getFullYear()} Cosmo&apos;s Landscaping Inc. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <span>376 Danbury Rd, New Milford, CT</span>
            <a className="font-medium text-stone-300 hover:text-emerald-300" href={phoneNumber}>
              (860) 354-1735
            </a>
          </div>
        </div>
      </footer>

      <a
        aria-label="Call Cosmo's Landscaping"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-stone-950 shadow-xl shadow-black/30 transition hover:scale-105 hover:bg-emerald-400 sm:hidden"
        href={phoneNumber}
      >
        <Phone aria-hidden="true" className="h-6 w-6" />
      </a>
    </div>
  )
}

export default App
