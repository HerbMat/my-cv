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
    <span class="bolded"></span>,
    <span class="italic"></span>,
    <span></span>
</p>
`
class EducationEntry extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._title = ''
        this._place = ''
        this._city = ''
    }

    set title(title) {
        this._title = title
    }

    set place(place) {
        this._place = place
    }

    set city(city) {
        this._city = city
    }

    static get observedAttributes() {
        return ['title', 'place', 'city']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        const entries = this.shadowRoot.querySelectorAll('p > span')
        entries[0].textContent = this._title
        entries[1].textContent = this._place
        entries[2].textContent = this._city
    }

    disconnectedCallback() {
    }
}

customElements.define("cv-education-entry", EducationEntry)