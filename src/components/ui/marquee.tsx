import React, { useEffect, useState } from "react"

// Simple class name utility function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes
    .filter(cls => typeof cls === 'string')
    .join(' ')
}

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClassName = cn(
    "flex min-w-full shrink-0 animate-marquee items-stretch",
    reverse ? "animate-marquee-reverse" : "",
    isHovered && pauseOnHover ? "pause-animation" : ""
  )

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      onMouseEnter={pauseOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsHovered(false) : undefined}
    >
      <div className={baseClassName}>{children}</div>
      <div className={baseClassName} aria-hidden="true">
        {children}
      </div>
    </div>
  )
}
