import {education} from "../entries";
import { createYearEntry } from "./yearsEntryFactory";
import '../components/atoms/education-entry'


function addEducationEntry(entry, educationSection) {
    const years = createYearEntry(entry.years)
    const educationEntry = document.createElement('cv-education-entry')
    educationEntry.title = entry.entry.title
    educationEntry.place = entry.entry.place
    educationEntry.city = entry.entry.city
    educationSection.addLine(years, educationEntry)
}

function prepareEducationSection() {
    const educationSection = document.createElement('cv-section')
    educationSection.title = education.title
    education.entries.forEach( educationEntry => addEducationEntry(educationEntry, educationSection))

    return educationSection
}

export { prepareEducationSection }