import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './ContentSection.module.css'

const contentItems = [
  {
    img: '/content_progress_mock.jpg',
    label: 'Instagram Post',
    isMock: true,
    mockBg: 'linear-gradient(135deg, #1a5c2a 0%, #2d8a42 100%)',
    mockContent: {
      tag: "THIS WEEK'S PROGRESS",
      desc: 'Working together for a stronger, better and developed tomorrow',
      stats: [{ n: '5.2 KM', l: 'Road\nConstruction' }, { n: '2', l: 'Schools\nUpgraded' }, { n: '1', l: 'Healthcare\nCamp' }, { n: '4 PUBLIC', l: 'Meetings\nHeld' }],
    },
  },
  {
    img: '/content_facebook.jpg',
    label: 'Facebook Update',
  },
  {
    img: '/content_press.jpg',
    label: 'Press Release',
  },
  {
    img: '/content_govt_scheme.jpg',
    label: 'Govt. Scheme Static',
  },
  {
    img: '/content_before_after.jpg',
    label: 'Before & After',
  },
  {
    img: '/content_public_visit.jpg',
    label: 'Public Visit Story',
  },
]

// Instagram-style mock card (for item 0 since that image failed to generate)
function InstaMock() {
  return (
    <div className={styles.instaMock}>
      <div className={styles.instaHeader}>
        <span className={styles.instaWeek}>CONSTITUENCY UPDATE</span>
        <span className={styles.instaTitle}>THIS WEEK'S<br />PROGRESS</span>
        <span className={styles.instaSubtitle}>Working together for a stronger,<br />better and developed tomorrow</span>
      </div>
      <div className={styles.instaStats}>
        {[['5.2 KM','Road Work'],['2','Schools'],['1','Health Camp'],['4','Meetings']].map(([n,l],i)=>(
          <div key={i} className={styles.instaStatItem}>
            <strong>{n}</strong><span>{l}</span>
          </div>
        ))}
      </div>
      <div className={styles.instaFooter}>Your Voice Matters – Your MLA, Your Strength</div>
    </div>
  )
}

export default function ContentSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className={styles.section} id="content" ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Content That Builds Trust</h2>
        <motion.div
          className={styles.titleLine}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Grid */}
      <div className={styles.grid}>
        {/* Row 1: Instagram, Facebook, Press Release */}
        <motion.div
          className={styles.contentCard}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <InstaMock />
          <p className={styles.contentLabel}>Instagram Post</p>
        </motion.div>

        <motion.div
          className={styles.contentCard}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/content_facebook.jpg" alt="Facebook Update" className={styles.contentImg} />
          <p className={styles.contentLabel}>Facebook Update</p>
        </motion.div>

        <motion.div
          className={`${styles.contentCard} ${styles.pressCard}`}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/content_press.jpg" alt="Press Release" className={styles.contentImg} />
          <p className={styles.contentLabel}>Press Release</p>
        </motion.div>

        {/* Row 2: Govt Scheme, Before/After, Public Visit */}
        <motion.div
          className={styles.contentCard}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/content_govt_scheme.jpg" alt="Govt Scheme" className={styles.contentImg} />
          <p className={styles.contentLabel}>Govt. Scheme Static</p>
        </motion.div>

        <motion.div
          className={styles.contentCard}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/content_before_after.jpg" alt="Before and After" className={styles.contentImg} />
          <p className={styles.contentLabel}>Before &amp; After</p>
        </motion.div>

        <motion.div
          className={styles.contentCard}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/content_public_visit.jpg" alt="Public Visit Story" className={styles.contentImg} />
          <p className={styles.contentLabel}>Public Visit Story</p>
        </motion.div>
      </div>
    </section>
  )
}
