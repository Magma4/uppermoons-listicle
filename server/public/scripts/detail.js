// scripts/detail.js — renders a single Upper Moon's detail page

(async () => {
    const content = document.getElementById("detail-content");

    // Extract slug from URL:  /uppermoons/<slug>
    const parts = window.location.pathname.split("/").filter(Boolean);
    const slug = parts[1]; // ["uppermoons", "<slug>"]

    if (!slug) {
        content.innerHTML = "<p>No Upper Moon specified.</p>";
        return;
    }

    try {
        const res = await fetch(`/uppermoons/${slug}/json`);
        if (!res.ok) throw new Error("Not found");

        const moon = await res.json();

        document.title = `${moon.name} • Upper Moon ${moon.upperRank ?? ""}`;

        content.innerHTML = `
      <a href="/" class="back-link">← Back to All Upper Moons</a>

      <div class="detail-hero">
        <img src="${moon.image}" alt="${moon.name}" class="detail-hero-img">
      </div>

      <div class="detail-body">
        <h1 class="detail-name">${moon.name}</h1>
        ${moon.upperRank != null ? `<span class="rank-badge">Upper Rank ${moon.upperRank}</span>` : ""}

        <div class="detail-stats">
          ${moon.abilityType ? `
          <div class="stat-card">
            <p class="stat-label">Ability</p>
            <p class="stat-value">${moon.abilityType}</p>
          </div>` : ""}

          ${moon.arc ? `
          <div class="stat-card">
            <p class="stat-label">Arc</p>
            <p class="stat-value">${moon.arc}</p>
          </div>` : ""}

          ${moon.threatLevel ? `
          <div class="stat-card">
            <p class="stat-label">Threat Level</p>
            <p class="stat-value">${moon.threatLevel}</p>
          </div>` : ""}
        </div>

        <div class="detail-description">
          <h2>Description</h2>
          <p>${moon.description}</p>
        </div>
      </div>
    `;
    } catch (err) {
        console.error(err);
        content.innerHTML = `
      <div class="error-card" style="margin-top:4rem">
        <h1 class="error-code">404</h1>
        <p class="error-title">Upper Moon Not Found</p>
        <p class="error-desc">Could not find data for "<strong>${slug}</strong>".</p>
        <a href="/" class="hero-btn" role="button">← Return Home</a>
      </div>
    `;
    }
})();
