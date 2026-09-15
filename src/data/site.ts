export const site = {
  name: "Althaf Abbas",
  role: "Senior Frontend Developer",
  email: "althafabbas777@gmail.com",
  phone: "+91 730 667 2492",
  whatsapp: "https://wa.me/917306672492",
  instagram:
    "https://www.instagram.com/_althaf.abbas_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  location: "India",
  linkedin: "https://linkedin.com/in/althaf-abbas",
  github: "https://github.com/info-decode-dev",
  tagline:
    "I craft high-performance interfaces for complex products — from cybersecurity dashboards to editorial brand experiences.",
  about:
    "A skilled and deeply passionate Senior Front-End Developer with over 4 years of experience, specializing in Next.js, React, and TypeScript. I thrive on building modern, responsive, and high-performance user interfaces, and I am highly enthusiastic about exploring the latest design trends and modern technologies. Proven ability to translate complex data into intuitive UI solutions for cybersecurity products, with a focus on exceptional user experiences through seamless cross-functional collaboration.",
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "Vite",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Sass",
      "Tailwind CSS",
      "React Router",
      "Swiper",
    ],
    animations: [
      "Framer Motion",
      "GSAP",
      "ScrollTrigger",
      "Lenis",
      "Locomotive Scroll",
    ],
    performance: [
      "SSR",
      "SSG",
      "ISR",
      "API Integration",
      "Frontend Architecture",
      "Performance Optimization",
    ],
    design: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    backend: ["Node.js", "PostgreSQL", "RESTful APIs", "Axios"],
    other: ["Git", "GitHub", "ESLint", "Vercel", "Agile/Scrum", "UI/UX Optimization"],
  },
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "ActiveBytes Innovations",
      period: "Jun 2022 — Present",
      highlights: [
        "Lead UI development, feature enhancements, and maintenance for a core cybersecurity product.",
        "Design and build responsive interactive dashboards and complex analytical charts.",
        "Translate multi-layered security data into scannable, user-friendly interfaces.",
        "Collaborate with backend and ML teams to optimize rendering speed and API integrations.",
        "Refined product UI/UX for a successful GISEC Cyber Security Event showcase that onboarded international clients.",
      ],
    },
  ],
  education: [
    {
      title: "B. Voc — Software Development and System Administration",
      school: "MES College, Marampally, Aluva",
      period: "2019 — 2022",
    },
    {
      title: "Higher Secondary Education",
      school: "Kerala State Board of Higher Secondary Education",
      period: "2017 — 2019",
    },
  ],
  projects: [
    {
      title: "Riha Mehindi",
      client: "Dubai fashion stylist",
      status: "Live",
      description:
        "A modern, interactive, and visually immersive portfolio website crafted for Riha Mehindi, a Dubai-based fashion stylist, with a strong focus on luxury aesthetics, creative storytelling, and engaging user experiences. The website combines elegant visual design, smooth interactions, refined typography, and dynamic transitions to create a premium digital experience that goes beyond a traditional portfolio. Every section is thoughtfully designed to reflect Riha’s personality and creative identity while maintaining a seamless and intuitive browsing experience. The project explores the balance between luxury, creativity, interaction, and usability, resulting in a distinctive portfolio that feels more like a digital experience than a conventional website.",
      stack: [
        {
          label: "Core",
          items: ["React 19", "Vite 6", "React Router DOM 7"],
        },
        {
          label: "Animations & Interactions",
          items: ["GSAP", "ScrollTrigger", "Lenis", "Locomotive Scroll"],
        },
        {
          label: "UI",
          items: ["Sass"],
        },
        {
          label: "Development",
          items: ["ESLint", "Vercel"],
        },
      ],
      href: "https://rihamehindi-portfolio.vercel.app",
    },
    {
      title: "Saudi Construction Company",
      client: "Saudi Arabia",
      status: "In Progress",
      description:
        "Clean, responsive corporate website showcasing major infrastructure projects and client portfolios for a Saudi-based construction firm.",
      stack: ["UI/UX", "Figma"],
      href: null,
      preview: "web",
      previewSrc:
        "https://www.figma.com/proto/4p1m2GEhlVaUXustrpblRc/T-and-I-constructions?node-id=27-21&t=1J3a9wVd5Bpj2HSY-1",
    },
    {
      title: "Student Hostel Booking",
      client: "Study-abroad platform — Canada",
      status: "In Progress",
      description:
        "A mobile-first study-abroad accommodation platform for Canada that helps international students discover and book verified hostels and shared stays near campus. The experience centers on fast search, advanced filtering, and a clear booking flow — designed for clarity on small screens without sacrificing depth. Currently focused on a polished mobile UI that makes finding the right room feel simple, guided, and trustworthy.",
      stack: [
        {
          label: "Core",
          items: ["React", "Vite"],
        },
        {
          label: "Animations & Interactions",
          items: ["Framer Motion"],
        },
        {
          label: "UI",
          items: ["Tailwind CSS"],
        },
        {
          label: "Development",
          items: ["ESLint", "Vercel"],
        },
      ],
      href: null,
      preview: "mobile",
      previewSrc: "https://autumn-rooms-dev.vercel.app/",
    },
    {
      title: "Infinite Properties",
      client: "Real estate portal",
      status: "In Development",
      description:
        "A modern real estate portal for discovering homes and land across India — built around refined search, multi-facet filtering (location, BHK, construction status, and price), curated collections, and a smooth browsing experience. The interface balances editorial presentation with practical property discovery, using motion and polished UI patterns to keep exploration fast, engaging, and easy to navigate.",
      stack: [
        {
          label: "Core",
          items: ["Next.js", "React"],
        },
        {
          label: "Animations & Interactions",
          items: ["GSAP", "ScrollTrigger", "Lenis"],
        },
        {
          label: "UI",
          items: ["Tailwind CSS", "Swiper", "Lucide"],
        },
        {
          label: "Development",
          items: ["Axios", "Vercel"],
        },
      ],
      href: "https://infinite-properties-frontend.vercel.app/",
    },
  ],
} as const;
