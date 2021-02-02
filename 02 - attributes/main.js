console.log("Hello World!");

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `${this.getAttribute("name")}`
    }
}

customElements.define("user-card", UserCard);