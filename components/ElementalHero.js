'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ElementalHero.module.css';

export default function ElementalHero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.content}>
                {/* Main Title Area */}
                <motion.div
                    className={styles.titleSection}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.presenterTag}>
                        <span className={styles.presenterLine}></span>
                        <span className={styles.presenterText}>AURA ENTERTAINMENT PRESENTS</span>
                        <span className={styles.presenterLine}></span>
                    </div>

                    <div className={styles.heroMainRow}>
                        <div className={styles.logoPart}>
                            <Image
                                src="/megha-varsha-logo.svg"
                                alt="Megha Varsha Logo"
                                width={400}
                                height={200}
                                priority
                                className={styles.heroLogo}
                            />
                        </div>
                        <div className={styles.textPart}>
                            <h1 className={styles.mainTitle}>Megha Varsha</h1>
                            <p className={styles.sinhalaTitle}>මේඝ වර්ෂා</p>
                        </div>
                    </div>

                    <div className={styles.tagsRow}>
                        <div className={styles.concertTag}>
                            <span className={styles.liveDot}></span>
                            Live in Concert
                        </div>

                        <div className={styles.elementBadge}>
                            <div className={styles.badgeGlow}></div>
                            <span className={styles.badgeIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-1 2.5-2.5 4-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                                </svg>
                            </span>
                            <span className={styles.badgeText}>Water Season Active</span>
                        </div>
                    </div>
                </motion.div>

                {/* Event Info Grid - Bento Style */}
                <motion.div
                    className={styles.infoGrid}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className={styles.infoBox}>
                        <div className={styles.boxIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div className={styles.boxContent}>
                            <span className={styles.boxLabel}>Date</span>
                            <span className={styles.boxValue}>Coming Soon</span>
                        </div>
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.boxIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div className={styles.boxContent}>
                            <span className={styles.boxLabel}>Time</span>
                            <span className={styles.boxValue}>To Be Announced</span>
                        </div>
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.boxIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div className={styles.boxContent}>
                            <span className={styles.boxLabel}>Venue</span>
                            <span className={styles.boxValue}>Secret Location</span>
                        </div>
                    </div>
                </motion.div>

                {/* Modern CTA Buttons */}
                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="#tickets" className={styles.ctaPrimary}>
                        <span className={styles.ctaGlow}></span>
                        <span className={styles.ctaContent}>
                            Explore Experiences
                            <span className={styles.arrowIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </span>
                    </a>
                    <a href="#about" className={styles.ctaSecondary}>
                        <span className={styles.playIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </span>
                        Watch Trailer
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className={styles.scrollIndicator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span className={styles.scrollText}>Scroll to Explore</span>
                    <div className={styles.scrollLine}>
                        <div className={styles.scrollKnob}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
