import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors, Phone, MapPin, Clock, Instagram, Menu, X,
  SprayCan, Droplets, Sparkles, Palette, Wind, Eye, Star,
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kafadar Erkek Kuaförü — Gebze'nin Adresi" },
      { name: "description", content: "Gebze Hacıhalil'de profesyonel erkek kuaförü. Saç, sakal, cilt bakımı. 0538 371 50 57" },
    ],
  }),
  component: Home,
});

const PHONE = "0538 371 50 57";
const WHATSAPP = "905383715057";

const services = [
  { name: "Saç Kesimi", price: "200₺", Icon: Scissors },
  { name: "Sakal Kesimi / Düzeltme", price: "150₺", Icon: SprayCan },
  { name: "Fön", price: "100₺", Icon: Wind },
  { name: "Saç Yıkama", price: "100₺", Icon: Droplets },
  { name: "Saç + Sakal Kombo", price: "300₺", Icon: Star },
  { name: "Ense Düzeltme", price: "75₺", Icon: Scissors },
  { name: "Kaş Düzeltme", price: "75₺", Icon: Eye },
  { name: "Cilt Bakımı / Maske", price: "250₺", Icon: Sparkles },
  { name: "Saç Boyama", price: "400₺", Icon: Palette },
  { name: "Keratin / Röfle", price: "500₺", Icon: Sparkles },
];

const team = [
  { name: "Mert Arslan", role: "Kurucu Usta", img: team1 },
  { name: "Ahmet", role: "Saç & Sakal Uzmanı", img: team2 },
  { name: "Erhan", role: "Stil Danışmanı", img: team3 },
];

const nav = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#randevu", label: "Randevu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar open={open} setOpen={setOpen} />
      <Hero />
      <Services />
      <Team />
      <Appointment />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <Scissors className="h-6 w-6 text-primary shrink-0" />
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight truncate">
            Kafadar <span className="text-primary">Kuaförü</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`}
            target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
          >
            Randevu Al
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-muted" onClick={() => setOpen(!open)} aria-label="Menü">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm font-medium py-2">
                {n.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="sm:hidden inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Randevu Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Kafadar Kuaförü iç mekan" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.02_220/0.92)] via-[oklch(0.15_0.02_220/0.75)] to-[oklch(0.15_0.02_220/0.55)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-44 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Gebze • Hacıhalil
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05]">
            Kafadar <br />
            <span className="text-gradient-teal">Erkek Kuaförü</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl">
            Erkek bakımında Gebze'nin adresi. Klasik ustalık, modern tarz.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Merhaba, randevu almak istiyorum.")}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:scale-[1.02] transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Phone className="h-4 w-4" /> Randevu Al
            </a>
            <a
              href="#hizmetler"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Hizmetlerimiz
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />
            <img src={logo} alt="Kafadar logo" className="relative h-72 w-72 object-contain bg-white/95 rounded-full p-6 shadow-elegant" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">{kicker}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Hizmetlerimiz" title="Profesyonel Erkek Bakımı" sub="İhtiyacınız olan her şey, tek çatı altında." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.name} className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-elegant transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <s.Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="font-display font-bold text-2xl text-primary">{s.price}</span>
              </div>
              <h3 className="mt-5 font-semibold text-lg">{s.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="ekibimiz" className="py-20 sm:py-28 bg-gradient-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">Ekibimiz</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Ustalarımızla Tanışın</h2>
          <p className="mt-4 text-white/70">Yıllarca tecrübeyle hizmetinizdeyiz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl font-bold text-white">{m.name}</h3>
                <p className="text-sm text-primary mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].name, datetime: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Merhaba, randevu almak istiyorum.%0A%0AAd Soyad: ${form.name}%0ATelefon: ${form.phone}%0AHizmet: ${form.service}%0ATarih & Saat: ${form.datetime}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section id="randevu" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Randevu" title="Randevunuzu Oluşturun" sub="Formu doldurun, WhatsApp üzerinden anında iletişime geçelim." />
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-elegant space-y-5">
          <Field label="Ad Soyad">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              placeholder="Adınız Soyadınız" />
          </Field>
          <Field label="Telefon">
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              placeholder="05XX XXX XX XX" />
          </Field>
          <Field label="Hizmet Seçimi">
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
              {services.map((s) => <option key={s.name}>{s.name}</option>)}
            </select>
          </Field>
          <Field label="Tarih & Saat">
            <input required type="datetime-local" value={form.datetime} onChange={(e) => setForm({ ...form, datetime: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
          </Field>
          <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}>
            WhatsApp ile Gönder
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium mb-2 block">{label}</span>
      {children}
    </label>
  );
}

function Gallery() {
  return (
    <section id="galeri" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Galeri" title="Çalışmalarımız" sub="Yakında eklenecek." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Scissors className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <span className="text-xs font-medium">Yakında Eklenecek</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="İletişim" title="Bize Ulaşın" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <InfoRow Icon={MapPin} title="Adres" lines={["Hacıhalil, 1208. Sk.", "41400 Gebze / Kocaeli"]} />
            <InfoRow Icon={Phone} title="Telefon" lines={[PHONE]} href={`tel:${PHONE.replace(/\s/g, "")}`} />
            <InfoRow Icon={Clock} title="Çalışma Saatleri" lines={["Pazartesi - Cumartesi: 09:00 - 21:00", "Pazar: Kapalı"]} />
            <InfoRow Icon={Instagram} title="Instagram" lines={["@kafadarerkekkuaforu"]} href="https://www.instagram.com/kafadarerkekkuaforu/" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              title="Kafadar Kuaförü Konumu"
              src="https://www.google.com/maps?q=40.795953,29.4344909&hl=tr&z=16&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ Icon, title, lines, href }: { Icon: typeof Phone; title: string; lines: string[]; href?: string }) {
  const content = (
    <>
      <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold">{title}</h3>
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </>
  );
  const cls = "flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>{content}</a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-display font-bold">Kafadar Erkek Kuaförü</span>
        </div>
        <p className="text-sm text-secondary-foreground/70">© 2026 Kafadar Erkek Kuaförü. Tüm hakları saklıdır.</p>
        <a href="https://www.instagram.com/kafadarerkekkuaforu/" target="_blank" rel="noreferrer" className="hover:text-primary transition">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
