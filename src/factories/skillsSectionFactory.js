import { skills, tools } from "../entries";
import  "../components/atoms/skill-name-entry";
import '../components/atoms/skill-entry'

function addSkillEntry(entry, skillsSection) {
    const skillName = document.createElement('cv-skill-name')
    skillName.title = entry.name
    const skillEntry = document.createElement('cv-skill-entry')
    skillEntry.level = entry.level
    skillEntry.description = entry.description
    skillsSection.addLine(skillName, skillEntry)
}

function prepareSkillSection() {
    const skillSection = document.createElement('cv-section')
    skillSection.title = skills.title
    skills.skills.forEach( skillEntry => addSkillEntry(skillEntry, skillSection))

    return skillSection
}

function prepareToolSection() {
    const skillSection = document.createElement('cv-section')
    skillSection.title = tools.title
    tools.tools.forEach( skillEntry => addSkillEntry(skillEntry, skillSection))

    return skillSection
}

export { prepareSkillSection, prepareToolSection }