import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Scissors, Phone, MapPin, Clock, Instagram, Menu, X,
  SprayCan, Droplets, Sparkles, Palette, Wind, Eye, Star, MessageCircle, ArrowDown, Play, Navigation,
} from "lucide-react";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import galleryPhoto1 from "@/assets/gallery/photo-1.webp";
import galleryPhoto2 from "@/assets/gallery/photo-2.webp";
import galleryPhoto3 from "@/assets/gallery/photo-3.webp";
import galleryPhoto4 from "@/assets/gallery/photo-4.webp";
import galleryPhoto5 from "@/assets/gallery/photo-5.webp";
import galleryPhoto6 from "@/assets/gallery/photo-6.webp";
import buzzCutsVideo from "@/assets/gallery/buzz-cuts.mp4";
import randevuVideo1 from "@/assets/gallery/randevu-1.mp4";
import randevuVideo2 from "@/assets/gallery/randevu-2.mp4";
import randevuVideo3 from "@/assets/gallery/randevu-3.mp4";
import randevuVideo4 from "@/assets/gallery/randevu-4.mp4";
import randevuVideo5 from "@/assets/gallery/randevu-5.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kafadar Erkek Kuaförü | Gebze'nin En İyi Berberi" },
      { name: "description", content: "Gebze Hacıhalil'de profesyonel saç kesimi, sakal tıraşı ve bakım hizmetleri. Pazartesi-Cumartesi 09:00-21:00 arası hizmetinizdeyiz. Randevu için WhatsApp: 0538 371 50 57" },
      { property: "og:title", content: "Kafadar Erkek Kuaförü | Gebze'nin En İyi Berberi" },
      { property: "og:description", content: "Gebze Hacıhalil'de profesyonel saç kesimi, sakal tıraşı ve bakım hizmetleri. Pazartesi-Cumartesi 09:00-21:00 arası hizmetinizdeyiz. Randevu için WhatsApp: 0538 371 50 57" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Kafadar Erkek Kuaförü",
          image: `https://kafadarkuafor.xyz${hero}`,
          url: "https://kafadarkuafor.xyz",
          telephone: "+905383715057",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hacıhalil, 1208. Sk.",
            addressLocality: "Gebze",
            addressRegion: "Kocaeli",
            postalCode: "41400",
            addressCountry: "TR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.795953,
            longitude: 29.4344909,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "21:00",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "81",
          },
          sameAs: ["https://www.instagram.com/kafadarerkekkuaforu/"],
        },
      },
    ],
    scripts: [
      { src: "https://elfsightcdn.com/platform.js", async: true },
    ],
  }),
  component: Home,
});

const PHONE = "0538 371 50 57";
const WHATSAPP = "905383715057";
const WA_URL = `https://wa.me/${WHATSAPP}`;

const galleryImages = [galleryPhoto1, galleryPhoto2, galleryPhoto3, galleryPhoto4, galleryPhoto5, galleryPhoto6];
const galleryVideos = [buzzCutsVideo, randevuVideo1, randevuVideo2, randevuVideo3, randevuVideo4, randevuVideo5];

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
  { name: "Ahmet Karataş", role: "Saç & Sakal Uzmanı", img: team2 },
  { name: "Erhan Karadağ", role: "Saç & Sakal Uzmanı", img: team3 },
];

const nav = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#randevu", label: "Randevu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

type BadgeColor = "green" | "red" | "orange";

const badgeStyles: Record<BadgeColor, string> = {
  green: "bg-green-500/15 text-green-400 border border-green-500/40",
  red: "bg-red-500/15 text-red-400 border border-red-500/40",
  orange: "bg-orange-500/15 text-orange-400 border border-orange-500/40",
};

const badgeDotStyles: Record<BadgeColor, string> = {
  green: "bg-green-400",
  red: "bg-red-400",
  orange: "bg-orange-400",
};

