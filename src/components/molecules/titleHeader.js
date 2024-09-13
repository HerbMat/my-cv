import '../atoms/big-title'
import '../atoms/small-title'

const template = `
<style>
</style>
<div class="title-header">
 <cv-big-title></cv-big-title>
 <cv-small-title></cv-small-title>
</div>
`

class TitleHeader extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._title = ''
    }

    static get observedAttributes() {
        return ['smalltitle', 'name', 'surname']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('cv-big-title').setAttribute("name", this.name)
        this.shadowRoot.querySelector('cv-big-title').setAttribute("surname", this.surname)
        this.shadowRoot.querySelector('cv-small-title').setAttribute("title", this.smalltitle)
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-title-header", TitleHeader)