import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload, Stage } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import BackButton from '../../components/playground/BackButton/BackButton';
import styles from './playground.pages.module.css';

const BlueEyesModel = () => {
    const { scene } = useLoader(GLTFLoader, '/models/blue-eyes/scene.gltf');
    return (
        <mesh>
            {scene && <primitive object={scene}/>}
        </mesh>
    )
}

export default function BlueEyes() {
    return (
        <div style={{ position: 'relative' }}>   
            <div style={{ position: 'absolute', top: '5rem', left: '4rem', zIndex: 1 }}>
                <BackButton />
            </div>
            <Canvas
                frameloop='always'
                gl={{ preserveDrawingBuffer: true }}
                camera={{ fov: 25, position: [0, 0, 8] }}
                dpr={[1, 2]}
                style={{ height: '100vh', width: '100%' }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <hemisphereLight intensity={1} />
                    <OrbitControls
                        autoRotate={true}
                        enableZoom={true}
                        minDistance={5}
                        maxDistance={15}
                    />
                    <Stage environment="city" intensity={0.5}>
                        <BlueEyesModel />
                    </Stage>
                    <Preload all />
                </Suspense>
            </Canvas>
            <div className={styles.attribution}>
                "Blue-Eyes White Dragon" by Yanez Designs (CC BY)
            </div>
        </div>
    )
}
