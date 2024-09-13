import { experience } from "../entries";
import { createYearEntry } from "./yearsEntryFactory";
import '../components/atoms/experience-entry'

function addExperienceEntry(entry, experienceSection) {
    const years = createYearEntry(entry.years)
    const experienceEntry = document.createElement('cv-experience-entry')
    experienceEntry.position = entry.entry.position
    experienceEntry.company = entry.entry.company
    experienceEntry.city = entry.entry.city
    experienceEntry.description = entry.entry.description
    experienceEntry.technologies = entry.entry.technologies
    experienceSection.addLine(years, experienceEntry)
}

function prepareExperienceSection() {
    const experienceSection = document.createElement('cv-section')
    experienceSection.title = experience.title
    experience.entries.forEach( educationEntry => addExperienceEntry(educationEntry, experienceSection))

    return experienceSection
}

export { prepareExperienceSection }