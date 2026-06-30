  "use client";

  import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
  } from "react";
  import { content, type Lang } from "@/lib/i18n";

  type TranslationContent = {
    dir: "ltr" | "rtl";
    nav: {
      home: "Home";
      about: "About";
      skills: "Skills";
      experience: "Experience";
      projects: "Projects";
      education: "Education";
      contact: "Contact";
      switchTo: "فارسی";
    };
    hero: {
      greeting: "Hello, I'm";
      name: "Mohammad Jalalabadi";
      title: "Frontend Developer";
      tagline: "I craft fast, accessible, and beautiful interfaces with React & Next.js. 4+ years turning ideas into polished, high-performance web experiences.";
      cta: "View Projects";
      ctaSecondary: "Get in Touch";
      location: "Neyshabur, Iran";
      available: "Available for work";
    };
    about: {
      heading: "About Me";
      kicker: "Who I am";
      body: [
        "I'm a Frontend Developer with over 4 years of experience building interactive websites and web applications using React.js and Next.js. I focus on creating smooth, performant, and user-friendly interfaces.",
        "My expertise spans UI/UX design, performance optimization, SEO best practices, and CMS integration with WordPress. I've also worked on connecting Next.js to WordPress for dynamic blog sections and integrating digital wallet features.",
      ];
      stats: [
        { value: "4+"; label: "Years Experience" },
        { value: "15+"; label: "Projects Delivered" },
        { value: "30%"; label: "Avg. Speed Gains" },
        { value: "∞"; label: "Cups of Coffee" },
      ];
    };
    skills: {
      heading: "Skills & Tools";
      kicker: "What I work with";
    };
    experience: {
      heading: "Work Experience";
      kicker: "My journey";
      present: "Present";
      items: [
        {
          role: "Frontend Developer (Remote)";
          company: "Dubai-based Tech Startup";
          period: "Jan 2025 – Present";
          points: [
            "Building and maintaining websites and web apps with React.js & Next.js.",
            "Implemented Hero.io and Hirkan.com blogs with a focus on speed, SEO, and UX.",
            "Developing a building-management web app with scalable architecture.",
            "WordPress + Next.js integration and digital wallet integration features.",
          ];
        },
        {
          role: "Frontend Developer (Remote)";
          company: "Digital Capital Publication";
          period: "Jul 2023 – Nov 2023";
          points: [
            "Participated in planning meetings and contributed creative ideas.",
            "Fixed bugs and improved the overall user experience.",
          ];
        },
        {
          role: "Frontend Developer";
          company: "Dadeh Negar Fanavaran Pars";
          period: "Jul 2022 – Nov 2022";
          points: [
            "Designed and implemented UI for company projects.",
            "Optimized websites for SEO, improving load speed by 30%.",
            "Collaborated with the team on React and Next.js projects.",
          ];
        },
      ];
    };
    projects: {
      heading: "Featured Projects";
      kicker: "Things I've built";
      inProgress: "In Progress";
      visit: "Visit";
      code: "Code";
      items: [
        {
          name: "URL Shortener";
          stack: ["Next.js", "TypeScript"];
          desc: "A link shortening service with custom aliases and click tracking.";
          link: "https://github.com/mmdx3/shorter-url";
          repo: "https://github.com/mmdx3/shorter-url";
        },
        {
          name: "Hero.io";
          stack: ["Next.js", "React", "WordPress"];
          desc: "Website with a dynamic WordPress-connected blog, Core Web Vitals optimization, and improved Google Lighthouse scores.";
          link: "https://hero.io";
        },
        {
          name: "Hirkan.com";
          stack: ["Next.js", "Responsive"];
          desc: "Full service website with responsive design, fast loading, and dynamic blog integration.";
          link: "https://hirkan.com";
        },
        {
          name: "Building Management App";
          stack: ["React.js", "Zustand", "React Hook Form"];
          desc: "Dynamic UI with complex forms, Zustand state management, and a modular, scalable architecture.";
          inProgress: true;
        },
      ];
    };
    education: {
      heading: "Education";
      kicker: "My background";
      items: [
        {
          degree: "B.Sc. Computer Engineering (Software)";
          school: "Islamic Azad University of Neyshabur";
          period: "2024 – 2025";
          detail: "GPA 18 / 20";
        },
        {
          degree: "Diploma in Networking & Software";
          school: "Technical Diploma";
          period: "";
          detail: "GPA 18.56 / 20";
        },
      ];
      languagesHeading: "Languages";
      languages: [
        { name: "Persian"; level: "Native" },
        { name: "English"; level: "Intermediate" },
      ];
    };
    contact: {
      heading: "Let's Work Together";
      kicker: "Get in touch";
      body: "Have a project in mind or just want to say hello? I'm always open to discussing new opportunities.";
      email: "Email";
      telegram: "Telegram";
      github: "GitHub";
      linkedin: "LinkedIn";
    };
    footer: {
      rights: "All rights reserved.";
      built: "Built with Next.js & Tailwind CSS.";
    };
  };

  type LanguageContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggle: () => void;
    t: TranslationContent;
  };

  const LanguageContext = createContext<LanguageContextValue | null>(null);

  export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    useEffect(() => {
      const stored = (typeof window !== "undefined" &&
        window.localStorage.getItem("lang")) as Lang | null;
      if (stored === "en" || stored === "fa") setLang(stored);
    }, []);

    useEffect(() => {
      const dir = content[lang].dir;
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      if (typeof window !== "undefined")
        window.localStorage.setItem("lang", lang);
    }, [lang]);

    const toggle = () => setLang((prev) => (prev === "en" ? "fa" : "en"));

    return (
      <LanguageContext.Provider
        value={{ lang, setLang, toggle, t: content[lang] as TranslationContent }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
  }
