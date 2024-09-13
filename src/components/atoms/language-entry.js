const template = `
<style>
.bolded {
    font-weight: bold;
}
.italic {
    font-style: italic;
}
</style>
<p class="skill-entry">
    <span class="bolded"></span>
</p>
`
class LanguageEntry extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._level = ''
        this._description = ''
    }

    set level(level) {
        this._level = level
    }

    set description(description) {
        this._description = description
    }

    static get observedAttributes() {
        return ['level', 'description']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        const skillParagraph = this.shadowRoot.querySelector('p')
        skillParagraph.children[0].textContent = this._level
        if (this._description) {
            const descriptionSpan = document.createElement("span")
            descriptionSpan.textContent = `${this._description}`
            skillParagraph.appendChild(descriptionSpan)
        }
    }

    disconnectedCallback() {
    }
}

customElements.define("cv-language-entry", LanguageEntry)