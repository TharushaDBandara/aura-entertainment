'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SeatingChart from './SeatingChart';
import styles from './Tickets.module.css';

const tickets = [
    {
        id: 1,
        tier: 'Mist',
        subtitle: 'Balcony',
        price: '2,500',
        earlyBird: '2,000',
        theme: 'mist',
        icon: '🌫️',
        vibe: 'Light, airy, and high up. Like the fog in the Foggy Swamp or the mist at the poles.',
        features: [
            'Balcony seating',
            'Elevated panoramic view',
            'Ethereal atmosphere',
            'General access'
        ],
        bestFor: 'Those who want to float above it all and take in the full visual experience.',
        popular: false,
    },
    {
        id: 2,
        tier: 'Tide',
        subtitle: 'General ODC',
        price: '3,500',
        earlyBird: '3,000',
        theme: 'tide',
        icon: '🌊',
        vibe: 'The relentless power of the ocean. This is the main body of water—deep, strong, and moving.',
        features: [
            'Ground floor standing',
            'Heart of the crowd',
            'Feel the wave of energy',
            'Maximum immersion'
        ],
        bestFor: 'Those who want to ride the wave and be swept up in the crowd\'s energy.',
        popular: true,
    },
    {
        id: 3,
        tier: 'Moon',
        subtitle: 'VIP - Stage Front',
        price: '5,000',
        earlyBird: '4,000',
        theme: 'moon',
        icon: '🌙',
        vibe: 'The Moon is the original Waterbender. Spiritual, glowing, silver, and elite.',
        features: [
            'Front row access',
            'Up-close artist view',
            'Spirit-tier experience',
            'Priority entry'
        ],
        bestFor: 'Those seeking the most spiritual, exclusive, and premium experience.',
        popular: false,
    },
];

export default function Tickets() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [showSeatMap, setShowSeatMap] = useState(false);

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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="tickets" className={styles.tickets} ref={ref}>
            <div className={styles.container} suppressHydrationWarning>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>
                        <span className={styles.labelLine}></span>
                        <span>Tickets</span>
                        <span className={styles.labelLine}></span>
                    </div>
                    <h2 className={styles.title}>
                        Choose Your <span className={styles.goldText}>Experience</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Secure your seat for an unforgettable evening of musical excellence
                    </p>
                </motion.div>

                <motion.div
                    className={styles.ticketsGrid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {tickets.map((ticket) => (
                        <motion.div
                            key={ticket.id}
                            className={`${styles.ticketCard} ${styles[ticket.theme]} ${ticket.popular ? styles.popular : ''}`}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            {ticket.popular && (
                                <div className={styles.popularBadge}>Most Popular</div>
                            )}
                            <div className={styles.ticketIcon}>{ticket.icon}</div>
                            <div className={styles.ticketHeader}>
                                <h3 className={styles.tierName}>{ticket.tier}</h3>
                                <span className={styles.tierSubtitle}>{ticket.subtitle}</span>
                                <div className={styles.priceContainer}>
                                    <div className={styles.price}>
                                        <span className={styles.currency}>Rs.</span>
                                        <span className={styles.amount}>{ticket.price}</span>
                                    </div>
                                    <div className={styles.earlyBird}>
                                        <span className={styles.earlyBirdLabel}>Early Bird</span>
                                        <span className={styles.earlyBirdPrice}>Rs. {ticket.earlyBird}</span>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.vibeText}>{ticket.vibe}</p>
                            <ul className={styles.features}>
                                {ticket.features.map((feature, index) => (
                                    <li key={index}>
                                        <span className={styles.checkIcon}>&#10003;</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.bestFor}>
                                <span className={styles.bestForLabel}>Best For:</span>
                                <p>{ticket.bestFor}</p>
                            </div>
                            <a href="#contact" className={styles.buyBtn}>
                                Join Waitlist
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button
                        className={styles.seatMapBtn}
                        onClick={() => setShowSeatMap(true)}
                    >
                        <span className={styles.btnIcon}>&#128269;</span>
                        View Seating Plan
                    </button>
                </motion.div>

                <motion.div
                    className={styles.ticketNotice}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <span className={styles.noticeIcon}>&#127903;</span>
                    <p>Online ticket sales date will be announced soon. <strong>Stay tuned!</strong></p>
                </motion.div>
            </div>

            <AnimatePresence>
                {showSeatMap && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSeatMap(false)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowSeatMap(false)}
                            >
                                &#10005;
                            </button>
                            <h3>Seating Plan</h3>
                            <div className={styles.imageWrapper}>
                                <SeatingChart />
                            </div>
                            <p className={styles.disclaimer}>
                                * Seating layout is for reference only. Actual availability may vary.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
