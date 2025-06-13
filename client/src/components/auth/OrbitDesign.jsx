import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const OrbitDesign = () => {
  const theme = useTheme();

  // Optimize edilmiş orbit konfigürasyonu
  const orbits = [
    { radius: 180, particles: 12, speed: 25, size: 2.5, opacity: 0.9 },
    { radius: 280, particles: 18, speed: 35, size: 2, opacity: 0.8 },
    { radius: 380, particles: 24, speed: 45, size: 1.8, opacity: 0.7 },
    { radius: 480, particles: 30, speed: 55, size: 1.5, opacity: 0.6 },
    { radius: 580, particles: 36, speed: 65, size: 1.2, opacity: 0.5 },
    { radius: 680, particles: 42, speed: 75, size: 1, opacity: 0.45 },
    { radius: 780, particles: 48, speed: 85, size: 0.8, opacity: 0.4 },
    { radius: 880, particles: 54, speed: 95, size: 0.6, opacity: 0.35 },
    { radius: 980, particles: 60, speed: 105, size: 0.4, opacity: 0.3 },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        background: `radial-gradient(circle at center, transparent 0%, ${theme.palette.background.default}15 100%)`,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1920 1080">
        <defs>
          <filter id="particleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {orbits.map((orbit, orbitIndex) => (
          <g key={`orbit-${orbitIndex}`} filter="url(#particleGlow)">
            {[...Array(orbit.particles)].map((_, i) => {
              const angleOffset = (360 / orbit.particles) * i;
              const randomDelay = Math.random() * 5;
              const direction = orbitIndex % 2 === 0 ? 1 : -1;

              return (
                <circle key={`particle-${orbitIndex}-${i}`} cx={960 + orbit.radius} cy={540} r={orbit.size} fill={theme.palette.primary.main} opacity={orbit.opacity}>
                  <animateTransform attributeName="transform" type="rotate" values={`${angleOffset} 960 540; ${angleOffset + 360 * direction} 960 540`} dur={`${orbit.speed}s`} repeatCount="indefinite" begin={`${randomDelay}s`} />
                  <animate attributeName="opacity" values={`${orbit.opacity * 0.3};${orbit.opacity};${orbit.opacity * 0.3}`} dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" begin={`${randomDelay}s`} />
                </circle>
              );
            })}
          </g>
        ))}

        <g>
          {[...Array(25)].map((_, i) => {
            const x = Math.random() * 1920;
            const y = Math.random() * 1080;
            const size = Math.random() * 1 + 0.5;
            const opacity = Math.random() * 0.2 + 0.1;

            return (
              <circle key={`ambient-${i}`} cx={x} cy={y} r={size} fill={theme.palette.primary.light} opacity={opacity}>
                <animate attributeName="opacity" values={`${opacity * 0.2};${opacity};${opacity * 0.2}`} dur={`${8 + Math.random() * 8}s`} repeatCount="indefinite" begin={`${Math.random() * 5}s`} />
                <animateTransform attributeName="transform" type="translate" values={`0 0; ${(Math.random() - 0.5) * 20} ${(Math.random() - 0.5) * 20}; 0 0`} dur={`${15 + Math.random() * 10}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>

        <g>
          {[...Array(8)].map((_, i) => {
            const angle = i * 45 * (Math.PI / 180);
            const innerRadius = 80;
            const x = 960 + Math.cos(angle) * innerRadius;
            const y = 540 + Math.sin(angle) * innerRadius;

            return (
              <circle key={`constellation-${i}`} cx={x} cy={y} r="2" fill={theme.palette.secondary.main} opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" begin={`${i * 0.5}s`} />
                <animateTransform attributeName="transform" type="rotate" values={`0 960 540; 360 960 540`} dur="30s" repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>

        <text x="960" y="540" textAnchor="middle" fontSize="44" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="300" fill={theme.palette.primary.main} opacity="0.9" letterSpacing="4px">
          GRADULATE
          <animate attributeName="opacity" values="0.7;1;0.7" dur="6s" repeatCount="indefinite" />
        </text>

        <text x="960" y="580" textAnchor="middle" fontSize="12" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="200" fill={theme.palette.text.secondary} opacity="0.6" letterSpacing="2px">
          Plan Your Academic Journey
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="8s" repeatCount="indefinite" begin="2s" />
        </text>
      </svg>
    </Box>
  );
};

export default OrbitDesign;
