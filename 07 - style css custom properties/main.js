console.log("Hello World!");

const template = document.createElement("template");
template.innerHTML = `
  <style>
    h1 {
        color: var(--h1-text-color, green);
    }
  </style>
  <div class="user-card">
    <h1></h1>
    <img></img>
    <div>
      <p><slot name="mail"/></p>
      <p><slot name="phone"/></p>
    </div>
  </div>`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
    }

    connectedCallback() {
      console.log("Connected");

      this.shadowRoot.querySelector("img").addEventListener("click", () => alert("Img click"));
    }

    disconnectedCallback() {
      console.log("Disconnected");

      this.shadowRoot.querySelector("img").removeEventListener("click");
    }
}

customElements.define("user-card", UserCard);