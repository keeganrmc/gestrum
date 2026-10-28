# Changelog

All notable changes to **Gestrum** will be documented in this file.

## [v00000-009] - 2026-10-27
### Fixed & Streamlined
- **Complete Layout Separation & Opaque Hover Cards:**
  - Converted `.landing-view` container to `display: block` to eliminate flexbox shrink/basis quirks.
  - Set `.lp-kit-card:hover` to a solid, opaque background (`#1a202c`, `#221316`, `#181b28`) eliminating unwanted transparency on hover.
  - Added 48px margin below the kit cards and 64px padding above `.lp-section`, creating over 180px of clear vertical breathing room between the 3 kit cards and the "Tactile Air-Percussion" header.
- **Removed "Play drums in mid-air" Title:**
  - Removed `<h1 class="lp-hero-title">Play drums in mid-air.</h1>` entirely from the landing hero as requested, providing an ultra-clean entrance straight into the value statement and interactive kits.
- **Network-First Service Worker Strategy:**
  - Updated `sw.js` fetch listener to a Network-First strategy for HTML navigation and document requests so live GitHub Pages deployments and local edits appear immediately without being blocked by stale service worker caches.
  - Bumped cache to `gestrum-v00000-009`.

## [v00000-008] - 2026-10-27
### Fixed & Refined
- **Landing Page Layout Separation:** Fixed section overlap where "Tactile Air-Percussion" was covered by the three genre kit cards due to global `header` height inheritance. Scoped studio header styles to `header#app-header`, converted hero wrapper to `<section class="lp-hero">` with dynamic height (`height: auto !important`), and added generous vertical clearance (`margin-bottom: 32px` on `.lp-kits-row`).
- **Creator Design Statement:** Updated designer bio to prominently feature Keegan McConnell's design statement quote: *“I design products that solve real-world problems and address real user needs.”* styled with cyan accent border and bold typography.
- **Web Bar Logo & Favicon Integration:**
  - Added dedicated `favicon.ico` and PNG favicons (`logo.png` 192x192, 96x96, 32x32) into `<head>` and `manifest.webmanifest`.
  - Replaced CSS mask in top navigation bars (`#lp-nav-brand` and `#brand-logo-mark`) with direct transparent `<img src="logo.png">` elements to ensure the authentic Gestrum air-drum logo displays reliably across all browser tabs, PWA window title bars, and local file views.
- **Service Worker Cache:** Bumped cache to `gestrum-v00000-008` precaching `favicon.ico`.

## [v00000-007] - 2026-10-27
### Changed & Streamlined
- **Intriguing, Visual & Symbol-Driven Launch Gateway:**
  - **Zero AI Slop / Word-Count Reduction:** Replaced dense text blocks with punchy headlines, metric badges, and visual flow cards.
  - **Visual Hero:** Punchy headline (*"Play drums in mid-air."*), feature pills (`60 FPS On-Device Vision`, `Procedural Web Audio`, `100% Client-Side Privacy`), and direct action buttons.
  - **Kit Tag Strips:** Replaced descriptive paragraphs with compact instrument tag pills (`Sub Kick`, `Trap Snare`, `Heavy Kick`, `Overdrive`, `Brushed Snare`, `Upright Bass`) that live-preview themes on click.
  - **4-Step Visual Flow Cards:** Embedded custom SVG iconography for `01 / TRACK`, `02 / STRIKE`, `03 / LOOP`, and `04 / SCULPT`.
  - **Dual Physical Design Showcase:** Side-by-side presentation of creator Keegan McConnell's physical industrial design work (*CleanStep Cat Care Architecture* and *ALINE Ultralight Seating*) with high-res photography, physical specs, and portfolio links.
  - **Discreet Right-Aligned Footer:** Completely removed bottom CTA banners, redundant launch buttons, and left-side headers. The footer now strictly contains quiet, right-aligned text and portfolio/GitHub links.
- **Service Worker & Cache:**
  - Bumped cache to `gestrum-v00000-007` with `work-cleanstep.png` and `work-aline.png` precached for offline PWA operation.
  - Added unconditional `self.skipWaiting()` on install to purge older service worker caches across devices immediately.

