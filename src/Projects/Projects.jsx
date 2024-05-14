"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'
import Image from 'next/image'
import { checkInTheViewport } from '@/Services/checkInTheViewport'
import ScrollToTop from '@/Components/ScrollToTop'

const Projects = () => {
    const divRef = useRef();
    const intervalId = useRef();
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            clearInterval(intervalId.current)
            intervalId.current = setTimeout(() => {
                setIsInViewport(() => {
                    return checkInTheViewport(divRef?.current)
                });
            }, 10)
        }
        window?.addEventListener('scroll', handleScroll)
        return () => {
            window?.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div className={`${styles.projectContainer} ${isInViewport ? 'projectContainerGlobal' : 'projectContainerInitial'}`} ref={divRef}>
                <div className="card" style={{ "width": "18rem" }}>
                    <Image src="/Images/project.png" width='100' height='300' className="card-img-top" alt="Project1" />
                    <div className="card-body">
                        <h5 className="card-title">ECommerce Website</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`btn text-white ${styles.submitBtn}`}>Source Code</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <Image src="/Images/project.png" width='100' height='300' className="card-img-top" alt="Project1" />
                    <div className="card-body">
                        <h5 className="card-title">Personal Portfolio</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`btn text-white ${styles.submitBtn}`}>Source Code</a>
                    </div>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <Image src="/Images/project.png" width='100' height='300' className="card-img-top" alt="Project1" />
                    <div className="card-body">
                        <h5 className="card-title">Image Editiing Tool</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className={`btn text-white ${styles.submitBtn}`}>Source Code</a>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}

export default Projects