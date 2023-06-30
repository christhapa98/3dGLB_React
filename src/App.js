import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { MyAvatar } from './Avatar';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div style={{backgroundImage:`url("https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1920")`}}>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <MyAvatar position={[0.025, -0.9, 0]}
          />
        </Suspense>
        <OrbitControls
          autoRotate={false} enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}

export default App;
