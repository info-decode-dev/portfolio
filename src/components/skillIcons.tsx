import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiReactrouter,
  SiSwiper,
  SiFramer,
  SiGsap,
  SiNodedotjs,
  SiPostgresql,
  SiAxios,
  SiFigma,
  SiGit,
  SiGithub,
  SiEslint,
  SiVercel,
} from "react-icons/si";
import {
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";
import {
  HiOutlineCubeTransparent,
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineSwitchHorizontal,
  HiOutlineTemplate,
  HiOutlineUserGroup,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import { LuSparkles } from "react-icons/lu";

const skillIconMap: Record<string, IconType> = {
  "React.js": SiReact,
  React: SiReact,
  "React 19": SiReact,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  "Vite 6": SiVite,
  TypeScript: SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Sass: SiSass,
  "Tailwind CSS": SiTailwindcss,
  "React Router": SiReactrouter,
  "React Router DOM 7": SiReactrouter,
  Swiper: SiSwiper,
  Lucide: LuSparkles,
  "Framer Motion": SiFramer,
  GSAP: SiGsap,
  ScrollTrigger: HiOutlineSwitchHorizontal,
  Lenis: HiOutlineLightningBolt,
  "Locomotive Scroll": HiOutlineSparkles,
  SSR: HiOutlineCubeTransparent,
  SSG: HiOutlineTemplate,
  ISR: HiOutlineChip,
  "API Integration": HiOutlineCode,
  "Frontend Architecture": HiOutlineCubeTransparent,
  "Performance Optimization": HiOutlineLightningBolt,
  Figma: SiFigma,
  "UI/UX": HiOutlineColorSwatch,
  "Adobe XD": TbBrandAdobeXd,
  Photoshop: TbBrandAdobePhotoshop,
  Illustrator: TbBrandAdobeIllustrator,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  "RESTful APIs": HiOutlineCode,
  Axios: SiAxios,
  Git: SiGit,
  GitHub: SiGithub,
  ESLint: SiEslint,
  Vercel: SiVercel,
  "Agile/Scrum": HiOutlineUserGroup,
  "UI/UX Optimization": HiOutlineColorSwatch,
};

export function getSkillIcon(name: string): IconType {
  if (skillIconMap[name]) return skillIconMap[name];

  const normalized = name.toLowerCase();
  if (normalized.includes("react")) return SiReact;
  if (normalized.includes("next")) return SiNextdotjs;
  if (normalized.includes("vite")) return SiVite;
  if (normalized.includes("router")) return SiReactrouter;
  if (normalized.includes("tailwind")) return SiTailwindcss;
  if (normalized.includes("framer")) return SiFramer;
  if (normalized.includes("gsap") || normalized.includes("scrolltrigger"))
    return SiGsap;
  if (normalized.includes("figma") || normalized.includes("ui/ux"))
    return SiFigma;
  if (normalized.includes("lucide")) return LuSparkles;

  return HiOutlineSparkles;
}
