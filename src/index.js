import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

import "./style.css";

function header() {
  const header = document.createElement("div");
  header.classList.add("header");
  const title = document.createElement("div");
  title.textContent = "MEGA Bakery";
  header.appendChild(title);
  return header;
}

function nav() {
  const nav = document.createElement("div");
  const home = document.createElement("div");

  home.textContent = "HOME";
  home.setAttribute("type", "button");
  home.style.setProperty("color", "red");
  const menu = document.createElement("div");
  menu.textContent = "MENU";
  const contact = document.createElement("div");
  contact.textContent = "CONTACT";
  home.setAttribute("tabindex", "0");
  menu.setAttribute("tabindex", "0");
  contact.setAttribute("tabindex", "0");

  nav.classList.add("nav");
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  function render(e) {
    if (content.children[0]) content.removeChild(content.children[0]);
    if (e.target.textContent === "HOME") {
      content.appendChild(renderHome());
    } else if (e.target.textContent === "MENU") {
      home.style.removeProperty("color");
      content.appendChild(renderMenu());
    } else if (e.target.textContent === "CONTACT") {
      home.style.removeProperty("color");
      content.appendChild(renderContact());
    }
  }
  home.addEventListener("click", render);
  menu.addEventListener("click", render);
  contact.addEventListener("click", render);
  return nav;
}

const content = document.createElement("div");
const footer = document.createElement("div");
content.classList.add("content");

footer.classList.add("footer");
footer.textContent = "\u00a9 TheinHein";

document.body.appendChild(header());
document.body.appendChild(nav());
document.body.appendChild(content);
content.appendChild(renderHome());
document.body.appendChild(footer);
