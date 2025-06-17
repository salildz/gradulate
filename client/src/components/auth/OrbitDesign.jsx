import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const OrbitDesign = () => {
  const theme = useTheme();

  // Daha fazla parçacık ve daha büyük orbit
  const orbits = [
    /*     { radius: 200, particles: 12, speed: 25, size: 3.5, opacity: 0.9 },
     */ { radius: 280, particles: 16, speed: 35, size: 3, opacity: 0.8 },
    /*     { radius: 360, particles: 20, speed: 45, size: 2.5, opacity: 0.7 },
     */ { radius: 440, particles: 24, speed: 55, size: 2, opacity: 0.6 },
    /*     { radius: 520, particles: 28, speed: 65, size: 1.8, opacity: 0.5 },
     */
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(circle at center, transparent 0%, ${theme.palette.background.default}15 100%)`,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet" style={{ minWidth: "800px", minHeight: "600px" }}>
        <defs>
          <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g>
          {orbits.map((orbit, orbitIndex) => (
            <g key={`orbit-${orbitIndex}`} filter="url(#particleGlow)">
              {[...Array(orbit.particles)].map((_, i) => {
                const initialAngle = (360 / orbit.particles) * i + Math.random() * 60;
                const animationDelay = Math.random() * 4;

                const startX = 600 + orbit.radius * Math.cos((initialAngle * Math.PI) / 180);
                const startY = 400 + orbit.radius * Math.sin((initialAngle * Math.PI) / 180);

                return (
                  <circle
                    key={`particle-${orbitIndex}-${i}`}
                    cx={startX}
                    cy={startY}
                    r={orbit.size}
                    fill={theme.palette.primary.main}
                    opacity={orbit.opacity}
                    style={{
                      transformOrigin: "600px 400px",
                      animation: `orbit${orbitIndex} ${orbit.speed}s linear infinite`,
                      animationDelay: `${animationDelay}s`,
                    }}
                  >
                    <animate attributeName="opacity" values={`${orbit.opacity * 0.4};${orbit.opacity};${orbit.opacity * 0.4}`} dur={`${6 + Math.random() * 4}s`} repeatCount="indefinite" begin={`${animationDelay}s`} />
                  </circle>
                );
              })}
            </g>
          ))}

          {/* Daha fazla ambient parçacık */}
          <g>
            {[...Array(25)].map((_, i) => {
              const x = Math.random() * 1000 + 100;
              const y = Math.random() * 600 + 100;
              const size = Math.random() * 1.2 + 0.5;
              const opacity = Math.random() * 0.15 + 0.08;

              return (
                <circle key={`ambient-${i}`} cx={x} cy={y} r={size} fill={theme.palette.primary.light} opacity={opacity}>
                  <animate attributeName="opacity" values={`${opacity * 0.2};${opacity};${opacity * 0.2}`} dur={`${8 + Math.random() * 8}s`} repeatCount="indefinite" begin={`${Math.random() * 5}s`} />
                </circle>
              );
            })}
          </g>

          {/* Merkez konstelasyon - daha büyük */}
          <g>
            {[...Array(8)].map((_, i) => {
              const angle = i * 45 * (Math.PI / 180);
              const radius = 120;
              const x = 600 + Math.cos(angle) * radius;
              const y = 400 + Math.sin(angle) * radius;

              return (
                <circle key={`constellation-${i}`} cx={x} cy={y} r="2" fill={theme.palette.secondary.main} opacity="0.8">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="5s" repeatCount="indefinite" begin={`${i * 0.6}s`} />
                </circle>
              );
            })}
          </g>

          {/* İç orbit çizgileri - görsel zenginlik */}
          {orbits.slice(0, 3).map((orbit, index) => (
            <circle key={`orbit-ring-${index}`} cx="600" cy="400" r={orbit.radius} fill="none" stroke={theme.palette.primary.main} strokeWidth="0.5" opacity="0.1" strokeDasharray="5,10">
              <animateTransform attributeName="transform" type="rotate" values="0 600 400;360 600 400" dur={`${orbit.speed * 2}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* Merkez yazısı - daha büyük ve belirgin */}
        <text x="600" y="400" textAnchor="middle" fontSize="64" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="350" fill={theme.palette.primary.main} opacity="0.95" letterSpacing="6px" filter="url(#textGlow)">
          GRADULATE
          <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
        </text>

        <text x="600" y="440" textAnchor="middle" fontSize="16" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="300" fill={theme.palette.text.secondary} opacity="0.8" letterSpacing="3px">
          Plan Your Academic Journey
          {/* <animate attributeName="opacity" values="0.5;0.9;0.5" dur="6s" repeatCount="indefinite" begin="2s" /> */}
        </text>

        {/* Alt yazı */}
        <text x="600" y="470" textAnchor="middle" fontSize="12" fontFamily="'Inter', 'Segoe UI', sans-serif" fontWeight="200" fill={theme.palette.text.disabled} opacity="0.6" letterSpacing="2px">
          Track • Plan • Succeed
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" begin="4s" />
        </text>
      </svg>

      {/* CSS animasyonları */}
      <style jsx>{`
        @keyframes orbit0 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit1 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes orbit2 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit3 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes orbit4 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default OrbitDesign;
