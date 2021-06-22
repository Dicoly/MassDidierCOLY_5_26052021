class SearchResult {
    constructor() {
        this.recipes = [],
        this.ingredients = new Set(),
        this.appareils = new Set(),
        this.ustensiles = new Set()
    }
}

export default SearchResult;