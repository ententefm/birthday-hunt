# Implementation Plan (FINAL) — Birthday Treasure Hunt 🐾

**Project:** `A Little Hunt`
**Location:** `/Users/agentbugs/claude_projects/birthday-hunt/`
**Deadline:** Tuesday, June 9
**Status:** Core built & tested. Remaining: personalise content + real-device QA + deploy.

---

## Decisions (locked)
- **Deploy target:** GitHub Pages.
- **Working mode:** files live in this local folder; edited in place via the filesystem connector (no more zips). One source of truth.
- **Data format:** JS-register — separate `data/*.js` files loaded by `<script>` tags. Works served *or* from disk; `index.html` stays lean.
- **Puzzles:** Connections, Wordle, Cat Queens (place a cat, not a crown).
- **Cat Queens:** 2 boards, each verified to have exactly one solution.
- **Connections:** 4 standard difficulty colours (yellow / green / blue / purple).
- **Photos:** no watermark. Each selfie sits inside a Neko-style cat profile card (polaroid).
- **Look & feel:** inspired by the two Neko Atsume screenshots (paw backgrounds, cream rounded cards, bubbly font, profile cards, album rows). Original art only.
- **Difficulty:** birthday-friendly — every puzzle can be passed (lives→reveal, Wordle answer reveal, Queens reveal-answer).

---

## Working mode (how we collaborate now)
- The project is a real folder on your Mac. I read/write those files directly.
- I have two write tools: **write_file overwrites a whole file**; **edit_file does surgical find-and-replace.**
- Rule: if *you* have edited a file, tell me — I'll read it first and use surgical edits so I never clobber your changes.
- You open / test / deploy from the same folder.

---

## Architecture
```
birthday-hunt/
├── index.html              ← engine + UI only (no content)
├── README.md               ← deploy + personalise notes
└── data/
    ├── manifest.js          ← names, cats, clues, keywords, finale, which puzzle is "active"
    ├── connections.default.js
    ├── wordle.default.js
    ├── queens.board1.js     ← verified unique
    └── queens.board2.js     ← verified unique
```
- Engine reads `HUNT.data['manifest']`, resolves the `active` puzzle keys, **validates** each against its schema, and **falls back** to a bundled default if a file is missing/broken (never white-screens).
- **Swap content:** edit a data file, or change an `active` key in `manifest.js`.
- **Add an option:** drop a new `data/<name>.js`, add one `<script>` line in `index.html`, point the manifest at it.

### Data contracts
- **connections** — 4 groups × 4 words; 16 unique; colour ∈ {yellow,green,blue,purple}.
- **wordle** — `target` 5 letters A–Z; `hint`; `maxGuesses`.
- **queens** — `size` N, N×N `regions`, `solution` length N, **exactly one solution** (proven before shipping).
- **cat template** (in manifest `cats[]`) — `name, personality, powerLevel, visits, color, topGoodies[], accent, face`. The selfie fills the polaroid; the rest renders the card.

---

## Agent-team phases & status
Build → Test → PM sign-off, per phase.

| Phase | Scope | Status |
|---|---|---|
| **0 — Foundation** | JS-register data layer, manifest, loader with validation + fallback | ✅ built & tested |
| **1 — Puzzles** | Connections (4 colours), Wordle, Cat Queens; 2 verified boards; gentle mechanics | ✅ built & tested (both boards proven unique) |
| **2 — Photos & Catbook** | Camera capture (no watermark) → Neko-style cat profile cards; album view; reload persistence | ✅ built — *real-device camera test pending* |
| **3 — Neko theme** | Paw backgrounds, cream cards, bubbly font, profile cards, album rows; original art | ✅ initial build done — refine against screenshots as desired |
| **4 — Ship** | Deploy to GitHub Pages; full run on real iPhone **and** Android from the live URL | ⏳ **your court** |

**Tester result so far:** 14/14 — syntax on every file, schema validation on real data, Wordle duplicate-letter scoring, Connections integrity, both Queens boards brute-forced to one solution, and the bad-data fallback path.

**Deferred to stretch (not built):** live "cat yard"; one-tap "share my Catbook" image export.

---

## Remaining work
**Mine (just say go):**
- Swap in real content in `data/manifest.js` and `data/connections.default.js` once you give me the values.
- Any theme refinements toward the screenshots.

**Yours (only you can):**
- Provide the per-cat "script": name, personality, power level, visits, colour, top-3 goodies × 4.
- The Connections words, the 3 riddles, the 2 keywords, the finale message, and where each gift hides.
- **Test on her actual phone** (camera capture + the full run) before the 9th.
- Deploy: push the folder to a GitHub repo → Settings → Pages → main / root → use the `https://<you>.github.io/<repo>/` link.

---

## Definition of Done
- [x] All content in `data/`; `index.html` is pure engine.
- [x] Connections/Wordle drop-in editable; 2 verified Queens boards.
- [x] Every puzzle winnable and unblockable.
- [x] Selfies slot into Neko-style cards; no watermark; Catbook persists across reload.
- [x] Neko-inspired theme; original art only.
- [ ] Full run passes on a real iPhone and Android from the GitHub Pages URL. *(your gate)*
- [ ] Real personal content swapped in. *(pending your details)*
