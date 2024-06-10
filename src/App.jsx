import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Text } from "@react-three/drei";
function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
