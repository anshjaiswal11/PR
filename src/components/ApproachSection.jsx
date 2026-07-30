import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './ApproachSection.module.css'

const items = [
  {
    text: 'We become your dedicated Political Communications Team. Building trust through strategic, data-driven messaging.',
  },
  {
    text: 'Political Branding | Public Relations\nDigital Communications | Reputation Management',
  },
]

export default function ApproachSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section className={styles.section} id="approach" ref={ref}>
      {/* Subtle grid texture overlay */}
      <div className={styles.gridOverlay} />

      <div className={styles.inner}>
        {/* Title */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Our Approach
        </motion.h2>

        {/* Red vertical line + bullet items */}
        <div className={styles.contentRow}>
          <motion.div
            className={styles.redLine}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          />

          <div className={styles.bullets}>
            {items.map((item, i) => (
              <motion.div
                key={i}
                className={styles.bulletItem}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={styles.goldDot}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.2, type: 'spring', stiffness: 300 }}
                />
                <p className={styles.bulletText}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className={styles.decCircle1} />
      <div className={styles.decCircle2} />
    </section>
  )
}
