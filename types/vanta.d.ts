declare module "vanta/dist/vanta.birds.min" {
  import type * as THREE from "three";

  interface VantaBirdsOptions {
    el: HTMLElement | string;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    colorMode?: string;
    birdSize?: number;
    wingSpan?: number;
    speedLimit?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  export default function BIRDS(options: VantaBirdsOptions): VantaEffect;
}

declare module "vanta/dist/vanta.net.min" {
  import type * as THREE from "three";

  interface VantaNetOptions {
    el: HTMLElement | string;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  export default function NET(options: VantaNetOptions): VantaEffect;
}
