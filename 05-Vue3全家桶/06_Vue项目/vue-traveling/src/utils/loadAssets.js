export const getAssetsUrl = (image) => {
    return new URL(`../assets/images/${image}`, import.meta.url).href
}