import './itemsList.scss'
import { motion } from 'framer-motion'

const ItemsList = ({ title, subtitle, list }) => {

    const variants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
    }

  return (
    <div className='itemsList' >
        <motion.div className='subtitleContainer' variants={variants} initial='initial' whileInView='animate'>
            <p>{subtitle}</p>
            <hr/>
        </motion.div>
        <motion.h2 variants={variants} initial='initial' whileInView='animate'>{title}</motion.h2>
        <motion.div className='itemsContainer' variants={variants} initial='initial' whileInView='animate'>
            {list.map((item, idx) => (
                <motion.div key={idx} className='item' variants={variants} whileHover={{ scale: 1.1 }}>
                    <img src={item.logo} alt={item.logo + ' logo'}  height='50px' width='60px'/>
                    {item.name}
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default ItemsList