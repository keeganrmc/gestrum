# BRIEF.md: KinetiClap
*The project north star for KinetiClap, an in-browser spatial air-percussion instrument.*

---

## 2.1 THE SEED
* **Q1. In one sentence, what do you want to make?**  
  An in-browser air-percussion instrument where hovering your hands over floating spatial pads triggers drum sounds, and holding your hand over a pad loops it into a live rhythm.
* **Q2. What medium does it work in?**  
  Motion, Sound, Pattern, and Real-time Spatial Video.
* **Q3. What thing does this grow out of?**  
  The proposal *AirDrummer* by Keegan McConnell, born from the impulse to air-drum while listening to music and wanting the air itself to make sound without holding physical sticks or controllers.
* **Student task / Reference:** Put one reference image/sketch into `/reference/`.

---

## 2.2 RAISON D'ÊTRE (Why should this exist?)
* **Q4. What does it let someone do, see or feel that they can't easily do now?**  
  It lets anyone with a webcam play drums freely in three-dimensional space with no hardware setup, no plugins, and zero friction.
* **Q5. What's the ONE thing it should do better than anything else?**  
  Provide immediate, snappy, low-latency audio feedback when a hand crosses into a sound circle, paired with an unmistakable visual ripple.
* **Q6. What will it deliberately NOT do?**  
  It will not attempt to be a multi-track DAW, will not require user accounts, will not send camera streams to the cloud, and will not demand MIDI hardware.
* **Q7. About sentence:**  
  *"KinetiClap exists because drumming in mid-air should make real sound, turning your laptop camera into a zero-latency stage instrument."*

---

## 2.3 THE USER
* **Q8. Primary User (The Casual Beat-Sketcher / Creative Explorer):**  
  A student or creator on a laptop wanting instant creative release and rhythmic exploration with zero friction. They don't want menus or DAW complexity; within 10 seconds of opening the page, they are waving their hands, feeling the tactile pop of the pads, sketching an 8-bar beat, and walking away with an exported audio groove. Accessible to complete beginners, yet satisfying for musicians.
* **Q9. Secondary User:**  
  Audience members watching a live screen share, or peers trying the instrument at an exhibition or portfolio review.
* **Q10. Who is it NOT for?**  
  Traditional recording engineers needing micro-quantized multi-track tracking or acoustic studio mic simulation.

---

## 2.4 THE INTERACTION MODEL
* **Q11. Primary Input:**  
  MediaPipe Hand Landmark Tracking (via webcam `getUserMedia`), tracking 21 skeletal joints per hand with fingertip collision detection, plus full mouse/touch pointer fallback.
* **Q12. Interaction Model:**  
  **Performative & Direct Spatial Manipulation:** You strike circles in mid-air to trigger sound, hold for 3 seconds to loop, and drag pads to customize their spatial layout.
* **Q13. First 10 Seconds:**  
  Opens directly onto a dark mirrored camera feed with six glowing sound circles in an ergonomic drum kit arc. Hovering or clicking any circle immediately plays an authentic synthesized drum sound.
* **Q14. Core Loop:**  
  *Tap air with fingertip → speed of tap calculates velocity/power (harder tap = larger neon shockwave ring & punchier hit) → hold fingertip inside pad for 3 seconds as a clockwise circular gauge fills and locks the loop gold → drag pads to sculpt your kit.*
* **Q15. What leaves the app?**  
  1. An `.airdrummer` JSON project file containing pad coordinates and custom kit assignments.  
  2. A recorded `.wav` or `.webm` audio file of the live performance.

---

## 2.5 PRIOR ART AND RESEARCH
* **Sonari (2022):** Spatial sound field research. Insight: spatial audio needs clear boundaries or users feel lost. AirDrummer provides distinct physical pad rings.
* **Gesture.live (2021):** Open-access webcam body tracker. Insight: heavy remote models cause lag. AirDrummer uses lightweight local synthesis and on-device vision.
* **Gesture synth (2020):** Open-source pitch modulation. Insight: continuous modulation is hard to keep in pitch; discrete drum strike zones are more immediate and satisfying.
* **Handmate (2023):** Academic hand pose analysis. Insight: keep gestures simple; hover-and-dwell is far more reliable than complex finger sign recognition.

---

## 2.6 IDENTITY
* **Q19. Name:** **KinetiClap** (working URL: `keeganrmc.github.io/kineticlap/`).
* **Q20. Wordmark Register:** Clean, energetic sans-serif with monospace accents (futuristic instrument aesthetic).
* **Q21. Colors:**
  * Background: `#0d0f12` (Void Black)
  * Active Pad / Accent: `#00f0ff` (Cyan Glow)
  * Strike Flash: `#ff007f` (Neon Magenta)
  * Loop Ring: `#ffd700` (Gold)
  * Text / Chrome: `#f0f4f8` / `#8a99a8`
* **Q22. Voice:** Kinetic, crisp, encouraging ("Hit", "Looping", "Pads Locked", "Autosaved").

---

## 2.7 TECHNICAL CHOICES
* **Q23. Versioning Scheme:** Build counter (`v00000-001`, `v00000-002`...) per template standard.
* **Q24. License:** MIT License (Permissive open source).
* **Q25. Target Devices:** Chrome, Edge, Safari, Firefox on Desktop/Laptop with webcam.
* **Q26. PWA Mode:** `standalone` (clean fullscreen window without browser chrome).

---

## 2.8 WHAT'S MINE (Original Design Core)
The concept of using 6 spatial sound circles with an embodied **dwell-to-loop (3-second hold)** mechanism and **draggable sound blocks**, paired with zero-dependency browser Web Audio synthesis that works offline anywhere.
