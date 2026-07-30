import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './ChallengesSection.module.css'

const challenges = [
  { num: '01', label: 'Great Work Goes Unnoticed' },
  { num: '02', label: 'Weak Youth Engagement' },
  { num: '03', label: 'No Structured Digital Presence' },
  { num: '04', label: 'Inconsistent Communication' },
  { num: '05', label: 'Limited Media Visibility' },
  { num: '06', label: 'Reactive Communication' },
]

export default function ChallengesSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className={styles.section} id="challenges" ref={ref}>
      {/* LEFT: photo */}
      <motion.div
        className={styles.photoSide}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/politician_parliament.jpg" alt="Political leader in front of Parliament" className={styles.photo} />
        <div className={styles.photoOverlay} />
      </motion.div>

      {/* RIGHT: content */}
      <motion.div
        className={styles.contentSide}
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Title row with search icon */}
        <div className={styles.titleRow}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Communication<br />Challenges<br />Leaders Face
          </motion.h2>

          <motion.div
            className={styles.searchIconWrap}
            initial={{ scale: 0, rotate: -20 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45, type: 'spring', stiffness: 160 }}
          >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="22" cy="22" r="16" fill="white" stroke="#0d1b35" strokeWidth="3"/>
              <circle cx="22" cy="22" r="10" fill="#0d1b35"/>
              <text x="18" y="27" fontSize="13" fill="white" fontWeight="900" fontFamily="Inter">?</text>
              <line x1="33" y1="33" x2="48" y2="48" stroke="#0d1b35" strokeWidth="5.5" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Challenges list */}
        <div className={styles.list}>
          {challenges.map((c, i) => (
            <motion.div
              key={c.num}
              className={styles.item}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ paddingLeft: '14px', backgroundColor: 'var(--gold)', color: '#070e1f' }}
            >
              <span className={styles.label}>{c.label}</span>
              <span className={styles.dots} />
              <span className={styles.num}>{c.num}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
