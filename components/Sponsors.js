'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import EventDetails from './EventDetails';
import styles from './Sponsors.module.css';

const mainPackages = [
    {
        id: 1,
        tier: 'Title Sponsor',
        price: '1,500,000',
        color: 'gold',
        benefits: [
            'Logo with event name on all materials',
            'Displayed on backdrop and all cutouts',
            'Included in all advertisements',
            '10 announcements on event day',
            '10 promotional clips (10 sec each)',
            '10 exclusive flags on event day',
            '10 banners displayed',
            'Unlimited promotional material',
            '10 complimentary tickets',
        ],
    },
    {
        id: 2,
        tier: 'Gold Sponsor',
        price: '800,000',
        color: 'silver',
        benefits: [
            'Logo as Gold Sponsor in all ads',
            '5 announcements on event day',
            'Notable credits at event',
            '6 promotional clips (10 sec each)',
            '5 banners on event day',
            '5 complimentary tickets',
        ],
    },
    {
        id: 3,
        tier: 'Co-Sponsor',
        price: '500,000',
        color: 'bronze',
        benefits: [
            'Logo as Co-Sponsor in all ads',
            '3 announcements on event day',
            '3 promotional clips (10 sec each)',
            '3 banners on event day',
            '5 complimentary tickets',
        ],
    },
];

const otherPackages = [
    { name: 'Official Hospitality Partner', price: '150,000' },
    { name: 'Official Mobility Partner', price: '150,000' },
    { name: 'Official EventCare Partner', price: '150,000' },
    { name: 'Official Decoration Partner', price: '150,000' },
    { name: 'Official F and B Partner', price: '150,000' },
    { name: 'Official Photography Partner', price: '150,000' },
];

export default function Sponsors() {
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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="sponsors" className={styles.sponsors} ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>
                        <span className={styles.labelLine}></span>
                        <span>Sponsorship</span>
                        <span className={styles.labelLine}></span>
                    </div>
                    <h2 className={styles.title}>
                        Partner With <span className={styles.goldText}>Excellence</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Position your brand alongside a guaranteed triumph and reach over 1,400 engaged attendees
                    </p>
                </motion.div>

                <EventDetails showAudience={true} />

                <motion.div
                    className={styles.mainPackages}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {mainPackages.map((pkg) => (
                        <motion.div
                            key={pkg.id}
                            className={`${styles.packageCard} ${styles[pkg.color]}`}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.packageHeader}>
                                <h3 className={styles.packageTier}>{pkg.tier}</h3>
                                <div className={styles.packagePrice}>
                                    <span className={styles.currency}>Rs.</span>
                                    <span className={styles.amount}>{pkg.price}</span>
                                    <span className={styles.lkr}>LKR</span>
                                </div>
                            </div>
                            <ul className={styles.benefits}>
                                {pkg.benefits.map((benefit, index) => (
                                    <li key={index}>
                                        <span className={styles.checkIcon}>&#10003;</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className={styles.contactBtn}>
                                Contact Us
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.otherPackages}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className={styles.otherTitle}>Other Partnership Opportunities</h3>
                    <div className={styles.otherGrid}>
                        {otherPackages.map((pkg, index) => (
                            <div key={index} className={styles.otherCard}>
                                <span className={styles.otherName}>{pkg.name}</span>
                                <span className={styles.otherPrice}>Rs. {pkg.price}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    className={styles.customNote}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    These packages serve as a baseline. We welcome the opportunity to create a bespoke solution that meets your specific needs.
                </motion.p>
            </div>
        </section>
    );
}
