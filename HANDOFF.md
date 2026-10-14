# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-001`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- 3x2 Beat-Grid with 6 floating sound circles (808 Sub-Kick, Trap Snare, Hi-Hat, Glitch Perc, Rimshot, Tom).
- Zero-dependency procedural 808 synthesis using browser Web Audio API.
- Luminous Hand Orbs tracking hands in real-time with MediaPipe Hands (with instant mouse/touch pointer fallback).
- Velocity power scaling: strike speed scales audio gain, filter brightness, and shockwave ring radius.
- 3-second dwell looping with clockwise radial progress gauge.
- Layout Mode: free dragging and repositioning of sound blocks.
- MediaRecorder audio session export to `.webm`.
- Project export/import (`.gestrum` JSON) and debounced IndexedDB autosave.
- Help system with element spotlight glow rings.
- Offline service worker caching and version chip updates.

## What's Next
- Add custom sample drop-zone upload direct onto individual pads.
- Add preset kit selector (Acoustic Kit, Lo-Fi, Sci-Fi Bells).
- Fine-tune MediaPipe gesture sensitivity and debounce threshold.
- Run user testing with design reviewer / peers.

## Rules Learned
1. No raw camera feed: users prefer stylized luminous orbs over seeing their own camera stream.
2. The core action is *tapping the air*, not clapping.
3. Keep dev-only review markup tools in `tools/` and gitignored.
