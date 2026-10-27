# HANDOFF.md: Gestrum

## Current Status
- **Current Version:** `v00000-008`
- **Live Deployment:** `https://keeganrmc.github.io/gestrum/`
- **GitHub Repository:** `https://github.com/keeganrmc/gestrum`
- **Architecture:** Single-file HTML5 PWA (`index.html`) + Service Worker (`sw.js`) + Manifest (`manifest.webmanifest`).

## What Works
- **Fixed Landing Page Layout & Spacing (v00000-008):** Fixed hero container height issue to ensure full visual separation between the 3 genre kit cards and the "Tactile Air-Percussion" section.
- **Creator Design Statement (v00000-008):** Prominently displays Keegan McConnell's quote: *“I design products that solve real-world problems and address real user needs.”*
- **Web Bar Logo & Dedicated Favicon (v00000-008):** High-res Gestrum logo loaded in browser tab favicons, PWA window title bars, and top navbar headers.
- **Visual, Symbol-Driven Gateway Landing Page (v00000-007):** Completely cleaned and streamlined launch page:
  - **Zero AI Slop / Word-Count Reduction:** Dense text paragraphs replaced by high-impact visual badges and iconography.
  - **Punchy Hero Section:** Headline (*"Play drums in mid-air."*), feature pills (`60 FPS On-Device Vision`, `Procedural Web Audio`, `100% Client-Side Privacy`), and direct action buttons.
  - **Kit Tag Strips:** Replaced wordy kit descriptions with instrument tag pills (`Sub Kick`, `Trap Snare`, `Heavy Kick`, `Overdrive`, `Brushed Snare`, `Upright Bass`) that live-preview themes on click.
  - **4-Step Visual Flow Cards:** Dedicated SVG iconography for `01 / TRACK`, `02 / STRIKE`, `03 / LOOP`, and `04 / SCULPT`.
  - **Dual Physical Design Showcase:** Side-by-side presentation of creator Keegan McConnell's physical industrial design work (*CleanStep Cat Care Architecture* and *ALINE Ultralight Seating*) with high-res photography, physical specs, and portfolio links.
  - **Discreet Right-Aligned Footer:** Completely removed bottom CTA banners, redundant launch buttons, and left-side headers. The footer now strictly contains quiet, right-aligned text and portfolio/GitHub links.
- **Offline Cache Invalidation (v00000-007):** Precaching `work-cleanstep.png` and `work-aline.png` with unconditional `self.skipWaiting()` on install to purge stale caches immediately.
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
