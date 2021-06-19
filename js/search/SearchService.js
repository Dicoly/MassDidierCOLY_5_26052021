import SearchParam from "./SearchParam.js";
import RecipesDB from "./../data/recipes.js";

class SearchService {
    constructor() {
        this.recipes = RecipesDB;
    }

    launch() {
        this.searchParam = new SearchParam();
        this.result = []; //@todo remplacer par SearchResult
        console.log(this)
    }
}

export default SearchService;