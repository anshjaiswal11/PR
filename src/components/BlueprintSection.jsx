import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './BlueprintSection.module.css'

const columns = [
  {
    label: 'Prosperous',
    color: '#e67e00',
    items: [
      {
        title: 'Rozgar Mahotsav',
        desc: 'Quarterly employment fairs with local Industries, MSMEs, private employers & skill institutions. Direct job opportunities for youth.',
      },
      {
        title: 'Women Entrepreneurship Mission',
        desc: 'SHG support, home businesses, food processing, handicrafts & online selling. Sustainable household income generation.',
      },
    ],
  },
  {
    label: 'Modern',
    color: '#2980b9',
    items: [
      {
        title: 'Smart Village Program',
        desc: 'One village per quarter: CC roads, solar lights, CCTV, public Wi-Fi & beautification. Creates visible model villages.',
      },
      {
        title: 'Pothole-Free Mission',
        desc: 'WhatsApp complaints, GPS mapping, time-bound repairs & public dashboard. Citizens see responsive governance daily.',
      },
    ],
  },
  {
    label: 'Healthy & Educated Society',
    color: '#27ae60',
    items: [
      {
        title: 'Mobile Health Clinics',
        desc: 'General OPD, diagnostics, medicines, maternal & child care reaching underserved rural areas.',
      },
      {
        title: 'Smart School Initiative',
        desc: 'Interactive classrooms, digital libraries, robotics labs & high-speed internet for modern learning.',
      },
    ],
  },
  {
    label: 'Transparent',
    color: '#8e44ad',
    items: [
      {
        title: 'MLA Digital Seva Kendra',
        desc: 'One-stop centres for certificates, scheme applications, pension support & digital documentation.',
      },
      {
        title: 'Jan Sunwai Dashboard',
        desc: 'Public display of complaints received, resolved, ongoing works & budget utilisation. Full transparency.',
      },
    ],
  },
  {
    label: 'Sustainable',
    color: '#16a085',
    items: [
      {
        title: 'Green Constituency Mission',
        desc: 'Native tree plantation, community forests, school green clubs & tree adoption programme.',
      },
      {
        title: 'Khelo Constituency League',
        desc: 'Annual cricket, football, kabaddi & athletics competitions. Promotes fitness & identifies talent.',
      },
    ],
  },
]

const legendItems = [
  { num: '1', label: 'Prosperous Citizens', color: '#e67e00' },
  { num: '2', label: 'Modern Infrastructure', color: '#2980b9' },
  { num: '3', label: 'Healthy & Educated Society', color: '#27ae60' },
  { num: '4', label: 'Transparent Governance', color: '#8e44ad' },
  { num: '5', label: 'Sustainable Future', color: '#16a085' },
]

export default function BlueprintSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className={styles.section} id="blueprint" ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Viksit Vidhan Sabha Blueprint</h2>
        <p className={styles.subtitle}>
          High-Impact Development Initiatives &nbsp;|&nbsp; Curated for Maximum Visibility &amp; Execution
        </p>
      </motion.div>

      {/* 5-column grid */}
      <div className={styles.columnsGrid}>
        {columns.map((col, ci) => (
          <div key={ci} className={styles.column}>
            {/* Category header */}
            <motion.div
              className={styles.catHeader}
              style={{ background: col.color }}
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
            >
              {col.label}
            </motion.div>

            {/* Cards */}
            {col.items.map((item, ii) => (
              <motion.div
                key={ii}
                className={styles.card}
                style={{ '--col-color': col.color }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + ci * 0.1 + ii * 0.12 }}
                whileHover={{ y: -3, boxShadow: `0 8px 28px rgba(0,0,0,0.1)` }}
              >
                <div className={styles.cardBar} style={{ background: col.color }} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Legend bar */}
      <motion.div
        className={styles.legendBar}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        {legendItems.map((item, i) => (
          <div key={i} className={styles.legendItem}>
            <span className={styles.legendNum} style={{ background: item.color }}>
              {item.num}
            </span>
            <span className={styles.legendLabel}>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
