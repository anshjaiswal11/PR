import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './HeroSection.module.css'

const Logo = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27" cy="27" r="27" fill="#132040"/>
    <g transform="translate(10, 10)">
      {/* Arrow/house shape */}
      <path d="M17 4L2 14V32H10V22H24V32H32V14L17 4Z" fill="#2c4f8c" stroke="white" strokeWidth="1"/>
      <path d="M17 4L2 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M17 4L32 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Left wing */}
      <path d="M2 22L2 14L10 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
    </g>
  </svg>
)

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Parallax background */}
      <div className={styles.bgWrapper}>
        <div
          className={styles.bgImage}
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(1.08)` }}
        />
        <div className={styles.bgGradient} />
        <div className={styles.bgVignette} />
      </div>

      {/* Navbar */}
      <motion.header
        className={styles.navbar}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.logoBlock}>
          <Logo />
          <div className={styles.logoText}>
            <span>Building</span>
            <span>Public Trust.</span>
            <span>Strengthening</span>
            <span>Leadership.</span>
          </div>
        </div>
      </motion.header>

      {/* Red bubble top-right */}
      <motion.div
        className={styles.redBubble}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, type: 'spring', stiffness: 100, damping: 14 }}
      >
        <p>Every public<br />interaction shapes<br />public perception.</p>
      </motion.div>

      {/* Main content */}
      <div className={styles.titleArea}>
        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          STRATEGIC POLITICAL<br />COMMUNICATIONS
        </motion.h1>

        <motion.div
          className={styles.titleLine}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.8, ease: 'easeOut' }}
        />

        <motion.div
          className={styles.arrowBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          whileHover={{ x: 10, color: 'var(--gold)' }}
        >
          <span>→</span>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className={styles.particles} aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${5 + (i * 7.1) % 90}%`,
              animationDelay: `${(i * 0.7) % 5}s`,
              animationDuration: `${5 + (i * 1.3) % 5}s`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              opacity: 0.15 + (i % 5) * 0.08,
            }}
          />
        ))}
      </div>
    </section>
  )
}
