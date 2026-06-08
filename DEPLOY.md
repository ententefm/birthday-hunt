# Deploying "A Little Hunt" to GitHub Pages 🚀

A step-by-step guide to put this folder online for free, so you can send her a link.
GitHub Pages serves over **https**, which the camera and saved progress both need — so it's a good fit.

---

## Before you start
- A **GitHub account** (free) — sign up at github.com if you don't have one.
- This project folder on your Mac: `/Users/agentbugs/claude_projects/birthday-hunt/`
  containing `index.html` and the `data/` folder.

You can deploy two ways. **Path A (web upload)** needs no tools and is the simplest.
**Path B (GitHub Desktop)** is nicer if you'll be re-uploading after edits.

---

## Path A — Upload through the website (simplest)

### 1. Create a new repository
1. Go to **github.com** and sign in.
2. Top-right **+** → **New repository**.
3. **Repository name:** something like `birthday-hunt` (this becomes part of the URL).
4. Set it to **Public** (required for free Pages).
5. Leave everything else unchecked. Click **Create repository**.

### 2. Upload the files
1. On the new empty repo page, click **uploading an existing file** (the link in the middle), or **Add file → Upload files**.
2. Open your `birthday-hunt` folder in Finder. Select the **contents** —
   `index.html`, the `data` folder, `README.md` — and drag them onto the GitHub upload area.
   - ⚠️ Drag the **contents**, not the `birthday-hunt` folder itself. `index.html` must end up at the **top level** of the repo, like this:
     ```
     birthday-hunt/        (your repo)
     ├── index.html        ← must be right here
     └── data/
         ├── manifest.js
         ├── connections.default.js
         ├── wordle.default.js
         ├── queens.board1.js
         └── queens.board2.js
     ```
3. Scroll down, click **Commit changes**.

### 3. Turn on GitHub Pages
1. In the repo, click the **Settings** tab (top right).
2. Left sidebar → **Pages** (under "Code and automation").
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. **Branch:** select **main** and folder **/ (root)**. Click **Save**.

### 4. Get your link
- Wait 1–3 minutes (a green deployment will appear on the Pages settings screen).
- Your site is live at:
  ```
  https://<your-username>.github.io/birthday-hunt/
  ```
- Open it on your phone to confirm it loads.

➡️ Skip to **"Test it before the day"** below.

---

## Path B — GitHub Desktop (easier for repeat edits)

1. Download **GitHub Desktop** (desktop.github.com), install, and sign in.
2. **File → Add Local Repository** → choose the `birthday-hunt` folder.
   - If it says it's not a repo, click **create a repository** when prompted.
3. Enter a summary, click **Commit to main**, then **Publish repository**.
   - Uncheck "Keep this code private" so Pages works for free. Publish.
4. Then do **Step 3 + 4** from Path A (Settings → Pages → Deploy from a branch → main / root → Save) to switch it on and get the link.

After future edits, GitHub Desktop shows the changed files — just **Commit** then **Push** and the live site updates in a minute.

---

## Test it before the day ✅
1. Open `https://<your-username>.github.io/birthday-hunt/?test` on your phone.
   - The `?test` turns on **TEST MODE** (a badge shows at the top): every photo step lets you **upload** an image instead of opening the camera, so you can run the whole thing end-to-end yourself.
2. Play through all the way to the Catbook + finale.
3. Then open the link **without** `?test` and confirm the cat-selfie steps open the **camera**.
4. Check progress survives a refresh mid-hunt.

When it all works, send her the plain link (no `?test`):
`https://<your-username>.github.io/birthday-hunt/`

---

## Updating the site after a change
Whenever I edit the files in your folder (or you do), the live site doesn't change until you re-upload:
- **Path A:** in the repo, open the file → pencil ✏️ → paste/edit → Commit; or **Add file → Upload files** to replace. (For the `data/` files this is quick since they're small.)
- **Path B:** Commit + Push in GitHub Desktop.
Pages redeploys within a minute or two.

---

## Troubleshooting
- **404 / "There isn't a GitHub Pages site here":** the repo must be **Public**, and `index.html` must be at the **root** (not inside a sub-folder). Re-check Step 2.
- **Page loads but looks unstyled or puzzles are blank:** the `data/` folder didn't upload, or it's nested. Confirm the structure above — `data/manifest.js` should open at
  `https://<you>.github.io/birthday-hunt/data/manifest.js`.
- **Camera doesn't open on her phone:** make sure she's on the **https** Pages link (not a file you sent), and that she allows the camera permission prompt. iPhone uses Safari's prompt; Android uses Chrome's.
- **Still seeing an old version:** Pages caches briefly — wait a minute and reload, or try a private/incognito tab.
- **Changed a file but nothing updated:** you need to commit/upload the change to GitHub (see "Updating" above); editing it only on your Mac isn't enough.
