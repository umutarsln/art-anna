"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float, useFBO, MeshTransmissionMaterial } from "@react-three/drei"
import { Mesh, Scene, Vector3, SphereGeometry, CylinderGeometry, BoxGeometry } from "three"

interface FluidGlassProps {
  mode?: "lens" | "bar" | "cube"
  lensProps?: {
    scale?: number
    ior?: number
    thickness?: number
    chromaticAberration?: number
    anisotropy?: number
  }
  barProps?: {
    scale?: number
    speed?: number
  }
  cubeProps?: {
    scale?: number
    rotation?: number
  }
}

// Manuel damping fonksiyonu
function damp3(target: Vector3, destination: [number, number, number], lambda: number, delta: number) {
  target.x += (destination[0] - target.x) * lambda * delta
  target.y += (destination[1] - target.y) * lambda * delta
  target.z += (destination[2] - target.z) * lambda * delta
}

function ModeWrapper({ 
  children, 
  geometry, 
  followPointer = true, 
  lockToBottom = false, 
  modeProps = {}, 
  ...props 
}: any) {
  const ref = useRef<Mesh>(null)
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new Scene())
  const geoWidthRef = useRef(1)

  useEffect(() => {
    if (ref.current && ref.current.geometry) {
      const meshGeometry = ref.current.geometry
      if (meshGeometry.computeBoundingBox) {
        meshGeometry.computeBoundingBox()
        if (meshGeometry.boundingBox?.max?.x !== undefined && meshGeometry.boundingBox?.min?.x !== undefined) {
          geoWidthRef.current = meshGeometry.boundingBox.max.x - meshGeometry.boundingBox.min.x
        }
      }
    }
  }, [ref.current?.geometry])

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])

    if (ref.current) {
      const destX = followPointer ? (pointer.x * v.width) / 2 : 0
      const destY = lockToBottom
        ? -v.height / 2 + 0.2
        : followPointer
          ? (pointer.y * v.height) / 2
          : 0
      
      damp3(ref.current.position, [destX, destY, 15], 0.15, delta)

      if (modeProps.scale == null) {
        const maxWorld = v.width * 0.9
        const desired = maxWorld / geoWidthRef.current
        ref.current.scale.setScalar(Math.min(0.15, desired))
      }
    }

    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    // Background Color
    gl.setClearColor(0x5227ff, 1)
  })

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = modeProps

  return (
    <>
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  )
}

function Lens({ scale = 0.25, ior = 1.15, thickness = 5, chromaticAberration = 0.1, anisotropy = 0.01 }: any) {
  const geometry = useMemo(() => new SphereGeometry(1, 32, 32), [])
  
  return (
    <ModeWrapper
      geometry={geometry}
      followPointer
      modeProps={{ scale, ior, thickness, chromaticAberration, anisotropy }}
    />
  )
}

function Bar({ scale = 1, speed = 1 }: any) {
  const geometry = useMemo(() => new CylinderGeometry(0.5, 0.5, 2, 32), [])
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
  }

  return (
    <ModeWrapper
      geometry={geometry}
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, scale, speed }}
    />
  )
}

function Cube({ scale = 1, rotation = 1 }: any) {
  const geometry = useMemo(() => new BoxGeometry(1, 1, 1), [])
  
  return (
    <ModeWrapper
      geometry={geometry}
      followPointer
      modeProps={{ scale, rotation }}
    />
  )
}

export function FluidGlass({ 
  mode = "lens", 
  lensProps = {}, 
  barProps = {}, 
  cubeProps = {} 
}: FluidGlassProps) {
  const Model = useMemo(() => {
    switch (mode) {
      case "lens":
        return <Lens {...lensProps} />
      case "bar":
        return <Bar {...barProps} />
      case "cube":
        return <Cube {...cubeProps} />
      default:
        return <Lens {...lensProps} />
    }
  }, [mode, lensProps, barProps, cubeProps])

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={["#5227ff"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        {Model}
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
} 