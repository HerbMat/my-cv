import { languages } from "../entries";
import '../components/atoms/language-entry'
import '../components/atoms/skill-entry'


function addLanguageEntry(entry, languageSection) {
    const skillName = document.createElement('cv-skill-name')
    skillName.title = entry.name
    const languageEntry = document.createElement('cv-language-entry')
    languageEntry.level = entry.level
    languageEntry.description = entry.description
    languageSection.addLine(skillName, languageEntry)
}

function prepareLanguageSection() {
    const languageSection = document.createElement('cv-section')
    languageSection.title = languages.title
    languages.languages.forEach( languageEntry => addLanguageEntry(languageEntry, languageSection))

    return languageSection
}

export { prepareLanguageSection }