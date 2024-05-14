"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './Menu.module.css'
import menuItems from './configuration.json'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
    const [isMobileView, setIsMobileView] = useState();
    const [left, setLeft] = useState(-380)
    const [activeMenuItem, setActiveMenuItem] = useState(null)
    const timeOutRef = useRef()
    const pathname = usePathname()

    useEffect(() => {
        const fnResize = () => {
            clearTimeout(timeOutRef.current)
            if (typeof document !== 'undefined') {
                timeOutRef.current = setTimeout(() => {
                    setIsMobileView(window?.innerWidth < 780);
                }, 100);
            }
        }
        window.addEventListener('resize', fnResize)
        setActiveMenuItem(pathname?.slice(1) || 'home')
        setIsMobileView(window?.innerWidth < 700)
    }, [])


    const handleMobileMenuBtnClick = () => {
        // alert("Clicked")
        setLeft(left === 0 ? -380 : 0)
    }

    const handleMenuItemClick = (id) => {
        setLeft(-380)
        setActiveMenuItem(id)
    }

    return (
        <div className={styles.menuBarContainer}>
            {isMobileView && <button className={styles.mobileMenuBtn} onClick={handleMobileMenuBtnClick}>{left === 0 ? "X" : "☰"}</button>}
            <div style={{ left }} className={`${styles.menuBar} ${isMobileView ? styles.mobileMenubar : styles.desktopMenubar}`}>
                {
                    menuItems?.map(({ item, path, id }, index) => {
                        return <Link className={activeMenuItem === id ? styles.activeMenu : ""} onClick={() => handleMenuItemClick(id)} href={path} key={`mi_${index}`}>{item}</Link>
                    })
                }
            </div>
        </div>
    )
}

export default Menu