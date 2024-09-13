const template = `
<style>
.bolded {
    font-weight: bold;
}
.italic {
    font-style: italic;
}
div {
    /*display: flex;*/
    /*flex-direction: row;*/
}
</style>
<div>
    <p class="skill-entry">
        <span class="bolded"></span>,
        <span class="italic"></span>,
        <span></span>,
        <span></span>
    </p>
    <p class="skill-description"></p>
</div>

`
class ExperienceEntry extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._position = ''
        this._company = ''
        this._city = ''
        this._descritpion = ''
        this._technologies = ''
    }

    set position(position) {
        this._position = position
    }

    set company(company) {
        this._company = company
    }

    set city(city) {
        this._city = city
    }

    set description(description) {
        this._descritpion = description
    }

    set technologies(technologies) {
        this._technologies = technologies
    }

    static get observedAttributes() {
        return ['position', 'company', 'city', 'description', 'technologies']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        const entries = this.shadowRoot.querySelectorAll('.skill-entry > span')
        entries[0].textContent = this._position
        entries[1].textContent = this._company
        entries[2].textContent = this._city
        entries[3].textContent = this._descritpion
        const skillDescription = this.shadowRoot.querySelector('.skill-description')
        skillDescription.textContent = this._technologies
    }

    disconnectedCallback() {
    }
}

customElements.define("cv-experience-entry", ExperienceEntry)