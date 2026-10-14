# Gestrum

> A touchless, in-browser air-percussion instrument. Tap the air to play, hold to loop, and sculpt your sound.

**Live App:** [https://keeganrmc.github.io/gestrum/](https://keeganrmc.github.io/gestrum/)  
**Author:** Keegan McConnell  
**License:** MIT  

---

## What It Is
**Gestrum** (Gesture + Drum) is an embodied, camera-powered musical instrument running entirely in your browser. Using real-time computer vision, it translates physical hand gestures into floating luminous energy:
- **Velocity-Sensitive Air Tapping:** Tap down into floating spatial sound pads. Gentle taps produce soft hits; hard strikes fire punchy, bright attacks with expansive neon shockwave rings.
- **3x2 Beat-Grid Layout:** Six sound pads arranged in an intuitive two-row by three-column grid, featuring a hard-hitting 808 Trap & Hip-Hop base kit (Sub-Kick, Trap Snare, 808 Toms, Hi-Hats, Glitch Perc, and Rimshot).
- **Luminous Hand Orbs:** No raw webcam selfie video is shown; instead, your hands are visualized as floating luminous orbs tracking your fingertips in 3D space with fluid motion trails.
- **3-Second Dwell Looping:** Hold your fingertip inside any pad for 3 seconds to lock it into an automated rhythmic loop.
- **Custom Sound Uploads & Movable Blocks:** Drag pads around your screen to customize your layout, or upload custom audio samples (WAV, MP3) directly onto any pad.
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
- **Sound:** Native Web Audio API procedural synthesis (808 Kit) + user sample upload support.
- **Persistence:** Autosaved locally to IndexedDB with `.gestrum` project file import/export.
- **Format:** Single-file HTML5 PWA conforming to `Single_File_HTML_App_Template.TXT`.
