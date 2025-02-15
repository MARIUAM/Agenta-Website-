"use client"

import { useCallback } from "react"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"
import type { Container, Engine } from "tsparticles-engine"

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "attract",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.5,
                color: "hsl(var(--secondary))"
              }
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 5
            }
          },
        },
        particles: {
          color: {
            value: ["hsl(var(--primary))", "hsl(var(--secondary))"],
          },
          links: {
            color: "hsl(var(--primary) / 0.2)",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1
            }
          },
          life: {
            duration: {
              sync: false,
              value: 3
            },
            count: 0,
            delay: {
              random: {
                enable: true,
                minimumValue: 0.1
              },
              value: 1
            }
          },
          roll: {
            darken: {
              enable: true,
              value: 30
            },
            enlighten: {
              enable: true,
              value: 30
            },
            enable: true,
            speed: {
              min: 15,
              max: 25
            }
          },
          wobble: {
            distance: 30,
            enable: true,
            speed: {
              min: -15,
              max: 15
            }
          }
        },
        detectRetina: true,
      }}
    />
  )
}