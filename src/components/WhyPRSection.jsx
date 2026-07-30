import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './WhyPRSection.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

const bullets = [
  'Build trust through transparent communication.',
  'Showcase development and constituency work.',
  'Connect with young and first-time voters.',
  'Increase awareness of government schemes.',
  'Counter misinformation with credible updates.',
  'Stay connected with citizens beyond election season.',
]

const services = [
  ['Development Storytelling', 'Digital Presence Management'],
  ['Constituency Branding', 'Government Scheme Awareness'],
  ['Citizen Engagement Campaigns', 'Data-Driven Political Communication'],
]

export default function WhyPRSection() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })

  return (
    <section className={styles.section} id="why-pr" ref={ref}>
      <div className={styles.waveBg} />

      <div className={styles.grid}>
        {/* ── LEFT ── */}
        <div className={styles.col}>
          <motion.h2 className={styles.colTitle} custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            Why Political PR is Required?
          </motion.h2>
          <motion.div className={styles.accentLine} custom={0.4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} />

          <motion.p className={styles.bodyText} custom={0.8} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            Today's voters don't just attend rallies — they consume politics on{' '}
            <strong>WhatsApp, Instagram, Facebook and YouTube.</strong> While leaders work
            tirelessly for their constituencies, much of that work goes unnoticed due to a
            lack of strategic communication.
          </motion.p>

          <motion.p className={styles.subHeading} custom={1.2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            Political PR helps leaders:
          </motion.p>

          <ul className={styles.bulletList}>
            {bullets.map((item, i) => (
              <motion.li key={i} custom={1.4 + i * 0.1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                <span className={styles.dot}>•</span> {item}
              </motion.li>
            ))}
          </ul>

          <motion.p className={styles.tagline} custom={2.2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <span className={styles.taglineGold}>Good governance creates impact.</span>
            {' '}Great communication ensures people remember it.
          </motion.p>
        </div>

        {/* ── RIGHT ── */}
        <div className={styles.col}>
          <motion.h2 className={styles.colTitle} custom={0.2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            Why TheSocioMint?
          </motion.h2>
          <motion.div className={styles.accentLine} custom={0.6} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} />

          <motion.p className={styles.bodyText} custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            We don't just manage social media — we build a leader's public image.
          </motion.p>

          <motion.p className={styles.bodyText} custom={1.3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            At TSM, we combine political strategy, creative storytelling and digital
            communication to strengthen the connection between representatives and citizens.
          </motion.p>

          <motion.p className={styles.subHeading} custom={1.6} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            What We Deliver?
          </motion.p>

          <motion.div className={styles.servicesGrid} custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {services.map((row, ri) =>
              row.map((s, ci) => (
                <motion.div
                  key={`${ri}-${ci}`}
                  className={styles.serviceCard}
                  whileHover={{ scale: 1.04, borderColor: 'var(--red)', backgroundColor: 'rgba(204,0,0,0.18)' }}
                  transition={{ type: 'spring', stiffness: 280 }}
                >
                  <span className={styles.check}>✓</span> {s}
                </motion.div>
              ))
            )}
          </motion.div>

          <motion.div
            className={styles.ctaBanner}
            custom={2.8} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(245,166,35,0.35)' }}
          >
            Turning Development into Public Trust.
          </motion.div>
        </div>
      </div>
    </section>
  )
}
