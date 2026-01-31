'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './About.module.css';

// Dynamically import 3D model to avoid SSR issues
const About3DModel = dynamic(
    () => import('./About3DModel'),
    { ssr: false, loading: () => <div className={styles.modelPlaceholder} /> }
);

export default function About() {
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
        <section id="about" className={styles.about} ref={ref}>
            <div className={styles.container} suppressHydrationWarning>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className={styles.sectionLabel} variants={itemVariants}>
                        <span className={styles.labelLine}></span>
                        <span>About The Event</span>
                        <span className={styles.labelLine}></span>
                    </motion.div>

                    <motion.h2 className={styles.title} variants={itemVariants}>
                        A Night of <span className={styles.goldText}>Musical Excellence</span>
                    </motion.h2>

                    {/* 3D Model - Embedded as Content */}
                    <motion.div variants={itemVariants}>
                        <About3DModel />
                    </motion.div>

                    <motion.div className={styles.aboutGrid} variants={itemVariants}>
                        <div className={styles.aboutCard}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 4H3" />
                                    <path d="M18 8H6" />
                                    <path d="M19 12H9" />
                                    <path d="M16 16H8" />
                                    <path d="M11 20H9" />
                                </svg>
                            </div>
                            <h3>The Architects</h3>
                            <p>
                                AURA Entertainment does not just manage events; we bend the elements. Born from a desire to break the mold,
                                we are the pulse of a new era. Our mission is to turn standard gatherings into legendary, immersive worlds
                                where imagination defies gravity.
                            </p>
                        </div>

                        <div className={styles.aboutCard}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-1 2.5-2.5 4-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                                </svg>
                            </div>
                            <h3>Book One: Water</h3>
                            <p>
                                Megha Varsha is the first chapter of the cycle. We are transforming the Sri Palee Auditorium into a
                                bioluminescent &apos;Spirit Oasis.&apos; Here, rain falls in reverse, and music flows like the tide.
                                Five rising stars unite to create a storm of sound in a zero-gravity atmosphere.
                            </p>
                        </div>

                        <div className={styles.aboutCard}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            </div>
                            <h3>The Immersion</h3>
                            <p>
                                Step out of the dry world and into the current. Whether you are floating in the &apos;Mist&apos; of the
                                balcony or channeling the &apos;Moon&apos; at the stage front, you won&apos;t just hear the music—you will
                                feel the storm. Experience a night where the aura lingers long after the lights fade.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
