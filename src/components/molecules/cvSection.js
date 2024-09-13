import '../atoms/entry'

const template = `
<style>
.cv-section {
    display: grid;
    grid-template-columns: 10rem 3fr;
    grid-column-gap: 1rem;
}
.section-name {
    font-weight: 500;
    color: royalblue;
    margin-top: 0;
}
.line {
      margin-top: 0.5rem;
      margin-left: 1rem;
      height: 8px; /* Thickness of the line */
      background-color: blue;
}
</style>
<div class="cv-section">
    <div class="outer">
        <div class="line"></div>
    </div>
    <h2 class="section-name"></h2>
</div>
`

class CvSection extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
        this._title = ''
    }

    set title(value) {
        this._title = value
    }

    static get observedAttributes() {
        return ['title']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        const sectionName = this.shadowRoot.querySelector('.section-name')
        sectionName.textContent = this._title
    }

    addLine(left, right) {
        const cvSection = this.shadowRoot.querySelector('.cv-section')
        cvSection.appendChild(left)
        cvSection.appendChild(right)
    }

    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-section", CvSection)