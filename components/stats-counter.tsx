"use client"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  number: number
  label: string
}

export default function StatsCounter({ number, label }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // ms
    const interval = 50 // ms
    const steps = duration / interval
    const increment = number / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [number])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold mb-2">{count.toLocaleString()}</div>
      <div className="text-red-200">{label}</div>
    </div>
  )
}
