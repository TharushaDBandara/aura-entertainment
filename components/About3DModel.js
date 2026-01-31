'use client';

import { motion } from 'framer-motion';
import styles from './ElementalShowcase.module.css';

export default function About3DModel() {
    const elements = [
        {
            name: 'Water',
            icon: '💧',
            status: 'active',
            color: '#00CED1',
            gradient: 'linear-gradient(135deg, #00CED1 0%, #1E90FF 100%)',
            description: 'The cycle begins',
        },
        {
            name: 'Earth',
            icon: '🌍',
            status: 'locked',
            color: '#8B4513',
            gradient: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
            description: 'Coming soon',
        },
        {
            name: 'Fire',
            icon: '🔥',
            status: 'locked',
            color: '#FF4500',
            gradient: 'linear-gradient(135deg, #FF4500 0%, #FF6347 100%)',
            description: 'Coming soon',
        },
        {
            name: 'Air',
            icon: '🌪️',
            status: 'locked',
            color: '#87CEEB',
            gradient: 'linear-gradient(135deg, #87CEEB 0%, #B0C4DE 100%)',
            description: 'Coming soon',
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.headerLabel}>The Elemental Journey</span>
                <h3 className={styles.headerTitle}>Four Seasons • Four Elements</h3>
            </div>

            <div className={styles.elementsGrid}>
                {elements.map((element, index) => (
                    <motion.div
                        key={element.name}
                        className={`${styles.elementCard} ${element.status === 'active' ? styles.active : styles.locked}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        style={{ '--element-color': element.color, '--element-gradient': element.gradient }}
                    >
                        {/* Glow effect for active */}
                        {element.status === 'active' && <div className={styles.glowEffect} />}

                        {/* Icon container */}
                        <div className={styles.iconContainer}>
                            <div className={styles.iconOrb}>
                                <span className={styles.icon}>{element.icon}</span>
                            </div>
                            {element.status === 'active' && (
                                <div className={styles.pulseRing} />
                            )}
                        </div>

                        {/* Element info */}
                        <div className={styles.elementInfo}>
                            <h4 className={styles.elementName}>{element.name}</h4>
                            <p className={styles.elementDescription}>{element.description}</p>
                        </div>

                        {/* Status badge */}
                        <div className={styles.statusBadge}>
                            {element.status === 'active' ? (
                                <>
                                    <span className={styles.statusDot} />
                                    <span>Active</span>
                                </>
                            ) : (
                                <>
                                    <span className={styles.lockIcon}>🔒</span>
                                    <span>Locked</span>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Progress indicator */}
            <div className={styles.progressContainer}>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: '25%' }} />
                </div>
                <span className={styles.progressText}>Season 1 of 4 • Water</span>
            </div>
        </div>
    );
}
