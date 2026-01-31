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

                    <h1 className={styles.mainTitle}>
                        <span className={styles.titleEnglish}>Megha Varsha</span>
                        <span className={styles.titleSinhala}>මේඝ වර්ෂා</span>
                    </h1>

                    <div className={styles.concertTag}>
                        <span className={styles.liveDot}></span>
                        Live in Concert
                    </div>

                    <div className={styles.elementBadge}>
                        <div className={styles.badgeGlow}></div>
                        <span className={styles.badgeIcon}>💧</span>
                        <span className={styles.badgeText}>Water Season Active</span>
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
                        <div className={styles.boxIcon}>📅</div>
                        <div className={styles.boxContent}>
                            <span className={styles.boxLabel}>Date</span>
                            <span className={styles.boxValue}>Coming Soon</span>
                        </div>
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.boxIcon}>⏰</div>
                        <div className={styles.boxContent}>
                            <span className={styles.boxLabel}>Time</span>
                            <span className={styles.boxValue}>To Be Announced</span>
                        </div>
                    </div>

                    <div className={styles.infoBox}>
                        <div className={styles.boxIcon}>📍</div>
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
                            Explore Experiences <span className={styles.arrowIcon}>→</span>
                        </span>
                    </a>
                    <a href="#about" className={styles.ctaSecondary}>
                        <span className={styles.playIcon}>▶</span>
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
