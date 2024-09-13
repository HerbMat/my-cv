const template = `
<style>
.skill-entry {

}
</style>
<div class="skill-entry">
    <slot name="left"></slot>
    <slot name="right"></slot>
</div>
`
class Entry extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = template
    }


    static get observedAttributes() {
        return ['name', 'surname']
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
    }
    //
    // disconnectedCallback() {
    // }
}

customElements.define("cv-entry", Entry)