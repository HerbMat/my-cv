const template = `
<style>
p {
    text-align: end;
}
</style>
<p></p>
`
class SkillNameEntry extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._title = ''
    }

    set title(title) {
        this._title = title
    }

    static get observedAttributes() {
        return ['title']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('p').textContent = this._title
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-skill-name", SkillNameEntry)