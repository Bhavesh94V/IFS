"use client"

import { useEffect, useRef } from "react"

interface AnimatedCoinProps {
  className?: string
}

export default function AnimatedCoin({ className = "" }: AnimatedCoinProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 200
    canvas.height = 200

    // Coin properties
    const coinRadius = 80
    const coinColor = "#C9A227"
    const coinOutlineColor = "#b38c1d"
    const symbolColor = "#0a3d3f"
    let rotation = 0
    let direction = 1
    let width = coinRadius * 2

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update rotation
      rotation += 0.02 * direction
      width = coinRadius * 2 * Math.abs(Math.cos(rotation))

      if (rotation > Math.PI || rotation < 0) {
        direction *= -1
      }

      // Draw coin
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)

      // Coin body
      ctx.beginPath()
      ctx.ellipse(0, 0, width, coinRadius * 2, 0, 0, Math.PI * 2)
      ctx.fillStyle = coinColor
      ctx.fill()
      ctx.strokeStyle = coinOutlineColor
      ctx.lineWidth = 3
      ctx.stroke()

      // Coin symbol (₹)
      if (width > 20) {
        ctx.fillStyle = symbolColor
        ctx.font = `bold ${Math.min(60, width)}px Arial`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("₹", 0, 0)
      }

      // Coin shine
      ctx.beginPath()
      ctx.ellipse(-width * 0.2, -coinRadius * 0.5, width * 0.3, coinRadius * 0.3, Math.PI / 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
      ctx.fill()

      ctx.restore()

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className={`${className}`} width="200" height="200" />
}
