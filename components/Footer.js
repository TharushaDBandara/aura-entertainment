'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(null);
    const sinhalaTitle = '\u0DB8\u0DD3\u0D9C \u0DC0\u0DBB\u0DCA\u0DC2\u0DCF';

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.container} suppressHydrationWarning>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <Image
                                src="/aura-logo.png"
                                alt="AURA Entertainment"
                                width={150}
                                height={50}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <p className={styles.tagline}>
                            Turning standard gatherings into legendary spectacles
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkColumn}>
                            <h4>Quick Links</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#artists">Artists</a>
                            <a href="#tickets">Tickets</a>
                        </div>
                        <div className={styles.linkColumn}>
                            <h4>Event</h4>
                            <a href="/sponsors">Sponsors</a>
                            <a href="#contact">Contact</a>
                            <span>March 20th, 2026</span>
                            <span>Sri Palee College Auditorium</span>
                        </div>
                    </div>

                    <div className={styles.social}>
                        <h4>Follow Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="https://web.facebook.com/profile.php?id=61586934480079" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear ?? ''} AURA Entertainment. All rights reserved.</p>
                    <p className={styles.event}>
                        <span className={styles.eventName}>මේඝ වර්ෂා ({sinhalaTitle})</span> - Live in Concert
                    </p>
                </div>
            </div>
        </footer>
    );
}
