// client/public/scripts/uppermoons.js

const renderUpperMoons = async () => {
  const mainContent = document.getElementById("main-content");

  try {
    const response = await fetch("/uppermoons");
    const data = await response.json();

    // Clear main content first
    mainContent.innerHTML = "";

    if (!data || data.length === 0) {
      const msg = document.createElement("h2");
      msg.textContent = "No Upper Moons Available ";
      mainContent.appendChild(msg);
      return;
    }

    // Page subtitle (optional)
    const subtitle = document.createElement("p");
    subtitle.className = "subtitle";
    subtitle.textContent = "Click any card to view the full profile.";
    mainContent.appendChild(subtitle);

    // Grid container
    const grid = document.createElement("div");
    grid.className = "cards-grid";

    data.forEach((moon) => {
      // Card
      const card = document.createElement("article");
      card.className = "moon-card";

      // Top (image + name/rank)
      const top = document.createElement("div");
      top.className = "card-top";

      const img = document.createElement("img");
      img.className = "moon-img";
      img.src = moon.image;       // must exist in your data
      img.alt = moon.name;

      const headingWrap = document.createElement("div");
      headingWrap.className = "heading-wrap";

      const name = document.createElement("h3");
      name.className = "moon-name";
      name.textContent = moon.name;

      const rank = document.createElement("p");
      rank.className = "moon-rank";
      rank.textContent = `Upper Rank ${moon.upperRank}`;

      headingWrap.appendChild(name);
      headingWrap.appendChild(rank);

      top.appendChild(img);
      top.appendChild(headingWrap);

      // Attributes (3+ displayed on card)
      const info = document.createElement("div");
      info.className = "card-info";

      const ability = document.createElement("p");
      ability.className = "moon-ability";
      ability.textContent = `Ability: ${moon.abilityType}`;

      const arc = document.createElement("p");
      arc.className = "moon-arc";
      arc.textContent = `Arc: ${moon.arc}`;

      // short description
      const desc = document.createElement("p");
      desc.className = "moon-desc";
      desc.textContent = moon.description;

      info.appendChild(ability);
      info.appendChild(arc);
      info.appendChild(desc);

      // INFO link
      const link = document.createElement("a");
      link.href = `/uppermoons/${moon.slug}`;
      link.textContent = "INFO";
      link.setAttribute("role", "button");
      link.className = "info-btn";

      // Assemble card
      card.appendChild(top);
      card.appendChild(info);
      card.appendChild(link);

      grid.appendChild(card);
    });

    mainContent.appendChild(grid);
  } catch (err) {
    mainContent.innerHTML = "";
    const msg = document.createElement("h2");
    msg.textContent = "Error loading Upper Moons ";
    mainContent.appendChild(msg);
    console.error(err);
  }
};

const requestedUrl = window.location.pathname.split("/").filter(Boolean)[0];
if (!requestedUrl) {
  renderUpperMoons();
}
