"use client"

import { useEffect, useRef } from "react"

interface AnimatedChartProps {
  className?: string
}

export default function AnimatedChart({ className = "" }: AnimatedChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Make canvas size dynamic based on container size
    const updateCanvasSize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 300
      canvas.height = canvas.parentElement?.clientHeight || 200
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Chart properties
    const investmentColor = "#3b82f6"  // Blue for investments
    const profitColor = "#34d399"      // Green for profit
    const chartData = [
      { investment: 20, profit: 2 },
      { investment: 35, profit: 5 },
      { investment: 50, profit: 7 },
      { investment: 65, profit: 10 },
      { investment: 80, profit: 15 },
      { investment: 95, profit: 20 },
      { investment: 110, profit: 30 },
      { investment: 130, profit: 40 },
      { investment: 150, profit: 50 },
      { investment: 175, profit: 65 },
      { investment: 200, profit: 80 },
      { investment: 230, profit: 100 },
    ]
    let currentPoint = 0
    let animationProgress = 0

    // Animation loop
    const animate = () => {
      updateCanvasSize()
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      const padding = 30

      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Draw chart background
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      // Draw grid lines
      ctx.strokeStyle = "rgba(10, 61, 63, 0.1)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i < 5; i++) {
        const y = padding + (canvasHeight - 2 * padding) * (i / 4)
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(canvasWidth - padding, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i < chartData.length; i++) {
        const x = padding + (canvasWidth - 2 * padding) * (i / (chartData.length - 1))
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, canvasHeight - padding)
        ctx.stroke()
      }

      // Draw investment line (blue)
      ctx.strokeStyle = investmentColor
      ctx.lineWidth = 3
      ctx.beginPath()

      const pointsToDraw = Math.min(chartData.length, currentPoint + 1)

      for (let i = 0; i < pointsToDraw; i++) {
        const x = padding + (canvasWidth - 2 * padding) * (i / (chartData.length - 1))
        const y = canvasHeight - padding - (chartData[i].investment / 250) * (canvasHeight - 2 * padding)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Draw investment points
        ctx.fillStyle = investmentColor
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.stroke()

      // Draw profit line (green)
      ctx.strokeStyle = profitColor
      ctx.lineWidth = 3
      ctx.beginPath()

      for (let i = 0; i < pointsToDraw; i++) {
        const x = padding + (canvasWidth - 2 * padding) * (i / (chartData.length - 1))
        const y = canvasHeight - padding - (chartData[i].profit / 100) * (canvasHeight - 2 * padding)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Draw profit points
        ctx.fillStyle = profitColor
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.stroke()

      // Draw current point values
      if (currentPoint < chartData.length) {
        const x = padding + (canvasWidth - 2 * padding) * (currentPoint / (chartData.length - 1))
        const investmentY = canvasHeight - padding - (chartData[currentPoint].investment / 250) * (canvasHeight - 2 * padding)
        const profitY = canvasHeight - padding - (chartData[currentPoint].profit / 100) * (canvasHeight - 2 * padding)

        ctx.fillStyle = investmentColor
        ctx.font = "bold 12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(`$${chartData[currentPoint].investment}k`, x, investmentY - 15)

        ctx.fillStyle = profitColor
        ctx.fillText(`${chartData[currentPoint].profit}%`, x, profitY - 15)
      }

      // Update animation
      animationProgress += 0.02
      if (animationProgress >= 1) {
        animationProgress = 0
        currentPoint = (currentPoint + 1) % chartData.length
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`${className} w-full h-[300px]`} />
}