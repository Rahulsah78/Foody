import React, { useEffect, useState } from 'react'

const Loader = () => {
    
    return (
        <>
            <div className="h-screen flex items-center justify-center text-4xl font-bold animate-text-color-change">
                <span className="inline-block md:text-9xl text-7xl animate-from-left">F</span>
                <span className="inline-block md:text-9xl text-7xl animate-from-top">O</span>
                <span className="inline-block md:text-9xl text-7xl animate-from-right">O</span>
                <span className="inline-block md:text-9xl text-7xl animate-from-bottom">D</span>
                <span className="inline-block md:text-9xl text-7xl animate-fade-in">Y</span>
            </div>
        </>
    )
}

export default Loader
