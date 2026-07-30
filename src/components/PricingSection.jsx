import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './PricingSection.module.css'

const plans = [
  {
    name: 'Digital Presence',
    price: '₹25,000',
    period: '/month',
    recommended: false,
    features: [
      'Social Media Management',
      '10 Graphics/month',
      '4 Reels/month',
      'Digital Stories',
      'Basic Analytics',
      'WhatsApp Updates',
      'Monthly Report',
    ],
  },
  {
    name: 'Public Relations',
    price: '₹35,000',
    period: '/month',
    recommended: false,
    features: [
      'Everything in Digital Presence',
      'Press Releases (2/month)',
      'Media Coordination',
      'Speech Writing',
      'Crisis Communication',
      'Newspaper Creatives',
      'Media Coverage Tracking',
      'Constituency Reports',
    ],
  },
  {
    name: 'Complete Political\nCommunications',
    price: '₹60,000',
    period: '/month',
    recommended: true,
    features: [
      'Everything in Public Relations',
      'Dedicated Team (2 members)',
      'Photography & Videography',
      'Campaign Communication',
      'Reputation Management',
      '24/7 Crisis Response',
      'Weekly Strategy Calls',
      'Performance Dashboard',
      'Event Coverage',
    ],
  },
]

export default function PricingSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={styles.section} id="pricing" ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Our Engagement Models</h2>
        <motion.div
          className={styles.titleLine}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <div className={styles.cardsRow}>
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`${styles.card} ${plan.recommended ? styles.cardRecommended : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
            whileHover={!plan.recommended ? { y: -6 } : {}}
          >
            {plan.recommended && (
              <div className={styles.recBadge}>RECOMMENDED</div>
            )}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.priceRow}>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.period}>{plan.period}</span>
            </div>
            <div className={styles.divider} />
            <ul className={styles.features}>
              {plan.features.map((f, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.12 + j * 0.04 }}
                >
                  <span className={styles.check}>✓</span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        All packages are customizable. GST extra. Minimum 3-month engagement.
      </motion.p>
    </section>
  )
}
