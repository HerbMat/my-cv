const template = `
<style>
h1 {
    text-align: right;
    border-bottom: solid 1px;
    border-color: gray;
    font-size: 60px;
    font-weight: 520;
    margin-bottom: 0;
}
.name {
    color: darkgrey;
}

.surname {
    color: gray;
}
</style>
<h1><span class="name"></span> <span class="surname"></span></h1>
`
class BigTitle extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._name = ''
        this._surname = ''
    }

    set name(value) {
        this._name = value
    }

    get name() {
        return this._name
    }

    set surname(value) {
        this._surname = value
    }

    get surname() {
        return this._surname
    }

    static get observedAttributes() {
        return ['name', 'surname']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
        if (property === 'name') {
            this.shadowRoot.querySelector('.name').textContent = this._name
        }
        if (property === 'surname') {
            this.shadowRoot.querySelector('.surname').textContent = this._surname
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.name').textContent = this._name
        this.shadowRoot.querySelector('.surname').textContent = this._surname
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-big-title", BigTitle)