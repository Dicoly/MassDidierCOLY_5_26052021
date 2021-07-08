import RecipesDB from "../../data/recipes.js";
import SearchParams from "../SearchParams.js";
import SearchResult from "../SearchResult.js";
import MainSearch from "./MainSearch.js";
//import SecondarySearch from "./SecondarySearch.js"

class SearchService {
    constructor() {
        this.recipes = RecipesDB;
        this.searchResultFinal = this.recipes; //50
    }

    launch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult();
        console.log('vide' + this.searchParams.hasNoSearch());
        console.log('input' +this.searchParams.isValidForPrimarySearch());
        console.log('tag' +this.searchParams.isValidForSecondarySearch());
        
        if (this.searchParams.hasNoSearch()) {
            this.searchResultFinal = RecipesDB; //50
        }

        // si texte présent dans le input principal lance une recherche
        if (this.searchParams.isValidForPrimarySearch()) {
            this.searchResultPrincipale = MainSearch.research(this.searchParams); //30
            this.searchResultFinal = this.searchResultPrincipale;
        }
        // si uniquement tag selectionné
        if (this.searchParams.isValidForSecondarySearch()) {            
            this.searchResultSecondary = MainSearch.tagsresearch(this.recipes, this.searchParams);
            this.searchResultFinal = this.searchResultSecondary;
        }
         this.searchResult.buildRecipes(this.searchResultFinal);
        console.dir(this);
        return this.searchResult;
    }
}   


export default SearchService;