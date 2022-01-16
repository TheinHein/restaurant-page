import Image1 from "./image1.jpg";

export default function renderContact() {
  const contact = document.createElement("div");

  const image = new Image();
  image.src = Image1;
  image.classList.add("image");

  const text = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";

  const p1 = document.createElement("p");
  p1.textContent = "Do you have any comments?";

  const p2 = document.createElement("p");
  p2.textContent = "Your comments and questions are important to us.";

  const p3 = document.createElement("p");
  p3.textContent =
    "Please fill in the form below to send us an email with any comments, or suggestions.";

  text.appendChild(h2);
  text.appendChild(p1);
  text.appendChild(p2);
  text.appendChild(p3);

  const form = document.createElement("form");
  form.classList.add("form");

  const label1 = document.createElement("label");
  label1.setAttribute("for", "name");
  label1.textContent = "Your Name";
  const input1 = document.createElement("input");
  input1.setAttribute("id", "name");
  input1.setAttribute("type", "text");

  form.appendChild(label1);
  form.appendChild(input1);

  const label2 = document.createElement("label");
  label2.setAttribute("for", "name");
  label2.textContent = "Your Email";
  const input2 = document.createElement("input");
  input2.setAttribute("id", "email");
  input2.setAttribute("type", "email");

  form.appendChild(label2);
  form.appendChild(input2);

  const label3 = document.createElement("label");
  label3.setAttribute("for", "name");
  label3.textContent = "Your Email";
  const input3 = document.createElement("input");
  input3.setAttribute("id", "subject");
  input3.setAttribute("type", "text");

  form.appendChild(label3);
  form.appendChild(input3);

  const label4 = document.createElement("label");
  label4.setAttribute("for", "msg");
  label4.textContent = "Your Message";
  const textArea = document.createElement("textarea");
  textArea.setAttribute("rows", "5");
  textArea.setAttribute("id", "msg");

  form.appendChild(label4);
  form.appendChild(textArea);

  const submit = document.createElement("button");
  submit.textContent = "SEND";
  submit.setAttribute("type", "submit");

  form.appendChild(submit);

  contact.appendChild(image);
  contact.appendChild(text);
  contact.appendChild(form);

  return contact;
}
