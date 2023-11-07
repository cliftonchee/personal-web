import Star from './Star'
import React from 'react'

const StarSystem = () => {
    return (
        <mesh>
            <Star pos={[20, 26, 2]}/>
            <Star pos={[-30, 25, -5]}/>
            <Star pos={[20, 30, 5]}/>
            <Star pos={[-20, 24, 5]}/>
            <Star pos={[33, 25, 5]}/>
            <Star pos={[-36, 28, 5]}/>
            <Star pos={[29, 20, 5]}/>
            <Star pos={[39, 22, 5]}/>
            <Star pos={[-35, 23, 5]}/>
            <Star pos={[-43, 20, 5]}/>
            <Star pos={[43, 18, 5]}/>
            <Star pos={[-52, 23, 5]}/>
            <Star pos={[53, 26, 5]}/>
        </mesh>
    )
}

export default StarSystem