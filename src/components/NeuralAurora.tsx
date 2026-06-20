import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const NeuralAurora: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    camera.position.y = 15;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Set initial background color based on theme
    const isDark = theme === 'dark';
    scene.fog = new THREE.FogExp2(isDark ? 0x09100b : 0xfafafa, 0.015);

    // 2. Create Particle Grid Geometry
    const numParticles = 4000;
    const cols = 80;
    const rows = 50;
    const spacing = 2.0;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);

    const colorDark = new THREE.Color('#10B981'); // Emerald
    const colorLight = new THREE.Color('#34D399'); // Mint

    for (let i = 0; i < numParticles; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Center the grid
      const x = (col - cols / 2) * spacing;
      const z = (row - rows / 2) * spacing;
      const y = 0;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation
      const mixRatio = Math.random();
      const finalColor = colorDark.clone().lerp(colorLight, mixRatio);
      colors[i * 3] = finalColor.r;
      colors[i * 3 + 1] = finalColor.g;
      colors[i * 3 + 2] = finalColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (circle helper)
    const createCircleTexture = () => {
      const size = 16;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const material = new THREE.PointsMaterial({
      size: 0.6,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.65 : 0.4,
      map: createCircleTexture(),
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Mouse Interaction variables
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 4. Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
      const array = positionAttr.array as Float32Array;

      // Smoothly interpolate mouse position
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Update particle heights based on waves & mouse proximity
      for (let i = 0; i < numParticles; i++) {
        const x = array[i * 3];
        const z = array[i * 3 + 2];

        // 3D Wave formulas
        const wave1 = Math.sin(x * 0.1 + elapsedTime * 0.8) * 2.5;
        const wave2 = Math.cos(z * 0.15 + elapsedTime * 0.6) * 2.5;
        const wave3 = Math.sin((x + z) * 0.05 + elapsedTime * 0.4) * 3.0;
        
        let y = wave1 + wave2 + wave3;

        // Proximity to mouse logic
        // Project mouse coordinates into 3D grid space
        const mouseWorldX = mouse.x * 40;
        const mouseWorldZ = -mouse.y * 30;
        
        const dx = x - mouseWorldX;
        const dz = z - mouseWorldZ;
        const distance = Math.sqrt(dx * dx + dz * dz);

        // Pull particles slightly toward or push away from mouse
        if (distance < 20) {
          const force = (20 - distance) / 20; // 0 to 1
          y += Math.sin(elapsedTime * 4 + distance * 0.5) * 5.0 * force;
        }

        array[i * 3 + 1] = y;
      }

      positionAttr.needsUpdate = true;

      // Subtle scene rotation based on mouse
      particles.rotation.y = elapsedTime * 0.02 + mouse.x * 0.08;
      particles.rotation.x = mouse.y * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 5. Handle Resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Update theme colors dynamically on state change
  useEffect(() => {
    if (!canvasRef.current) return;

    // Direct DOM styling for parent container to keep transparent canvas sync
    if (containerRef.current) {
      containerRef.current.style.transition = 'background-color 300ms ease';
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 w-screen h-screen overflow-hidden select-none pointer-events-none bg-bg"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-70 dark:opacity-50"
      />
    </div>
  );
};
export default NeuralAurora;
