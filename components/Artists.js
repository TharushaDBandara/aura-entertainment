'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Artists.module.css';

const artists = [
    {
        id: 1,
        name: 'IMAN',
        title: 'The Rising Star',
        description: 'A dynamic performer bringing fresh energy and captivating vocals to the Sri Lankan music scene.',
        image: '/artists/iman.jpg',
    },
    {
        id: 2,
        name: 'UVINDU',
        title: 'The Melodic Voice',
        description: 'Known for his soulful interpretations and ability to connect with audiences through powerful performances.',
        image: '/artists/uvindu.jpg',
    },
    {
        id: 3,
        name: 'MIHIRAN',
        title: 'The Showstopper',
        description: 'A charismatic artist who commands the stage with incredible presence and unforgettable musical moments.',
        image: null, // No individual image yet
    },
    {
        id: 4,
        name: 'DHYAN',
        title: 'The Versatile Performer',
        description: 'Blending contemporary sounds with traditional influences to create a unique musical experience.',
        image: '/artists/dhyan.jpg',
    },
    {
        id: 5,
        name: 'DILU',
        title: 'The Crowd Favorite',
        description: 'An energetic artist whose performances create an electric atmosphere that resonates with every audience.',
        image: null, // No individual image yet
    },
];

export default function Artists() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="artists" className={styles.artists} ref={ref}>
            <div className={styles.container} suppressHydrationWarning>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>
                        <span className={styles.labelLine}></span>
                        <span>Performing Artists</span>
                        <span className={styles.labelLine}></span>
                    </div>
                    <h2 className={styles.title}>
                        Five Stars, <span className={styles.goldText}>One Stage</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Experience an electrifying evening with Sri Lanka&apos;s most talented young artists
                    </p>
                </motion.div>

                {/* Reveal Soon Teaser */}
                <motion.div
                    className={styles.revealSoonContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.revealSoonContent}>
                        <div className={styles.mysteryIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 0 0-16 0" />
                                <circle cx="12" cy="8" r="2" opacity="0.5" />
                            </svg>
                            <div className={styles.mysteryGlow}></div>
                        </div>
                        <span className={styles.revealLabel}>Artists Lineup</span>
                        <h3 className={styles.revealTitle}>Reveal Soon</h3>
                        <p className={styles.revealDescription}>
                            Stay tuned as we unveil an extraordinary lineup of talented artists
                            who will take the stage at මේඝ වර්ෂා
                        </p>
                        <div className={styles.revealPulse}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
