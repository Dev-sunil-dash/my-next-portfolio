import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'

function About() {
    return (
        <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.aboutSubContainer} d-flex`}>
                <div className={styles.leftContainer}>
                    <Image height='600' width='600' alt='About Image' src="/Images/aboutImage.png" />
                </div>
                <div className={styles.rightContainer}>
                    <div>
                        <div>
                            <Image src='/Images/uiIcon.png' height='100' width='100' alt='' />
                        </div>
                        <div>
                            <h3>
                                UI Designer
                            </h3>
                            <p>I have designed multiple landing pages and have created design systems as well</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/Images/cursorIcon.png' height='100' width='100' alt='' />
                        </div>
                        <div>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>I&apos;m a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/Images/serverIcon.png' height='100' width='100' alt='' />
                        </div>
                        <div>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>I have experience developing fast and optimised back-end systems and APIs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About