import "./style.css";

import {
  createNav,
  initNavHighlight,
  initNavClicks,
} from "./components/nav.js";
import { createBuyerMode, initBuyerMode } from "./components/buyerMode.js";

import { createIntro } from "./sections/intro.js";
import { createOverview } from "./sections/overview.js";
import { createRetail } from "./sections/retail.js";
import { createLuxury } from "./sections/luxury.js";
import { createDining } from "./sections/dining.js";
import { createEntertainment } from "./sections/entertainment.js";
import { createEvents } from "./sections/events.js";
import { createContact } from "./sections/contact.js";

const app = document.querySelector("#app");

// Layout wrapper
app.innerHTML = `
  <div id="layout">
    <div id="sidebar"></div>
    <main id="main-content"></main>
  </div>
`;

const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main-content");

// Mount nav
sidebar.appendChild(createNav());

// Mount buyer mode inside sidebar
sidebar.appendChild(createBuyerMode());

// Mount all sections
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

// Init interactions
initNavHighlight();
initNavClicks();
initBuyerMode();
