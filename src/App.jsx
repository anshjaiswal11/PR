import HeroSection from './components/HeroSection'
import WhyPRSection from './components/WhyPRSection'
import RealitySection from './components/RealitySection'
import ChallengesSection from './components/ChallengesSection'
import DashboardSection from './components/DashboardSection'
import ApproachSection from './components/ApproachSection'
import ServicesSection from './components/ServicesSection'
import InitiativesSection from './components/InitiativesSection'
import ContentSection from './components/ContentSection'
import RoadmapSection from './components/RoadmapSection'
import './App.css'

function App() {
  return (
    <main>
      {/* ── Original 5 sections ── */}
      <HeroSection />
      <WhyPRSection />
      <RealitySection />
      <ChallengesSection />
      <DashboardSection />

      {/* ── New 5 sections ── */}
      <ApproachSection />
      <ServicesSection />
      <InitiativesSection />
      <ContentSection />
      <RoadmapSection />
    </main>
  )
}

export default App
