'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WaterDroplets({ count = 50 }) {
    const pointsRef = useRef();

    const { positions, sizes, speeds } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const speeds = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Random positions in a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 3 + Math.random() * 8;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            sizes[i] = 0.02 + Math.random() * 0.08;
            speeds[i] = 0.2 + Math.random() * 0.5;
        }

        return { positions, sizes, speeds };
    }, [count]);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#00CED1') },
    }), []);

    const vertexShader = `
        attribute float size;
        attribute float speed;
        uniform float uTime;
        varying float vAlpha;
        
        void main() {
            vec3 pos = position;
            
            // Floating animation
            pos.y += sin(uTime * speed + position.x) * 0.3;
            pos.x += sin(uTime * speed * 0.5 + position.z) * 0.2;
            pos.z += cos(uTime * speed * 0.3 + position.y) * 0.2;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * 300.0 / -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
            
            vAlpha = 0.4 + sin(uTime * 2.0 + position.x) * 0.3;
        }
    `;

    const fragmentShader = `
        uniform vec3 uColor;
        varying float vAlpha;
        
        void main() {
            // Circular droplet with soft edge
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            
            float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= vAlpha;
            
            // Glow effect
            vec3 glow = uColor * (1.0 + (1.0 - dist * 2.0) * 0.5);
            
            gl_FragColor = vec4(glow, alpha);
        }
    `;

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={sizes}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-speed"
                    count={count}
                    array={speeds}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
