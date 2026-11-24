/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { LiquidGlassNavbar } from './components/LiquidGlassNavbar';
import { LiquidGlassCard } from './components/LiquidGlassCard';
import { LiquidGlassButton } from './components/LiquidGlassButton';
import { ScrollReveal } from './components/ScrollReveal';
import { TextReveal } from './components/TextReveal';
import { ImageReveal } from './components/ImageReveal';
import { BentoGrid } from './components/BentoGrid';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectCard } from './components/ProjectCard';
import { AnimatedTimeline } from './components/AnimatedTimeline';
import { CertificateGallery } from './components/CertificateGallery';
import { SocialLinks } from './components/SocialLinks';
import { InteractiveCTA } from './components/InteractiveCTA';
import { AnimatedFooter } from './components/AnimatedFooter';
import { BackToTop } from './components/BackToTop';
import { SectionIndicator } from './components/SectionIndicator';
import { 
  Rocket, Sparkles, User, ExternalLink, Github, ArrowUpRight, 
  HelpCircle, ChevronDown, Award, Globe, Instagram, Mail, Terminal, Cpu
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const DEFAULT_PROFILE = {
  name: "Mohammed Ashfaq",
  title: "Student, AI Enthusiast & Future Innovator",
  tagline: "Exploring artificial intelligence, building digital experiences, and turning creative ideas into reality.",
  bio: "I'm Mohammed Ashfaq, a student passionate about artificial intelligence, technology, and digital innovation. I enjoy exploring emerging technologies, experimenting with AI-powered tools, and developing projects that turn ideas into real experiences. Proud participant in the NASA Space Apps Challenge and Media Partner for Ideal High School.",
  avatarUrl: "/src/assets/profile_photo.png",
  email: "ashfaqdeveloper1@gmail.com",
  instagramUrl: "https://www.instagram.com/mohammed.ashfaq.2011/"
};

const INITIAL_PROJECTS: Project[] = [
  {
    id: "junior-astronaut",
    title: "Oops! I'm an Astronaut",
    tagline: "Educational astronaut training game for NASA Space Apps Challenge",
    description: "An educational astronaut training game developed for the NASA Space Apps Challenge, designed to introduce students to astronaut training and space exploration through interactive gameplay.",
    category: "Space & EdTech",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Simulation Engine"],
    imageUrl: "",
    liveUrl: "https://oops-im-an-astronaut.vercel.app/",
    githubUrl: "#"
  },
  {
    id: "portfolio-site",
    title: "Minimalist Creative Portfolio",
    tagline: "Award-winning agency style personal portfolio",
    description: "A premium personal brand website featuring Apple-inspired typography, Bento grids, smooth scroll animations, and interactive components.",
    category: "Web Engineering",
    technologies: ["React", "TypeScript", "Motion", "Tailwind CSS"],
    imageUrl: "",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('ashfaq_profile_v3');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.avatarUrl) {
        parsed.avatarUrl = "/src/assets/profile_photo.png";
      }
      return parsed;
    }
    return DEFAULT_PROFILE;
  });

  const [projects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('ashfaq_projects_v3');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  // Uploaded NASA certificate
  const certificateUrl = "/src/assets/certificate_nasa.png";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setProfile((prev: typeof DEFAULT_PROFILE) => ({ ...prev, avatarUrl: result }));
      localStorage.setItem('ashfaq_profile_v3', JSON.stringify({ ...profile, avatarUrl: result }));
    };
    reader.readAsDataURL(file);
  };

  const faqs = [
    {
      question: "Who is Mohammed Ashfaq?",
      answer: "Mohammed Ashfaq is a student and AI enthusiast interested in artificial intelligence, technology, web development, and digital innovation."
    },
    {
      question: "What does Mohammed Ashfaq do?",
      answer: "He explores artificial intelligence, builds digital experiences, develops interactive web applications, and collaborates as a media partner."
    },
    {
      question: "What is his featured project?",
      answer: "His featured project is 'Oops! I'm an Astronaut', an educational astronaut training game developed for the NASA Space Apps Challenge."
    },
    {
      question: "What is the Junior Astronaut Mission Trainer?",
      answer: "It is the challenge theme under which 'Oops! I'm an Astronaut' was created, designed to introduce students to space exploration through interactive gameplay."
    },
    {
      question: "What was his NASA Space Apps participation?",
      answer: "Mohammed Ashfaq participated in the 2026 NASA Space Apps Challenge (November 14–15, 2026) and received the Galactic Problem Solver recognition."
    },
    {
      question: "Where can people view his projects?",
      answer: "His projects can be viewed directly on his official website and via live links such as oops-im-an-astronaut.vercel.app."
    },
    {
      question: "How can people contact him?",
      answer: "People can reach out via email at ashfaqdeveloper1@gmail.com or through his official Instagram profile @mohammed.ashfaq.2011."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#050505] text-[#111111] dark:text-[#F5F5F7] font-sans selection:bg-[#111111] selection:text-white dark:selection:bg-white dark:selection:text-[#111111] relative overflow-x-hidden">
      
      {/* UI Interaction & Navigation */}
      <CustomCursor />
      <ScrollProgress />
      <LiquidGlassNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <SectionIndicator activeSection={activeSection} onSelect={setActiveSection} />
      <BackToTop />

      {/* ================= 1. HERO SECTION ================= */}
      <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6">
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-200/40 via-purple-200/20 to-transparent dark:from-blue-950/30 dark:via-purple-950/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Typography */}
            <div className="lg:col-span-7 space-y-8">
              
              <ScrollReveal>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 text-xs font-mono tracking-widest text-neutral-600 dark:text-neutral-400 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>STUDENT & AI ENTHUSIAST</span>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
                  <TextReveal text="Mohammed Ashfaq." delay={0.1} />
                </h1>
                
                <ScrollReveal delay={0.3}>
                  <p className="text-xl sm:text-2xl font-mono text-neutral-600 dark:text-neutral-400 tracking-tight">
                    Exploring AI. Building Ideas. Creating What's Next.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.4}>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl font-normal">
                  {profile.bio}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5} className="flex flex-wrap items-center gap-4 pt-2">
                <LiquidGlassButton href="#projects" variant="primary">
                  <span>Explore My Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </LiquidGlassButton>

                <LiquidGlassButton href="#experience" variant="secondary">
                  <Rocket className="w-4 h-4 text-amber-500" />
                  <span>NASA Space Apps Entry</span>
                </LiquidGlassButton>
              </ScrollReveal>

              <ScrollReveal delay={0.6} className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-500 font-mono">
                <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a href={`mailto:${profile.email}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{profile.email}</span>
                </a>
                <a href="https://idealhighschool.org/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Ideal High School Partner</span>
                </a>
              </ScrollReveal>

            </div>

            {/* Right Column: Profile Composition */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <ScrollReveal direction="right" delay={0.2} className="w-full">
                <LiquidGlassCard className="p-4 relative group aspect-[4/5] flex flex-col justify-end overflow-hidden">
                  {profile.avatarUrl ? (
                    <img src={profile.avatarUrl} alt={profile.name} className="absolute inset-0 w-full h-full object-cover rounded-[1.75rem]" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-white/40 to-neutral-200/50 dark:from-neutral-900/40 dark:to-neutral-950/50">
                      <div className="w-24 h-24 rounded-3xl bg-white/80 dark:bg-neutral-800 border border-white/60 flex items-center justify-center mb-4 shadow-md">
                        <User className="w-12 h-12 text-neutral-600 dark:text-neutral-300" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Mohammed Ashfaq</h3>
                      <p className="text-xs text-neutral-500 mt-1">Student & AI Enthusiast</p>
                    </div>
                  )}

                  {/* Floating NASA Badge Overlay */}
                  <div className="relative z-20 p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-white/50 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-xs">
                        NASA
                      </div>
                      <div>
                        <div className="text-xs font-bold text-neutral-900 dark:text-white">Space Apps Challenge</div>
                        <div className="text-[10px] text-neutral-500">Galactic Problem Solver</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      2026
                    </span>
                  </div>
                </LiquidGlassCard>
              </ScrollReveal>
            </div>

          </div>
        </div>

      </section>

      {/* ================= 2. BENTO GRID ================= */}
      <BentoGrid onGameClick={() => window.open("https://oops-im-an-astronaut.vercel.app/", "_blank")} />

      {/* ================= 3. ABOUT SECTION ================= */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">About Mohammed Ashfaq</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Background & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <LiquidGlassCard className="p-8 sm:p-12 space-y-6">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Who I Am & What I Do</h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
                  I'm Mohammed Ashfaq, a student passionate about artificial intelligence, technology, and digital innovation. I enjoy exploring emerging technologies, experimenting with AI-powered tools, and transforming creative ideas into real projects.
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
                  From developing educational space games for the NASA Space Apps Challenge to collaborating as a Media Partner for Ideal High School, I strive to create impactful digital solutions.
                </p>
              </LiquidGlassCard>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <LiquidGlassCard className="p-8 space-y-6">
                <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500">Core Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Artificial Intelligence', 'Web Development', 'Digital Creativity', 'Space Exploration', 'UI/UX Design', 'Innovation'].map((interest, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard className="p-8 space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500">Official Affiliations</h4>
                <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                  <div className="flex justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800">
                    <span>NASA Space Apps Challenge</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Participant (2026)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ideal High School</span>
                    <a href="https://idealhighschool.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                      Media Partner
                    </a>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. FEATURED PROJECT SHOWCASE ================= */}
      <ProjectShowcase />

      {/* ================= 5. EXPERIENCE TIMELINE ================= */}
      <AnimatedTimeline />

      {/* ================= 6. ACHIEVEMENTS & CERTIFICATE GALLERY ================= */}
      <section id="achievements" className="py-28 px-6 bg-white/50 dark:bg-neutral-900/50 border-t border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Credentials & Awards</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Galactic Problem Solver
            </h2>
          </div>

          <CertificateGallery certificateUrl={certificateUrl} />
        </div>
      </section>

      {/* ================= 7. PROJECT GALLERY ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Project Gallery</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              More Works & Explorations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.1}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 8. AEO FAQ SECTION ================= */}
      <section className="py-28 px-6 bg-white/50 dark:bg-neutral-900/50 border-t border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Frequently Asked Questions</div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Questions & Answers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <LiquidGlassCard key={idx} className="p-6 sm:p-8 cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-neutral-400 shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === idx && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-neutral-600 dark:text-neutral-300 mt-4 pl-8 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </LiquidGlassCard>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 9. SOCIAL LINKS & CONTACT CTA ================= */}
      <SocialLinks instagramUrl="https://www.instagram.com/mohammed.ashfaq.2011/" />
      <InteractiveCTA email="ashfaqdeveloper1@gmail.com" instagramUrl="https://www.instagram.com/mohammed.ashfaq.2011/" />

      {/* ================= 10. ANIMATED FOOTER ================= */}
      <AnimatedFooter 
        instagramUrl="https://www.instagram.com/mohammed.ashfaq.2011/" 
        onNavigate={(id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} 
      />

    </div>
  );
}
