# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-003`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- 3x2 Beat-Grid with 6 stationary sound circles (uniform size, 48px radius, no pulsing distraction).
- Full Camera On/Off Toggle: cleanly stops camera media tracks, shuts down MediaPipe processing, and clears hand orbs.
- Two-Handed Collision Debounce: unified multi-hand batch hit-testing eliminates double-triggering / machine-gun stutter when playing with two hands.
- Per-sound loop subdivision speeds (`1/4`, `1/8`, `1/16`, `1/2`, `1/1`).
- Strict gesture semantics: 1 tap = 1 sound; 3s dwell = loop on measure; tap looping pad = stop loop.
- Pause All Loops button in header and via `Spacebar`.
- 16-Step Measure Timeline Bar with dynamic beat lighting and BPM slider (60–180 BPM).
- 15 Synthesized Presets accessible via pad sound configuration dialog (including sub bass drop, laser, zap, bells, snaps, etc.).
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
3. Circles must be stationary and uniform in size for clean hit targeting.
4. Camera toggle must completely shut down camera tracks and clear hand tracking orbs.
5. Multi-hand hit testing must be batched together to prevent alternate-frame collision resets.
6. Always provide per-pad loop subdivision speed control and an instant master pause/kill switch.
