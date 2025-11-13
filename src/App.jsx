import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Briefcase, Plane, FileText, ShieldCheck, Users, Building2, Wrench, Cpu, Cable, Truck, Hotel, Stethoscope, Star, ChevronLeft, ChevronRight, Phone, MessageCircle, MapPin, Mail, Send } from 'lucide-react'

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`w-full py-20 sm:py-24 ${className}`}>{children}</section>
)

const Container = ({ className = '', children }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 focus:ring-gray-300',
    ghost: 'bg-transparent text-blue-700 hover:bg-blue-50 focus:ring-blue-600'
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

function useAutoSlide(length, interval = 5000) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval)
    return () => clearInterval(id)
  }, [length, interval])
  return [index, setIndex]
}

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white">
      <img
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
        alt="Professional training center"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/40 to-blue-900/50" />
      <div className="relative">
        <Container className="py-24 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              Government-approved Overseas Recruitment & Training
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Skilled Manpower for Every Industry, Across the Globe.
            </h1>
            <p className="mt-6 text-lg text-gray-100/90 max-w-xl">
              Government-approved overseas recruitment and training center delivering qualified professionals worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                Hire Talent <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary">
                Find Job <Briefcase className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: 'MEA Approved', icon: ShieldCheck },
                { label: '30+ Years', icon: Users },
                { label: 'Global Placements', icon: Plane },
                { label: 'Trusted by Enterprises', icon: Building2 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur">
                  <item.icon className="h-5 w-5 text-white" />
                  <span className="text-sm text-gray-100">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

const About = () => (
  <Section>
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Multi-Tech Testing and Training Center</h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            With more than 30 years of proven excellence, Multi-Tech Testing and Training Center is a government-approved overseas recruitment and skills training organization. Licensed by the Ministry of External Affairs, we connect vetted professionals with reputable employers across the Middle East, Europe, and beyond.
          </p>
          <Button className="mt-6">Learn More About Us</Button>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop"
            alt="Founder"
            className="h-40 w-40 rounded-2xl object-cover shadow-lg"
          />
          <blockquote className="text-gray-700 bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm">
            “Our mission is to elevate livelihoods by matching skill with opportunity, backed by rigorous testing and training.”
            <footer className="mt-3 text-sm text-gray-500">— Founder, Multi-Tech</footer>
          </blockquote>
        </div>
      </div>
    </Container>
  </Section>
)

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
    <button className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline">
      Learn More <ArrowRight className="ml-1 h-4 w-4" />
    </button>
  </div>
)

const Services = () => (
  <Section className="bg-gray-50">
    <Container>
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We Do</h2>
        <p className="mt-3 text-gray-600">End-to-end staffing and mobility solutions for overseas employment.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard icon={Briefcase} title="Recruitment for Overseas Jobs" desc="Sourcing, screening, and deploying verified professionals." />
        <ServiceCard icon={Plane} title="Visa Endorsement" desc="Fast, compliant visa processing and assistance." />
        <ServiceCard icon={ShieldCheck} title="Emigration Assistance" desc="Documentation and approvals as per MEA guidelines." />
        <ServiceCard icon={FileText} title="Document Attestation" desc="Notarization, embassy attestation, and verification." />
      </div>
    </Container>
  </Section>
)

const industries = [
  { name: 'Construction & Civil', icon: Building2 },
  { name: 'Mechanical & MEP', icon: Wrench },
  { name: 'Electrical & Power', icon: Cable },
  { name: 'Logistics & Drivers', icon: Truck },
  { name: 'Hospitality & Facility Mgmt', icon: Hotel },
  { name: 'Medical & Healthcare', icon: Stethoscope },
]

const Industries = () => (
  <Section>
    <Container>
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Industries We Serve</h2>
        <p className="mt-3 text-gray-600">Specialized recruitment across key sectors with domain expertise.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {industries.map(({ name, icon: Icon }) => (
          <div key={name} className="group rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <Icon className="h-6 w-6" />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800">{name}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
)

const Training = () => (
  <Section className="bg-gray-50">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Training & Certification</h2>
          <p className="mt-4 text-gray-600">Hands-on skills development in modern labs and workshops, aligned with international standards.</p>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-gray-700">
            {['Welding', 'HVAC', 'Electrical', 'Plumbing', 'Safety', 'Scaffolding'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> {item}
              </li>
            ))}
          </ul>
          <Button className="mt-6">Explore Training Programs</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            'https://images.unsplash.com/photo-1581091215367-59ab6b122f1f?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1581091014534-8987c1d64764?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560179406-1c7f3b1b1fbb?q=80&w=1200&auto=format&fit=crop',
          ].map((src, i) => (
            <img key={i} src={src} alt="Training" className="h-40 w-full rounded-xl object-cover shadow" />
          ))}
        </div>
      </div>
    </Container>
  </Section>
)

