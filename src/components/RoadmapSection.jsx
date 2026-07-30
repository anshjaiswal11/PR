import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './RoadmapSection.module.css'

const helpItems = [
  { emoji: '📍', label: 'Constituency\nResearch' },
  { emoji: '📱', label: 'Digital Presence &\nSocial Media' },
  { emoji: '📰', label: 'Newspaper\nAdvertorials' },
  { emoji: '🎬', label: 'Campaign Films\n& Reels' },
  { emoji: '📷', label: 'Public Visit\nDocumentation' },
  { emoji: '🎨', label: 'Campaign Branding\n& Visual Identity' },
  { emoji: '📝', label: 'Press Releases &\nMedia Coverage' },
  { emoji: '🏛️', label: 'Hoardings, Banners\n& Creatives' },
  { emoji: '🎯', label: 'Public Awareness\nCampaigns' },
]

const timeline = [
  {
    phase: 'Phase 1 — Now (2025–26)',
    color: '#e67e00',
    items: [
      'Establish digital presence & constituency identity',
      'Document development work & government schemes',
      'Build community trust through regular communication',
      'Launch constituency branding & visual identity',
    ],
  },
  {
    phase: 'Phase 2 — Pre-Election (Early 2027)',
    color: '#2980b9',
    items: [
      'Intensify digital outreach & social media campaigns',
      'Produce campaign films, reels & video content',
      'Newspaper advertorials & media placements',
      'Hoardings, banners & physical campaign materials',
    ],
  },
  {
    phase: 'Phase 3 — Election Season (2027)',
    color: '#27ae60',
    items: [
      'Full-scale campaign communication strategy',
      'Booth-level WhatsApp campaign coordination',
      'Public awareness campaigns across constituencies',
      'Real-time performance reporting & analytics',
    ],
  },
]

export default function RoadmapSection() {
  const [ref, inView] = useInView({ threshold: 0.06, triggerOnce: true })

  return (
    <section className={styles.section} id="roadmap" ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>2027 Election Communication Roadmap</h2>
        <motion.div
          className={styles.titleLine}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <p className={styles.subtitle}>Winning an election begins months before voting.</p>
      </motion.div>

      {/* "How We Can Help" */}
      <motion.h3
        className={styles.helpTitle}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        How We Can Help <span className={styles.dot}>.</span>
      </motion.h3>

      <div className={styles.helpGrid}>
        {helpItems.map((item, i) => (
          <motion.div
            key={i}
            className={styles.helpCard}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
            whileHover={{ borderColor: 'var(--gold)', boxShadow: '0 8px 28px rgba(245,166,35,0.12)', y: -3 }}
          >
            <span className={styles.emoji}>{item.emoji}</span>
            <p className={styles.helpLabel}>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline phases */}
      <motion.div
        className={styles.timelineWrap}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {timeline.map((phase, i) => (
          <div key={i} className={styles.phaseCard} style={{ '--phase-color': phase.color }}>
            <div className={styles.phaseBar} style={{ background: phase.color }} />
            <h4 className={styles.phaseTitle} style={{ color: phase.color }}>{phase.phase}</h4>
            <ul className={styles.phaseList}>
              {phase.items.map((item, j) => (
                <li key={j}><span className={styles.phaseDot} style={{ background: phase.color }}/>  {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.p
        className={styles.quote}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 1 }}
      >
        "You focus on meeting people. We make sure people see your work."
      </motion.p>

      {/* Bottom rule */}
      <div className={styles.bottomRule} />
    </section>
  )
}
