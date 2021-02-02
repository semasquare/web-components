console.log("Hello World!");

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>
        h1 {
          color: green;
        }
      </style><h1>${this.getAttribute("name")}</h1>`
    }
}

customElements.define("user-card", UserCard);