const Gallery = () => {
  const images = useMemo(() => [
    'https://images.unsplash.com/photo-1517940310602-75bc8e3fbb93?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598257006285-543a941973d5?q=80&w=1200&auto=format&fit=crop',
  ], [])
  const [lightbox, setLightbox] = useState({ open: false, index: 0 })

  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Gallery</h2>
          <p className="mt-3 text-gray-600">Training sessions, interviews, and deployment events.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Gallery"
              className="w-full rounded-xl object-cover shadow cursor-pointer hover:opacity-90"
              onClick={() => setLightbox({ open: true, index: i })}
            />
          ))}
        </div>
        {lightbox.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setLightbox({ open: false, index: 0 })}>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white" onClick={(e) => { e.stopPropagation(); setLightbox((s) => ({ ...s, index: (s.index - 1 + images.length) % images.length })) }}>
              <ChevronLeft className="h-10 w-10" />
            </button>
            <img src={images[lightbox.index]} alt="Preview" className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white" onClick={(e) => { e.stopPropagation(); setLightbox((s) => ({ ...s, index: (s.index + 1) % images.length })) }}>
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>
        )}
      </Container>
    </Section>
  )
}

const Testimonials = () => {
  const data = [
    { name: 'Ahmed Khan', role: 'Project Supervisor, KSA', text: 'They delivered certified welders on time. Smooth process and great communication.', rating: 5 },
    { name: 'Maria Lopez', role: 'HR Manager, UAE', text: 'Reliable partner for bulk recruitment. Candidates were well screened and trained.', rating: 5 },
    { name: 'Rakesh Sharma', role: 'HVAC Technician (Placed in Qatar)', text: 'The training center upgraded my skills and helped me secure an overseas role.', rating: 4 },
    { name: 'James Lee', role: 'Operations Lead, Oman', text: 'Professional and compliant. Visa and emigration support was excellent.', rating: 5 },
  ]
  const [index, setIndex] = useAutoSlide(data.length, 6000)

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Testimonials</h2>
          <p className="mt-3 text-gray-600">What our clients and candidates say.</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
            {data.map((t, i) => (
              <div key={i} className="min-w-full px-1">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`h-4 w-4 ${s < t.rating ? 'fill-blue-600' : 'fill-gray-200 text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-700">“{t.text}”</p>
                  <div className="mt-4 text-sm text-gray-600">{t.name} • {t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {data.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

const Clients = () => (
  <Section>
    <Container>
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Clients & Partners</h2>
        <p className="mt-3 text-gray-600">Trusted by leading organizations worldwide.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
        {['Acme Infra', 'GulfWorks', 'BlueBay Hotels', 'MedicoPlus', 'PowerGrid Intl', 'LogiTrans'].map((name) => (
          <div key={name} className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm grayscale hover:grayscale-0 transition">
            <span className="text-sm font-semibold text-gray-700">{name}</span>
          </div>
        ))}
      </div>
    </Container>
  </Section>
)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-3 text-gray-600">We’d love to learn more about your hiring needs or career goals.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-700 mt-0.5" />
                <p className="text-gray-700">Multi-Tech Testing and Training Center, Main Office, Your City</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-700" />
                <a href="mailto:info@multitech.com" className="text-blue-700 hover:underline">info@multitech.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-700" />
                <a href="tel:+911234567890" className="text-blue-700 hover:underline">+91 12345 67890</a>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps?q=India&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="tel:+911234567890" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Send an Inquiry</h3>
              <form onSubmit={onSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows="4" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </div>
                <Button type="submit" className="w-full">Submit <Send className="ml-2 h-4 w-4" /></Button>
                {sent && <p className="text-center text-sm text-green-700">Thanks! Well get back to you shortly.</p>}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

const Footer = () => (
  <footer className="mt-16 border-t border-gray-200 bg-white">
    <Container className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="text-lg font-semibold text-gray-900">Multi-Tech Testing and Training Center</p>
          <p className="mt-3 text-sm text-gray-600">Government-approved overseas recruitment and training organization.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a className="hover:text-gray-900" href="#">Hire Talent</a></li>
            <li><a className="hover:text-gray-900" href="#">Find Job</a></li>
            <li><a className="hover:text-gray-900" href="#">Services</a></li>
            <li><a className="hover:text-gray-900" href="#">Training</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>Address: Main Office, Your City</li>
            <li>Email: info@multitech.com</li>
            <li>Phone: +91 12345 67890</li>
            <li className="flex gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200" />
              <a href="#" aria-label="LinkedIn" className="h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200" />
              <a href="#" aria-label="Twitter" className="h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200" />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500">© {new Date().getFullYear()} Multi-Tech Testing and Training Center. All rights reserved.</div>
    </Container>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-600 shadow-inner" />
            <span className="font-semibold">Multi-Tech</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#industries" className="hover:text-gray-900">Industries</a>
            <a href="#training" className="hover:text-gray-900">Training</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <Button className="ml-2">Hire Talent</Button>
          </nav>
        </Container>
      </header>

      <main>
        <Section id="hero" className="pt-10">
          <Container>
            <Hero />
          </Container>
        </Section>

        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="industries"><Industries /></div>
        <div id="training"><Training /></div>
        <Gallery />
        <Testimonials />
        <Clients />
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </div>
  )
}
