import { useRef, useState, useCallback, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import type { Group } from 'three'

function Mushroom() {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF('/9-mushroom.glb')

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.1875
    ref.current.rotation.y += delta * 0.3125
    ref.current.rotation.z += delta * 0.125
  })

  return <primitive ref={ref} object={scene} scale={1.5} />
}

export function TumblingMushroom() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault()
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setDragging(true)
  }, [])

  useEffect(() => {
    if (!dragging) return

    const handleMove = (e: PointerEvent) => {
      setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y })
    }

    const handleUp = () => setDragging(false)

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
    }
  }, [dragging, offset])

  return (
    <div
      ref={containerRef}
      className="tumbling-mushroom"
      onPointerDown={handlePointerDown}
      style={pos ? {
        right: 'auto',
        top: 'auto',
        transform: 'none',
        left: pos.x,
        top: pos.y,
        cursor: dragging ? 'grabbing' : 'grab',
      } : {
        cursor: 'grab',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <ambientLight intensity={3.125} />
        <directionalLight position={[3, 5, 2]} intensity={3.75} color="#dcc0ff" />
        <directionalLight position={[-3, -2, 4]} intensity={2.5} color="#80e0a0" />
        <directionalLight position={[0, -3, 3]} intensity={1.875} color="#ffffff" />
        <Mushroom />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/9-mushroom.glb')
