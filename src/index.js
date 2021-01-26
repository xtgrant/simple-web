import Button from "./components/Button";
import "./index.scss";

const App = () => {
  const element = document.createElement("div");
  element.className = "container";
  element.innerHTML = `
    <h1>This is H1. New Change.</h1>
    <div class="paragraph-container">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
    </div>
  `;

  const addNewParagraph = () => {
    const el = document.querySelector(".paragraph-container");
    const p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
    el.appendChild(p);
  };

  element.appendChild(Button());
  element.appendChild(Button({
    text: "Add new paragraph",
    callback: addNewParagraph
  }));
  return element;
}

document.getElementById("root").appendChild(App());
