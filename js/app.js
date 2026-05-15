/**
 * Assamese Calendar 2026 — App Logic
 */

(function () {
  "use strict";

  // ── State ──────────────────────────────────────────
  const today = new Date();
  let curMonth = today.getFullYear() === 2026 ? today.getMonth() + 1 : 1;
  let curYear  = 2026;

  // ── DOM refs ───────────────────────────────────────
  const monthSelect   = document.getElementById("monthSelect");
  const daysGrid      = document.getElementById("daysGrid");
  const monthNameEn   = document.getElementById("monthNameEn");
  const monthNameAs   = document.getElementById("monthNameAs");
  const sakaLabel     = document.getElementById("sakaLabel");
  const btnPrev       = document.getElementById("btnPrev");
  const btnNext       = document.getElementById("btnNext");
  const btnToday      = document.getElementById("btnToday");

  // ── Populate month selector ────────────────────────
  CALENDAR_DATA.months.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.month;
    opt.textContent = `${m.name_as} / ${m.name_en}`;
    monthSelect.appendChild(opt);
  });

  // ── Render ─────────────────────────────────────────
  function render() {
    const mData = CALENDAR_DATA.months.find(m => m.month === curMonth);
    if (!mData) return;

    // Update headings
    monthNameEn.textContent = mData.name_en + " " + curYear;
    monthNameAs.textContent = mData.name_as;
    sakaLabel.textContent   = mData.saka;
    monthSelect.value       = curMonth;

    // Determine first weekday and total days
    const firstDay    = new Date(curYear, curMonth - 1, 1).getDay();
    const daysInMonth = new Date(curYear, curMonth, 0).getDate();

    // Clear grid
    daysGrid.innerHTML = "";

    // Empty cells before day 1
    for (let i = 0; i < firstDay; i++) {
      const el = document.createElement("div");
      el.className = "day-cell empty";
      daysGrid.appendChild(el);
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
      const dow  = (firstDay + d - 1) % 7;
      const info = mData.days[d] || { a: "", t: "" };

      const cell = document.createElement("div");
      let cls = "day-cell";
      if (dow === 0) cls += " sunday";
      if (dow === 6) cls += " saturday";
      if (info.special === "purnima")  cls += " purnima";
      if (info.special === "amabasya") cls += " amabasya";

      const isToday =
        today.getFullYear() === curYear &&
        today.getMonth() + 1 === curMonth &&
        today.getDate() === d;
      if (isToday) cls += " today";

      cell.className = cls;

      // Build inner HTML
      let badgeHTML = "";
      if (info.special === "purnima") {
        badgeHTML = `<span class="tithi-badge badge-purnima">🌕 পূৰ্ণিমা</span>`;
      } else if (info.special === "amabasya") {
        badgeHTML = `<span class="tithi-badge badge-amabasya">🌑 অমাবস্যা</span>`;
      }

      cell.innerHTML = `
        <div class="day-num">${d}</div>
        <div class="assamese-date">${info.a}</div>
        <div class="tithi-label">${info.t}</div>
        ${badgeHTML}
      `;

      daysGrid.appendChild(cell);
    }

    // Update nav buttons
    btnPrev.disabled = curMonth === 1;
    btnNext.disabled = curMonth === 12;
    btnPrev.style.opacity = curMonth === 1  ? "0.4" : "1";
    btnNext.style.opacity = curMonth === 12 ? "0.4" : "1";
  }

  // ── Event listeners ────────────────────────────────
  btnPrev.addEventListener("click", () => {
    if (curMonth > 1) { curMonth--; render(); }
  });

  btnNext.addEventListener("click", () => {
    if (curMonth < 12) { curMonth++; render(); }
  });

  btnToday.addEventListener("click", () => {
    if (today.getFullYear() === 2026) {
      curMonth = today.getMonth() + 1;
    } else {
      curMonth = 1;
    }
    render();
    // Scroll today cell into view
    requestAnimationFrame(() => {
      const todayCell = daysGrid.querySelector(".today");
      if (todayCell) todayCell.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  monthSelect.addEventListener("change", e => {
    curMonth = parseInt(e.target.value, 10);
    render();
  });

  // Keyboard navigation
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft"  && curMonth > 1)  { curMonth--; render(); }
    if (e.key === "ArrowRight" && curMonth < 12) { curMonth++; render(); }
  });

  // ── Initial render ─────────────────────────────────
  render();
})();
