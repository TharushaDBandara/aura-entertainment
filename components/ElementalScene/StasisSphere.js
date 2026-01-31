'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const elementConfigs = {
    earth: {
        coreColor: '#8B4513',
        glowColor: '#A0522D',
        stasisColor: '#4a4a3a',
        name: 'Earth',
        icon: '🪨',
    },
    fire: {
        coreColor: '#FF4500',
        glowColor: '#FF6347',
        stasisColor: '#4a3a3a',
        name: 'Fire',
        icon: '🔥',
    },
    air: {
        coreColor: '#708090',
        glowColor: '#B0C4DE',
        stasisColor: '#3a3a4a',
        name: 'Air',
        icon: '🌪️',
    },
};

export default function StasisSphere({ position, element = 'earth', size = 1.5 }) {
    const groupRef = useRef();
    const outerRef = useRef();
    const coreRef = useRef();
    const [hovered, setHovered] = useState(false);

    const config = elementConfigs[element];

    // Containment field shader
    const containmentUniforms = useMemo(() => ({
        uTime: { value: 0 },
        uHovered: { value: 0 },
        uColor: { value: new THREE.Color(config.stasisColor) },
    }), [config.stasisColor]);

    const containmentVertexShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            vUv = uv;
            vNormal = normal;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const containmentFragmentShader = `
        uniform float uTime;
        uniform float uHovered;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
            // Fresnel for glass edge
            vec3 viewDir = normalize(cameraPosition - vPosition);
            float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.5);
            
            // Hexagonal grid pattern
            float gridX = fract(vUv.x * 20.0);
            float gridY = fract(vUv.y * 20.0);
            float grid = step(0.9, gridX) + step(0.9, gridY);
            
            // Stasis field glow
            float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
            float stasisGlow = fresnel * (0.3 + pulse * 0.2 * uHovered);
            
            // Glitch effect on hover
            float glitch = 0.0;
            if (uHovered > 0.5) {
                glitch = step(0.98, fract(sin(uTime * 50.0 + vUv.y * 100.0) * 43758.5453)) * 0.3;
            }
            
            vec3 finalColor = uColor + vec3(stasisGlow * 0.5) + vec3(grid * 0.05) + vec3(glitch);
            float alpha = fresnel * 0.4 + grid * 0.1 + glitch;
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    `;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (groupRef.current) {
            // Slow rigid rotation (trapped in stasis)
            groupRef.current.rotation.y = time * 0.05;
            groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;

            // Subtle floating
            groupRef.current.position.y = position[1] + Math.sin(time * 0.2) * 0.1;
        }

        if (outerRef.current) {
            outerRef.current.uniforms.uTime.value = time;
            outerRef.current.uniforms.uHovered.value = hovered ? 1.0 : 0.0;
        }

        if (coreRef.current) {
            // Core pulses when hovered
            const scale = hovered ? 1.0 + Math.sin(time * 5) * 0.05 : 1.0;
            coreRef.current.scale.setScalar(scale);
        }
    });

    const handlePointerOver = () => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = () => {
        setHovered(false);
        document.body.style.cursor = 'default';
    };

    return (
        <group
            ref={groupRef}
            position={position}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            {/* Outer containment field */}
            <mesh>
                <sphereGeometry args={[size, 32, 32]} />
                <shaderMaterial
                    ref={outerRef}
                    vertexShader={containmentVertexShader}
                    fragmentShader={containmentFragmentShader}
                    uniforms={containmentUniforms}
                    transparent
                    side={THREE.DoubleSide}
                    depthWrite={false}
                />
            </mesh>

            {/* Inner core element */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[size * 0.6, 32, 32]} />
                <meshStandardMaterial
                    color={config.coreColor}
                    emissive={config.glowColor}
                    emissiveIntensity={hovered ? 0.5 : 0.2}
                    roughness={0.8}
                    metalness={0.2}
                />
            </mesh>

            {/* Tooltip on hover */}
            {hovered && (
                <Html position={[0, size + 0.5, 0]} center>
                    <div style={{
                        background: 'rgba(10, 14, 20, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        color: '#fff',
                        fontSize: '12px',
                        fontFamily: 'Inter, sans-serif',
                        whiteSpace: 'nowrap',
                        textAlign: 'center',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                    }}>
                        <div style={{ fontSize: '20px', marginBottom: '4px' }}>{config.icon}</div>
                        <div style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontSize: '10px',
                        }}>
                            Element Locked
                        </div>
                        <div style={{ color: '#A9CCE3', marginTop: '2px' }}>
                            Awaiting Future Cycle
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}
