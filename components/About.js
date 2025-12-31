'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import EventDetails from './EventDetails';
import styles from './About.module.css';

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
            <div className={styles.container}>
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

                    <motion.div className={styles.aboutGrid} variants={itemVariants}>
                        <div className={styles.aboutCard}>
                            <div className={styles.cardIcon}>&#127917;</div>
                            <h3>Who We Are</h3>
                            <p>
                                AURA Entertainment is the new pulse of Sri Lankan entertainment. We do not just manage events;
                                we ignite experiences. Born from a desire to break the mold, AURA enters the industry with a
                                single mission: to turn standard gatherings into legendary spectacles.
                            </p>
                        </div>

                        <div className={styles.aboutCard}>
                            <div className={styles.cardIcon}>&#127925;</div>
                            <h3>The Concept</h3>
                            <p>
                                Viragaya is crafted to be the year most sophisticated evening, bringing together three icons
                                for an unforgettable performance. A signature event blending soulful mastery with high-end
                                production, showcasing the very best of modern Sri Lankan music.
                            </p>
                        </div>

                        <div className={styles.aboutCard}>
                            <div className={styles.cardIcon}>&#10024;</div>
                            <h3>The Experience</h3>
                            <p>
                                We are a team of dynamic creators and relentless planners who believe that every event should
                                have its own powerful aura - an energy that lingers long after the lights go down. We are here
                                to set a new standard.
                            </p>
                        </div>
                    </motion.div>

                    <EventDetails showAudience={false} />
                </motion.div>
            </div>
        </section>
    );
}
