# Gestrum

> A touchless, in-browser air-percussion instrument. Tap the air to play, hold to loop, and sculpt your sound.

**Live App:** [https://keeganrmc.github.io/gestrum/](https://keeganrmc.github.io/gestrum/)  
**Author:** Keegan McConnell  
**Version:** `v00000-006`  
**License:** MIT  

---

## What It Is
**Gestrum** (Gesture + Drum) is an embodied, camera-powered musical instrument and live looper running entirely in your browser. Using real-time computer vision, it translates physical hand gestures into floating luminous percussion:
- **Gateway Landing Page:** A complete, beautifully styled introductory experience detailing how Gestrum works, its feature set, quick start guide, creator story, open-source licensing, and future roadmap before launching the instrument.
- **Three Curated Themes & Sound Engines:** Switch between **Hip-Hop / 808** (Cyber Neon, 120 BPM), **Rock & Roll** (Crimson Stage, 132 BPM), and **Midnight Jazz** (Velvet Lounge, 100 BPM) with dedicated procedural synthesis and theme-reactive styling.
- **Velocity-Sensitive Air Tapping:** Tap down into floating spatial sound pads. Gentle taps produce soft hits; hard strikes fire punchy, bright attacks with expansive neon shockwave rings.
- **3x2 Beat-Grid Layout & Dynamic Resizing:** Six sound pads arranged in an intuitive two-row by three-column grid. Move pads freely in Layout Mode, pick from 5 rounded shapes, and scale pad radius (which acoustically tunes drum pitch and resonance).
- **Luminous Hand Orbs:** No raw webcam selfie video is shown; instead, your hands are visualized as floating luminous orbs tracking your fingertips in 3D space with fluid motion trails.
- **3-Second Dwell Looping:** Hold your fingertip inside any pad for 3 seconds to lock it into an automated rhythmic loop synchronized to a 16-step visual measure bar.
- **Custom Sound Uploads & 25+ Presets:** Drag and drop custom audio samples (WAV, MP3) directly onto any pad or choose from categorized genre presets.
- **Zero Backend, 100% Offline:** Built as a single-file Progressive Web App (PWA). All video processing and audio synthesis happen locally on your computer. Nothing is ever uploaded to a server.

---

## How to Play
1. Visit the live app to explore the landing page and select your starting kit.
2. Click **Launch Gestrum** and enable the camera in the top bar (or play immediately with mouse/touch).
3. Tap your index fingertips down into the floating pads.
4. Hold your hand in place for 3 seconds to lock in a loop.
5. Click **Layout** to drag or resize pads to suit your reach.
6. Click **Landing Page** in the header to return to the guide and documentation anytime.

---

## Technical Architecture & Open Source Credits
- **Vision:** Google MediaPipe Hands 3D Landmark Tracking running client-side (Apache 2.0).
- **Sound:** Native Web Audio API procedural synthesis with zero external dependencies.
- **Persistence:** Autosaved locally to IndexedDB with `.gestrum` project file import/export.
- **Format:** Single-file HTML5 PWA conforming to `Single_File_HTML_App_Template.TXT`.
- **License:** MIT License (© 2026 Keegan McConnell).
