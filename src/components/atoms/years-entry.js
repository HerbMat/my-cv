const template = `
<style>
p {
    text-align: end;
}
</style>
<p></p>
`
class YearsEntry extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._from = ''
        this._to = ''
    }

    set from(value) {
        this._from = value
    }

    get from() {
        return this._from
    }

    set to(value) {
        this._to = value
    }

    get to() {
        return this._to
    }

    static get observedAttributes() {
        return ['from', 'to']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('p').textContent = `${this._from} - ${this._to}`
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-years", YearsEntry)