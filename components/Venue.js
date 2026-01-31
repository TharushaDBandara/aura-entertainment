'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Venue.module.css';

export default function Venue() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="venue" className={styles.venue} ref={ref}>
            <div className={styles.container} suppressHydrationWarning>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className={styles.sectionLabel} variants={itemVariants}>
                        <span className={styles.labelLine}></span>
                        <span>The Location</span>
                        <span className={styles.labelLine}></span>
                    </motion.div>

                    <motion.h2 className={styles.title} variants={itemVariants}>
                        Experience the <span className={styles.goldText}>Grandeur</span>
                    </motion.h2>

                    <motion.p className={styles.venueDescription} variants={itemVariants}>
                        The venue details will be announced soon. Stay tuned for an extraordinary location
                        that will set the perfect stage for මේඝ වර්ෂා.
                    </motion.p>

                    {/* Venue Reveal Soon Placeholder */}
                    <motion.div className={styles.venueReveal} variants={itemVariants}>
                        <div className={styles.venueIconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div className={styles.venueGlow}></div>
                        </div>
                        <span className={styles.venueLabel}>Venue</span>
                        <span className={styles.venueValue}>Reveal Soon</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
