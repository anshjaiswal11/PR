import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef } from 'react'
import styles from './AnalyticsSection.module.css'

/* Animated counter */
function AnimatedNumber({ to, suffix = '', inView }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!inView) return
    const node = ref.current
    let start = 0
    const duration = 1800
    const startTime = performance.now()
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      node.textContent = Math.round(eased * to) + suffix
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, suffix])
  return <span ref={ref}>0{suffix}</span>
}

/* SVG Pie chart */
function PieChart({ inView }) {
  const segments = [
    { pct: 68, color: '#cc0000' },
    { pct: 14, color: '#e84040' },
    { pct: 10, color: '#f07070' },
    { pct: 8,  color: '#f5a8a8' },
  ]
  const r = 100, cx = 110, cy = 110
  let cumulative = 0
  const paths = segments.map((seg) => {
    const startAngle = (cumulative / 100) * 360 - 90
    cumulative += seg.pct
    const endAngle = (cumulative / 100) * 360 - 90
    const toRad = (d) => (d * Math.PI) / 180
    const x1 = cx + r * Math.cos(toRad(startAngle))
    const y1 = cy + r * Math.sin(toRad(startAngle))
    const x2 = cx + r * Math.cos(toRad(endAngle))
    const y2 = cy + r * Math.sin(toRad(endAngle))
    const large = seg.pct > 50 ? 1 : 0
    return { d: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z`, color: seg.color }
  })

  return (
    <motion.svg
      width="220" height="220" viewBox="0 0 220 220"
      className={styles.pie}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
    >
      {paths.map((p, i) => (
        <motion.path
          key={i} d={p.d} fill={p.color}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.7 + i * 0.12 }}
        />
      ))}
      <circle cx={cx} cy={cy} r="32" fill="var(--navy)" />
    </motion.svg>
  )
}

/* Mini dashboard mockup cards */
const dashboardItems = [
  { title: 'Data Analytics', accent: '#1a2d52' },
  { title: 'Data Analytics', accent: '#f5a623' },
  { title: 'Data Overview', accent: '#1a2d52' },
  { title: 'Data Statistics', accent: '#1a2d52' },
  { title: 'Data Overview', accent: '#1a2d52' },
  { title: 'Data Overview', accent: '#1a2d52' },
]

const keyStats = [
  { value: 3.2, suffix: 'x', label: 'Avg reach increase' },
  { value: 68, suffix: '%', label: 'Social engagement uplift' },
  { value: 92, suffix: '%', label: 'Client retention rate' },
  { value: 150, suffix: '+', label: 'Campaigns delivered' },
]

export default function AnalyticsSection() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })

  return (
    <section className={styles.section} id="analytics" ref={ref}>
      {/* Decorative circles */}
      <div className={styles.decCircleTR} />
      <div className={styles.decCircleBL} />

      <div className={styles.inner}>
        {/* Left col */}
        <div className={styles.leftCol}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Analytics &amp; Public<br />Insights
          </motion.h2>

          <motion.div
            className={styles.redBadge}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <em>Based on comprehensive<br />performance metrics from 2023</em>
          </motion.div>

          {/* 85% stat */}
          <motion.div
            className={styles.bigStat}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className={styles.bigNumber}>
              <AnimatedNumber to={85} suffix="%" inView={inView} />
            </span>
            <div className={styles.bigStatRight}>
              <div className={styles.redArrow}>▶</div>
              <p>Average Increase in public<br />trust through strategic communications</p>
            </div>
          </motion.div>

          {/* Dashboard mockup grid */}
          <motion.div
            className={styles.dashGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {dashboardItems.map((item, i) => (
              <div key={i} className={`${styles.dashCard} ${i === 1 ? styles.dashCardActive : ''}`}>
                <div className={styles.dashBar} style={{ background: item.accent }} />
                <div className={styles.dashContent}>
                  <div className={styles.dashTitle}>{item.title}</div>
                  <div className={styles.dashBars}>
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className={styles.miniBar} style={{ height: `${16 + (i * 7 + j * 5) % 20}px`, background: i === 1 ? 'var(--gold)' : '#2a4070' }} />
                    ))}
                  </div>
                </div>
                {i === 1 && (
                  <div className={styles.overlayGold}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect x="2" y="20" width="5" height="14" fill="white" rx="1"/>
                      <rect x="9" y="14" width="5" height="20" fill="white" rx="1"/>
                      <rect x="16" y="8" width="5" height="26" fill="white" rx="1"/>
                      <rect x="23" y="4" width="5" height="30" fill="white" rx="1"/>
                      <path d="M2 20 L30 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <polygon points="28,0 36,0 36,8" fill="white"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right col: Pie + stats */}
        <div className={styles.rightCol}>
          <PieChart inView={inView} />

          <div className={styles.statsGrid}>
            {keyStats.map((stat, i) => (
              <motion.div
                key={i}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              >
                <div className={styles.statNum}>
                  <AnimatedNumber to={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
