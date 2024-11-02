import React, { useEffect, useRef } from 'react'

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawRect = () => {
        const canvas = canvasRef.current
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
                canvas.width = window.innerWidth * 0.9;
                canvas.height = window.innerHeight * 0.9;
                ctx.fillRect(50, 50, 50, 50)
                ctx.fillStyle = 'blue'
            }
        }
    }

    useEffect(() => {
        drawRect()

    }, [])

    return (
        <canvas ref={canvasRef} id="canvas" className='bg-white border-8 border-solid border-green-500'>
        </canvas>
    )
}

export default Canvas
