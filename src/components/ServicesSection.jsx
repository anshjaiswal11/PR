import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './ServicesSection.module.css'

/* ── SVG Icons (gold line-art style) ── */
const icons = {
  social: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="20"/>
      <circle cx="14" cy="18" r="3"/><circle cx="34" cy="18" r="3"/>
      <circle cx="14" cy="34" r="3"/><circle cx="34" cy="34" r="3"/>
      <circle cx="24" cy="12" r="3"/>
      <line x1="16.8" y1="19.6" x2="22" y2="13.5"/><line x1="31.2" y1="19.6" x2="26" y2="13.5"/>
      <line x1="16.5" y1="32" x2="16.5" y2="21"/><line x1="31.5" y1="32" x2="31.5" y2="21"/>
      <line x1="17" y1="34" x2="31" y2="34"/>
    </svg>
  ),
  photo: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="12" width="40" height="28" rx="4"/>
      <circle cx="24" cy="26" r="8"/>
      <circle cx="24" cy="26" r="4"/>
      <path d="M16 12l3-5h10l3 5"/>
      <circle cx="38" cy="18" r="2" fill="currentColor"/>
    </svg>
  ),
  video: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="28" height="20" rx="3"/>
      <polygon points="32,14 44,20 44,28 32,34"/>
      <rect x="4" y="34" width="40" height="8" rx="2"/>
      <line x1="14" y1="34" x2="14" y2="42"/><line x1="24" y1="34" x2="24" y2="42"/><line x1="34" y1="34" x2="34" y2="42"/>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="34" height="28" rx="3"/>
      <line x1="38" y1="8" x2="44" y2="14"/>
      <path d="M38 8l6 6-22 22H16v-6L38 8z"/>
      <line x1="34" y1="12" x2="40" y2="18"/>
      <line x1="4" y1="40" x2="44" y2="40"/>
    </svg>
  ),
  press: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="30" height="38" rx="3"/>
      <rect x="10" y="6" width="22" height="8" rx="1" strokeWidth="1.4"/>
      <line x1="10" y1="20" x2="32" y2="20"/><line x1="10" y1="26" x2="32" y2="26"/>
      <line x1="10" y1="32" x2="22" y2="32"/>
      <path d="M36 10l6 3v28l-6-3V10z"/>
    </svg>
  ),
  media: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="5"/>
      <circle cx="8" cy="14" r="4"/><circle cx="40" cy="14" r="4"/>
      <circle cx="8" cy="34" r="4"/><circle cx="40" cy="34" r="4"/>
      <line x1="12" y1="15" x2="20" y2="21"/><line x1="36" y1="15" x2="28" y2="21"/>
      <line x1="12" y1="33" x2="20" y2="27"/><line x1="36" y1="33" x2="28" y2="27"/>
      <circle cx="24" cy="24" r="5"/>
      <polygon points="20,21 20,27 28,24"/>
    </svg>
  ),
  constituency: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="22" width="36" height="22" rx="2"/>
      <path d="M2 22l22-18 22 18"/>
      <rect x="18" y="30" width="12" height="14"/>
      <rect x="10" y="28" width="6" height="8" rx="1"/>
      <rect x="32" y="28" width="6" height="8" rx="1"/>
      <line x1="24" y1="4" x2="24" y2="10"/>
    </svg>
  ),
  campaign: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 20l24-12v24L8 20z"/>
      <line x1="32" y1="14" x2="42" y2="14"/><line x1="32" y1="24" x2="42" y2="24"/>
      <line x1="34" y1="14" x2="34" y2="24"/>
      <path d="M8 20v12l4-4"/>
      <line x1="44" y1="20" x2="48" y2="20"/>
      <line x1="2" y1="40" x2="12" y2="40"/>
      <path d="M4 32c0 0 4 4 4 8"/>
    </svg>
  ),
  speech: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="28" height="32" rx="3"/>
      <path d="M16 36v6l8-6"/>
      <line x1="12" y1="14" x2="28" y2="14"/><line x1="12" y1="20" x2="28" y2="20"/>
      <line x1="12" y1="26" x2="20" y2="26"/>
      <rect x="30" y="8" width="12" height="16" rx="2"/>
      <line x1="34" y1="12" x2="38" y2="12"/><line x1="34" y1="16" x2="38" y2="16"/>
    </svg>
  ),
  crisis: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 40V16l6-12h12l6 12V40"/>
      <line x1="8" y1="40" x2="40" y2="40"/>
      <line x1="8" y1="24" x2="32" y2="24"/>
      <line x1="20" y1="16" x2="20" y2="40"/>
      <path d="M20 4l4 8h-8l4-8z" strokeWidth="1.4"/>
      <line x1="28" y1="10" x2="38" y2="6"/>
      <path d="M36 6l2 8-6-4 4-4z" fill="currentColor" stroke="none"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="20"/>
      <path d="M14 34l2-6a14 14 0 1 1 5 4l-7 2z"/>
      <path d="M18 20c0 0 1 2 3 4s4 3 4 3l3-3s3 1 4 2v4c-8 2-16-6-14-14l4 4z"/>
    </svg>
  ),
  reporting: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="30" height="36" rx="3"/>
      <line x1="10" y1="14" x2="28" y2="14"/><line x1="10" y1="20" x2="28" y2="20"/>
      <line x1="10" y1="26" x2="20" y2="26"/>
      <circle cx="34" cy="34" r="10"/>
      <circle cx="34" cy="34" r="5"/>
      <line x1="38" y1="38" x2="44" y2="44"/>
    </svg>
  ),
}

const services = [
  { id: 'social',        label: 'Social Media\nManagement' },
  { id: 'photo',         label: 'Photography' },
  { id: 'video',         label: 'Videography' },
  { id: 'design',        label: 'Graphic Design' },
  { id: 'press',         label: 'Press\nReleases' },
  { id: 'media',         label: 'Media\nCoordination' },
  { id: 'constituency',  label: 'Constituency\nUpdates' },
  { id: 'campaign',      label: 'Campaign\nCommunication' },
  { id: 'speech',        label: 'Speech\nWriting' },
  { id: 'crisis',        label: 'Crisis\nCommunication' },
  { id: 'whatsapp',      label: 'WhatsApp\nCommunication' },
  { id: 'reporting',     label: 'Performance\nReporting' },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section className={styles.section} id="services" ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Our Services</h2>
        <motion.div
          className={styles.titleUnderline}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Grid */}
      <div className={styles.grid}>
        {services.map((svc, i) => (
          <motion.div
            key={svc.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + Math.floor(i / 4) * 0.12 + (i % 4) * 0.07 }}
            whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(245,166,35,0.18)' }}
          >
            <div className={styles.iconWrap}>
              {icons[svc.id]}
            </div>
            <p className={styles.cardLabel}>{svc.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
