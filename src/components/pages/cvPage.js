import '../atoms/years-entry'
import '../molecules/titleHeader'
import '../molecules/cvSection'
import { prepareEducationSection } from '../../factories/educationSectionFactory'
import { prepareExperienceSection } from '../../factories/experienceSectionFactory'
import { prepareSkillSection, prepareToolSection } from '../../factories/skillsSectionFactory'
import { prepareLanguageSection } from '../../factories/languageSectionFactory'
import { prepareLinkSection } from '../../factories/linksSectionFactory'

const template = `
<style>
.bio {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
<main>
    <cv-title-header name="Mateusz" surname="Kozłowski" smalltitle="Curriculum Vitae"></cv-title-header>
    <div class="bio">
    </div>
</main>
`

class CvPage extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
    }


    static get observedAttributes() {
        return []
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        const bio = this.shadowRoot.querySelector('.bio')
        bio.appendChild(prepareEducationSection())
        bio.appendChild(prepareExperienceSection())
        bio.appendChild(prepareSkillSection())
        bio.appendChild(prepareToolSection())
        bio.appendChild(prepareLanguageSection())
        bio.appendChild(prepareLinkSection())
    }
}

customElements.define("cv-page", CvPage)