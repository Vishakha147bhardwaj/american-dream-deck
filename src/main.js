import "./style.css";
import {
  createNav,
  initNavHighlight,
  initNavClicks,
  initMobileMenu,
} from "./components/nav.js";
import { createBuyerMode, initBuyerMode } from "./components/buyerMode.js";
import {
  createProgressBar,
  initProgressBar,
} from "./components/progressBar.js";
import { createLoader, initLoader } from "./components/loader.js";
import { initSectionReveal } from "./components/sectionReveal.js";

import { createIntro, initIntroAnimations } from "./sections/intro.js";
import { createOverview, initOverviewAnimations } from "./sections/overview.js";
import {
  createRetail,
  initRetailAnimations,
  initRetailInteractions,
} from "./sections/retail.js";
import { createLuxury, initLuxuryAnimations } from "./sections/luxury.js";
import { createDining, initDiningAnimations } from "./sections/dining.js";
import {
  createEntertainment,
  initEntertainmentAnimations,
} from "./sections/entertainment.js";
import { createEvents, initEventsAnimations } from "./sections/events.js";
import { createContact, initContactAnimations } from "./sections/contact.js";

// Mount loader immediately
createLoader();
createProgressBar();

const app = document.querySelector("#app");

app.innerHTML = `
  <div id="layout">
    <div id="sidebar"></div>
    <main id="main-content"></main>
  </div>
`;

const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-content");

sidebar.appendChild(createNav());
sidebar.appendChild(createBuyerMode());

const sections = [
  createIntro(),
  createOverview(),
  createRetail(),
  createLuxury(),
  createDining(),
  createEntertainment(),
  createEvents(),
  createContact(),
];
sections.forEach((s) => main.appendChild(s));

// Wait for loader then init everything
initLoader().then(() => {
  initNavHighlight();
  initMobileMenu();
  initNavClicks();
  initBuyerMode();
  initProgressBar();
  initSectionReveal();
  initIntroAnimations();
  initOverviewAnimations();
  initRetailAnimations();
  initRetailInteractions();
  initLuxuryAnimations();
  initDiningAnimations();
  initEntertainmentAnimations();
  initEventsAnimations();
  initContactAnimations();
});
