
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItemProps {
  text: string;
  position: [number, number, number];
  onClick: () => void;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, position, onClick, active }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group
        position={position}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.8, 0]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={1}
            thickness={0.3}
            chromaticAberration={0.06}
            anisotropy={0.1}
            envMapIntensity={0.8}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.2}
            transmission={1}
            roughness={0.1}
            metalness={0.1}
            reflectivity={0.6}
            clearcoat={1}
            clearcoatRoughness={0.4}
            color={active ? "#0b89e7" : hovered ? "#7cc2fb" : "#e0eefe"}
          />
        </mesh>
        <Text
          position={[0, 0, 1]}
          fontSize={0.4}
          color={active ? "#0b89e7" : hovered ? "#0b89e7" : "#333"}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

interface ThreeSceneProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ activeSection, onNavigate }) => {
  const isMobile = useIsMobile();
  const navItems = [
    { text: "Home", id: "home", position: [-2.5, 0, 0] },
    { text: "About", id: "about", position: [-0.9, 0, 0] },
    { text: "Projects", id: "projects", position: [0.7, 0, 0] },
    { text: "Certifications", id: "certifications", position: [2.3, 0, 0] },
  ];

  if (isMobile) {
    return null;
  }

  return (
    <div className="h-24 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#e0eefe" />
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            text={item.text}
            position={item.position as [number, number, number]}
            onClick={() => onNavigate(item.id)}
            active={activeSection === item.id}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
