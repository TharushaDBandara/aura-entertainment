'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ElementalNavbar.module.css';

const elementIcons = [
    {
        id: 'water',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-1 2.5-2.5 4-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
            </svg>
        ),
        name: 'Water',
        active: true,
        href: '#home'
    },
    {
        id: 'earth',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
        name: 'Earth',
        active: false,
        href: '#'
    },
    {
        id: 'fire',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.4 1.7 1.3 3 2.9 3.8z" />
            </svg>
        ),
        name: 'Fire',
        active: false,
        href: '#'
    },
    {
        id: 'air',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
            </svg>
        ),
        name: 'Air',
        active: false,
        href: '#'
    },
];

const navLinks = [
    { href: '#home', label: 'Event Info' },
    { href: '#artists', label: 'Lineup' },
    { href: '#tickets', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
];

export default function ElementalNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Cycle Title */}
                <div className={styles.cycleTitle}>
                    <span className={styles.cycleLabel}>The Cycle Begins:</span>
                    <span className={styles.cycleElement}>Water</span>
                </div>

                {/* Navigation Links */}
                <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={styles.navLink}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Element Icons */}
                <div className={styles.elementIcons}>
                    {elementIcons.map((element) => (
                        <div
                            key={element.id}
                            className={`${styles.elementIcon} ${element.active ? styles.active : styles.locked}`}
                            onMouseEnter={() => setHoveredElement(element.id)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <span className={styles.icon}>{element.icon}</span>

                            {/* Tooltip for locked elements */}
                            {!element.active && hoveredElement === element.id && (
                                <div className={styles.tooltip}>
                                    <span className={styles.tooltipName}>{element.name}</span>
                                    <span className={styles.tooltipStatus}>Locked</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`${styles.mobileToggle} ${mobileOpen ? styles.active : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
