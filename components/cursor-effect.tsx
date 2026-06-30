"use client"

import { useEffect, useRef } from "react"

export function CursorEffect() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable the cursor-follow effect on devices with a fine pointer (mouse).
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!finePointer.matches || reduceMotion.matches) return

    const glow = glowRef.current
    if (!glow) return

    // Target (actual mouse) and rendered (lerped) positions.
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let renderX = targetX
    let renderY = targetY
    let visible = false
    let rafId = 0

    // Currently "active" interactive element receiving the directional spotlight.
    let activeEl: HTMLElement | null = null

    const setActive = (el: HTMLElement | null) => {
      if (el === activeEl) return
      if (activeEl) activeEl.style.setProperty("--ga", "0")
      activeEl = el
      if (activeEl) activeEl.style.setProperty("--ga", "1")
    }

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX
      targetY = e.clientY

      if (!visible) {
        visible = true
        glow.style.opacity = "1"
      }

      const el = (e.target as Element | null)?.closest<HTMLElement>(".cursor-react") ?? null
      setActive(el)

      // Update the element-local spotlight coordinates (percentages).
      if (el) {
        const rect = el.getBoundingClientRect()
        const gx = ((e.clientX - rect.left) / rect.width) * 100
        const gy = ((e.clientY - rect.top) / rect.height) * 100
        el.style.setProperty("--gx", `${gx}%`)
        el.style.setProperty("--gy", `${gy}%`)
      }
    }

    const onLeave = () => {
      visible = false
      glow.style.opacity = "0"
      setActive(null)
    }

    const tick = () => {
      // Smooth easing toward the target position (lerp) for a fluid lag.
      renderX += (targetX - renderX) * 0.12
      renderY += (targetY - renderY) * 0.12
      glow.style.transform = `translate3d(${renderX}px, ${renderY}px, 0) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerleave", onLeave)
    window.addEventListener("blur", onLeave)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerleave", onLeave)
      window.removeEventListener("blur", onLeave)
      cancelAnimationFrame(rafId)
      setActive(null)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[5] h-[480px] w-[480px] opacity-0"
      style={{
        background:
          "radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(20,184,166,0.10) 35%, rgba(16,185,129,0) 70%)",
        filter: "blur(20px)",
        transition: "opacity 0.4s ease",
        willChange: "transform, opacity",
      }}
    />
  )
}
