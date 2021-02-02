const template = document.createElement("template");

template.innerHTML = `
  <style>
  h1 {
    color: var(--h1-text-color, green);
  }
  </style>
  <div class="user-card">
    <h1 part="title"></h1>
    <img></img>
    <div>
      <p><slot name="mail"></p>
      <p><slot name="phone"></p>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  connectedCallback() {
    console.log("Connected");
  }

  disconnectedCallback () {
    console.log("Disconnected");
  }
}

customElements.define("user-card", UserCard);