## [v00000-006] - 2026-10-27
### Added
- **Streamlined & Elevated Launch Page:** Completely revamped the gateway experience with high design hygiene, eliminating generic templates and AI fluff:
  - **Editorial Hero & Concept:** Clear statement of purpose, typography, live theme-reactive air-drum logo, and instant launch actions.
  - **Three Curated Kits Strip:** Interactive preview cards for Hip-Hop / 808 (120 BPM), Rock & Roll (132 BPM), and Midnight Jazz (100 BPM) with real-time palette shifts and acoustic feedback.
  - **Interaction & Sound Architecture (01 Strike, 02 Dwell, 03 Synthesis, 04 Sculpt):** Concise explanation of MediaPipe 21-joint velocity downstrokes, 3-second dwell looping on a 16-step grid, zero-dependency Web Audio DSP synthesis, and spatial pad repositioning.
  - **Designer Bio & Physical Work Showcase:** Authentic bio for creator Keegan McConnell (Industrial Design Senior @ KCAD, Technical Illustrator @ Haworth, prior engineering foundation @ MSU) with direct link to [`keeganmcconnell.myportfolio.com`](https://keeganmcconnell.myportfolio.com/) and real portfolio photography of his physical industrial design work (*CleanStep Odor-Free Cat Care Architecture*).
  - **Privacy & Open Source Standards:** Documented 100% on-device vision processing (volatile memory, zero network transmission), MIT License, Google MediaPipe (Apache 2.0), and planned roadmap (16-step pattern sequencer per pad and Web MIDI API integration).
  - **Minimalist Footer:** Eliminated cluttered promotional banners in favor of a clean, sophisticated bottom navigation bar.
- **Offline Cache Update:** Added `work-cleanstep.png` to `sw.js` cache manifest and updated version to `v00000-006`.

## [v00000-005] - 2026-10-25
### Added
- **Theme-Reactive Air-Drum Logo:** Replaced the generic "G" letter mark with the user's custom air-drum instrument logo. Using CSS vector masking and drop-shadow bloom, the drum, rim, and floating orbs dynamically transform their gradient and neon glow to match the active theme (Cyber Cyan/Magenta in Hip-Hop, Molten Crimson/Amber in Rock, and Champagne Gold/Indigo in Jazz). Clicking the logo triggers an acoustic strike and playful bounce animation.
- **Top Theme Dropdown Menu:** Header dropdown selector allowing instant switching between three distinct genres and visual/acoustic themes:
  - 🎧 **Hip-Hop / 808 (Cyber Neon):** Neon cyan and magenta cyber aesthetic, 120 BPM, flagship 808 Trap kit (808 Sub Kick, Trap Snare, 808 Closed Hat, Glitch Perc, 808 Rimshot, 808 Tom).
  - 🎸 **Rock & Roll (Crimson Stage):** High-octane arena concert aesthetic with deep crimson red, fiery molten amber, electric gold highlights, smoke/charcoal stage gradient, 132 BPM, and authentic acoustic rock instruments (Stadium Heavy Kick, Punch Snare, Explosive Crash Cymbal, Rack Tom, Deep Booming Floor Tom, and an Overdriven Electric Guitar Power Chord with amplifier cabinet emulation).
  - 🎷 **Midnight Jazz (Velvet Lounge):** Smoky Blue Note jazz lounge aesthetic with warm champagne gold/brass, deep velvet midnight blue, pearl ivory highlights, 100 BPM, and silky acoustic jazz instruments (Bebop Warm Felt Kick, Swirled Wire Brush Snare, Wood Cross-Stick Rim Click, Blue Note Ride Cymbal with ping & wash, Upright Acoustic Double Bass pluck with fingerboard click, and a resonant Vibraphone bar with rotating motor tremolo LFO).
- **Genre-Specific Audio Synthesizers:** Expanded procedural Web Audio synthesis engine with custom algorithms for rock saturation/distortion, cabinet filters, inharmonic cymbal clusters, motor tremolo modulation, and wire brush textures.
- **Dynamic Theming Engine:** CSS custom properties, canvas rendering (pad colors, shockwave ripples, perimeter sparks, hand tracking orbs, on-canvas handles), and logo gradients fully synchronize with the chosen theme.
- **Categorized Presets Grid:** Pad Sound Configuration dialog organized into genre sections (Hip-Hop, Rock, Jazz, Synth/SFX), making all new sounds available for custom individual pad assignments.
- **Automatic Theme Persistence:** Active theme, tempo, and instrument assignments persist across sessions in IndexedDB and export/import via `.gestrum` project files.

## [v00000-004] - 2026-10-25
### Added
- **5 Expressive Pad Shapes (All Rounded Corners):** Support for Circle, Square (Squircle), Triangle, Diamond, and Heart. All corners are smoothly rounded with zero sharp points or vertices.
- **On-Stage Floating Layout Toolbar:** Docked controls in Layout Mode providing direct access to Shape selectors, Size slider (28px–96px), `+`/`-` stepper buttons, size preset pills (`S:36px`, `M:48px`, `L:64px`, `XL:80px`), and Sound Config.
- **On-Canvas Interactive Resize Handle:** Selected pads in Layout Mode display a hot magenta corner grab handle (`⤡`) to resize pads directly on the stage canvas.
- **Mouse Wheel Quick-Resize:** Hovering over any pad in Layout Mode and scrolling the mouse wheel or trackpad dynamically scales the pad's size in real-time.
- **Batch "Apply to All" Convenience:** One-click "All Shapes" and "All Sizes" actions in both Layout toolbar and configuration dialog to transform the entire drum kit with a single tap.
- **Shape-Echo Shockwaves & Contour Loops:** Shockwave rings expand echoing the chosen shape (hearts ripple glowing hearts, triangles ripple triangles, etc.). The 3-second dwell looping meter dynamically wraps around the shape's contour.
- **Acoustic Pitch & Body Resonance Scaling:** Pad size dynamically modulates percussion acoustics—larger pads produce deeper sub-bass rumble, punchier low-end, and longer decay; smaller pads produce tighter, snappier, higher-pitched sizzle and crack.
- **Reset 3x2 Grid:** Quick one-click action to realign pads back to a clean, centered 3x2 beat-grid layout.

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
