
import Image from 'next/image'
import React from 'react'
import styles from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <div className={`d-flex introContainer`}>
            <div className={styles.introLeft}>
                <h4 className={`text-dark ${styles.introH4}`}>Hi there!</h4>
                <h1 className={`fw-bold text-primary-emphasis ${styles.introH1}`}>I&apos;m Sunil,</h1>
                <p className={`text-body-tertiary ${styles.introP}`}>A passionate MERN stack developer with a love for building interactive and dynamic web applications. Welcome to my corner of the internet where I showcase my projects, skills, and experiences.</p>
                <button className={`text-primary-emphasis ${styles.cvButton}`}>Download CV</button>
            </div>
            <div className="introImage">
                <Image alt='' width='480' height='600' src="/Images/introImg.png" />
            </div>
        </div>
    )
}

export default LandingPage