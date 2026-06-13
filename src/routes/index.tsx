import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Scissors, Phone, MapPin, Clock, Instagram, Menu, X,
  SprayCan, Droplets, Sparkles, Palette, Wind, Eye, Star, MessageCircle,
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import g0 from "@/assets/gallery/unnamed.webp.asset.json";
import g1 from "@/assets/gallery/unnamed_1.webp.asset.json";
import g2 from "@/assets/gallery/unnamed_2.webp.asset.json";
import g3 from "@/assets/gallery/unnamed_3.webp.asset.json";
import g4 from "@/assets/gallery/unnamed_4.webp.asset.json";
import g5 from "@/assets/gallery/unnamed_5.webp.asset.json";
import g6 from "@/assets/gallery/unnamed_6.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kafadar Erkek Kuaförü | Gebze Erkek Kuaförü" },
      { name: "description", content: "Gebze'nin en iyi erkek kuaförü. Saç kesimi, sakal, fön ve daha fazlası. Randevu için WhatsApp: 0538 371 50 57" },
      { property: "og:title", content: "Kafadar Erkek Kuaförü | Gebze Erkek Kuaförü" },
      { property: "og:description", content: "Gebze'nin en iyi erkek kuaförü. Saç kesimi, sakal, fön ve daha fazlası. Randevu için WhatsApp: 0538 371 50 57" },
    ],
  }),
  component: Home,
});

const PHONE = "0538 371 50 57";
const WHATSAPP = "905383715057";
const WA_URL = `https://wa.me/${WHATSAPP}`;

const galleryImages = [g0.url, g1.url, g2.url, g3.url, g4.url, g5.url, g6.url];

const services = [
  { name: "Saç Kesimi", desc: "Modern ve klasik saç kesim teknikleri.", Icon: Scissors },
  { name: "Sakal Kesimi / Düzeltme", desc: "Yüz hatlarınıza uygun profesyonel sakal şekillendirme.", Icon: SprayCan },
  { name: "Fön", desc: "Saçınıza ideal form ve hacim.", Icon: Wind },
  { name: "Saç Yıkama", desc: "Özel şampuanlarla rahatlatıcı yıkama.", Icon: Droplets },
  { name: "Saç + Sakal Kombo", desc: "Tek seansta tam bakım deneyimi.", Icon: Star },
  { name: "Ense Düzeltme", desc: "Temiz ve keskin ense hattı.", Icon: Scissors },
  { name: "Kaş Düzeltme", desc: "Hassas ve doğal kaş şekillendirme.", Icon: Eye },
  { name: "Cilt Bakımı / Maske", desc: "Cildinizi canlandıran profesyonel bakım.", Icon: Sparkles },
  { name: "Saç Boyama", desc: "Kaliteli ürünlerle uzun ömürlü renk.", Icon: Palette },
  { name: "Keratin / Röfle", desc: "İleri seviye saç bakım uygulamaları.", Icon: Sparkles },
];

const team = [
  { name: "Mert Arslan", role: "Saç & Sakal Uzmanı", img: team1 },
  { name: "Ahmet", role: "Saç & Sakal Uzmanı", img: team2 },
  { name: "Erhan", role: "Saç & Sakal Uzmanı", img: team3 },
];

const nav = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#randevu", label: "Randevu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

function useOpenStatus() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const day = now.getDay(); // 0 Sun
      const h = now.getHours();
      setOpen(day !== 0 && h >= 9 && h < 21);
    };
    compute();
    const t = setInterval(compute, 60000);
    return () => clearInterval(t);
  }, []);
  return open;
}

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
      <WhatsAppFab />
    </div>
  );
}