function useOpenStatus(): { color: BadgeColor; label: string } {
  const [status, setStatus] = useState<{ color: BadgeColor; label: string }>({ color: "green", label: "Bugün Müsaitiz ✓" });
  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const day = now.getDay(); // 0 Sun ... 6 Sat
      const h = now.getHours();
      if (day === 0) {
        setStatus({ color: "red", label: "Yarın Pazartesi Açıyoruz • 09:00" });
      } else if (h < 9) {
        setStatus({ color: "orange", label: "Bugün 09:00'da Açıyoruz" });
      } else if (h >= 21) {
        setStatus({
          color: "orange",
          label: day === 6 ? "Pazartesi 09:00'da Açıyoruz" : "Yarın 09:00'da Açıyoruz",
        });
      } else {
        setStatus({ color: "green", label: "Bugün Müsaitiz ✓" });
      }
    };
    compute();
    const t = setInterval(compute, 60000);
    return () => clearInterval(t);
  }, []);
  return status;
}

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/** Fades + slides an element up into view the first time it enters the viewport. */
function Reveal({
  delay = 0,
  className = "",
  children,
}: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
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
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function OpenBadge({ className = "" }: { className?: string }) {
  const { color, label } = useOpenStatus();
  return (
    <span
      className={`items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[color]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${badgeDotStyles[color]} animate-pulse`} />
      {label}
    </span>
  );
}

const navIds = nav.map((n) => n.href.slice(1));

function Navbar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const scrolled = useScrolled();
  const active = useActiveSection(navIds);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/75 border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-foreground">
          KAFADAR
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <a
                key={n.href}
                href={n.href}
                className={`relative pb-2 text-xs font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-primary transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <OpenBadge className="hidden lg:inline-flex" />
          <a
            href="#randevu"
            className="hidden sm:inline-flex items-center gap-2 border border-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Randevu Al
          </a>
          <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menü">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/80 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
            <OpenBadge className="inline-flex w-fit" />
            <a
              href="#randevu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center border border-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
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
    <section id="top" className="relative flex h-screen min-h-[680px] flex-col overflow-hidden bg-background">
      {/* Dark, moody backdrop */}
      <div className="absolute inset-0">
        <img src={hero} alt="Kafadar Kuaförü iç mekan" className="h-full w-full object-cover opacity-25 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      </div>

      {/* Mobile-only directions link in the empty space below the navbar */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=40.795953,29.4344909"
        target="_blank"
        rel="noreferrer"
        className="absolute right-6 top-24 z-10 inline-flex items-center gap-1.5 border border-primary/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary lg:hidden"
      >
        📍 Yol Tarifi Al
      </a>

      <div className="relative flex-1 mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-16 grid lg:grid-cols-[auto_1fr_auto] items-center gap-10 pt-28 pb-12">
        {/* Giant vertical wordmark */}
        <div
          aria-hidden
          className="hidden lg:block select-none font-display font-black leading-[0.85] text-foreground/90"
          style={{ writingMode: "vertical-rl", fontSize: "9vw", letterSpacing: "0.08em" }}
        >
          KAFADAR
        </div>

        {/* Center content */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="inline-flex items-center gap-2 border border-primary/40 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Gebze • Hacıhalil
            </div>
            <OpenBadge className="inline-flex" />
          </div>

          <h1 className="font-display font-black leading-[0.95] text-foreground text-7xl sm:text-8xl lg:text-6xl xl:text-7xl">
            KAFADAR
            <span className="block mt-3 text-sm sm:text-base font-sans font-medium uppercase tracking-[0.3em] text-primary">
              Erkek Kuaförü
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-md text-base sm:text-lg text-foreground/60 leading-relaxed lg:mx-0">
            Erkek bakımında Gebze'nin adresi. Klasik ustalık, modern tarz.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#randevu"
              className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Phone className="h-4 w-4" /> Randevu Al
            </a>
            <a
              href="#hizmetler"
              className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition hover:border-primary hover:text-primary"
            >
              Hizmetlerimiz
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <img src={logo} alt="Kafadar logo" className="relative h-40 w-40 object-contain rounded-full bg-foreground/95 p-6 shadow-elegant" />
          </div>
        </div>
      </div>

      {/* Thin gold divider */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Scroll to explore */}
      <a
        href="#hizmetler"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-primary animate-scroll-bounce"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.35em]">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}

function SectionTitle({ kicker, title, sub, align = "center" }: { kicker: string; title: string; sub?: string; align?: "center" | "left" }) {
  const isLeft = align === "left";
  return (
    <Reveal className={`max-w-2xl ${isLeft ? "" : "mx-auto text-center"} mb-16`}>
      <div className={`mb-4 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-primary ${isLeft ? "" : "justify-center"}`}>
        {isLeft && <span className="h-px w-8 bg-primary" />}
        {kicker}
      </div>
      <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">{title}</h2>
      {sub && <p className={`mt-4 max-w-md text-foreground/50 ${isLeft ? "" : "mx-auto"}`}>{sub}</p>}
    </Reveal>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <SectionTitle kicker="Hizmetlerimiz" title="Profesyonel Erkek Bakımı" sub="İhtiyacınız olan her şey, tek çatı altında." />
      </div>
      <Reveal delay={150}>
        <div className="grid grid-cols-2 gap-4 px-6 pb-4 sm:px-10 md:flex md:grid-cols-none md:gap-10 md:overflow-x-auto md:no-scrollbar md:snap-x md:snap-mandatory lg:px-16">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="group border-t border-foreground/10 py-5 transition-colors duration-500 hover:border-primary md:w-[320px] md:shrink-0 md:snap-start md:py-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl font-bold text-foreground/15 transition-colors duration-500 group-hover:text-primary md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.Icon className="h-5 w-5 text-foreground/30 transition-colors duration-500 group-hover:text-primary md:h-6 md:w-6" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground transition-colors duration-500 group-hover:text-primary md:mt-10 md:text-2xl">
                {s.name}
              </h3>
              <p className="mt-2 max-w-xs text-[0.8rem] leading-relaxed text-foreground/50 md:mt-3 md:text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Team() {
  return (
    <section id="ekibimiz" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <SectionTitle kicker="Ekibimiz" title="Ustalarımızla Tanışın" sub="Yıllarca tecrübeyle hizmetinizdeyiz." />
        <div className="grid grid-cols-1 gap-px bg-foreground/10 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 120} className="group bg-background">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 lg:grayscale lg:group-hover:grayscale-0"
                />
              </div>
              <div className="px-2 py-6 sm:px-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{m.name}</h3>
                <span className="mt-3 block h-px w-12 bg-primary transition-all duration-500 group-hover:w-full" />
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-foreground/50">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const barbers = [
  { name: "Fark etmez", wa: "905383715057" },
  { name: "Mert Arslan", wa: "905396913384" },
  { name: "Ahmet Karadağ", wa: "905383715057" },
  { name: "Erhan Karataş", wa: "905383715057" },
];

// 09:00, 09:30, 10:00 ... 21:00
const TIME_SLOTS = Array.from({ length: 25 }, (_, i) => {
  const totalMinutes = 9 * 60 + i * 30;
  const h = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const m = String(totalMinutes % 60).padStart(2, "0");
  return `${h}:${m}`;
});

const toDateInputValue = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function Appointment() {
  const [form, setForm] = useState({ name: "", service: services[0].name, date: "", time: TIME_SLOTS[0], barber: barbers[0].name });

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 1);
  const minDateStr = toDateInputValue(today);
  const maxDateStr = toDateInputValue(maxDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = barbers.find((b) => b.name === form.barber) ?? barbers[0];
    const aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    const dt = new Date(`${form.date}T${form.time}`);
    const tarih = `${dt.getDate()} ${aylar[dt.getMonth()]} saat ${form.time}`;
    const text = `Merhaba! 👋\n\n${tarih} tarihinde ${form.service} için randevu almak istiyorum.\n\nMüsait misiniz?\n\n${form.name}`;
    window.open(`https://wa.me/${target.wa}?text=${encodeURIComponent(text)}`, "_blank");
  };


  const underline = "w-full border-0 border-b border-[#1a1612]/20 bg-transparent px-0 py-3 text-base text-[#1a1612] outline-none transition-colors focus:border-primary";

  return (
    <section id="randevu" className="bg-background">
      <div className="grid lg:grid-cols-2">
        {/* Dark info panel */}
        <Reveal className="flex flex-col justify-center bg-card px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <SectionTitle kicker="Randevu" title="Randevunuzu Oluşturun" sub="Formu doldurun, WhatsApp üzerinden anında iletişime geçelim." align="left" />
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Telefon</p>
              <p className="mt-2 text-lg text-foreground">{PHONE}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Çalışma Saatleri</p>
              <p className="mt-2 text-lg text-foreground">Pzt - Cmt: 09:00 - 21:00</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Adres</p>
              <p className="mt-2 text-lg text-foreground">Hacıhalil, 1208. Sk. 41400 Gebze / Kocaeli</p>
            </div>
          </div>
          <OpenBadge className="inline-flex mt-10 w-fit" />
        </Reveal>

        {/* Light form panel */}
        <Reveal delay={150} className="bg-[#f5f5f0] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-8 lg:mx-0">
            <UnderlineField label="Ad Soyad">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={underline} placeholder="Adınız Soyadınız" />
            </UnderlineField>
            <UnderlineField label="Hizmet Seçimi">
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={underline}>
                {services.map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
            </UnderlineField>
            <UnderlineField label="Berber Seçimi">
              <select value={form.barber} onChange={(e) => setForm({ ...form, barber: e.target.value })} className={underline}>
                {barbers.map((b) => <option key={b.name}>{b.name}</option>)}
              </select>
            </UnderlineField>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <UnderlineField label="Tarih">
                <input required type="date" min={minDateStr} max={maxDateStr} value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })} className={underline} />
              </UnderlineField>
              <UnderlineField label="Saat">
                <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={underline}>
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </UnderlineField>
            </div>
            <button type="submit" className="w-full bg-primary py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground transition hover:opacity-90"
              style={{ boxShadow: "var(--shadow-glow)" }}>
              WhatsApp ile Gönder
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function UnderlineField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#1a1612]/50">{label}</span>
      {children}
    </label>
  );
}

