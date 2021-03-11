export const toPath = (category) => {
    const words= "/" + category.split(" ").join("-")
    return words.toLowerCase()
}

export const titleSlicer = (title) => {
    const words = title.split(" ").slice(0, 8).join(" ") + "..."
    return words
}