import "./style.css";

import {
  createNav,
  initNavHighlight,
  initNavClicks,
} from "./components/nav.js";
import { createBuyerMode, initBuyerMode } from "./components/buyerMode.js";

import { createIntro, initIntroAnimations } from "./sections/intro.js";
import { createOverview, initOverviewAnimations } from "./sections/overview.js";
import { createRetail, initRetailAnimations } from "./sections/retail.js";
import { createLuxury, initLuxuryAnimations } from "./sections/luxury.js";
import { createDining, initDiningAnimations } from "./sections/dining.js";
import {
  createEntertainment,
  initEntertainmentAnimations,
} from "./sections/entertainment.js";
import { createEvents } from "./sections/events.js";
import { createContact } from "./sections/contact.js";

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

initNavHighlight();
initNavClicks();
initBuyerMode();
initIntroAnimations();
initOverviewAnimations();
initRetailAnimations();
initLuxuryAnimations();
initDiningAnimations();
initEntertainmentAnimations();
