'use client';

import { motion } from 'framer-motion';
import styles from './ElementalJourney.module.css';

export default function ElementalJourney() {
    return (
        <div className={styles.journeyContainer}>
            <span className={styles.label}>The Elemental Journey</span>
            <h3 className={styles.title}>Four Seasons • Four Elements</h3>

            <div className={styles.cardsContainer}>
                {/* Water Card - Active */}
                <motion.div
                    className={`${styles.card} ${styles.active}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-1 2.5-2.5 4-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                        </svg>
                    </div>
                    <h4 className={styles.cardTitle}>Water</h4>
                    <span className={styles.statusText}>The cycle begins</span>
                    <div className={styles.activeBadge}>
                        <span className={styles.activeDot}></span>
                        ACTIVE
                    </div>
                </motion.div>

                {/* Earth Card - Locked */}
                <motion.div
                    className={`${styles.card} ${styles.locked}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className={styles.iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                    </div>
                    <h4 className={styles.cardTitle}>Earth</h4>
                    <span className={styles.statusText}>Coming soon</span>
                    <div className={styles.lockedBadge}>
                        <svg className={styles.lockIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        LOCKED
                    </div>
                </motion.div>

                {/* Fire Card - Locked */}
                <motion.div
                    className={`${styles.card} ${styles.locked}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.4 1.7 1.3 3 2.9 3.8z"></path>
                        </svg>
                    </div>
                    <h4 className={styles.cardTitle}>Fire</h4>
                    <span className={styles.statusText}>Coming soon</span>
                    <div className={styles.lockedBadge}>
                        <svg className={styles.lockIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        LOCKED
                    </div>
                </motion.div>

                {/* Air Card - Locked */}
                <motion.div
                    className={`${styles.card} ${styles.locked}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className={styles.iconWrapper}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                        </svg>
                    </div>
                    <h4 className={styles.cardTitle}>Air</h4>
                    <span className={styles.statusText}>Coming soon</span>
                    <div className={styles.lockedBadge}>
                        <svg className={styles.lockIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        LOCKED
                    </div>
                </motion.div>
            </div>

            <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                </div>
                <span className={styles.progressText}>Season 1 of 4 • Water</span>
            </div>
        </div>
    );
}
