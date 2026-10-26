# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-004`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- **5 Pad Shapes (All Rounded Corners):** Circle, Square (Squircle), Triangle, Diamond, and Heart with zero sharp corners or vertices.
- **Dynamic Pad Resizing:** Adjustable radius from 28px to 96px with quick preset pills (`S:36px`, `M:48px`, `L:64px`, `XL:80px`), slider, stepper buttons, and mouse wheel / trackpad scroll resizing.
- **On-Stage Floating Layout Toolbar:** Docked inspector bar active in Layout Mode for immediate shape swapping, sizing, preset pills, "All Shapes", "All Sizes", "Reset 3x2 Grid", and sound configuration.
- **On-Canvas Resize Handle:** Direct drag-to-resize handle (`⤡`) on selected pads on stage.
- **Shape-Echo Shockwaves & Contour Loops:** Striking a shape produces a neon shockwave that matches its geometric silhouette; 3-second dwell looping indicator traces around the exact shape contour.
- **Acoustic Pitch & Body Resonance Scaling:** Percussion sound engine scales pitch and decay dynamically by pad size (larger pads = deeper rumble/longer sustain; smaller pads = tighter attack/higher snap).
- **3x2 Beat-Grid Foundation:** Uniform initial layout with 6 pads, fully repositionable in Layout Mode.
- **Full Camera On/Off Toggle:** cleanly stops camera media tracks, shuts down MediaPipe processing, and clears hand orbs.
- **Two-Handed Collision Debounce:** unified multi-hand batch hit-testing eliminates double-triggering / machine-gun stutter when playing with two hands.
- **Per-sound loop subdivision speeds:** (`1/4`, `1/8`, `1/16`, `1/2`, `1/1`).
- **Strict gesture semantics:** 1 tap = 1 sound; 3s dwell = loop on measure; tap looping pad = stop loop.
- **Pause All Loops button:** in header and via `Spacebar`.
- **16-Step Measure Timeline Bar:** with dynamic beat lighting and BPM slider (60–180 BPM).
- **15 Synthesized Presets:** accessible via pad sound configuration dialog (including sub bass drop, laser, zap, bells, snaps, etc.).
- **Custom audio sample upload & direct drag-and-drop:** onto any pad, persisted in IndexedDB.
- **Luminous Hand Orbs:** tracking hands in real-time with MediaPipe Hands (with instant mouse/touch fallback).
- **Velocity power scaling:** strike speed scales audio gain, filter brightness, and shockwave ring radius.
- **MediaRecorder audio session export:** to `.webm`.
- **Project export/import:** (`.gestrum` JSON) and debounced IndexedDB autosave.
- **Help system:** with element spotlight glow rings.
- **Offline service worker caching:** and version chip updates.

## What's Next
- Add visual step toggle inside pad config to let users draw custom 16-step rhythmic patterns per pad.
- Fine-tune MediaPipe gesture sensitivity for different lighting conditions.
- User testing session with real musicians/creators.

## Rules Learned
1. No raw camera feed: users prefer stylized luminous orbs over seeing their own camera stream.
2. The core action is *tapping the air*, not clapping.
3. Circles and shapes must have rounded corners (no sharp vertices) to look fluid and organic.
4. Camera toggle must completely shut down camera tracks and clear hand tracking orbs.
5. Multi-hand hit testing must be batched together to prevent alternate-frame collision resets.
6. In Layout Mode, distinguish clearly between dragging to move, dragging to resize, mouse-wheel resizing, and clicking to configure.
7. Always provide per-pad loop subdivision speed control and an instant master pause/kill switch.
