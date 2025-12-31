'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Artists.module.css';

const artists = [
    {
        id: 1,
        name: 'Amarasiri Peiris',
        title: 'The Living Legend',
        description: 'A legendary figure in Sri Lankan music, known for his soulful voice and timeless melodies that have touched generations.',
        image: '/artists/amarasiri.jpg',
    },
    {
        id: 2,
        name: 'Amal Perera',
        title: 'The Voice of a Generation',
        description: 'One of the most versatile artists in the industry, blending traditional sounds with contemporary beats.',
        image: '/artists/amal.jpg',
    },
    {
        id: 3,
        name: 'Kasun Kalhara',
        title: 'The Musical Innovator',
        description: 'A modern maestro who brings fresh perspectives while honoring Sri Lankan musical traditions.',
        image: '/artists/kasun.jpg',
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
                staggerChildren: 0.2,
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
            <div className={styles.container}>
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
                        Three Icons, <span className={styles.goldText}>One Stage</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Experience an unforgettable evening with Sri Lanka's most beloved musical legends
                    </p>
                </motion.div>

                <motion.div
                    className={styles.artistsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {artists.map((artist) => (
                        <motion.div
                            key={artist.id}
                            className={styles.artistCard}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.artistTitle}>{artist.title}</span>
                                <h3 className={styles.artistName}>{artist.name}</h3>
                                <p className={styles.artistBio}>{artist.description}</p>
                            </div>
                            <div className={styles.cardGlow}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
