import './contact.scss'
import { IoMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {

    const formRef = useRef()
    const [isSuccess, setIsSuccess] = useState(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSuccess(null)
        setLoading(true)
            
        await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then(() => setIsSuccess(true))
        .catch(() => setIsSuccess(false))
        .finally(() => {
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
        })
    };

    const variants = {
        initial: {
            opacity: 0,
            x: -500
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                staggerChildren: 0.1
            }
        }
    }

  return (
    <div className='contact'>
        <motion.div className='textContainer' variants={variants} initial='initial' whileInView='animate'>
            <h2>Contact</h2>
            <div className='contactItem'>
                <h3><IoMail/> Email</h3>
                <a href='mailto:klaudiakieryk123@gmail.com'>klaudiakieryk123@gmail.com</a>
            </div>
            <div className='contactItem'>
                <h3><IoLogoLinkedin/> LinkedIn</h3>
                <a href='http://linkedin.com/in/klaudia-kieryk' target='_blank' rel='noopener noreferrer'>linkedin.com/in/klaudia-kieryk</a>
            </div>
            <div className='contactItem'>
                <h3><IoLogoGithub/> GitHub</h3>
                <a href='https://github.com/klaudiak98' target='_blank' rel='noopener noreferrer'>github.com/klaudiak98</a>
            </div>
        </motion.div>
        <motion.div className='formContainer' variants={variants} initial='initial' whileInView='animate'>
            <form ref={formRef} onSubmit={sendEmail}>
                <input type='text' required placeholder='Name' name='from_name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='email' required placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea rows={10} required placeholder='Your message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button>Send</button>
                <div style={{alignSelf: 'center'}}>
                    <ClipLoader
                        color={'#ffb132'}
                        loading={loading}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    { isSuccess !== null
                        ? isSuccess
                            ? <span className='success'>The message has been sent successfully.</span>
                            : <span className='error'>Something went wrong.</span>
                        : ''
                    }
                </div>
            </form>
        </motion.div>
    </div>
  )
}

export default Contact