function OpenBadge({ className = "" }: { className?: string }) {
  const isOpen = useOpenStatus();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        isOpen
          ? "bg-green-500/15 text-green-400 border border-green-500/40"
          : "bg-red-500/15 text-red-400 border border-red-500/40"
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-green-400" : "bg-red-400"} animate-pulse`} />
      {isOpen ? "Bugün Müsaitiz ✓" : "Şu An Kapalıyız"}
    </span>
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
          <OpenBadge className="hidden lg:inline-flex" />
          <a
            href="#randevu"
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
            <OpenBadge />
            <a
              href="#randevu"
              onClick={() => setOpen(false)}
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

function BarberPole({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="relative h-56 w-14 sm:h-72 sm:w-16 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
        {/* Caps */}
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-zinc-300 to-zinc-500 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-zinc-300 to-zinc-500 z-10" />
        {/* Stripes */}
        <div
          className="absolute inset-0 animate-barber-spin"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0 14px, #ef4444 14px 28px, #ffffff 28px 42px, #1e40af 42px 56px)",
            backgroundSize: "100% 56px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>
      <style>{`
        @keyframes barber-spin { from { background-position: 0 0; } to { background-position: 0 -56px; } }
        .animate-barber-spin { animation: barber-spin 1.6s linear infinite; }
      `}</style>
    </div>
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
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Gebze • Hacıhalil
            </div>
            <OpenBadge />
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
            href="#randevu"
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
        <div className="hidden lg:flex justify-center items-center gap-8">
          <BarberPole />
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />
            <img src={logo} alt="Kafadar logo" className="relative h-64 w-64 object-contain bg-white/95 rounded-full p-6 shadow-elegant" />
          </div>
        </div>
        <div className="lg:hidden flex justify-center">
          <BarberPole />
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
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <s.Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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

const barbers = [
  { name: "Fark etmez", wa: "905383715057" },
  { name: "Mert Arslan", wa: "905396913384" },
  { name: "Ahmet", wa: "905383715057" },
  { name: "Erhan", wa: "905383715057" },
];

function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].name, datetime: "", barber: barbers[0].name });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = barbers.find((b) => b.name === form.barber) ?? barbers[0];
    const text = `Merhaba! 👋\n\n*${form.datetime}* tarihinde *${form.service}* için randevu almak istiyorum.\n\nAd Soyad: ${form.name}\n\nMüsait misiniz?`;
    window.open(`https://wa.me/${target.wa}?text=${encodeURIComponent(text)}`, "_blank");
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
          <Field label="Berber Seçimi">
            <select value={form.barber} onChange={(e) => setForm({ ...form, barber: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
              {barbers.map((b) => <option key={b.name}>{b.name}</option>)}
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
  const photos = galleryImages.slice(0, 6);
  return (
    <section id="galeri" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Galeri" title="Çalışmalarımız" sub="Salonumuzdan ve işlerimizden kareler." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group aspect-square overflow-hidden rounded-xl border border-border bg-card block"
            >
              <img
                src={src}
                alt={`Kafadar Kuaförü galeri ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>
          ))}
        </div>

        {/* Instagram feed */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Instagram'da Biz</h3>
                <p className="text-sm text-muted-foreground">@kafadarerkekkuaforu</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/kafadarerkekkuaforu/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              <Instagram className="h-4 w-4" /> Takip Et
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <iframe
              title="Instagram @kafadarerkekkuaforu"
              src="https://www.instagram.com/kafadarerkekkuaforu/embed"
              className="w-full"
              style={{ height: 720, border: 0 }}
              loading="lazy"
              scrolling="no"
              allowTransparency
            />
          </div>
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

        {/* Featured hours block */}
        <div className="mb-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 shadow-elegant">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <Clock className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display font-bold text-2xl">Çalışma Saatleri</h3>
                <OpenBadge />
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-2 text-base">
                <p className="font-semibold"><span className="text-primary">Pazartesi'den Cumartesi'ye:</span> 09:00 - 21:00</p>
                <p className="font-semibold"><span className="text-primary">Pazar:</span> Kapalı</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <InfoRow Icon={MapPin} title="Adres" lines={["Hacıhalil, 1208. Sk.", "41400 Gebze / Kocaeli"]} />
            <InfoRow Icon={Phone} title="Telefon" lines={[PHONE]} href={`tel:${PHONE.replace(/\s/g, "")}`} />
            <InfoRow Icon={Instagram} title="Instagram" lines={["@kafadarerkekkuaforu"]} href="https://www.instagram.com/kafadarerkekkuaforu/" />
            <InfoRow Icon={MessageCircle} title="WhatsApp" lines={[PHONE]} href={WA_URL} />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant h-[400px] lg:h-auto min-h-[400px]">
            <iframe
              title="Kafadar Kuaförü Konumu"
              src="https://www.google.com/maps?q=40.795953,29.4344909&hl=tr&z=17&output=embed"
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

const whatsappBarbers = [
  { name: "Mert Arslan", wa: "905396913384" },
  { name: "Ahmet", wa: "905383715057" },
  { name: "Erhan", wa: "905383715057" },
];

function WhatsAppFab() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-5 right-5 z-50 group cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
        <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle className="h-7 w-7" fill="currentColor" />
        </span>
      </button>
      {show && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60" onClick={() => setShow(false)}>
          <div className="relative w-full max-w-sm mx-4 rounded-2xl border border-border bg-card p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 p-1 rounded-md hover:bg-muted transition"
              aria-label="Kapat"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
            <h3 className="text-lg font-bold text-foreground pr-8">Berberinizi Seçin</h3>
            <p className="text-sm text-muted-foreground mt-1">Tercih ettiğiniz berberle WhatsApp üzerinden iletişime geçin.</p>
            <div className="mt-5 flex flex-col gap-3">
              {whatsappBarbers.map((b) => (
                <a
                  key={b.name}
                  href={`https://wa.me/${b.wa}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShow(false)}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-5 py-3.5 text-sm font-semibold hover:border-primary/50 hover:bg-primary/5 transition"
                >
                  <span>{b.name}</span>
                  <span className="text-xs text-muted-foreground font-medium">WhatsApp</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
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
