# Changelog

All notable changes to **Gestrum** will be documented in this file.

## [v00000-003] - 2026-10-14
### Added
- **Camera On/Off Toggle:** Camera button now fully shuts down active webcam media tracks and stops MediaPipe camera processing cleanly, clearing hand orbs when toggled off.
- **Per-Sound Loop Subdivision Speeds:** Added individual loop rate multipliers for every sound pad (`1/4`, `1/8`, `1/16`, `1/2`, `1/1`) accessible directly in the Sound Settings dialog.
- **Stationary Circles:** Removed pulsing/breathing radius animation; pads are now completely stationary and uniform in size (48px radius) for clean, precise hit alignment.
- **Expanded Sound Presets (15 Presets):** Added 808 Kick, Acoustic Snare, Trap Hi-Hat, Glitch Perc, Rimshot, Pitch Tom, Crystal Bell, Sci-Fi Laser, Cowbell, 808 Clap, Open Hat, Retro Synth Zap, Sub Bass Drop, Finger Snap, and Maraca Shaker.

### Fixed
- **Two-Handed Collision Debounce:** Implemented unified multi-hand batch hit-testing. Fixed the rapid stutter / machine-gun triggering bug when two hands are used simultaneously on screen. Enforced 160ms strike cooldown.

## [v00000-002] - 2026-10-14
### Added
- **Pause All Transport Button:** Instant pause/stop for all active looping sounds in header and via `Spacebar`.
- **16-Step Measure Timeline Bar:** Visual 4/4 measure bar with traveling beat playhead and rhythmic subdivision quantization.
- **Sound Presets Dialog:** 12 synthesized presets (808 Trap Kit, Acoustic Snare, Sci-Fi Laser, Crystal Bell, Cowbell, Clap, Open Hat).
- **Custom Audio Upload & Drag-and-Drop:** Directly upload or drag and drop any WAV/MP3 file onto any of the 6 pads to replace its sound. Audio is decoded and saved in IndexedDB.
- **BPM Slider & Display:** Live tempo adjustment from 60 to 180 BPM.

### Fixed
- **Strict Tapping Mechanics:** Fixed multi-triggering bug. 1 tap now strictly strikes the sound once. Holding continuously for 3 seconds engages looping on the measure. Tapping a looping pad turns it off.

## [v00000-001] - 2026-10-14
### Added
- Phase 1 walking skeleton & interactive testable alpha release.
- 3x2 Beat-Grid layout with full 808 Trap procedural Web Audio synthesis (Kick, Snare, Hi-Hat, Glitch Perc, Rimshot, Pitch Tom).
- Luminous Hand Orbs tracking fingertips in 3D space with particle motion trails (no camera selfie video shown).
- Velocity/power-sensitive air tapping: harder strikes trigger louder volume and expansive hot magenta shockwaves.
- 3-second dwell looping: holding a hand/pointer inside a pad charges a clockwise circular meter and locks an automated rhythmic loop.
- Layout Mode: toggle between Play and Layout to drag and reposition pads anywhere on the screen.
- Audio recording session export (`.webm` audio download).
- Project file save and open (`.gestrum` JSON).
- Accessible Help dialog with interactive glow-ring locator and About panel.
- PWA installability with offline service worker caching and version chip check.
