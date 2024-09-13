import { links } from "../entries";
import '../components/atoms/skill-entry'
import '../components/atoms/language-entry'


function addLinksEntry(entry, linksSection) {
    const skillName = document.createElement('cv-skill-name')
    skillName.title = entry.title
    const link = document.createElement('a')
    link.textContent = entry.link
    linksSection.addLine(skillName, link)
}

function prepareLinkSection() {
    const linkSection = document.createElement('cv-section')
    linkSection.title = links.title
    links.entries.forEach( linkEntry => addLinksEntry(linkEntry, linkSection))

    return linkSection
}

export { prepareLinkSection }