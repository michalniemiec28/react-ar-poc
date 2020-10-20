import React from 'react';
import s from './App.module.scss'

const App = () => (
  <div className={s.wrapper}>
    <div className={s.discovery}>
      <h1>
        Augmented Reality Proof of Concept
      </h1>
      <p>
        To show this 3D element in AR, click the button.
        It works only on devices that uses WebXR, Google Scene Viewer or iOS Quick Look.
      </p>
    </div>
    <model-viewer
      src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
      ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
      quick-look-browsers="safari chrome"
      alt="A 3D model of an astronaut"
      ar
      camera-controls
      auto-rotate
    >
      <div className={s.placeholder}>
        This is an example text displayed on Augmented Reality.
      </div>
    </model-viewer>
  </div>
);

export default App
