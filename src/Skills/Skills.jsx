import React from 'react'
import styles from './Skills.module.css'
import Image from 'next/image'

const Skills = () => {
    return (
        <div className={`${styles.skillsContainer}`}>
            <div className={`${styles.skillsSubContainer}`}>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/html.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/css.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/js.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/react.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/node.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/mongodb.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/figma.png'/>
                </div>
                <div>
                    <Image alt='' height='120' width='120' src='/Images/graphql.png'/>
                </div>
            </div>
        </div>
    )
}

export default Skills