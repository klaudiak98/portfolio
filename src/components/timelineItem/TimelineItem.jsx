import './timelineItem.scss'
import { motion } from 'framer-motion'

const TimelineItem = ({ item }) => {

  const variant = {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div className="timelineItem" variants={variant} initial='initial' whileInView='animate'>
      <div className="timelineItemContainer">
        <div className='itemHeaderContainer'>
          <item.img/>
          <time>{item.date}</time>
        </div>
        <h3 className={item.important && 'important'}>
          <a href={item.link} title='More info' target='_blanck'>{item.title}</a>
        </h3>
        <span>{item.description}</span>
        {item.tech && <small>{item.tech.join(' - ')}</small>}
        <span className="circle" />
      </div>
    </motion.div>
  )
}

export default TimelineItem
