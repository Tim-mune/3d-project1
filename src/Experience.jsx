import { useControls } from "leva";
import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useMatcapTexture,
  useGLTF,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  // const { distanceFactor, posX, posY, posZ, rotX, rotY, rotZ } = useControls({
  //   distanceFactor: { value: 1.8, min: 0.1, max: 5, step: 0.1 },
  //   posX: { value: 0, min: -5, max: 5, step: 0.01 },
  //   posY: { value: 1.56, min: -5, max: 5, step: 0.01 },
  //   posZ: { value: -3.4, min: -10, max: 5, step: 0.01 },
  //   rotX: { value: -0.15, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  //   rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
  // });
  const metcapMaterial = useMatcapTexture("293D21_ABC692_73B255_667C5C", 256);
  return (
    <>
      <color args={["#ffff00"]} attach={"background"} />
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.1, -0.1]}
        azimuth={[-0.2, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.2}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive object={computer.scene} position-y={-3} scale={2}>
            <Html
              transform
              wrapperClass="myIframe"
              distanceFactor={1.3}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.1}
            >
              <iframe src="https://next-js-portfolio-jet-seven.vercel.app/"></iframe>
            </Html>
          </primitive>

          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[3, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            Tim Codes
            <meshMatcapMaterial matcap={metcapMaterial} />
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
