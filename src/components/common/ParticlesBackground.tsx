import React, { useEffect, useState } from "react";

import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// --- custom extensions to allow min/area ---
type ExtendedAnimationOptions = {
  enable?: boolean;
  speed?: number;
  min?: number; // 👈 allow min
  sync?: boolean;
};

type ExtendedDensityOptions = {
  enable?: boolean;
  area?: number; // 👈 allow area
};

interface ExtendedSourceOptions extends ISourceOptions {
  particles?: ISourceOptions["particles"] & {
    number?: {
      value?: number;
      density?: ExtendedDensityOptions;
    };
    opacity?: {
      value?: number;
      animation?: ExtendedAnimationOptions;
    };
    size?: {
      value?: { min: number; max: number };
      animation?: ExtendedAnimationOptions;
    };
  };
}

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ExtendedSourceOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 200 },
      },
      color: { value: ["#fda7df", "#d980fa"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 1,
          min: 0.3, // ✅ allowed
          sync: false,
        },
      },
      size: {
        value: { min: 2, max: 4 },
        animation: {
          enable: true,
          speed: 2,
          min: 0.3, // ✅ allowed
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 60, duration: 1 },
        push: { quantity: 1 },
      },
    },
  };

  if (!init) return null;

  return <Particles id="firefly-particles" className="absolute inset-0 z-0" options={options} />;
};

export default ParticlesBackground;
