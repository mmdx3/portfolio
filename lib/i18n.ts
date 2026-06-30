export type Lang = "en" | "fa"

export const content = {
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      switchTo: "فارسی",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Mohammad Jalalabadi",
      title: "Frontend Developer",
      tagline:
        "I craft fast, accessible, and beautiful interfaces with React & Next.js. 4+ years turning ideas into polished, high-performance web experiences.",
      cta: "View Projects",
      ctaSecondary: "Get in Touch",
      location: "Neyshabur, Iran",
      available: "Available for work",
    },
    about: {
      heading: "About Me",
      kicker: "Who I am",
      body: [
        "I'm a Frontend Developer with over 4 years of experience building interactive websites and web applications using React.js and Next.js. I focus on creating smooth, performant, and user-friendly interfaces.",
        "My expertise spans UI/UX design, performance optimization, SEO best practices, and CMS integration with WordPress. I've also worked on connecting Next.js to WordPress for dynamic blog sections and integrating digital wallet features.",
      ],
      stats: [
        { value: "4+", label: "Years Experience" },
        { value: "15+", label: "Projects Delivered" },
        { value: "30%", label: "Avg. Speed Gains" },
        { value: "∞", label: "Cups of Coffee" },
      ],
    },
    skills: {
      heading: "Skills & Tools",
      kicker: "What I work with",
    },
    experience: {
      heading: "Work Experience",
      kicker: "My journey",
      present: "Present",
      items: [
        {
          role: "Frontend Developer (Remote)",
          company: "Dubai-based Tech Startup",
          period: "Jan 2025 – Present",
          points: [
            "Building and maintaining websites and web apps with React.js & Next.js.",
            "Implemented Hero.io and Hirkan.com blogs with a focus on speed, SEO, and UX.",
            "Developing a building-management web app with scalable architecture.",
            "WordPress + Next.js integration and digital wallet integration features.",
          ],
        },
        {
          role: "Frontend Developer (Remote)",
          company: "Digital Capital Publication",
          period: "Jul 2023 – Nov 2023",
          points: [
            "Participated in planning meetings and contributed creative ideas.",
            "Fixed bugs and improved the overall user experience.",
          ],
        },
        {
          role: "Frontend Developer",
          company: "Dadeh Negar Fanavaran Pars",
          period: "Jul 2022 – Nov 2022",
          points: [
            "Designed and implemented UI for company projects.",
            "Optimized websites for SEO, improving load speed by 30%.",
            "Collaborated with the team on React and Next.js projects.",
          ],
        },
      ],
    },
    projects: {
      heading: "Featured Projects",
      kicker: "Things I've built",
      inProgress: "In Progress",
      visit: "Visit",
      code: "Code",
      items: [
        {
          name: "URL Shortener",
          stack: ["Next.js", "TypeScript"],
          desc: "A link shortening service with custom aliases and click tracking.",
          link: "https://github.com/mmdx3/shorter-url",
          repo: "https://github.com/mmdx3/shorter-url",
        },
        {
          name: "Hero.io",
          stack: ["Next.js", "React", "WordPress"],
          desc: "Website with a dynamic WordPress-connected blog, Core Web Vitals optimization, and improved Google Lighthouse scores.",
          link: "https://hero.io",
        },
        {
          name: "Hirkan.com",
          stack: ["Next.js", "Responsive"],
          desc: "Full service website with responsive design, fast loading, and dynamic blog integration.",
          link: "https://hirkan.com",
        },
        {
          name: "Building Management App",
          stack: ["React.js", "Zustand", "React Hook Form"],
          desc: "Dynamic UI with complex forms, Zustand state management, and a modular, scalable architecture.",
          inProgress: true,
        },
      ],
    },
    education: {
      heading: "Education",
      kicker: "My background",
      items: [
        {
          degree: "B.Sc. Computer Engineering (Software)",
          school: "Islamic Azad University of Neyshabur",
          period: "2024 – 2025",
          detail: "GPA 18 / 20",
        },
        {
          degree: "Diploma in Networking & Software",
          school: "Technical Diploma",
          period: "",
          detail: "GPA 18.56 / 20",
        },
      ],
      languagesHeading: "Languages",
      languages: [
        { name: "Persian", level: "Native" },
        { name: "English", level: "Intermediate" },
      ],
    },
    contact: {
      heading: "Let's Work Together",
      kicker: "Get in touch",
      body: "Have a project in mind or just want to say hello? I'm always open to discussing new opportunities.",
      email: "Email",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS.",
    },
  },
  fa: {
    dir: "rtl" as const,
    nav: {
      home: "خانه",
      about: "درباره من",
      skills: "مهارت‌ها",
      experience: "تجربه کاری",
      projects: "پروژه‌ها",
      education: "تحصیلات",
      contact: "تماس",
      switchTo: "English",
    },
    hero: {
      greeting: "سلام، من",
      name: "محمد جلال‌آبادی",
      title: "توسعه‌دهنده فرانت‌اند",
      tagline:
        "رابط‌های کاربری سریع، در دسترس و زیبا را با React و Next.js می‌سازم. بیش از ۴ سال تجربه در تبدیل ایده‌ها به تجربه‌های وب پرسرعت و حرفه‌ای.",
      cta: "مشاهده پروژه‌ها",
      ctaSecondary: "تماس بگیرید",
      location: "نیشابور، ایران",
      available: "آماده همکاری",
    },
    about: {
      heading: "درباره من",
      kicker: "من کی هستم",
      body: [
        "من یک توسعه‌دهنده فرانت‌اند با بیش از ۴ سال تجربه در ساخت وب‌سایت‌ها و اپلیکیشن‌های تعاملی با React.js و Next.js هستم. تمرکز من بر ساخت رابط‌های روان، پرسرعت و کاربرپسند است.",
        "تخصص من شامل طراحی UI/UX، بهینه‌سازی عملکرد، رعایت اصول سئو و یکپارچه‌سازی سیستم مدیریت محتوا با وردپرس است. همچنین روی اتصال Next.js به وردپرس برای بخش‌های وبلاگ پویا و یکپارچه‌سازی کیف پول دیجیتال کار کرده‌ام.",
      ],
      stats: [
        { value: "+۴", label: "سال تجربه" },
        { value: "+۱۵", label: "پروژه تحویل‌شده" },
        { value: "۳۰٪", label: "افزایش سرعت" },
        { value: "∞", label: "فنجان قهوه" },
      ],
    },
    skills: {
      heading: "مهارت‌ها و ابزارها",
      kicker: "ابزارهای کاری من",
    },
    experience: {
      heading: "تجربه کاری",
      kicker: "مسیر من",
      present: "اکنون",
      items: [
        {
          role: "توسعه‌دهنده فرانت‌اند (دورکار)",
          company: "استارتاپ فناوری مستقر در دبی",
          period: "ژانویه ۲۰۲۵ – اکنون",
          points: [
            "ساخت و نگهداری وب‌سایت‌ها و اپلیکیشن‌ها با React.js و Next.js.",
            "پیاده‌سازی وبلاگ Hero.io و Hirkan.com با تمرکز بر سرعت، سئو و تجربه کاربری.",
            "توسعه یک اپلیکیشن مدیریت ساختمان با معماری مقیاس‌پذیر.",
            "یکپارچه‌سازی وردپرس + Next.js و امکانات کیف پول دیجیتال.",
          ],
        },
        {
          role: "توسعه‌دهنده فرانت‌اند (دورکار)",
          company: "نشریه سرمایه دیجیتال",
          period: "ژوئیه ۲۰۲۳ – نوامبر ۲۰۲۳",
          points: [
            "مشارکت در جلسات برنامه‌ریزی و ارائه ایده‌های خلاقانه.",
            "رفع باگ‌ها و بهبود تجربه کاربری.",
          ],
        },
        {
          role: "توسعه‌دهنده فرانت‌اند",
          company: "شرکت نرم‌افزاری داده‌نگار فناوران پارس",
          period: "ژوئیه ۲۰۲۲ – نوامبر ۲۰۲۲",
          points: [
            "طراحی و پیاده‌سازی رابط کاربری برای پروژه‌های شرکت.",
            "بهینه‌سازی سئوی وب‌سایت‌ها و افزایش ۳۰٪ سرعت بارگذاری.",
            "همکاری تیمی روی پروژه‌های React و Next.js.",
          ],
        },
      ],
    },
    projects: {
      heading: "پروژه‌های منتخب",
      kicker: "ساخته‌های من",
      inProgress: "در حال انجام",
      visit: "مشاهده",
      code: "کد",
      items: [
        {
          name: "کوتاه‌کننده لینک",
          stack: ["Next.js", "TypeScript"],
          desc: "سرویس کوتاه‌سازی لینک با نام مستعار سفارشی و ردیابی کلیک.",
          link: "https://github.com/mmdx3/shorter-url",
          repo: "https://github.com/mmdx3/shorter-url",
        },
        {
          name: "Hero.io",
          stack: ["Next.js", "React", "WordPress"],
          desc: "وب‌سایت با وبلاگ پویای متصل به وردپرس، بهینه‌سازی Core Web Vitals و بهبود نمرات Lighthouse.",
          link: "https://hero.io",
        },
        {
          name: "Hirkan.com",
          stack: ["Next.js", "ریسپانسیو"],
          desc: "وب‌سایت کامل با طراحی واکنش‌گرا، بارگذاری سریع و یکپارچه‌سازی وبلاگ پویا.",
          link: "https://hirkan.com",
        },
        {
          name: "اپلیکیشن مدیریت ساختمان",
          stack: ["React.js", "Zustand", "React Hook Form"],
          desc: "رابط کاربری پویا با فرم‌های پیچیده، مدیریت وضعیت با Zustand و معماری ماژولار و مقیاس‌پذیر.",
          inProgress: true,
        },
      ],
    },
    education: {
      heading: "تحصیلات",
      kicker: "پیشینه من",
      items: [
        {
          degree: "کارشناسی مهندسی کامپیوتر (نرم‌افزار)",
          school: "دانشگاه آزاد اسلامی نیشابور",
          period: "۲۰۲۴ – ۲۰۲۵",
          detail: "معدل ۱۸ از ۲۰",
        },
        {
          degree: "دیپلم شبکه و نرم‌افزار",
          school: "دیپلم فنی",
          period: "",
          detail: "معدل ۱۸.۵۶ از ۲۰",
        },
      ],
      languagesHeading: "زبان‌ها",
      languages: [
        { name: "فارسی", level: "زبان مادری" },
        { name: "انگلیسی", level: "متوسط" },
      ],
    },
    contact: {
      heading: "بیایید با هم کار کنیم",
      kicker: "در تماس باشید",
      body: "پروژه‌ای در ذهن دارید یا فقط می‌خواهید سلام کنید؟ همیشه برای گفتگو درباره فرصت‌های جدید آماده‌ام.",
      email: "ایمیل",
      telegram: "تلگرام",
      github: "گیت‌هاب",
      linkedin: "لینکدین",
    },
    footer: {
      rights: "تمامی حقوق محفوظ است.",
      built: "ساخته‌شده با Next.js و Tailwind CSS.",
    },
  },
}

export const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "React Query",
  "Zustand",
  "REST API",
  "MUI",
  "Git",
  "GitHub",
  "Figma",
  "Agile / Scrum",
  "Performance",
  "SEO",
  "React Hook Form",
]

export const contactLinks = {
  email: "mamadx3j@gmail.com",
  telegram: "https://t.me/mmdx321",
  github: "https://github.com/mamadx3",
  linkedin: "https://linkedin.com/in/mamadx3",
}
