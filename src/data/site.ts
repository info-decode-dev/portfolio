export const site = {
  name: "Althaf Abbas",
  role: "Senior Frontend Developer",
  email: "althafabbas777@gmail.com",
  phone: "+91 730 667 2492",
  location: "India",
  linkedin: "https://linkedin.com/in/althaf-abbas",
  github: "https://github.com/althafabbas",
  tagline:
    "I craft high-performance interfaces for complex products — from cybersecurity dashboards to editorial brand experiences.",
  about:
    "A skilled and deeply passionate Senior Front-End Developer with over 4 years of experience, specializing in Next.js, React, and TypeScript. I thrive on building modern, responsive, and high-performance user interfaces, and I am highly enthusiastic about exploring the latest design trends and modern technologies. Proven ability to translate complex data into intuitive UI solutions for cybersecurity products, with a focus on exceptional user experiences through seamless cross-functional collaboration.",
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
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
    backend: ["Node.js", "PostgreSQL", "RESTful APIs"],
    other: ["Git", "GitHub", "Agile/Scrum", "UI/UX Optimization"],
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
      title: "Riha Mehandi",
      client: "Dubai-based fashion stylist",
      status: "Live",
      description:
        "A sophisticated, minimalist portfolio for a Dubai fashion stylist — architected in Next.js with a visually striking editorial presence.",
      stack: ["Next.js", "CSS"],
      href: "https://rihamehindi-portfolio.vercel.app",
    },
    {
      title: "Saudi Construction Company",
      client: "Saudi Arabia",
      status: "UI/UX Done",
      description:
        "Clean, responsive corporate website showcasing major infrastructure projects and client portfolios for a Saudi-based construction firm.",
      stack: ["UI/UX", "Responsive Web"],
      href: null,
      preview: "web",
      previewSrc:
        "https://www.figma.com/proto/4p1m2GEhlVaUXustrpblRc/T-and-I-constructions?node-id=27-21&t=1J3a9wVd5Bpj2HSY-1",
    },
    {
      title: "Student Hostel Booking",
      client: "Study-abroad platform",
      status: "In Progress",
      description:
        "Dynamic web app for international students to search and book accommodations with advanced filtering and a seamless booking flow. Currently crafted as a mobile-first experience.",
      stack: ["Next.js", "React", "Filtering"],
      href: null,
      preview: "mobile",
      previewSrc: "https://autumn-rooms-dev.vercel.app/",
    },
    {
      title: "Infinite Properties",
      client: "Real estate portal",
      status: "In Development",
      description:
        "Modern real estate platform with optimized property filtering, search architecture, map integrations, and a polished browsing experience.",
      stack: ["Maps", "Search", "Next.js"],
      href: "https://infinite-properties-frontend.vercel.app/",
    },
  ],
} as const;
