'use client';

import { motion } from 'framer-motion';
import styles from './EventDetails.module.css';

export default function EventDetails({ showAudience = false }) {
    return (
        <motion.div 
            className={styles.eventDetails}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Date</span>
                <span className={styles.detailValue}>7th March 2026</span>
            </div>
            <div className={styles.detailDivider}></div>
            <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Time</span>
                <span className={styles.detailValue}>7:00 PM Onwards</span>
            </div>
            <div className={styles.detailDivider}></div>
            <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Venue</span>
                <span className={styles.detailValue}>Musaeus College Auditorium</span>
            </div>
            
            {showAudience && (
                <>
                    <div className={styles.detailDivider}></div>
                    <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Expected Audience</span>
                        <span className={styles.detailValue}>1,450+</span>
                    </div>
                </>
            )}
        </motion.div>
    );
}