const galleryAspects = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-square", "aspect-[3/4]"];

/** Gallery video tile with a play-icon overlay and single-playback enforcement. */
function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState<string>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let captured = false;
    const captureFrame = () => {
      if (captured || !video.videoWidth || !video.videoHeight) return;
      captured = true;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPoster(canvas.toDataURL("image/jpeg", 0.85));
    };
    const onLoadedMetadata = () => {
      try {
        video.currentTime = Math.min(0.5, (video.duration || 1) / 2);
      } catch {
        captureFrame();
      }
    };
    const onSeeked = () => captureFrame();
    const onPlay = () => {
      setPlaying(true);
      document.querySelectorAll("video").forEach((other) => {
        if (other !== video) {
          other.pause();
          other.currentTime = 0;
        }
      });
    };
    const onPause = () => setPlaying(false);

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    // `loadedmetadata` may have already fired before this listener attached (cached/local assets).
    if (video.readyState >= 1) onLoadedMetadata();
    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();
  };

  return (
    <div className="relative block aspect-[3/4] w-full overflow-hidden break-inside-avoid bg-card">
      <video ref={videoRef} src={src} poster={poster} controls loop playsInline preload="metadata" className="h-full w-full object-cover" />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Videoyu sesli oynat"
          className="absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-t from-black/70 via-black/10 to-black/40"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/90">
            <Play className="h-6 w-6 fill-background text-background" />
          </div>
        </button>
      )}
    </div>
  );
}

