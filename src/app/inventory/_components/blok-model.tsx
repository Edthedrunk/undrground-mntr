/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    SuperToroid001: THREE.Mesh;
    SuperToroid001_1: THREE.Mesh;
    SuperToroid001_2: THREE.Mesh;
    SuperToroid001_3: THREE.Mesh;
    SuperToroid001_4: THREE.Mesh;
    SuperToroid001_5: THREE.Mesh;
    SuperToroid001_6: THREE.Mesh;
    SuperToroid001_7: THREE.Mesh;
  };
  materials: {
    ["Metal"]: THREE.MeshStandardMaterial;
    ["Gold"]: THREE.MeshStandardMaterial;
    ["Black"]: THREE.MeshStandardMaterial;
    ["Blue"]: THREE.MeshStandardMaterial;
    ["Lime"]: THREE.MeshStandardMaterial;
    ["Orange"]: THREE.MeshStandardMaterial;
    ["Pink"]: THREE.MeshStandardMaterial;
    ["White"]: THREE.MeshStandardMaterial;
  };
};

export function BlokModel(
  props: JSX.IntrinsicElements["group"] & {
    color:
      | "Black"
      | "White"
      | "Orange"
      | "Lime"
      | "Blue"
      | "Gold"
      | "Pink"
      | "Metal";
    flipped: boolean;
  }
) {
  const { nodes, materials } = useGLTF("/blok.glb") as GLTFResult;
  return (
    <group rotation={props.rotation}>
      <group
        rotation={
          props.flipped ? [0, Math.PI / 2, -Math.PI / 2] : [0, -Math.PI / 2, 0]
        }
        position={[0, 0, 2.2]}
        scale={[0.3, 0.3, 0.3]}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SuperToroid001.geometry}
          material={materials["Metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SuperToroid001_1.geometry}
          material={materials[props.color]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/blok.glb");