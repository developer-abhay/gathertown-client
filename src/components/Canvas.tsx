import React, { useEffect, useRef, useState } from 'react'

const Canvas: React.FC = () => {
    // const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    let position = { x: 0, y: 0 };
    const speed = 5;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // const drawBackground = () => {
    //     const canvas = canvasRef.current
    //     if (canvas && canvas.getContext) {
    //         const ctx = canvas.getContext('2d')
    //         if (ctx) {
    //             canvas.width = window.innerWidth * 0.9;
    //             canvas.height = window.innerHeight * 0.9;

    //             // Load the background image
    //             const backgroundImage = new Image();
    //             backgroundImage.src = 'https://www.freeformgames.com/blog/playing-the-food-is-to-die-for-using-gather-town/'; // Replace with your image path

    //             // Draw the image once it has loaded
    //             backgroundImage.onload = () => {
    //                 // Draw the background image
    //                 ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); // Cover the entire canvas

    //                 // Draw a rectangle on top of the background
    //                 ctx.fillStyle = 'rgba(0, 0, 255, 0.5)'; // Semi-transparent blue
    //                 ctx.fillRect(100, 100, 100, 100);
    //             };
    //         }
    //     }

    // }

    const drawRect = ({ x, y }: { x: number, y: number }) => {
        const canvas = canvasRef.current
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d')
            if (ctx) {
                ctx.fillRect(x, y, 50, 50)
                ctx.fillStyle = 'blue'
            }
        }
    }

    useEffect(() => {
        drawRect(position)
    }, [position])

    useEffect(() => {
        // drawBackground()

        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyW' || e.code === 'ArrowUp') {
                e.preventDefault();
                // setPosition((prev) => { return { ...prev, y: prev.y - speed } })
                position = { ...position, y: position.y - speed }
                drawRect(position)
            }
            if (e.code === 'KeyS' || e.code === 'ArrowDown') {
                e.preventDefault();
                // setPosition((prev) => { return { ...prev, y: prev.y + speed } })
                position = { ...position, y: position.y + speed }
                drawRect(position)
            }
            if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
                e.preventDefault();
                // setPosition((prev) => { return { ...prev, x: prev.x - speed } })
                position = { ...position, x: position.x - speed }
                drawRect(position)
            }
            if (e.code === 'KeyD' || e.code === 'ArrowRight') {
                e.preventDefault();
                // setPosition((prev) => { return { ...prev, x: prev.x + speed } })
                position = { ...position, x: position.x + speed }
                drawRect(position)
            }

        })
    }, [])

    return (
        <canvas ref={canvasRef} id="canvas" className='bg-white border-8 border-solid border-green-500'>
            <img src="https://www.freeformgames.com/blog/playing-the-food-is-to-die-for-using-gather-town/" alt="" />
        </canvas>
    )
}

export default Canvas
