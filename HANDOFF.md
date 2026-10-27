# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-006`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- **Robust Gateway Landing Page (New in v00000-006):** Complete, responsive, and thoughtfully written landing page welcoming all visitors before launching into the instrument:
  - **Hero & Identity:** Brand mark, tagline, "Launch Gestrum" primary CTA, direct kit launch pills (Hip-Hop 120 BPM, Rock 132 BPM, Jazz 100 BPM), and 4 trust & architecture badges (100% Client-Side Privacy, Zero-Latency Web Audio, 21-Joint On-Device Vision, 3s Dwell Looper).
  - **Interactive Visual Blueprint:** Diagram illustrating the 3x2 Beat-Grid, downward velocity vectors, dynamic neon shockwaves, 3-second dwell progress arc, and luminous fingertip tracking orbs.
  - **The Core Experience (What It Does):** Narrative explaining embodied air-drumming, zero-latency on-device tracking, velocity sensitivity, and dwell-to-loop mechanics, with a side-by-side comparison table between traditional MIDI setups and Gestrum.
  - **Deep Dive Features:** 6 detailed cards covering touchless MediaPipe vision, 16-step quantized dwell looping, 3 curated acoustic/visual themes, 25+ procedural presets and custom WAV/MP3 drag-and-drop, draggable/resizable pads with acoustic pitch scaling, and live session recording with offline PWA support.
  - **4-Step Quick Start Guide:** Frictionless onboarding instructions covering spatial framing, camera initialization, striking the air, and locking in grooves.
  - **Story & Creator Philosophy:** Documenting author Keegan McConnell, the *AirDrummer* conceptual origin, single-file HTML5 PWA architecture, native Web Audio DSP synthesis, and privacy by design (video frames processed in volatile memory and discarded; zero server transmission).
  - **Open Source Attribution & Hygiene:** Clear legal and ethical disclosure for Gestrum (MIT License), Google MediaPipe Hands (Apache 2.0), W3C standards, and transparent AI pair programming assistance.
  - **Grounded Product Roadmap:** 5 upcoming milestones including a per-pad 16-step pattern sequencer grid, Web MIDI input/output, articulated air gestures (cymbal choke and pitch bend), expanded genre sound packs, and camera calibration guides.
  - **Interactive Theme Previewing:** Live theme switcher pills in the navbar dynamically recolor the entire landing page in real time (Cyber Cyan/Magenta, Crimson/Amber, Champagne/Indigo).
  - **Bi-Directional Navigation:** Clean hash routing (`#studio` / `#landing`), browser history Back/Forward support, and an "Overview" / "Landing Page" button in the studio header to seamlessly return to the landing page at any time.
- **Theme-Reactive Air-Drum Logo:** Integrated custom air-drum logo rendered via CSS masking and drop-shadow glow. Gradient and neon bloom automatically match the active theme. Clicking triggers an acoustic strike and bouncy spin animation.
- **Top Instrument Theme Dropdown Menu:** Header dropdown allowing users to swap between three distinct genres, visual aesthetics, and authentic instrument kits:
  - 🎧 **Hip-Hop / 808 (Cyber Neon):** Neon cyan and magenta cyber palette, 120 BPM, 808 Trap kit.
  - 🎸 **Rock & Roll (Crimson Stage):** Charcoal concert stage, crimson red, molten amber, and electric gold palette, 132 BPM, authentic acoustic rock kit.
  - 🎷 **Midnight Jazz (Velvet Lounge):** Velvet midnight blue, champagne gold/brass, and Blue Note indigo palette, 100 BPM, expressive acoustic jazz kit.
- **Genre-Specific Audio Engines:** Procedural synthesis for rock distortion curves, speaker cabinet filters, crash cymbal clusters, vibraphone motor tremolo LFO, and brush wire textures.
- **Dynamic Theming Engine:** CSS custom variables, logo gradients, canvas shockwaves, sparks, pad strokes, and hand tracking orbs dynamically reflect the active theme.
- **Categorized Presets Grid:** Over 25 presets organized by genre in the Pad Sound Configuration dialog.
- **5 Pad Shapes (All Rounded Corners):** Circle, Square (Squircle), Triangle, Diamond, and Heart with zero sharp corners or vertices.
- **Dynamic Pad Resizing & Floating Layout Toolbar:** Adjustable radius from 28px to 96px, preset pills (`S`, `M`, `L`, `XL`), slider, stepper buttons, on-canvas drag handle, and mouse wheel / trackpad scroll resizing.
- **Acoustic Pitch & Body Resonance Scaling:** Percussion sound engine scales pitch and decay dynamically by pad size.
- **Full Camera On/Off Toggle & Multi-Hand Collision Debounce:** Smooth MediaPipe tracking with zero machine-gun stutter.
- **Dwell Looping & Quantization:** 3-second dwell locks into rhythmic loops synchronized to the 16-step measure bar.
- **Custom Audio Samples & Recording:** Drop WAV/MP3 files onto pads, record live audio, and export/import `.gestrum` project files.
- **Offline PWA:** Service worker caching and version chip updates.

## What's Next
- Add visual step toggle inside pad config to let users draw custom 16-step rhythmic patterns per pad.
- Web MIDI input/output support for external pad controllers and DAWs.
- Cymbal choke gesture and vertical distance pitch bending.
- User testing session with musicians and creators.

## Rules Learned
1. Provide a robust landing page before the app launches so first-time visitors understand what the instrument does, how to use it, why it exists, and who made it.
2. Allow visitors to return to the landing page anytime from the studio header without disrupting their session.
3. No raw camera feed: users prefer stylized luminous orbs over seeing their own camera stream.
4. The core action is *tapping the air*, not clapping.
5. Circles and shapes must have rounded corners (no sharp vertices) to look fluid and organic.
6. Multi-hand hit testing must be batched together to prevent alternate-frame collision resets.
7. Pad resizing must scale the acoustic resonance and pitch of the drum shell.
8. When switching instrument themes, update the pads, BPM, visual styling, and canvas colors together as a unified identity.
