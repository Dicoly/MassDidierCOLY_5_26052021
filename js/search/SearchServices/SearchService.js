import RecipesDB from "../../data/recipes.js";
import SearchParams from "../SearchParams.js";
import SearchResult from "../SearchResult.js";
import MainSearch from "./MainSearch.js";
import SecondarySearch from "./SecondarySearch.js"

class SearchService {
    constructor() {
        this.recipes = RecipesDB;
    }

    launch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();
        this.searchResultFinal = RecipesDB;//50
        console.log('input' +this.searchParams.isValidForPrimarySearch());
        console.log('tag' +this.searchParams.isValidForSecondarySearch());

        // si texte présent dans le input principal lance une recherche
        if (this.searchParams.isValidForPrimarySearch()) {
            this.searchResultPrincipale = MainSearch.research(this.searchParams); //30
            this.searchResultFinal = this.searchResultPrincipale;
        }
        if (this.searchResultFinal.size === 0) {
            document.getElementById('notFoundRecipes').classList.remove('notFound');
        } else {
            document.getElementById('notFoundRecipes').classList.add('notFound')
        }

        // si uniquement tag selectionné
        if (this.searchParams.isValidForSecondarySearch()) {            
            this.searchResultSecondary = SecondarySearch.research(this.searchResultFinal, this.searchParams);
            this.searchResultFinal = this.searchResultSecondary;
        }

        this.searchResult.buildRecipes(this.searchResultFinal);
        console.dir(this);
        return this.searchResult;
    }
}   


export default SearchService;