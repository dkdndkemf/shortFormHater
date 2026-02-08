# Short Form Hater

> Hide YouTube Shorts. Stay focused on long-form content.

**Short Form Hater** is a lightweight Chrome extension that removes **YouTube Shorts-related UI elements** to reduce short-form video distractions and keep your browsing focused.

---

## ✨ Features

- Hide **Shorts shelves** on the YouTube Home page  
- Remove the **“Shorts” navigation entry** from the sidebar  
- Remove the **“Shorts” tab** on channel pages  
- Works in real time with YouTube’s **dynamic SPA navigation**  
- **No tracking · No data collection · No external requests**

---

## 🧠 How It Works

YouTube loads content dynamically without full page refreshes.

This extension:

- Runs a **content script** on selected YouTube pages  
- Observes **DOM mutations** using `MutationObserver`  
- Automatically removes **Shorts-related UI elements** when they appear  

All processing happens **locally in your browser**.

---

## 📍 Supported Pages

The extension intentionally runs only on:

- `https://www.youtube.com/` — Home  
- `https://www.youtube.com/watch` — Video watch page  
- Channel pages  
  - `/@handle`  
  - `/channel/...`  

Other sections (e.g. `/feed`) are excluded to avoid unintended side effects.

---

## 🔒 Privacy

Short Form Hater:

- **Does not collect personal data**
- **Does not track browsing activity**
- **Does not communicate with external servers**
- Uses **no remote code**

Everything runs entirely **client-side**.

---

## 📦 Installation

### Chrome Web Store
*(Link will be added after publishing)*

### Manual Installation (Developer Mode)

```bash
git clone https://github.com/your-username/short-form-hater.git
```

1. Open Chrome → `chrome://extensions`  
2. Enable **Developer mode**  
3. Click **Load unpacked**  
4. Select the project folder  

Done ✅

---

## 🛠 Tech Stack

- **Vanilla JavaScript**
- **Chrome Extension Manifest V3**
- **MutationObserver-based DOM control**

No frameworks. No dependencies.

---

## ⚠️ Disclaimer

This extension:

- Does **not modify YouTube content**
- Does **not bypass ads or paywalls**
- Only **hides UI elements locally** in the browser  

YouTube is a trademark of **Google LLC**.  
This project is **not affiliated with or endorsed by Google**.

---

## 📄 License

MIT License

---
