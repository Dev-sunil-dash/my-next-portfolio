import React from 'react'
import styles from './Home.module.css'
import Heading from '@/Components/Heading'
import Image from 'next/image'
import About from '@/About'
import LandingPage from './LandingPage/LandingPage'
import Skills from '@/Skills'
import Projects from '@/Projects'
import Contact from '@/Contact'

export function Home() {
    return (
        <div>
            {/* <Heading text={"Welcome To My Portfolio"} level='1' /> */}
            <LandingPage />
            <Heading text={"About Me"} level='1' />
            <About />
            <Heading text={"Skills"} level='1' />
            <Skills />
            <Heading text={"Projects"} level='1' />
            <Projects />
            <Heading text={"Contact Me"} level='1' />
            <Contact />
        </div>
    )
}

