import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './InitiativesSection.module.css'

const initiatives = [
  {
    category: 'Youth & Employment',
    categoryColor: '#e67e00',
    borderColor: '#e67e00',
    title: 'Rozgar Mahotsav',
    desc: 'Bridge the gap between job seekers and employers through large scale employment fairs.',
    activities: 'Quarterly Job Fairs · On-the-Spot Interviews · Resume Workshops · Career Counselling · Govt. Recruitment Guidance · Apprenticeship Booths',
    impact: 'Increased local employment · Reduced youth migration · Better industry-academia connect',
    tagline: '"Rozgar Aapke Dwar"',
    tagColor: '#e67e00',
  },
  {
    category: 'Youth & Employment',
    categoryColor: '#27ae60',
    borderColor: '#27ae60',
    title: 'Skill Development Hub',
    desc: 'Equip youth with industry-relevant skills matching today\'s job market demands.',
    activities: 'AI & Digital Literacy · Digital Marketing · Graphic Design · EV Maintenance · Solar Installation · Spoken English · Placement Assistance',
    impact: 'Job-ready workforce · Higher employment rates · Increased self-employment',
    tagline: '"Skill Today, Success Tomorrow"',
    tagColor: '#27ae60',
  },
  {
    category: 'Agriculture',
    categoryColor: '#16a085',
    borderColor: '#16a085',
    title: 'Smart Farmer Centres',
    desc: 'Modernise agriculture with technology, scientific knowledge & market intelligence.',
    activities: 'Soil Health Testing · Crop Advisory · Weather Alerts · Modern Farming Demos · Govt. Scheme Registration · Organic Farming Awareness',
    impact: 'Higher productivity · Reduced costs · Better crop planning · Increased income',
    tagline: '"Smart Farmers, Prosperous Villages"',
    tagColor: '#16a085',
  },
  {
    category: "Women's Empowerment",
    categoryColor: '#8e44ad',
    borderColor: '#8e44ad',
    title: 'Women Entrepreneurship Mission',
    desc: 'Empower women economically through training, finance & market access.',
    activities: 'Self Help Group Strengthening · Business Training · Food Processing · Handicraft Promotion · Digital Selling · Loan Assistance · Local Exhibitions',
    impact: 'Increased household income · Higher women workforce participation · Financial independence',
    tagline: '"Nari Shakti, Naya Bharat"',
    tagColor: '#8e44ad',
  },
  {
    category: 'Healthcare',
    categoryColor: '#2980b9',
    borderColor: '#2980b9',
    title: 'Mobile Health Clinics',
    desc: 'Deliver quality healthcare directly to remote villages and underserved communities.',
    activities: 'General OPD · Diagnostics · Free Medicines · Maternal & Child Care · Vaccination · Specialist Consultations · Referral Services',
    impact: 'Better accessibility · Early detection · Reduced costs · Improved rural health',
    tagline: '"Swasthya Aapke Dwar"',
    tagColor: '#2980b9',
  },
  {
    category: 'Sports & Culture',
    categoryColor: '#27ae60',
    borderColor: '#27ae60',
    title: 'Khelo Constituency League',
    desc: 'Promote sports participation among youth while identifying local talent.',
    activities: 'Cricket & Football Tournaments · Kabaddi Championships · Athletics Meets · School Sports Festivals · Talent Camps · Coaching Clinics',
    impact: 'Increased youth participation · Talent development · Healthier lifestyles · Community spirit',
    tagline: '"Khelo, Jeeto, Badhho"',
    tagColor: '#27ae60',
  },
]

function InitCard({ item, index, inView }) {
  return (
    <motion.div
      className={styles.card}
      style={{ '--border-color': item.borderColor }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: `0 12px 40px rgba(0,0,0,0.12)` }}
    >
      <div className={styles.topBorder} style={{ background: item.borderColor }} />
      <span className={styles.category} style={{ color: item.categoryColor }}>
        {item.category}
      </span>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDesc}>{item.desc}</p>
      <div className={styles.divider} />
      <p className={styles.label}>Key Activities</p>
      <p className={styles.activities}>{item.activities}</p>
      <div className={styles.divider} />
      <p className={styles.impact}><strong>Impact:</strong> {item.impact}</p>
      <p className={styles.tagline} style={{ color: item.tagColor }}>{item.tagline}</p>
    </motion.div>
  )
}

export default function InitiativesSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className={styles.section} id="initiatives" ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.title}>Initiative Deep Dives</h2>
        <p className={styles.subtitle}>
          Detailed Breakdown of Priority Programs &nbsp;|&nbsp; Objective, Activities, Impact &amp; Campaign
        </p>
      </motion.div>

      <div className={styles.grid}>
        {initiatives.map((item, i) => (
          <InitCard key={i} item={item} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
