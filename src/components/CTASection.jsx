import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './CTASection.module.css'

export default function CTASection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={styles.section} id="cta" ref={ref}>
      {/* Stadium background */}
      <div className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      {/* Content */}
      <div className={styles.content}>
        {/* Top red line */}
        <motion.div
          className={styles.redLine}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Title */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          LET'S BUILD A STRONGER<br />PUBLIC CONNECTION
        </motion.h2>

        {/* Bottom red line */}
        <motion.div
          className={styles.redLine}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
        />

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Helping leaders communicate with clarity, consistency, and credibility.
          Reach out to transform your public presence.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className={styles.btnRow}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="mailto:contact@thesociomint.com"
            className={styles.ctaBtn}
            whileHover={{ scale: 1.05, backgroundColor: '#FF9933' }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch →
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative corner circles */}
      <div className={styles.cornerCircleTL} />
      <div className={styles.cornerCircleBR} />
    </section>
  )
}
