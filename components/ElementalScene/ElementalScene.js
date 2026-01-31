'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
    PerspectiveCamera,
    Float,
    Sparkles,
} from '@react-three/drei';
import * as THREE from 'three';
import WaterSphere from './WaterSphere';
import WaterDroplets from './WaterDroplets';

// Subtle camera drift
function CameraRig() {
    const { camera } = useThree();
    const initialPos = useRef(camera.position.clone());

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        camera.position.x = initialPos.current.x + Math.sin(time * 0.08) * 0.2;
        camera.position.y = initialPos.current.y + Math.sin(time * 0.1) * 0.15;
        camera.lookAt(0, 0, 0);
    });

    return null;
}

// Ambient lighting - subtle water glow
function SceneLighting() {
    return (
        <>
            <ambientLight intensity={0.08} />
            <pointLight position={[0, 0, 8]} color="#00CED1" intensity={0.8} distance={25} />
            <pointLight position={[-8, 3, -5]} color="#1E90FF" intensity={0.4} distance={20} />
            <pointLight position={[8, -3, -5]} color="#00FFFF" intensity={0.4} distance={20} />
        </>
    );
}

// Simple background water spheres - positioned on the sides
function BackgroundElements() {
    return (
        <>
            {/* Left side spheres */}
            <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
                <WaterSphere position={[-6, 1, -3]} size={0.8} speed={0.7} />
            </Float>
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                <WaterSphere position={[-5, -2, -2]} size={0.5} speed={0.9} />
            </Float>

            {/* Right side spheres */}
            <Float speed={0.9} rotationIntensity={0.18} floatIntensity={0.45}>
                <WaterSphere position={[6, 0, -3]} size={0.7} speed={0.8} />
            </Float>
            <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.5}>
                <WaterSphere position={[5, 2, -4]} size={0.4} speed={1} />
            </Float>

            {/* Very small distant spheres */}
            <Float speed={0.7} rotationIntensity={0.1} floatIntensity={0.3}>
                <WaterSphere position={[-8, 3, -8]} size={0.3} speed={0.6} />
            </Float>
            <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.3}>
                <WaterSphere position={[7, -3, -7]} size={0.25} speed={0.5} />
            </Float>
        </>
    );
}

// Rain particles
function RainParticles({ count = 150 }) {
    const pointsRef = useRef();

    const positions = useRef(new Float32Array(count * 3));
    const velocities = useRef(new Float32Array(count));

    for (let i = 0; i < count; i++) {
        positions.current[i * 3] = (Math.random() - 0.5) * 40;
        positions.current[i * 3 + 1] = Math.random() * 25 - 5;
        positions.current[i * 3 + 2] = (Math.random() - 0.5) * 25 - 8;
        velocities.current[i] = 0.08 + Math.random() * 0.1;
    }

    useFrame(() => {
        if (pointsRef.current) {
            const posArray = pointsRef.current.geometry.attributes.position.array;

            for (let i = 0; i < count; i++) {
                posArray[i * 3 + 1] -= velocities.current[i];

                if (posArray[i * 3 + 1] < -12) {
                    posArray[i * 3 + 1] = 18;
                    posArray[i * 3] = (Math.random() - 0.5) * 40;
                }
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions.current}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#87CEEB"
                transparent
                opacity={0.4}
                sizeAttenuation
            />
        </points>
    );
}

// Main scene - simplified, elements on sides only
function ElementalWorld() {
    return (
        <>
            <CameraRig />
            <SceneLighting />
            <BackgroundElements />
            <RainParticles count={200} />
            <WaterDroplets count={40} />
            <Sparkles count={60} scale={25} size={1} speed={0.15} opacity={0.2} color="#00CED1" />
        </>
    );
}

// Fixed 3D Background
function ElementalCanvas() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
        }}>
            <Canvas
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                dpr={[1, 1.5]}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={55} />
                <color attach="background" args={['#050810']} />
                <fog attach="fog" args={['#050810', 12, 35]} />
                <Suspense fallback={null}>
                    <ElementalWorld />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default function ElementalScene({ children }) {
    return (
        <>
            <ElementalCanvas />
            <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
                {children}
            </div>
        </>
    );
}
