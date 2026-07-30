import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './StrategySection.module.css'

/* SVG icons */
const NodeIcon = ({ type }) => {
  const icons = {
    research: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="28" height="34" rx="3"/>
        <line x1="12" y1="14" x2="28" y2="14"/><line x1="12" y1="20" x2="28" y2="20"/>
        <line x1="12" y1="26" x2="20" y2="26"/>
      </svg>
    ),
    content: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="16" r="6"/>
        <rect x="8" y="28" width="24" height="8" rx="2"/>
        <line x1="20" y1="22" x2="20" y2="28"/>
        <circle cx="14" cy="32" r="2" fill="currentColor" stroke="none"/>
        <circle cx="26" cy="32" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    publishing: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="32" height="24" rx="3"/>
        <path d="M4 16h32"/>
        <path d="M14 24h12"/><path d="M14 28h8"/>
        <circle cx="10" cy="12" r="2" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    monitoring: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="18" r="8"/>
        <circle cx="20" cy="18" r="3"/>
        <line x1="26" y1="24" x2="34" y2="32"/>
        <line x1="20" y1="10" x2="20" y2="6"/>
        <line x1="28" y1="12" x2="31" y2="9"/>
      </svg>
    ),
    planning: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="28" height="28" rx="3"/>
        <line x1="12" y1="6" x2="12" y2="34"/>
        <line x1="6" y1="14" x2="34" y2="14"/>
        <rect x="16" y="20" width="12" height="10" rx="1" strokeWidth="1.4"/>
      </svg>
    ),
    distribution: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6,16 26,8 26,32 6,24"/>
        <line x1="26" y1="16" x2="34" y2="12"/>
        <line x1="26" y1="24" x2="34" y2="28"/>
        <line x1="26" y1="20" x2="36" y2="20"/>
      </svg>
    ),
    optimization: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="28" height="22" rx="3"/>
        <polyline points="10,26 16,18 22,22 28,14"/>
        <line x1="6" y1="32" x2="34" y2="32"/>
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="32" height="32" rx="3"/>
        <rect x="10" y="22" width="5" height="10" rx="1"/><rect x="18" y="16" width="5" height="16" rx="1"/><rect x="26" y="10" width="5" height="22" rx="1"/>
        <line x1="4" y1="36" x2="36" y2="36"/>
      </svg>
    ),
  }
  return <div className={styles.icon}>{icons[type]}</div>
}

const row1 = [
  { id: 'research',     label: 'Research' },
  { id: 'content',      label: 'Content Production' },
  { id: 'publishing',   label: 'Publishing' },
  { id: 'monitoring',   label: 'Monitoring' },
]

const row2 = [
  { id: 'planning',      label: 'Planning' },
  { id: 'distribution',  label: 'Media Distribution' },
  { id: 'optimization',  label: 'Optimization' },
  { id: 'analytics',     label: 'Analytics' },
]

function ArrowH({ inView, delay }) {
  return (
    <motion.div
      className={styles.arrowH}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className={styles.arrowLine} />
      <div className={styles.arrowHead}>▶</div>
    </motion.div>
  )
}

function ArrowV({ inView, delay }) {
  return (
    <motion.div
      className={styles.arrowV}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={inView ? { opacity: 1, scaleY: 1 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      ▼
    </motion.div>
  )
}

function NodeCircle({ node, inView, delay }) {
  return (
    <motion.div
      className={styles.nodeWrap}
      initial={{ opacity: 0, scale: 0 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 160 }}
    >
      <motion.div
        className={styles.circle}
        whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(245,166,35,0.3)' }}
      >
        <NodeIcon type={node.id} />
      </motion.div>
      <p className={styles.nodeLabel}>{node.label}</p>
    </motion.div>
  )
}

export default function StrategySection() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true })

  return (
    <section className={styles.section} id="strategy" ref={ref}>
      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Our Communication Strategy</h2>
        <motion.div
          className={styles.titleLine}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </motion.div>

      {/* Flow diagram */}
      <div className={styles.flowWrap}>
        {/* Row 1 */}
        <div className={styles.row}>
          {row1.map((node, i) => (
            <>
              <NodeCircle key={node.id} node={node} inView={inView} delay={0.2 + i * 0.12} />
              {i < row1.length - 1 && <ArrowH key={`ha-${i}`} inView={inView} delay={0.35 + i * 0.12} />}
            </>
          ))}
        </div>

        {/* Connector area: arrow down from Research, diagonal arrow up to Publishing */}
        <div className={styles.connectorRow}>
          <div className={styles.connectorLeft}>
            <ArrowV inView={inView} delay={0.65} />
          </div>
          <div className={styles.connectorDiag}>
            <motion.svg
              width="100%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <defs>
                <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="var(--gold)" />
                </marker>
              </defs>
              <line
                x1="50" y1="55" x2="255" y2="5"
                stroke="var(--gold)" strokeWidth="2"
                markerEnd="url(#arrowHead)"
                strokeDasharray="6,3"
              />
            </motion.svg>
          </div>
          <div className={styles.connectorRight} />
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          {row2.map((node, i) => (
            <>
              <NodeCircle key={node.id} node={node} inView={inView} delay={0.5 + i * 0.12} />
              {i < row2.length - 1 && <ArrowH key={`ha2-${i}`} inView={inView} delay={0.65 + i * 0.12} />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
