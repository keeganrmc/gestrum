# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-002`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- 3x2 Beat-Grid with 6 floating sound circles.
- Strict gesture semantics: 1 tap = 1 sound; 3s dwell = loop on measure; tap looping pad = stop loop.
- Pause All Loops button in header and via `Spacebar`.
- 16-Step Measure Timeline Bar with dynamic beat lighting and BPM slider (60–180 BPM).
- 12 Synthesized Presets accessible via pad sound configuration dialog.
- Custom audio sample upload & direct drag-and-drop onto any circle, persisted in IndexedDB.
- Luminous Hand Orbs tracking hands in real-time with MediaPipe Hands (with instant mouse/touch fallback).
- Velocity power scaling: strike speed scales audio gain, filter brightness, and shockwave ring radius.
- Layout Mode: free dragging and repositioning of sound blocks.
- MediaRecorder audio session export to `.webm`.
- Project export/import (`.gestrum` JSON) and debounced IndexedDB autosave.
- Help system with element spotlight glow rings.
- Offline service worker caching and version chip updates.

## What's Next
- Add visual step toggle inside pad config to let users draw custom 16-step rhythmic patterns per pad.
- Fine-tune MediaPipe gesture sensitivity for different lighting conditions.
- User testing session with real musicians/creators.

## Rules Learned
1. No raw camera feed: users prefer stylized luminous orbs over seeing their own camera stream.
2. The core action is *tapping the air*, not clapping.
3. 1 tap MUST strictly trigger the sound once; re-triggers require leaving and re-entering the hit-box.
4. Always provide an instant master pause/kill switch for looping audio.
