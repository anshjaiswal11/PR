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
import FoundationSection from './components/FoundationSection'
import AnalyticsSection from './components/AnalyticsSection'
import WhyChooseSection from './components/WhyChooseSection'
import PricingSection from './components/PricingSection'
import ImpactSection from './components/ImpactSection'
import CTASection from './components/CTASection'
import StrategySection from './components/StrategySection'
import BlueprintSection from './components/BlueprintSection'
import './App.css'

function App() {
  return (
    <main>
      {/* ── Batch 1: Original 5 ── */}
      <HeroSection />
      <WhyPRSection />
      <RealitySection />
      <ChallengesSection />
      <DashboardSection />

      {/* ── Batch 2: New 5 ── */}
      <ApproachSection />
      <ServicesSection />
      <InitiativesSection />
      <ContentSection />
      <RoadmapSection />

      {/* ── Batch 3: New 5 ── */}
      <FoundationSection />
      <AnalyticsSection />
      <WhyChooseSection />
      <PricingSection />
      <ImpactSection />

      {/* ── Batch 4: New 3 + CTA ── */}
      <CTASection />
      <StrategySection />
      <BlueprintSection />
    </main>
  )
}

export default App
