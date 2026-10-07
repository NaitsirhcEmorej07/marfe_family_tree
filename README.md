# 🌳 Marfe Family Tree

Isang interactive, mobile-responsive, at modernong web-based visual family tree para sa angkan ng **Marfe Family**. Dinisenyo gamit ang malinis na UI/UX, color-coded branches, collapsible hierarchy, instant member search, at statistical analytics.

---

## 🌟 Pangunahing Katangian (Features)

- **🎋 Color-Coded Branch Hierarchy**:
  Bawat sangay ng pamilya ay may sariling signature color palette para sa madaling pagkakakilanlan at malinaw na visual distinction.
- **📂 Collapsible Tree Nodes**:
  Maaaring i-click ang bawat card (parents / couples) upang i-expand o i-collapse ang kani-kanilang mga anak at connector lines.
- **↕️ Expand All / Compress All**:
  Isang pindot lang sa menu upang mabuksan o maitago ang kabuuang puno ng pamilya.
- **🔍 Smart Search & Auto-Reveal**:
  Maghanap ng pangalan ng kapamilya. Awtomatikong ibinubukas ng search engine ang mga nakatagong branches patungo sa hinanap na miyembro, nag-i-scroll nang maayos papunta rito, at naglalagay ng visual highlight.
- **📊 Family Analytics & Leaderboard**:
  Modal na nagpapakita ng kabuuang bilang ng miyembro, breakdown kada henerasyon, branch leaderboard, at family highlights.
- **🌓 Light & Dark Mode**:
  Sinusuportahan ang madilim at maliwanag na tema na may persistent setting gamit ang `localStorage`.
- **📱 Mobile-First & Responsive**:
  Optimized para sa mga mobile screen, tablet, at desktop displays.

---

## 👥 Istruktura ng Pamilya (Family Hierarchy)

### 👑 Root Ancestors (Gen 1)
- **Tatay Indeng & Nanay Gonyang** (Founders)

---

### 🌿 Ang 7 Sangay ng Pamilya (Main Branches)

| # | Sangay (Branch) | Tema ng Kulay (Theme) | Bilang ng Miyembro |
|---|-----------------|-----------------------|--------------------|
| **1st** | **Tito Boy & Tita Fe** | Sky Blue | 13 |
| **2nd** | **Tita Connie & Tito Joe** | Rose / Coral | 28 *(Pinakamalaki)* |
| **3rd** | **Tita Baby & Tito Rene** | Emerald Green | 5 |
| **4th** | **Tito Rome & Tita Baby** | Purple | 7 |
| **5th** | **Tita Tess & Tito Bert** | Cyan | 12 |
| **6th** | **Tito Rolly** | Indigo | 1 |
| **7th** | **Tita Bekbek & Tito Yoshinori** | Amber / Gold | 9 |

---

## 📈 Estadistika ng Henerasyon (Generations Breakdown)

- **Kabuuang Miyembro (Total Members):** `77`
- **Henerasyon 1 (Ancestors):** 2 miyembro
- **Henerasyon 2 (Children & Spouses):** 13 miyembro
- **Henerasyon 3 (Grandchildren & Spouses):** 33 miyembro
- **Henerasyon 4 (Great-grandchildren):** 29 miyembro

---

## 🛠️ Teknolohiyang Ginamit (Tech Stack)

- **HTML5**: Semantic web markup.
- **Tailwind CSS**: Modern utility-first CSS framework (via CDN) para sa styling at dark mode support.
- **Vanilla JavaScript**: Logic para sa branch toggling, dynamic connector lines, auto-expand tree traversal, modal management, at real-time analytics rendering.
- **PWA (Progressive Web App)**: Web App Manifest (`manifest.json`) at Service Worker (`sw.js`) para sa offline caching, standalone app experience, at direct install capability sa phone.
- **Inline SVG Icons**: Magagaan at mabilis mag-load na vector icons (Lucide-inspired).

---

## 📱 Paano I-install sa Phone (PWA Installation)

Maaaring i-install ang application diretso sa Home Screen ng iyong smartphone nang hindi kinakailangang mag-download mula sa App Store o Google Play Store:

### 🤖 Android (Google Chrome, Edge, Brave, Samsung Internet)
1. Buksan ang web page sa browser ng iyong cellphone.
2. Lalabas ang **Floating Install Banner** sa ibaba ng screen o i-click ang **"Install App"** sa burger menu / navbar.
3. I-tap ang **"Install"** at kumpirmahin.
4. May lilitaw nang app icon ng **Marfe Family Tree** sa iyong home screen na magbubukas full-screen na walang browser address bar!

### 🍎 iPhone / iPad (iOS Safari)
1. Open the web page in **Safari**.
2. Tap the **Share button** (⎋) in the toolbar at the bottom of Safari.
3. Scroll down and tap **"Add to Home Screen"** (➕).
4. Tap **"Add"** in the top-right corner.

---

## 🚀 Paano Patakbuhin (How to Run)

Maaari itong patakbuhin gamit ang kahit anong standard HTTP static server upang magamit ang Service Worker at PWA features:

1. Gamit ang kasamang Node.js server:
   ```bash
   npm start
   ```
   o
   ```bash
   node server.js
   ```
   Buksan ang: `http://localhost:3000`

2. O gamit ang kahit anong static hosting (GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.).

---

## 📂 Istruktura ng Proyekto (Project Structure)

```text
marfe_family_tree/
├── index.html          # Pangunahing web application (HTML, CSS, JS, at Data)
├── manifest.json       # PWA Web App Manifest
├── sw.js               # Service Worker para sa offline caching
├── server.js           # Lightweight local static server
├── package.json        # Node configuration at start scripts
├── icons/              # Mataas na kalidad na app icons para sa PWA
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── icon-maskable.png
│   ├── apple-touch-icon.png
│   └── favicon.png
└── README.md           # Dokumentasyon ng proyekto
```

---

## 📝 Tala ng mga Huling Pagbabago (Recent Updates)

- **PWA Support**: Ginawang ganap na Progressive Web App (PWA) na may kasamang `manifest.json`, Service Worker (`sw.js`) para sa offline access, at custom responsive brand icons.
- **Phone Install Options**: Nagdagdag ng smart floating install banner sa mobile, quick install button sa header, at "Install App" button sa burger menu na may kasamang step-by-step visual install guide para sa iOS Safari at Android.
- In-update ang pangalan ng mga ninuno: **Tatay Indeng & Nanay Gonyang**.
- In-update ang 4th Branch: **Tito Rome & Tita Baby**.
- In-update ang pamilya nina **Roseann & Tutoy** kasama ang kanilang 3 anak: **Kian**, **Kyle**, at **Kyel**.
- In-update ang pamilya nina **Moises & Angelika** at ang kanilang anak na si **Alonzo**.
- Na-recalculate ang analytics metrics: Kabuuang bilang ng miyembro: **77**.
