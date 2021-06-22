import SearchParams from "../SearchParams.js";
import RecipesDB from "../../data/recipes.js";

class SearchService {
    constructor() {
        this.recipes = RecipesDB;
    }

    launch() {
        this.searchParams = new SearchParams();
        this.result = []; //@todo remplacer par SearchResult
        console.log(this)
    }
}

export default SearchService;