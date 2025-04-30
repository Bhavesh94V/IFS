'use client'

import { useEffect, useRef } from 'react'

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({
  className = ''
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener('resize', setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      canvas: HTMLCanvasElement
      ctx: CanvasRenderingContext2D

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `rgba(10, 61, 63, ${Math.random() * 0.2 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap particles around the canvas if they go out of bounds
        if (this.x > this.canvas.width) this.x = 0
        else if (this.x < 0) this.x = this.canvas.width
        if (this.y > this.canvas.height) this.y = 0
        else if (this.y < 0) this.y = this.canvas.height
      }

      draw() {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(
      50,
      Math.floor((canvas.width * canvas.height) / 10000)
    )

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas, ctx))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.strokeStyle = `rgba(10, 61, 63, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  )
}
