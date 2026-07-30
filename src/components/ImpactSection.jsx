import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './ImpactSection.module.css'

const impactPoints = [
  'Increase public trust',
  'Improve transparency',
  'Strengthen constituency engagement',
  'Amplify developmental work',
  'Create a consistent leadership image',
]

export default function ImpactSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className={styles.section} id="impact" ref={ref}>
      {/* Decorative circles */}
      <div className={styles.decTR} />
      <div className={styles.decBL} />
      <div className={styles.decBR} />

      {/* Quote tag */}
      <motion.div
        className={styles.quoteTag}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span>Quote:</span><br />
        "Strong leadership deserves<br />strong communication."
      </motion.div>

      {/* Main title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        THE IMPACT WE AIM TO CREATE
      </motion.h2>

      {/* Quote body with big marks */}
      <motion.div
        className={styles.quoteBody}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.55 }}
      >
        <span className={styles.quoteMark} aria-hidden="true">"</span>

        <motion.p
          className={styles.quoteText}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {impactPoints.join(' | ')}
        </motion.p>

        <span className={`${styles.quoteMark} ${styles.quoteMarkClose}`} aria-hidden="true">"</span>
      </motion.div>

      {/* Individual impact chips */}
      <motion.div
        className={styles.chipsRow}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        {impactPoints.map((pt, i) => (
          <motion.div
            key={i}
            className={styles.chip}
            whileHover={{ scale: 1.06, backgroundColor: 'var(--red)', color: '#fff' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {pt}
          </motion.div>
        ))}
      </motion.div>

      {/* Arrow */}
      <motion.div
        className={styles.arrow}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.1 }}
        whileHover={{ x: 10 }}
      >
        →
      </motion.div>
    </section>
  )
}
