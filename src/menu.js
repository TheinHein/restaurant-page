import Bread from "./bread.jpg";
import Bread2 from "./bread2.jpg";
import Croissant from "./croissant.jpg";
import Cupcake from "./cupcake.jpg";
import Cookie from "./cookie.jpg";

export default function renderMenu() {
  const menu = document.createElement("div");
  const hr = document.createElement("hr");
  menu.appendChild(item1(Bread));
  menu.appendChild(hr.cloneNode(true));
  menu.appendChild(item2(Croissant).cloneNode(true));
  menu.appendChild(hr.cloneNode(true));
  menu.appendChild(item1(Bread2).cloneNode(true));
  menu.appendChild(hr.cloneNode(true));
  menu.appendChild(item2(Cupcake).cloneNode(true));
  menu.appendChild(hr.cloneNode(true));
  menu.appendChild(item1(Cookie).cloneNode(true));
  return menu;
}

function item1(item) {
  const div = document.createElement("div");
  div.classList.add("menu-item");

  const image = document.createElement("img");
  image.src = item;
  image.classList.add("menu-image");

  const pDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = `Bread`;
  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  pDiv.appendChild(h3);
  pDiv.appendChild(p);
  div.appendChild(image);
  div.appendChild(pDiv);
  return div;
}

function item2(item) {
  const div = document.createElement("div");
  div.classList.add("menu-item");

  const image = document.createElement("img");
  image.src = item;
  image.classList.add("menu-image");

  const pDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = `Bread`;
  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  pDiv.appendChild(h3);
  pDiv.appendChild(p);
  div.appendChild(pDiv);
  div.appendChild(image);
  return div;
}
