import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './RealitySection.module.css'

export default function RealitySection() {
  const [ref, inView] = useInView({ threshold: 0.18, triggerOnce: true })

  return (
    <section className={styles.section} id="reality" ref={ref}>
      {/* Left: photo */}
      <motion.div
        className={styles.photoSide}
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/politician_village.jpg" alt="Political leader at village gathering" className={styles.photo} />
        <div className={styles.photoOverlay} />
      </motion.div>

      {/* Right: navy background + red card */}
      <div className={styles.contentSide}>
        <motion.div
          className={styles.redCard}
          initial={{ opacity: 0, x: 60, scale: 0.93 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Person icon */}
          <motion.div
            className={styles.iconWrap}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#132040"/>
              <circle cx="20" cy="15" r="6" fill="white"/>
              <path d="M6 34C6 27.373 12.268 22 20 22s14 5.373 14 12" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </motion.div>

          <motion.h2
            className={styles.cardTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            The Reality of Modern Political Leadership
          </motion.h2>

          <motion.p
            className={styles.cardBody}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            People experience your leadership online before they experience it in person.<br />
            This digital-first reality requires strategic communication planning.
          </motion.p>

          <motion.div
            className={styles.flowBadge}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.75 }}
            whileHover={{ scale: 1.04 }}
          >
            Offline Work → Digital Communication →<br />Public Perception → Trust
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.arrow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1 }}
          whileHover={{ x: 8 }}
        >
          →
        </motion.div>
      </div>
    </section>
  )
}
