import { LazyMotion, domAnimation } from 'framer-motion'
import { AmbientBackground } from './components/effects/AmbientBackground'
import { GlowCursor } from './components/effects/GlowCursor'
import { ScrollProgress } from './components/effects/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { HighlightsSection } from './components/sections/HighlightsSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ResumeSection } from './components/sections/ResumeSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { navLinks } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.id)

function App() {
  const activeId = useActiveSection(sectionIds)

  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-900 dark:focus:bg-white dark:focus:text-black"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <ScrollProgress />
      <GlowCursor />
      <Navbar activeId={activeId} />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <HighlightsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </LazyMotion>
  )
}

export default App
