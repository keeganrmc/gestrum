# KinetiClap

> A touchless, in-browser air-percussion instrument. Tap the air to play, hold to loop, and sculpt your sound.

**Live App:** [https://keeganrmc.github.io/kineticlap/](https://keeganrmc.github.io/kineticlap/)  
**Author:** Keegan McConnell  
**License:** MIT  

---

## What It Is
**KinetiClap** is an embodied, camera-powered musical instrument running entirely in your browser. Using real-time computer vision, it tracks your fingertips in three-dimensional space:
- **Velocity-Sensitive Air Tapping:** Tap down into floating spatial sound pads. Gentle taps produce soft hits; hard strikes fire punchy, bright attacks with expansive neon shockwave rings.
- **3-Second Dwell Looping:** Hold your fingertip inside any pad for 3 seconds to lock it into an automated rhythmic loop.
- **Movable Sound Blocks:** Drag pads around your screen to adapt the layout to your arm span and seating position.
- **Zero Backend, 100% Offline:** Built as a single-file Progressive Web App (PWA). All video processing and audio synthesis happen locally on your computer. Nothing is ever uploaded to a server.

---

## How to Play
1. Open the live app and allow webcam access.
2. Wave your hands or tap your index fingers into the floating pads.
3. Hold your hand in place for 3 seconds to lock in a loop.
4. Drag circles to rearrange your drum kit.

---

## Technical Architecture
- **Vision:** MediaPipe Hands 3D Landmark Tracking running client-side.
- **Sound:** Native Web Audio API procedural synthesis (Kick, Snare, Hi-Hats, Toms, Claps) + custom sample support.
- **Persistence:** Autosaved locally to IndexedDB with `.kineticlap` project file import/export.
- **Format:** Single-file HTML5 PWA conforming to `Single_File_HTML_App_Template.TXT`.
