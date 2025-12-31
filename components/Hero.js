'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        const eventDate = new Date('2026-03-07T19:00:00').getTime();

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

    // Sinhala text as Unicode escape sequence
    const sinhalaTitle = '\u0DC0\u0DD2\u0DBB\u0DCF\u0D9C\u0DBA';

    return (
        <section id="home" className={styles.hero}>
            {/* Animated Background */}
            <div 
                className={styles.bgOverlay}
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(124, 58, 237, 0.15) 0%, rgba(3, 0, 5, 0.95) 50%)`
                }}
            ></div>
            
            <div className={styles.content}>
                <motion.p
                    className={styles.presenter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    AURA Entertainment Presents
                </motion.p>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={styles.titleMain}>VIRAGAYA</span>
                    <span className={styles.titleSinhala}>{sinhalaTitle}</span>
                </motion.h1>

                <motion.p
                    className={styles.tagline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    An Evening of Musical Excellence
                </motion.p>

                <motion.div
                    className={styles.eventInfo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>&#128197;</span>
                        <span>7th March 2026</span>
                    </div>
                    <div className={styles.infoDivider}></div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>&#128343;</span>
                        <span>7:00 PM Onwards</span>
                    </div>
                    <div className={styles.infoDivider}></div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>&#128205;</span>
                        <span>Musaeus College Auditorium</span>
                    </div>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                    className={styles.countdown}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{timeLeft.days}</span>
                        <span className={styles.countdownLabel}>Days</span>
                    </div>
                    <div className={styles.countdownSeparator}>:</div>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{timeLeft.hours}</span>
                        <span className={styles.countdownLabel}>Hours</span>
                    </div>
                    <div className={styles.countdownSeparator}>:</div>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{timeLeft.minutes}</span>
                        <span className={styles.countdownLabel}>Minutes</span>
                    </div>
                    <div className={styles.countdownSeparator}>:</div>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{timeLeft.seconds}</span>
                        <span className={styles.countdownLabel}>Seconds</span>
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
                        Get Your Tickets
                    </a>
                    <a href="#about" className={styles.ctaSecondary}>
                        Learn More
                    </a>
                </motion.div>
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