function Gallery() {
  return (
    <section id="galeri" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <SectionTitle kicker="Galeri" title="Çalışmalarımız" sub="Salonumuzdan ve işlerimizden kareler." />
        <Reveal delay={150}>
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`block w-full overflow-hidden break-inside-avoid bg-card ${galleryAspects[i % galleryAspects.length]}`}
              >
                <img
                  src={src}
                  alt={`Kafadar Kuaförü galeri ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            {galleryVideos.map((src, i) => (
              <VideoCard key={`video-${i}`} src={src} />
            ))}
          </div>
        </Reveal>

        {/* Instagram feed */}
        <Reveal delay={250} className="mt-20">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 border-t border-foreground/10 pt-10 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-primary/40 text-primary">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Instagram'da Biz</h3>
                <p className="text-sm text-foreground/50">@kafadarerkekkuaforu</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/kafadarerkekkuaforu/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border border-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" /> Takip Et
            </a>
          </div>
          <div className="overflow-hidden border border-foreground/10 bg-card">
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
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="yorumlar" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <SectionTitle kicker="Google Yorumları" title="Müşteri Yorumlarımız" sub="Bizi tercih eden müşterilerimizin deneyimleri." />
        <Reveal delay={150}>
          <div className="border border-primary/20 bg-background p-2 sm:p-6">
            <div className="elfsight-app-1f235655-2cfa-4d8c-9b8d-52ab542c59ab" data-elfsight-app-lazy />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="relative h-[680px] overflow-hidden bg-background sm:h-[780px]">
      <iframe
        title="Kafadar Kuaförü Konumu"
        src="https://www.google.com/maps?q=40.795953,29.4344909&hl=tr&z=16&output=embed"
        className="absolute inset-0 h-full w-full"
        style={{ filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <Reveal className="pointer-events-none absolute inset-x-0 bottom-0 px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <SectionTitle kicker="İletişim" title="Bize Ulaşın" align="left" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <InfoRow Icon={MapPin} title="Adres" lines={["Hacıhalil, 1208. Sk.", "41400 Gebze / Kocaeli"]} />
          <InfoRow Icon={Phone} title="Telefon" lines={[PHONE]} href={`tel:${PHONE.replace(/\s/g, "")}`} />
          <InfoRow Icon={Instagram} title="Instagram" lines={["@kafadarerkekkuaforu"]} href="https://www.instagram.com/kafadarerkekkuaforu/" />
          <InfoRow Icon={MessageCircle} title="WhatsApp" lines={[PHONE]} href={WA_URL} />
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="inline-flex flex-wrap items-center gap-4 border border-primary/30 bg-background/70 px-6 py-4 backdrop-blur">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Pzt - Cmt: 09:00 - 21:00</span>
            <span className="text-foreground/30">/</span>
            <span className="text-sm text-foreground/50">Pazar Kapalı</span>
            <OpenBadge className="inline-flex" />
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=40.795953,29.4344909"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <Navigation className="h-4 w-4" /> Yol Tarifi Al
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function InfoRow({ Icon, title, lines, href }: { Icon: typeof Phone; title: string; lines: string[]; href?: string }) {
  const content = (
    <>
      <Icon className="h-5 w-5 shrink-0 text-primary" />
      <div className="min-w-0">
        <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{title}</h3>
        {lines.map((l) => <p key={l} className="mt-1 text-sm text-foreground/80">{l}</p>)}
      </div>
    </>
  );
  const cls = "flex items-start gap-3 transition-colors hover:text-primary";
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={`pointer-events-auto ${cls}`}>{content}</a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

const whatsappBarbers = [
  { name: "Mert Arslan", wa: "905396913384" },
  { name: "Ahmet Karataş", wa: "905383715057" },
  { name: "Erhan Karadağ", wa: "905383715057" },
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70" onClick={() => setShow(false)}>
          <div className="relative mx-4 w-full max-w-sm border border-foreground/10 bg-card p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 p-1 text-foreground/50 transition hover:text-primary"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="pr-8 font-display text-lg font-bold text-foreground">Berberinizi Seçin</h3>
            <p className="mt-1 text-sm text-foreground/50">Tercih ettiğiniz berberle WhatsApp üzerinden iletişime geçin.</p>
            <div className="mt-5 flex flex-col gap-3">
              {whatsappBarbers.map((b) => (
                <a
                  key={b.name}
                  href={`https://wa.me/${b.wa}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShow(false)}
                  className="flex items-center justify-between border border-foreground/10 bg-background px-5 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  <span>{b.name}</span>
                  <span className="text-xs font-medium text-foreground/40">WhatsApp</span>
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
    <footer className="border-t border-foreground/10 bg-background py-10">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-10 lg:px-16">
        <div className="font-display text-lg font-bold tracking-[0.2em] text-foreground">KAFADAR</div>
        <p className="text-xs uppercase tracking-[0.25em] text-foreground/40">© 2026 Kafadar Erkek Kuaförü. Tüm hakları saklıdır.</p>
        <a href="https://www.instagram.com/kafadarerkekkuaforu/" target="_blank" rel="noreferrer" className="text-foreground/50 transition hover:text-primary">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
