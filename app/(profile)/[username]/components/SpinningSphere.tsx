"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';
import { createNoise3D } from 'simplex-noise';

interface SpinningSphereProps {
  radius: number;
  spinDirectionX: number;
  spinDirectionY: number;
}

  const SpinningSphere: React.FC<SpinningSphereProps> = ({
    radius,
    spinDirectionX,
    spinDirectionY,
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      if (!canvasRef.current) return;
  
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
  
      // Set canvas size to be 100x100
      renderer.setSize(100, 100);
  
      const geometry = new THREE.SphereGeometry(radius, 32, 32); // Increased segments
  
      const positionAttribute = geometry.getAttribute('position');
  
      const noise3D = createNoise3D();
      const vertex = new THREE.Vector3();
      const noiseFactor = 0.1;
  
      const material = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          uniform float time;
          void main() {
            vec3 color1 = vec3(0.5 + 0.5 * sin(time), 0.5 + 0.5 * sin(time + 2.0), 0.5 + 0.5 * sin(time + 4.0));
            vec3 color2 = vec3(0.5 + 0.5 * sin(time + 6.0), 0.5 + 0.5 * sin(time + 8.0), 0.5 + 0.5 * sin(time + 10.0));
            vec3 color3 = vec3(0.5 + 0.5 * sin(time + 12.0), 0.5 + 0.5 * sin(time + 14.0), 0.5 + 0.5 * sin(time + 16.0));
            
            // Interpolate between colors based on vUv.x
            vec3 finalColor = mix(mix(color1, color2, smoothstep(0.0, 0.5, vUv.x)), color3, smoothstep(0.5, 1.0, vUv.x));
  
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `,
        transparent: true,
        uniforms: {
          time: { value: 0.0 },
        },
      });
  
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
  
      camera.position.z = 15;
  
      const animate = (time: number) => {
        requestAnimationFrame((t) => animate(t));
        material.uniforms.time.value = time * 0.001;
  
        sphere.rotation.x += 0.01 * spinDirectionX;
        sphere.rotation.y += 0.01 * spinDirectionY;
  
        for (let i = 0; i < positionAttribute.count; i++) {
          vertex.set(
            positionAttribute.getX(i),
            positionAttribute.getY(i),
            positionAttribute.getZ(i)
          );
  
          const displacement = noise3D(vertex.x * noiseFactor, vertex.y * noiseFactor, vertex.z * noiseFactor);
          vertex.setLength(radius + displacement);
  
          positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
  
        geometry.attributes.position.needsUpdate = true; // Make sure to update the position attribute
  
        renderer.render(scene, camera);
      };
  
      animate(0);
    }, [radius, spinDirectionX, spinDirectionY]);
  
    return <canvas ref={canvasRef} />;
  };
  
  export default SpinningSphere;