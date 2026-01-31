'use client';

import { useEffect, useState } from 'react';
import styles from './RainOverlay.module.css';

export default function RainOverlay() {
    const [raindrops, setRaindrops] = useState([]);

    useEffect(() => {
        // Generate raindrops
        const drops = [];
        for (let i = 0; i < 100; i++) {
            drops.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 0.5 + Math.random() * 0.5,
                size: 1 + Math.random() * 2,
            });
        }
        setRaindrops(drops);
    }, []);

    return (
        <div className={styles.rainOverlay}>
            {raindrops.map((drop) => (
                <div
                    key={drop.id}
                    className={styles.raindrop}
                    style={{
                        left: `${drop.left}%`,
                        animationDelay: `${drop.delay}s`,
                        animationDuration: `${drop.duration}s`,
                        width: `${drop.size}px`,
                        height: `${drop.size * 15}px`,
                    }}
                />
            ))}

            {/* Mist layers */}
            <div className={styles.mistLayer1}></div>
            <div className={styles.mistLayer2}></div>
        </div>
    );
}
