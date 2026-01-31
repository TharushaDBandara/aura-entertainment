'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ElementalNavbar.module.css';

const elementIcons = [
    { id: 'water', icon: '💧', name: 'Water', active: true, href: '#home' },
    { id: 'earth', icon: '🪨', name: 'Earth', active: false, href: '#' },
    { id: 'fire', icon: '🔥', name: 'Fire', active: false, href: '#' },
    { id: 'air', icon: '🌪️', name: 'Air', active: false, href: '#' },
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
