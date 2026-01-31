'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Animated wave mesh
function WaveMesh() {
    const meshRef = useRef();

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#00CED1') },
        uColor2: { value: new THREE.Color('#1E90FF') },
        uColor3: { value: new THREE.Color('#104E8B') },
    }), []);

    const vertexShader = `
        uniform float uTime;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Wave animation
            float wave1 = sin(pos.x * 2.0 + uTime * 0.8) * 0.15;
            float wave2 = sin(pos.y * 3.0 + uTime * 0.6) * 0.1;
            float wave3 = cos(pos.x * 1.5 + pos.y * 2.0 + uTime * 0.4) * 0.08;
            
            pos.z += wave1 + wave2 + wave3;
            vElevation = pos.z;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
            // Color based on elevation
            float colorMix = (vElevation + 0.3) / 0.6;
            vec3 color = mix(uColor3, uColor1, colorMix);
            color = mix(color, uColor2, sin(vUv.x * 10.0 + uTime) * 0.3 + 0.5);
            
            // Fade at edges
            float edgeFade = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
            edgeFade *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
            
            gl_FragColor = vec4(color, 0.4 * edgeFade);
        }
    `;

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
            meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -0.5, 0]}>
            <planeGeometry args={[8, 6, 64, 48]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                side={THREE.DoubleSide}
                depthWrite={false}
            />
        </mesh>
    );
}

// Floating bubbles
function Bubbles({ count = 30 }) {
    const groupRef = useRef();

    const bubbles = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push({
                position: [
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 3,
                ],
                scale: 0.03 + Math.random() * 0.08,
                speed: 0.3 + Math.random() * 0.5,
                offset: Math.random() * Math.PI * 2,
            });
        }
        return arr;
    }, [count]);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.children.forEach((bubble, i) => {
                const data = bubbles[i];
                const time = state.clock.getElapsedTime();

                bubble.position.y = data.position[1] + Math.sin(time * data.speed + data.offset) * 0.5;
                bubble.position.x = data.position[0] + Math.sin(time * data.speed * 0.5 + data.offset) * 0.2;
            });
        }
    });

    return (
        <group ref={groupRef}>
            {bubbles.map((bubble, i) => (
                <mesh key={i} position={bubble.position} scale={bubble.scale}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial
                        color="#00FFFF"
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            ))}
        </group>
    );
}

// Main scene
function WaveScene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[3, 3, 3]} color="#00CED1" intensity={1} />
            <pointLight position={[-3, -2, 2]} color="#1E90FF" intensity={0.5} />

            <WaveMesh />
            <Bubbles count={25} />
        </>
    );
}

export default function AboutWaveModel() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.6,
        }}>
            <Canvas
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.5]}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                <color attach="background" args={['transparent']} />
                <WaveScene />
            </Canvas>
        </div>
    );
}
