import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.superHeader}>
            <div className={styles.header}>
                <p className='bi bi-geo-alt-fill'>
                    Hyderabad, India
                </p>
                <h2 className='text-center'>Peronsal Portfolio</h2>
                <p className='bi bi-envelope-fill'>
                    sunildash0306@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Header