# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-006`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- **Elevated & Streamlined Gateway Landing Page (v00000-006):** Redesigned the entry experience to be clean, intriguing, and informative—free of AI buzzwords, repetitive cards, and tacky marketing banners:
  - **Editorial Hero & Concept:** Concise explanation of touchless air-percussion, real-time computer vision, and zero-latency Web Audio synthesis.
  - **Curated Kits Strip:** Clean interactive cards for Hip-Hop / 808 (120 BPM), Rock & Roll (132 BPM), and Midnight Jazz (100 BPM) with real-time palette shifts and acoustic feedback.
  - **Interaction & Architecture (01 Strike, 02 Dwell, 03 Synthesis, 04 Sculpt):** 4-card technical breakdown explaining MediaPipe 21-joint velocity downstrokes, 3-second dwell looping on a 16-step grid, zero-dependency Web Audio DSP synthesis, and spatial pad repositioning.
  - **Designer Bio & Physical Work Showcase:** Authentic bio for creator Keegan McConnell (Industrial Design Senior @ KCAD, Technical Illustrator @ Haworth, prior engineering foundation @ MSU) with direct link to [`keeganmcconnell.myportfolio.com`](https://keeganmcconnell.myportfolio.com/) and real portfolio photography of his physical industrial design work (*CleanStep Odor-Free Cat Care Architecture*).
  - **Privacy & Open Source Standards:** Documented 100% on-device vision processing (volatile memory, zero network transmission), MIT License, Google MediaPipe (Apache 2.0), and planned roadmap (16-step pattern sequencer per pad and Web MIDI API integration).
  - **Minimalist Footer:** Eliminated cluttered promotional banners in favor of a clean, sophisticated bottom navigation bar.
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
