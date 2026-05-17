"use client";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Code2,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { memo, useEffect, useMemo, useRef, useState } from "react";

import { LanguageToggle } from "@/components/language-toggle";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { content, type Language } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const differentialIcons = [PanelsTopLeft, Code2, Workflow, BarChart3, Bot, ArrowRight];
const techLogos = [
  { name: "CSS3", label: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", label: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  {
    name: "Next.js",
    label: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invertOnDark: true,
  },
  { name: "TypeScript", label: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", label: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", label: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", label: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  {
    name: "Express",
    label: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invertOnDark: true,
  },
  { name: "PHP", label: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", label: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Figma", label: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "PostgreSQL", label: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "SQLite", label: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "Git", label: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", label: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  {
    name: "GitHub",
    label: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invertOnDark: true,
  },
  {
    name: "Vercel",
    label: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    invertOnDark: true,
  },
];

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt");
  const [activeSection, setActiveSection] = useState("perfil");
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollFrame = useRef<number | null>(null);
  const t = useMemo(() => content[language], [language]);

  const navigationItems = useMemo(
    () => [
      { id: "perfil", label: t.nav.profile },
      { id: "stack", label: t.nav.skills },
      { id: "projetos", label: t.nav.projects },
      { id: "contato", label: t.nav.contact },
    ],
    [t.nav.contact, t.nav.profile, t.nav.projects, t.nav.skills],
  );

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const currentSection = navigationItems
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .reduce<HTMLElement | null>((closest, section) => {
          const sectionTop = section.offsetTop - 140;
          if (scrollTop >= sectionTop) return section;
          return closest;
        }, null);

      setActiveSection(currentSection?.id ?? "perfil");
      scrollFrame.current = null;
    };

    const handleScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, [navigationItems]);

  return (
    <main className="page-grid relative min-h-screen">
      <div className="cosmic-scene" aria-hidden="true">
        <div className="cosmic-nebula" />
        <div className="cosmic-stars" />
        <div className="cosmic-bright-stars" />
        <div className="cosmic-comet" />
        <div className="cosmic-comet cosmic-comet-secondary" />
      </div>

      <div className="relative z-10 flex flex-col">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-white/5">
            <div
              className="h-full bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300 transition-[width] duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#" className="text-sm font-semibold tracking-[0.28em] text-white">
              LUCAS BRAGA
            </a>

            <LanguageToggle language={language} onChange={setLanguage} />

            <nav className="order-3 flex w-full gap-2 overflow-x-auto pt-1 text-sm text-slate-300 sm:order-none sm:w-auto sm:pt-0">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 transition ${
                    activeSection === item.id
                      ? "bg-white text-slate-950"
                      : "border border-white/10 bg-white/[0.03] hover:border-sky-300/30 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              <span>{t.hero.eyebrow}</span>
              <span className="h-1 w-1 rounded-full bg-sky-300" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {t.hero.location}
              </span>
            </div>

            <p className="mt-8 text-lg font-medium text-sky-300">Lucas Braga Zamproni Lima</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              {t.hero.title}
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{t.hero.headline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projetos"
                className="interactive-lift inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-100"
              >
                {t.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="interactive-lift inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white hover:border-sky-300/40 hover:bg-white/[0.06]"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <aside className="fade-up fade-up-delay-1 relative pt-3 lg:pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{t.hero.proofTitle}</p>

            <div className="mt-7 space-y-0">
              {t.hero.proofItems.map((item, index) => (
                <div
                  key={item}
                  className="relative border-t border-white/10 py-5 pl-14 first:border-t-0 first:pt-0"
                >
                  <div
                    className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-xs font-semibold text-white ${
                      index === 0 ? "top-0" : "top-5"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="perfil" className="content-section order-1 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading title={t.about.title} />

          <div className="mt-9 border-t border-white/10 pt-9">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
              <div>
                <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                  {t.about.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{t.help.title}</p>
                  <p className="mt-3 leading-7 text-slate-300">{t.help.intro}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.help.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-2xl font-semibold tracking-tight text-white">{t.differentials.title}</p>
                <p className="mt-4 max-w-2xl leading-8 text-slate-300">{t.differentials.intro}</p>

                <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {t.differentials.items.map((item, index) => {
                    const Icon = differentialIcons[index];

                    return (
                      <article key={item.title} className="border-t border-white/10 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sky-200">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        </div>
                        <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="content-section order-2 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading title={t.skills.title} intro={t.skills.intro} />

          <div className="marquee-mask mt-8 overflow-hidden">
            <div className="marquee-track flex items-center gap-10 py-4 sm:gap-12">
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex w-20 shrink-0 flex-col items-center gap-3 text-center sm:w-24"
                >
                  <Image
                    src={logo.src}
                    alt={logo.label}
                    width={64}
                    height={64}
                    className={`h-8 w-8 object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-9 ${
                      logo.invertOnDark ? "invert" : ""
                    }`}
                  />
                  <span className="text-xs font-mono tracking-wide text-slate-400 sm:text-sm">{logo.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="content-section order-3 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading title={t.projects.title} intro={t.projects.intro} />

          <div className="mt-12 space-y-12">
            {t.projects.items.map((project, index) => (
              <div key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <ProjectCard {...project} labels={t.projects.labels} index={index} />
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="content-section order-4 mx-auto max-w-7xl px-4 py-12 pb-16 sm:px-6 lg:px-8 lg:py-16 lg:pb-20">
          <div className="relative mt-2 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-violet-400/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight text-white">{t.contact.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{t.contact.intro}</p>
              </div>

              <div className="border-t border-white/10 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <VisitorClock language={language} />

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-sm md:flex-col md:items-start">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="link-glow inline-flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-sky-300" />
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-glow inline-flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    <Github className="h-4 w-4 text-sky-300" />
                    {siteConfig.githubLabel}
                  </a>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-glow inline-flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    <PanelsTopLeft className="h-4 w-4 text-sky-300" />
                    {siteConfig.linkedinLabel}
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-glow inline-flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 text-sky-300" />
                    {siteConfig.whatsappLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="order-5 border-t border-white/10 px-4 py-7 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Braga Lima System â€” {t.footer.role}</p>
            <p>Â© {new Date().getFullYear()} Lucas Braga Zamproni Lima</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

const VisitorClock = memo(function VisitorClock({
  language,
}: {
  language: Language;
}) {
  const [localTime, setLocalTime] = useState("");
  const [localZone, setLocalZone] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(language === "pt" ? "pt-BR" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const updateLocalTime = () => {
      setLocalTime(formatter.format(new Date()));
      setLocalZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    };

    updateLocalTime();
    const interval = window.setInterval(updateLocalTime, 1000);

    return () => window.clearInterval(interval);
  }, [language]);

  return (
    <>
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
        {language === "pt" ? "Agora para quem visita" : "Visitor local time"}
      </p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{localTime}</p>
      <p className="mt-1 text-sm text-slate-400">{localZone}</p>
    </>
  );
});
