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
            <div className={styles.container}>
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

                    <motion.div className={styles.detailsStrip} variants={itemVariants}>
                        <div className={styles.stripItem}>
                            <span className={styles.stripLabel}>Date</span>
                            <span className={styles.stripValue}>7th March 2026</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.stripItem}>
                            <span className={styles.stripLabel}>Time</span>
                            <span className={styles.stripValue}>7:00 PM Onwards</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.stripItem}>
                            <span className={styles.stripLabel}>Venue</span>
                            <span className={styles.stripValue}>Musaeus College Auditorium</span>
                        </div>
                    </motion.div>

                    <motion.div className={styles.mapContainer} variants={itemVariants}>
                        <iframe 
                            src="https://maps.google.com/maps?q=Musaeus%20College%20Auditorium&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                            className={styles.mapFrame}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
