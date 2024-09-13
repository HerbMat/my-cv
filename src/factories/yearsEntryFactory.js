function createYearEntry(yearEntry) {
    const years = document.createElement('cv-years')
    years.from = yearEntry.from
    years.to = yearEntry.to

    return years
}

export { createYearEntry }