import { useEffect, useRef, useCallback, useState } from 'react'

const PARTICLE_COLORS: [number, number, number][] = [
  [180, 160, 220],
  [180, 160, 220],
  [200, 160, 240],
  [96, 160, 224],
  [96, 208, 144],
  [230, 196, 74],
  [140, 127, 168],
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  phase: number
  speed: number
  color: [number, number, number]
}

function generateNoiseTile(): string {
  const size = 256
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')!
  const img = ctx.createImageData(size, size)
  const d = new Uint32Array(img.data.buffer)
  for (let i = 0; i < d.length; i++) {
    const v = (Math.random() * 255) | 0
    d[i] = (255 << 24) | (v << 16) | (v << 8) | v
  }
  ctx.putImageData(img, 0, 0)
  return c.toDataURL('image/png')
}

export function HomeBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [noiseTile] = useState(generateNoiseTile)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!glowRef.current) return
    glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    glowRef.current.style.opacity = '1'
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return
    glowRef.current.style.opacity = '0'
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0
    let h = 0
    const particles: Particle[] = []
    const MAX_CONN_DIST = 110

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = window.innerWidth
      h = window.innerHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = w + 'px'
      canvas!.style.height = h + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      particles.length = 0
      const count = Math.min(90, Math.floor((w * h) / 14000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: Math.random() < 0.15 ? 3 : 2,
          alpha: 0.12 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.6 + Math.random() * 1.4,
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        })
      }
    }

    let glitchActive = false
    let glitchEnd = 0
    let nextGlitch = 800 + Math.random() * 2000

    function drawGlitch(t: number) {
      if (!glitchActive && t > nextGlitch) {
        glitchActive = true
        glitchEnd = t + 150 + Math.random() * 500
      }

      if (!glitchActive || t > glitchEnd) {
        if (t > glitchEnd) {
          glitchActive = false
          nextGlitch = t + 1500 + Math.random() * 5000
        }
        return
      }

      const intensity = Math.random()

      const barCount = intensity > 0.5 ? 4 + Math.floor(Math.random() * 6) : 2 + Math.floor(Math.random() * 4)
      for (let i = 0; i < barCount; i++) {
        const y = Math.floor(Math.random() * h)
        const barH = Math.floor(2 + Math.random() * (intensity > 0.6 ? 35 : 12))
        const shift = Math.floor((Math.random() - 0.5) * (intensity > 0.4 ? 80 : 30))
        const a = 0.08 + Math.random() * 0.18

        ctx!.save()
        ctx!.globalCompositeOperation = 'lighter'
        ctx!.fillStyle = `rgba(200, 30, 220, ${a})`
        ctx!.fillRect(shift, y, w, barH)
        ctx!.fillStyle = `rgba(30, 220, 220, ${a})`
        ctx!.fillRect(-shift, y, w, barH)
        ctx!.restore()
      }

      if (intensity > 0.5) {
        const tearCount = intensity > 0.8 ? 2 : 1
        for (let i = 0; i < tearCount; i++) {
          const bigY = Math.floor(Math.random() * h)
          const bigH = Math.floor(4 + Math.random() * 60)
          const bigShift = Math.floor((Math.random() - 0.5) * 120)
          ctx!.save()
          ctx!.globalCompositeOperation = 'lighter'
          ctx!.fillStyle = `rgba(180, 100, 240, ${0.04 + Math.random() * 0.1})`
          ctx!.fillRect(bigShift, bigY, w, bigH)
          ctx!.restore()
        }
      }

      if (intensity > 0.92) {
        ctx!.save()
        ctx!.fillStyle = `rgba(220, 200, 255, ${0.03 + Math.random() * 0.05})`
        ctx!.fillRect(0, 0, w, h)
        ctx!.restore()
      }
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x += w + 40
        if (p.x > w + 20) p.x -= w + 40
        if (p.y < -20) p.y += h + 40
        if (p.y > h + 20) p.y -= h + 40

        const pulse = Math.sin(t * 0.001 * p.speed + p.phase) * 0.35 + 0.65
        const a = p.alpha * pulse
        const [r, g, b] = p.color
        ctx!.fillStyle = `rgba(${r},${g},${b},${a})`
        ctx!.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size)
      }

      ctx!.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d2 = dx * dx + dy * dy
          if (d2 < MAX_CONN_DIST * MAX_CONN_DIST) {
            const d = Math.sqrt(d2)
            const a = (1 - d / MAX_CONN_DIST) * 0.07
            ctx!.strokeStyle = `rgba(160,140,210,${a})`
            ctx!.beginPath()
            ctx!.moveTo(Math.floor(particles[i].x) + 1, Math.floor(particles[i].y) + 1)
            ctx!.lineTo(Math.floor(particles[j].x) + 1, Math.floor(particles[j].y) + 1)
            ctx!.stroke()
          }
        }
      }

      drawGlitch(t)

      // Slow rolling VHS tracking band
      const bandY = ((t * 0.03) % (h + 200)) - 100
      const bandGrad = ctx!.createLinearGradient(0, bandY - 60, 0, bandY + 60)
      bandGrad.addColorStop(0, 'rgba(200, 180, 255, 0)')
      bandGrad.addColorStop(0.4, 'rgba(200, 180, 255, 0.03)')
      bandGrad.addColorStop(0.5, 'rgba(220, 200, 255, 0.06)')
      bandGrad.addColorStop(0.6, 'rgba(200, 180, 255, 0.03)')
      bandGrad.addColorStop(1, 'rgba(200, 180, 255, 0)')
      ctx!.fillStyle = bandGrad
      ctx!.fillRect(0, bandY - 60, w, 120)

      animId = requestAnimationFrame(draw)
    }

    const onResize = () => {
      resize()
      init()
    }

    resize()
    init()
    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-1">
      <div className="absolute inset-0 home-gradient" />

      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />
      <div className="home-orb home-orb-4" />

      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="absolute inset-0 home-pixel-grid" />

      <div
        className="home-noise"
        style={{
          backgroundImage: `url(${noiseTile})`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="absolute inset-0 home-scanlines" />

      <div className="absolute inset-0 home-vignette" />

      <div ref={glowRef} className="cursor-glow" />
    </div>
  )
}
