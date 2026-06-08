# A Little Hunt 🐾 — birthday treasure hunt

A self-contained web app. No build step, no backend.

## Run it locally
- Just open `index.html` (double-click) — data loads via `<script>` tags, so it works from disk.
- Or serve it: `python3 -m http.server` then visit the printed URL.

## Deploy to GitHub Pages
1. Create a new GitHub repo and upload `index.html`, the `data/` folder, and this README (keep the structure).
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
3. Wait ~1 min; your link is `https://<you>.github.io/<repo>/`.
4. Open that link on her phone and test the camera before the day.

## Personalise (everything lives in `data/`)
- `data/manifest.js` — her name, the 4 cats (name, personality, power level, visits, colour, top goodies),
  the 3 riddles, the 2 keywords, and your finale message.
- `data/connections.default.js` — your 4 groups × 4 words (colours: yellow/green/blue/purple).
- `data/wordle.default.js` — the 5-letter target word + a hint.
- `data/queens.board1.js` / `board2.js` — verified boards; switch which one is used via `active.queens` in the manifest.

Add a new puzzle option: drop a `data/<name>.js` file, add one matching `<script>` line in `index.html`,
then point the relevant `active` key in `manifest.js` at it.

## Notes
- Photos are saved to her phone when she takes them; small copies sit in the Catbook and survive a reload.
- Hidden reset for testing: long-press the "A Little Hunt" title for 1.5s.
