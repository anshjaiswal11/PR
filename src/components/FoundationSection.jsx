import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './FoundationSection.module.css'

const phases = [
  {
    num: '1',
    title: 'Constituency Research',
    items: [
      'Village-wise Mapping',
      'Booth-wise Analysis',
      'Previous Election Results',
      'Demographic Study',
      'Key Local Issues',
      'Opposition Activity Mapping',
    ],
  },
  {
    num: '2',
    title: 'Public Perception Audit',
    items: [
      'Current Public Image',
      'Strengths & Weaknesses',
      'Opinion Leader Mapping',
      'Community Feedback',
      'Influencer & Local Media Mapping',
    ],
  },
  {
    num: '3',
    title: 'Campaign Planning',
    items: [
      '8-Month Roadmap',
      'Monthly Village Visit Calendar',
      'Festival Calendar',
      'Public Meeting Planner',
      'Issue-Based Campaign Calendar',
    ],
  },
  {
    num: '4',
    title: 'Communication & Marketing',
    items: [
      'Newspaper Advertorials',
      'Photo & Video Coverage',
      'Social Media Management',
      'Press Releases',
      'Outdoor Branding',
      'Campaign Videos',
    ],
  },
  {
    num: '5',
    title: 'Performance Monitoring',
    items: [
      'Monthly Progress Review',
      'Public Feedback Collection',
      'Media Coverage Analysis',
      'Social Media Growth',
      'Strategy Improvements',
    ],
  },
]

const deliverables = [
  'Constituency Research Report',
  'Campaign Strategy',
  'Monthly Communication Calendar',
  'Complete Creative Support',
  'PR & Media Support',
  'Monthly Review Reports',
]

export default function FoundationSection() {
  const [ref, inView] = useInView({ threshold: 0.06, triggerOnce: true })

  return (
    <section className={styles.section} id="foundation" ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>
          Foundation Phase{' '}
          <span className={styles.titleSub}>(First 60 Days)</span>
        </h2>
      </motion.div>

      {/* 5-column steps */}
      <div className={styles.stepsGrid}>
        {phases.map((phase, i) => (
          <motion.div
            key={i}
            className={styles.phaseCol}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
          >
            {/* Circle number */}
            <motion.div
              className={styles.circleNum}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
            >
              {phase.num}
            </motion.div>

            {/* Divider line */}
            <motion.div
              className={styles.phaseLine}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            />

            <h3 className={styles.phaseTitle}>{phase.title}</h3>

            <ul className={styles.phaseList}>
              {phase.items.map((item, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 + j * 0.04 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        className={styles.divider}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Deliverables */}
      <motion.div
        className={styles.deliverables}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className={styles.delivTitle}>Deliverables</h3>
        <div className={styles.delivGrid}>
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              className={styles.delivCard}
              whileHover={{ borderColor: 'var(--gold)', backgroundColor: '#f0f4ff' }}
              transition={{ duration: 0.2 }}
            >
              <span className={styles.checkIcon}>✓</span>
              <span>{d}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom quote */}
      <motion.p
        className={styles.quote}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 1.1 }}
      >
        "A successful campaign isn't built in the last 30 days. It is built consistently over the months before the election."
      </motion.p>
    </section>
  )
}
