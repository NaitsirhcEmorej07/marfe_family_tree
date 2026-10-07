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
- **Inline SVG Icons**: Magagaan at mabilis mag-load na vector icons (Lucide-inspired).

---

## 🚀 Paano Patakbuhin (How to Run)

Dahil pure static frontend application ito nang walang build step o backend dependencies:

1. I-clone o i-download ang repository/folder:
   ```bash
   git clone <repository-url>
   ```
2. Buksan ang `index.html` sa kahit anong modernong web browser:
   - Double-click lang sa `index.html`, o
   - Gumamit ng Live Server sa VS Code / antigravity-ide.

---

## 📂 Istruktura ng Proyekto (Project Structure)

```text
marfe_family_tree/
├── index.html       # Pangunahing web application (HTML, CSS, JS, at Data)
└── README.md        # Dokumentasyon ng proyekto
```

---

## 📝 Tala ng mga Huling Pagbabago (Recent Updates)

- In-update ang pangalan ng mga ninuno: **Tatay Indeng & Nanay Gonyang**.
- In-update ang 4th Branch: **Tito Rome & Tita Baby**.
- In-update ang pamilya nina **Roseann & Tutoy** kasama ang kanilang 3 anak: **Kian**, **Kyle**, at **Kyel**.
- In-update ang pamilya nina **Moises & Angelika** at ang kanilang anak na si **Alonzo**.
- Na-recalculate ang analytics metrics:
  - Kabuuang bilang ng miyembro: **77**
  - Gen 4 (Great-grandchildren): **29**
  - Tito Rome & Tita Baby branch: **7 miyembro**
