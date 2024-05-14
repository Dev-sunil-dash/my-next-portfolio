import React from 'react'
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
            ↑ Top
        </button>
    )
}

export default ScrollToTop