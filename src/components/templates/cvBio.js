import '../atoms/entry'
import '../atoms/education-entry'
import education from "../../entries"

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
p {
    text-align: end;
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
        education.forEach( educationEntry => this.addCvEntry(educationEntry))
    }

    addCvEntry(entry) {
        const cvSection = this.shadowRoot.querySelector('.cv-section')
        const years = document.createElement('p')
        years.textContent = entry.years
        cvSection.appendChild(years)
        const educationEntry = document.createElement('cv-education-entry')
        educationEntry.title = entry.entry.title
        educationEntry.place = entry.entry.place
        educationEntry.city = entry.entry.city
        cvSection.appendChild(educationEntry)
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-section", CvSection)