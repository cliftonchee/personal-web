import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Logo = ( { pos } ) => {

    const logoMap = useLoader(TextureLoader, '../../img/Chee_Logo.png');
    
    return (
        <mesh position={pos}>
            <circleGeometry args={[0.5, 50, 50]}/>
            <meshStandardMaterial map={logoMap} />
        </mesh>
    )
}

export default Logo