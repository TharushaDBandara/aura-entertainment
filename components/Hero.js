'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const pad2 = (value) => String(value).padStart(2, '0');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const eventDate = new Date('2026-03-20T19:00:00').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = eventDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className={styles.hero}>
            {/* Animated Background */}
            <div
                className={styles.bgOverlay}
                style={{
                    '--mx': `${mousePosition.x}%`,
                    '--my': `${mousePosition.y}%`,
                }}
                suppressHydrationWarning
            ></div>

            {/* Cloud decorations */}
            <div className={styles.cloudDecor} suppressHydrationWarning>
                <div className={styles.cloud1} suppressHydrationWarning></div>
                <div className={styles.cloud2} suppressHydrationWarning></div>
                <div className={styles.cloud3} suppressHydrationWarning></div>
            </div>

            <div className={styles.content} suppressHydrationWarning>
                <div className={styles.heroGrid}>
                    {/* Left Column: Logo */}
                    <motion.div
                        className={styles.logoColumn}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/megha-varsha-logo.svg"
                                alt="මේඝ වර්ෂා - Live in Concert"
                                width={500}
                                height={500}
                                className={styles.heroLogo}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Details */}
                    <div className={styles.detailsColumn}>
                        <motion.p
                            className={styles.presenter}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            AURA Entertainment Presents
                        </motion.p>

                        <motion.h1
                            className={styles.mainTitle}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Megha Varsha
                            <span className={styles.titleSinhala}>මේඝ වර්ෂා</span>
                        </motion.h1>

                        <motion.p
                            className={styles.tagline}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Live in Concert
                        </motion.p>

                        {/* Event Details Coming Soon Teaser */}
                        <motion.div
                            className={styles.comingSoonTeaser}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className={styles.teaserContent}>
                                <div className={styles.teaserIconGroup}>
                                    <div className={styles.teaserIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <div className={styles.teaserIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className={styles.teaserIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.teaserText}>
                                    <span className={styles.teaserLabel}>Date • Time • Venue</span>
                                    <span className={styles.teaserValue}>Coming Soon</span>
                                </div>
                            </div>
                            <div className={styles.teaserGlow}></div>
                        </motion.div>

                        {/* Stay Tuned Message */}
                        <motion.div
                            className={styles.stayTuned}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <span className={styles.stayTunedText}>Stay tuned for the big reveal</span>
                            <div className={styles.stayTunedDots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className={styles.cta}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <a href="#tickets" className={styles.ctaPrimary}>
                                Join Waitlist
                            </a>
                            <a href="#about" className={styles.ctaSecondary}>
                                Learn More
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span>Scroll to explore</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </motion.div>
        </section>
    );
}
