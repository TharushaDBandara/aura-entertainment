'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: isHome ? '#home' : '/', label: 'Home' },
        { href: isHome ? '#about' : '/#about', label: 'About' },
        { href: isHome ? '#artists' : '/#artists', label: 'Artists' },
        { href: isHome ? '#venue' : '/#venue', label: 'Venue' },
        { href: isHome ? '#tickets' : '/#tickets', label: 'Tickets' },
        { href: isHome ? '#contact' : '/#contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <a href={isHome ? "#home" : "/"} className={styles.logo}>
                    <span className={styles.logoText}>AURA</span>
                    <span className={styles.logoSub}>Entertainment</span>
                </a>

                <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={styles.navLink}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <a href="/sponsors" className={styles.sponsorBtn}>
                        Join with us
                    </a>
                    <a href={isHome ? "#tickets" : "/#tickets"} className={styles.ctaBtn}>
                        Get Tickets
                    </a>
                </div>

                <button
                    className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </motion.nav>
    );
}
