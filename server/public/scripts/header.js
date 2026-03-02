const header = document.querySelector("header");

// Container
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

// Left side (title)
const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const title = document.createElement("h1");
title.className = "app-title";
title.textContent = "Demon Slayer • Upper Moons";

headerLeft.appendChild(title);

// Right side (button)
const headerRight = document.createElement("div");
headerRight.className = "header-right";

const homeBtn = document.createElement("button");
homeBtn.className = "home-btn";
homeBtn.textContent = "Home";

homeBtn.addEventListener("click", () => {
  window.location = "/";
});

headerRight.appendChild(homeBtn);

// Assemble
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);
