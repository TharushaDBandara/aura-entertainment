'use client';

import { useEffect, useRef } from 'react';
import styles from './RainEffect.module.css';

export default function RainEffect() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create rain drops
        const dropCount = 100;

        for (let i = 0; i < dropCount; i++) {
            const drop = document.createElement('div');
            drop.className = styles.rainDrop;

            // Random positioning and timing
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            drop.style.opacity = `${0.2 + Math.random() * 0.5}`;

            container.appendChild(drop);
        }

        // Create splash effects on ground
        const splashCount = 20;
        for (let i = 0; i < splashCount; i++) {
            const splash = document.createElement('div');
            splash.className = styles.splash;
            splash.style.left = `${Math.random() * 100}%`;
            splash.style.animationDelay = `${Math.random() * 3}s`;
            container.appendChild(splash);
        }

        return () => {
            // Cleanup
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        };
    }, []);

    return (
        <div className={styles.rainContainer} ref={containerRef} suppressHydrationWarning>
            {/* Lightning flash effect */}
            <div className={styles.lightning}></div>

            {/* Mist overlay */}
            <div className={styles.mist}></div>
            <div className={styles.mistLayer2}></div>
        </div>
    );
}
