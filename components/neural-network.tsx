"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

export function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create nodes
    const nodes: THREE.Mesh[] = []
    const nodeGeometry = new THREE.SphereGeometry(0.2, 32, 32)
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: 0x9333ea, // Primary color
      emissive: 0x6b21a8,
      specular: 0xffffff,
      shininess: 100,
    })

    // Create connections
    const connections: THREE.Line[] = []
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.3,
    })

    // Create nodes in layers
    const layers = [4, 6, 6, 4]
    const spacing = 2
    let nodeIndex = 0

    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
        const x = (layerIndex - (layers.length - 1) / 2) * spacing
        const y = (i - (nodeCount - 1) / 2) * spacing
        node.position.set(x, y, 0)
        scene.add(node)
        nodes.push(node)

        // Connect to previous layer
        if (layerIndex > 0) {
          const prevLayer = layers[layerIndex - 1]
          for (let j = 0; j < prevLayer; j++) {
            const prevNode = nodes[nodeIndex - prevLayer + j - i]
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              node.position,
              prevNode.position,
            ])
            const line = new THREE.Line(lineGeometry, lineMaterial)
            scene.add(line)
            connections.push(line)
          }
        }
        nodeIndex++
      }
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    camera.position.z = 10

    // Mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate based on mouse position
      camera.position.x += (mousePosition.current.x * 2 - camera.position.x) * 0.05
      camera.position.y += (mousePosition.current.y * 2 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      // Pulse nodes
      nodes.forEach((node, i) => {
        const time = Date.now() * 0.001
        const pulse = Math.sin(time + i) * 0.1
        node.scale.setScalar(1 + pulse)
      })

      // Update connections
      connections.forEach((line, i) => {
        const time = Date.now() * 0.001
        const pulse = (Math.sin(time + i * 0.1) + 1) * 0.5
        ;(line.material as THREE.LineBasicMaterial).opacity = 0.1 + pulse * 0.2
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10" />
}