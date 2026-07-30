import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './WhyChooseSection.module.css'

const traditional = [
  { heading: 'Communication', points: ['Inconsistent messaging across platforms', 'Reactive to crises rather than proactive', 'Limited media visibility', 'No structured digital presence'] },
]

const strategic = [
  { points: ['Consistent branding & messaging', 'Professional design standards', 'Quick response times', 'Public trust built over time'] },
  { points: ['Media visibility & coverage', 'Data-driven communication', 'Strategic content planning', 'Long-term brand building'] },
]

export default function WhyChooseSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className={styles.section} id="why-choose" ref={ref}>
      {/* Decorative circles */}
      <div className={styles.decCircleR} />
      <div className={styles.decCircleB} />

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Why Choose Us
      </motion.h2>

      <div className={styles.compareGrid}>
        {/* Traditional column */}
        <motion.div
          className={styles.col}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.redBadge}>Traditional</div>
          <div className={styles.colContent}>
            {traditional.map((group, i) => (
              <div key={i} className={styles.group}>
                <p className={styles.groupHead}>{group.heading}</p>
                {group.points.map((pt, j) => (
                  <p key={j} className={styles.point}>{pt}</p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          className={styles.divider}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
        />

        {/* Strategic column */}
        <motion.div
          className={styles.col}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.redBadge}>Strategic</div>
          <div className={styles.colContent}>
            <p className={styles.groupHead}>Political Communications</p>
            {strategic.map((group, i) => (
              <div key={i} className={styles.strategicGroup}>
                <motion.div
                  className={styles.redDot}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.15, type: 'spring' }}
                />
                <div>
                  {group.points.map((pt, j) => (
                    <p key={j} className={styles.point}>{pt}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
