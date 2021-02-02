console.log("Hello World!");

const template = document.createElement("template");
template.innerHTML = `
  <style>
    h1 {
        color: green;
    }
  </style>
  <div class="user-card">
    <h1></h1>
    <img></img>
  </div>`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    }
}

customElements.define("user-card", UserCard);