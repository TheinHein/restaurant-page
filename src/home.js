import "./style.css";
import Image2 from "./image2.jpg";
import Image3 from "./image3.jpg";

export default function renderHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const image = new Image();
  image.src = Image2;
  image.classList.add("image");

  home.appendChild(image);

  const main = document.createElement("div");
  main.classList.add("main");

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.textContent = "WELCOME TO MEGA BAKERY";

  const hr = document.createElement("hr");
  hr.style.setProperty("width", "80%");

  const orderOnline = document.createElement("div");
  orderOnline.setAttribute("type", "button");
  orderOnline.textContent = "Order Online";

  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "Simply the best Bakery in Fremont, CA";
  div.appendChild(p);

  const div2 = document.createElement("div");
  const image2 = new Image();
  image2.src = Image3;
  image2.classList.add("image2");
  div2.appendChild(image2);
  div2.classList.add("container");

  const div3 = document.createElement("div");
  const p2 = document.createElement("p");
  p2.textContent = `STYLE, COMFORT, DISTINCTION. SURROUNDED BY BEAUTY, EXOTIC CUISINE, CASUAL ELEGANCE!`;
  const p3 = document.createElement("p");
  p3.textContent = `Mega Bakery will always adhere to the highest quality, using sustainable, as well as local products wherever possible.`;

  div3.appendChild(p2);
  div3.appendChild(p3);
  div2.appendChild(div3);
  div.appendChild(div2);

  main.appendChild(welcome);
  main.appendChild(hr);
  main.appendChild(orderOnline);
  main.appendChild(hr.cloneNode(true));
  main.appendChild(div);
  home.appendChild(main);

  return home;
}
