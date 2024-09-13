const template = `
<style>
h1 {
    color: gray;
    text-align: right;
    font-weight: 300; /* Make the font lighter */
    font-stretch: condensed; /* Make the font narrower */

}
</style>
<em><h1 class="title"></h1></em>
`
class SmallTitle extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._title = ''
    }

    set title(value) {
        this._title = value
    }

    get title() {
        return this._title
    }

    static get observedAttributes() {
        return ['title']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
        if (property === 'title') {
            this.shadowRoot.querySelector('.title').textContent = this._title
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.title').textContent = this._title
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-small-title", SmallTitle)