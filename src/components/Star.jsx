import React from 'react'

const Star = ( { pos } ) => {
    return (
        <mesh position={pos}>
            <sphereGeometry args={[0.25, 100, 100]}/>
            <meshStandardMaterial color={ 0xffffff } />
        </mesh>
    )
}

export default Star