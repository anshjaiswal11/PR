import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './DashboardSection.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
}

const DATA = {
  population: [
    ['Total Population', '24,04,464'],
    ['Male Population', '12,55,272'],
    ['Female Population', '12,09,192'],
    ['Sex Ratio', '877 / 1,000 M'],
    ['Population Density', '874 / km²'],
    ['District Area', '2,688 km²'],
  ],
  admin: [
    ['Parliamentary Const.', '1'],
    ['Assembly Const.', '5'],
    ['Tehsils', '8'],
    ['Development Blocks', '14'],
    ['Gram Panchayats', '1,235'],
    ['Villages', '3,348'],
    ['Towns', '5'],
  ],
  electoral: [
    ['Registered Voters', '18,31,996'],
    ['Male Voters', '9,91,527'],
    ['Female Voters', '8,40,331'],
    ['Third Gender Voters', '138'],
    ['Polling Centres', '1,482'],
    ['Polling Booths', '2,318'],
  ],
  education: [
    ['Overall Literacy', '69.7%'],
    ['Male Literacy', '80.7%'],
    ['Female Literacy', '58.4%'],
  ],
  social: [
    ['Scheduled Castes', '+20.8%'],
    ['Scheduled Tribes', '+0.15%'],
  ],
}

const indicators = [
  '5 Assembly Segments requiring localized communication',
  '1,235 Gram Panchayats — strong decentralised governance',
  '2,318 Polling Booths — booth-level mobilisation critical',
  '3,348 Villages demanding hyperlocal messaging',
]

const implications = [
  'Large rural electorate necessitates sustained village engagement.',
  'High booth count favors structured booth management & volunteer coordinator.',
  'Multiple Assembly segments require constituency-specific messaging.',
  'Moderate literacy levels suggest visual storytelling & local-language outreach.',
]

const summary = [
  ['24.6 Lakh', 'Population'],
  ['18.3 Lakh', 'Electors'],
  ['94.4%', 'Rural'],
  ['1,235', 'Gram Panchayats'],
  ['2,316', 'Polling Booths'],
  ['5', 'Assembly Const.'],
]

function DataTable({ rows }) {
  return (
    <table className={styles.table}>
      <tbody>
        {rows.map(([label, value], i) => (
          <tr key={i} className={styles.tr}>
            <td className={styles.tdL}>{label}</td>
            <td className={styles.tdR}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function DashboardSection() {
  const [ref, inView] = useInView({ threshold: 0.04, triggerOnce: true })

  return (
    <section className={styles.section} id="dashboard" ref={ref}>
      {/* Top accent bar */}
      <div className={styles.accentBar} />

      {/* Header */}
      <motion.div className={styles.header} initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <h2 className={styles.title}>Basti at a Glance</h2>
        <p className={styles.subtitle}>Constituency &amp; Demographic Overview</p>
      </motion.div>

      {/* Row 1: 3 panels */}
      <div className={styles.row3}>
        {[
          { heading: 'Population Profile', rows: DATA.population },
          { heading: 'Administrative Structure', rows: DATA.admin },
          { heading: 'Electoral Snapshot', rows: DATA.electoral },
        ].map((panel, i) => (
          <motion.div key={i} className={styles.panel} custom={i} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <h3 className={styles.panelTitle}>{panel.heading}</h3>
            <DataTable rows={panel.rows} />
          </motion.div>
        ))}
      </div>

      {/* Row 2: rural bar + education + social */}
      <div className={styles.row3b}>
        {/* Rural/Urban bar */}
        <motion.div className={styles.panel} custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h3 className={styles.panelTitle}>Rural–Urban Distribution</h3>
          <div className={styles.barWrap}>
            <motion.div
              className={styles.ruralBar}
              initial={{ width: 0 }} animate={inView ? { width: '94.4%' } : {}}
              transition={{ duration: 1.3, delay: 0.5, ease: 'easeOut' }}
            >94.4%</motion.div>
            <motion.div
              className={styles.urbanBar}
              initial={{ width: 0 }} animate={inView ? { width: '5.6%' } : {}}
              transition={{ duration: 1.3, delay: 0.5, ease: 'easeOut' }}
            >5.6%</motion.div>
          </div>
          <div className={styles.barLabels}><span>Rural</span><span>Urban</span></div>
          <p className={styles.note}>Overwhelmingly rural — village-level outreach critical to electoral success.</p>
        </motion.div>

        {/* Education */}
        <motion.div className={styles.panel} custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h3 className={styles.panelTitle}>Education</h3>
          <DataTable rows={DATA.education} />
        </motion.div>

        {/* Social */}
        <motion.div className={styles.panel} custom={5} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h3 className={styles.panelTitle}>Social Composition</h3>
          <DataTable rows={DATA.social} />
          <p className={styles.note} style={{ marginTop: 10 }}>Detailed caste mapping conducted during campaign planning phase</p>
        </motion.div>
      </div>

      {/* Row 3: Economic + Indicators */}
      <div className={styles.row2}>
        <motion.div className={styles.panel} custom={6} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h3 className={styles.panelTitle}>Economic Snapshot</h3>
          <p className={styles.bodyText}><strong>Primary Occupation:</strong> Agriculture, Dairy, Small Businesses, Retail, Govt. Employment</p>
          <p className={styles.bodyText} style={{ marginTop: 8 }}><strong>Major Crops:</strong> Paddy, Wheat, Sugarcane, Mustard, Pulses, Maize</p>
        </motion.div>

        <motion.div className={`${styles.panel} ${styles.indicatorPanel}`} custom={7} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <h3 className={styles.panelTitle} style={{ color: 'var(--gold)' }}>✦ Political Communication Indicators</h3>
          <ul className={styles.indicators}>
            {indicators.map((item, i) => (
              <li key={i}><span className={styles.dot}>•</span>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Strategic Implications */}
      <motion.div className={styles.strategicWrap} custom={8} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
        <h3 className={styles.panelTitle} style={{ marginBottom: 14 }}>Strategic Implications</h3>
        <div className={styles.implGrid}>
          {implications.map((text, i) => (
            <motion.div
              key={i}
              className={styles.implCard}
              whileHover={{ scale: 1.025, borderColor: 'var(--gold)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={styles.checkIcon}>✓</span>
              <span>{text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary stats */}
      <motion.div
        className={styles.statsRow}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {summary.map(([val, lbl], i) => (
          <motion.div
            key={i}
            className={styles.statCard}
            whileHover={{ scale: 1.06, backgroundColor: 'var(--red)' }}
            transition={{ type: 'spring', stiffness: 260 }}
          >
            <div className={styles.statVal}>{val}</div>
            <div className={styles.statLbl}>{lbl}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
