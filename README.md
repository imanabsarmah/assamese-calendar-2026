# অসমীয়া বৰ্ষপঞ্জী · Assamese Calendar 2026

A beautiful, fully offline web app displaying the **official 2026 holiday calendar for the State of Assam**, based on the Government of Assam General Administration Department notification.

🌐 **Live Demo:** [View on GitHub Pages](https://imanabsarmah.github.io/assamese-calendar-2026/)

---

## ✨ Features

- 📅 **Month View** — full calendar grid with Assamese tithi (ভাস্কৰাব্দ) under every date
- 🗓️ **Year View** — all 12 mini-months at a glance; click any to zoom in
- 🎯 **Year Strip** — quick-jump to any month with festival dot indicators
- 🏛️ **Official Holidays** — sourced from GAD Assam Notification No. 221561/440 (17 Nov 2025)
- 🎉 **35 Gazetted Holidays** — including all 3 Bihus, national holidays, and regional festivals
- 📋 **39 Restricted Holidays** — full list including tribal and community festivals
- 🕐 **Half Holiday** — Lakshmi Puja (25 Oct, closes at 1 PM)
- 🏦 **Bank Holiday** — Annual Bank Closing (1 Apr)
- 📆 **2nd & 4th Saturdays** — marked as holidays per GAD order
- 🌿 **Season Panel** — Assamese ṛtu (ঋতু) with poetic description each month
- 🔴 **Today Highlighted** — current date marked with red circle
- 🗂️ **Tab Filter** — view Gazetted / Restricted / All holidays separately
- 🖨️ **Print Friendly** — clean print CSS included
- 📱 **Responsive** — works on mobile and desktop
- ⚡ **Zero dependencies** — pure HTML/CSS/JS, no frameworks, no build step

---

## 📋 Official Source

> **Government of Assam — General Administration Department**  
> *List of Holidays for the Year 2026 in the State of Assam*  
> Notification No. **e file No. 221561/440**  
> Dated: **17th November, 2025**, Dispur, Guwahati-6  
> Issued under: **GAD-14021/18/2022-ESTT-GAD-General Administrative I/1316561/2025**

---

## 🚀 Getting Started

### Option 1 — Just open it
```bash
git clone https://github.com/imanabsarmah/assamese-calendar-2026.git
cd assamese-calendar-2026
open index.html   # macOS
# or double-click index.html in your file manager
```

### Option 2 — Serve locally
```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

### Option 3 — Deploy to GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Your calendar will be live at `https://imanabsarmah.github.io/assamese-calendar-2026/`

---

## 📁 Project Structure

```
assamese-calendar-2026/
├── index.html          # The entire app (self-contained)
└── README.md           # This file
```

The entire app lives in a single `index.html` — fonts are loaded from Google Fonts (requires internet), everything else is inline.

---

## 🎨 Holiday Categories

| Color | Type | Description |
|-------|------|-------------|
| 🟠 Orange | **Bihu** | Rongali, Bhogali, Kongali Bihu |
| 🟢 Green | **National** | Republic Day, Independence Day, Gandhi Jayanti etc. |
| 🟣 Purple | **Religious** | Eid, Dol Jatra, Janmastomi, Christmas etc. |
| 🔴 Red | **Regional/Cultural** | Sankardeva Tithi, Lachit Divas, Madhabdeva Tithi etc. |
| 🔵 Blue | **Special** | Netaji Jayanti, May Day etc. |
| 🟦 Indigo | **Restricted** | 39 restricted holidays (2 per employee) |
| 🟡 Yellow | **Half Holiday** | Lakshmi Puja — closes at 1 PM |
| 🌿 Green | **Bank Holiday** | Annual Bank Account Closing |

---

## 📜 Assamese Calendar System

This app displays dates in the **Bhaskarabda (ভাস্কৰাব্দ)** system used in Assam, which corresponds approximately to:

| Assamese Month | Gregorian Equivalent |
|---------------|---------------------|
| পুহ (Puh) | Dec – Jan |
| মাঘ (Magh) | Jan – Feb |
| ফাগুন (Phagun) | Feb – Mar |
| চ'ত (Chot) | Mar – Apr |
| বহাগ (Bohag) | Apr – May |
| জেঠ (Jeth) | May – Jun |
| আহাৰ (Ahar) | Jun – Jul |
| শাওণ (Saon) | Jul – Aug |
| ভাদ (Bhad) | Aug – Sep |
| আহিন (Ahin) | Sep – Oct |
| কাতি (Kati) | Oct – Nov |
| অঘোণ (Aghon) | Nov – Dec |

The Assamese New Year (**Bohag Bihu / Rongali Bihu**) falls on **14 April 2026**, marking the start of **1433 Bhaskarabda**.

---

## 🤝 Contributing

Corrections, improvements, or translations are welcome. Please open an issue or pull request.

---

## 📄 License

MIT License — free to use, share, and modify.

---

*"আহা বহাগ আহা, আহা সুবাস লৈ আহা।"*
