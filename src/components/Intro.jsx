
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three';
import styled from 'styled-components'

import StarSystem from './StarSystem'
import NavLinks from './NavLinks'
import Logo from './Logo'

const Section = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #080d21;
  scroll-snap-align: center;
  color: #c6c8cf;
`

const Title = styled.p`
  font-size: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #c6c8cf;
  margin-top: 5px;
`;

const Desc = styled.p`
  font-size: 12px;
  color: #c6c8cf;
  margin-top: 10px;
  margin-left: 2px;
`;


const Info = styled.div`
    position: absolute;
    max-width: 100%;
    margin-left: 44.5%;
    margin-top: 150px;
    text-align: center;

    animation: fadeIn 2s ease forwards;
    opacity: 0; /* Initially set opacity to 0 */

    @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateX(-10px); /* Optional: Move the element right by 50 pixels */
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    }
`

const Nav = styled.div`
    position: relative;
`

const Intro = () => {
    // GLTF loaders for custom models
    const gltfLeftRock = useLoader(GLTFLoader, '../../custom-models/Rock-Flat-1.glb');
    const gltfMiddleRock = useLoader(GLTFLoader, './../custom-models/Rock-Flat-2.glb');
    const gltfRightRock = useLoader(GLTFLoader, '../../custom-models/Rock-Flat-3.glb');
    const gltfWave = useLoader(GLTFLoader, '../../custom-models/Ocean.glb');

    // Handle glow lighting effect
    const [intensity, setIntensity] = useState(0);

    useEffect(() => {
      // Update the intensity of the point lights over time
      const interval = setInterval(() => {
        // Calculate intensity using sine function for smooth oscillation
        const newIntensity = 50 + 75 * (Math.sin(Date.now() * 0.001) + 1); // Intensity oscillates between 50 and 200
        setIntensity(newIntensity);
      }, 16); // Update intensity approximately every frame (60 frames per second)
  
      // Clear the interval on component unmount
      return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <Section id="Intro">
            {/* Name & Desc */}
            <Nav>
                <Info>
                    <Title>C L I F T O N</Title>
                    <Subtitle>C H E E</Subtitle>
                    <Desc>Budding Software Engineer</Desc>
                </Info>
            </Nav>
            {/* Buttons */}
            <Nav>
                <NavLinks/>
            </Nav>
            {/* Three.js portion */}
            <Canvas camera={{ position: [0, 10, 50]}}>
                <OrbitControls enabled={false} enableZoom={false}/>
                {/* Logo */}
                <Logo pos={[-0.05, 12.5, 43]}></Logo>
                {/* Rocks */}
                <primitive
                    object={gltfLeftRock.scene}
                    position={[-10, 0, 40]}
                    scale={[10, 10, 10]}
                />
                <primitive
                    object={gltfMiddleRock.scene}
                    position={[0, 2, 40]}
                    scale={[10, 10, 10]}
                />
                <primitive
                    object={gltfRightRock.scene}
                    position={[9, 0, 40]}
                    scale={[10, 10, 10]}
                />
                {/* Wave */}
                <primitive
                    object={gltfWave.scene}
                    scale={[0.3, 0.01, 0.3]}
                />
                {/* Lights */}
                <ambientLight intensity={1}/>
                <pointLight color="#9fb0ed" intensity={intensity} position={[10,10,35]}/>
                <pointLight color="#9fb0ed" intensity={intensity} position={[-10,10,35]}/>
                {/* Stars */}
                <StarSystem/>
            </Canvas>
        </Section>
    )
}

export default Intro