class C_tag extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    ConnectedCallback() {
        const template = document.createElement("template");
        template.innerHTML = this.template;
        this.ShadowRoot.appendChild(template.content.cloneNode(true));
    }

}
customElements.define("c-tag", C_tag);

// class CInput extends HTMLInputElement {
//     constructor() {
//         super();
//         console.log("constructor called");
//     }
// }

//customElements.define("c-input", CInput, { extends: "input" });