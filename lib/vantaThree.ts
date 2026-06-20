import * as THREE from "three";

type LegacyGeometryConstructor = new (...args: never[]) => THREE.BufferGeometry;

const LEGACY_GEOMETRY_ALIASES: Array<[string, LegacyGeometryConstructor]> = [
  ["PlaneBufferGeometry", THREE.PlaneGeometry as LegacyGeometryConstructor],
  ["BoxBufferGeometry", THREE.BoxGeometry as LegacyGeometryConstructor],
  ["SphereBufferGeometry", THREE.SphereGeometry as LegacyGeometryConstructor],
  ["CylinderBufferGeometry", THREE.CylinderGeometry as LegacyGeometryConstructor],
  ["RingBufferGeometry", THREE.RingGeometry as LegacyGeometryConstructor],
  ["TubeBufferGeometry", THREE.TubeGeometry as LegacyGeometryConstructor],
  ["ConeBufferGeometry", THREE.ConeGeometry as LegacyGeometryConstructor],
  ["CircleBufferGeometry", THREE.CircleGeometry as LegacyGeometryConstructor],
  ["TorusBufferGeometry", THREE.TorusGeometry as LegacyGeometryConstructor],
  ["TorusKnotBufferGeometry", THREE.TorusKnotGeometry as LegacyGeometryConstructor],
  ["PolyhedronBufferGeometry", THREE.PolyhedronGeometry as LegacyGeometryConstructor],
  ["IcosahedronBufferGeometry", THREE.IcosahedronGeometry as LegacyGeometryConstructor],
  ["OctahedronBufferGeometry", THREE.OctahedronGeometry as LegacyGeometryConstructor],
  ["TetrahedronBufferGeometry", THREE.TetrahedronGeometry as LegacyGeometryConstructor],
  [
    "DodecahedronBufferGeometry",
    THREE.DodecahedronGeometry as LegacyGeometryConstructor,
  ],
];

/**
 * 复制 THREE 并补齐 Vanta 需要的旧版 *BufferGeometry 别名。
 * 使用独立对象，避免 ESM 模块命名空间不可变的问题。
 */
export function getVantaTHREE(): typeof THREE {
  const patched = {
    ...THREE,
  } as typeof THREE & Record<string, LegacyGeometryConstructor>;

  for (const [legacy, modern] of LEGACY_GEOMETRY_ALIASES) {
    if (!patched[legacy]) {
      patched[legacy] = modern;
    }
  }

  return patched;
}
