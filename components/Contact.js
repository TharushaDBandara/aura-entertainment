'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Contact.module.css';

const coordinators = [
    {
        name: 'Tharusha Dilshan',
        role: 'Event Coordinator',
    },
    {
        name: 'Nimesh Dissanayake',
        role: 'Event Coordinator',
    },
    {
        name: 'Anuka Milroy',
        role: 'Event Coordinator',
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className={styles.contact} ref={ref}>
            <div className={styles.container} suppressHydrationWarning>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>
                        <span className={styles.labelLine}></span>
                        <span>Get In Touch</span>
                        <span className={styles.labelLine}></span>
                    </div>
                    <h2 className={styles.title}>
                        Contact <span className={styles.goldText}>Us</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Ready to be part of this spectacular evening? Reach out to our team for inquiries
                    </p>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.infoSection}>
                        <div className={styles.infoCard}>
                            <h3>Event Coordinators</h3>
                            <div className={styles.coordinators}>
                                {coordinators.map((person, index) => (
                                    <div key={index} className={styles.coordinator}>
                                        <div className={styles.avatar}>
                                            {person.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className={styles.coordinatorInfo}>
                                            <span className={styles.coordinatorName}>{person.name}</span>
                                            <span className={styles.coordinatorRole}>{person.role}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Quick Contact</h3>
                            <div className={styles.contactMethods}>
                                <a href="mailto:info@auraentertainment.lk" className={styles.contactMethod}>
                                    <span className={styles.methodIcon}>&#9993;</span>
                                    <span>info@auraentertainment.lk</span>
                                </a>
                                <a href="tel:+94771234567" className={styles.contactMethod}>
                                    <span className={styles.methodIcon}>&#9742;</span>
                                    <span>+94 77 123 4567</span>
                                </a>
                                <div className={styles.contactMethod}>
                                    <span className={styles.methodIcon}>&#9903;</span>
                                    <span>Colombo, Sri Lanka</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <form className={styles.form}>
                            <h3>Send Us a Message</h3>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" required>
                                    <option value="">Select a subject</option>
                                    <option value="tickets">Ticket Inquiry</option>
                                    <option value="sponsorship">Sponsorship Inquiry</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows={5} placeholder="Write your message here..." required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
