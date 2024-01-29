import TimelineItem from '../timelineItem/TimelineItem'
import './timeline.scss'

const Timeline = ({ items }) => {
  return (
    <div className='timeline'>
      {items.map((item, idx) => (
          <TimelineItem item={item} key={idx}/>
      ))}
    </div>
  )
}

export default Timeline
