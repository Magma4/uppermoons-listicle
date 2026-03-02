// scripts/uppermoons.js — renders the card grid on the home page

const renderUpperMoons = async () => {
  const grid = document.getElementById("cards-grid");

  try {
    const response = await fetch("/uppermoons");
    const data = await response.json();

    if (!data || data.length === 0) {
      grid.innerHTML = "<p>No Upper Moons available.</p>";
      return;
    }

    grid.innerHTML = "";

    data.forEach((moon) => {
      const card = document.createElement("a");
      card.href = `/uppermoons/${moon.slug}`;
      card.className = "moon-card";

      card.innerHTML = `
        <img src="${moon.image}" alt="${moon.name}">
        <div class="card-overlay">
          <span class="card-rank">Upper Rank ${moon.upperRank}</span>
          <h3 class="card-title">${moon.name}</h3>
          <p class="card-meta">${moon.arc || ""}</p>
        </div>
      `;

      grid.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load Upper Moons:", err);
    grid.innerHTML = "<p>Error loading Upper Moons.</p>";
  }
};

// Smooth-scroll "ALL UPPER MOONS" button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scroll-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      document.getElementById("main-content").scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Only run on the home page
const path = window.location.pathname;
if (path === "/" || path === "/index.html") {
  renderUpperMoons();
}
