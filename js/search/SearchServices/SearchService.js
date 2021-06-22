import RecipesDB from "../../data/recipes.js";
import SearchParams from "../SearchParams.js";
import SearchResult from "../SearchResult.js";
import MainSearch from "./MainSearch.js";


class SearchService {
    constructor() {
        this.recipes = RecipesDB;
    }

    launch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult(); //@todo remplacer par SearchResult
        console.log(this)

        this.searchMainRecipesResult = this.recipes; //100
        this.searchResultFinal = this.recipes; //100

        console.log(this.searchParams)
        console.log(this.searchResult)

        // si aucun param, affiche toutes les recettes
        if (this.searchParams.getMainInput() == true) {
            this.searchResultFinal = MainSearch.research(this.searchParams); //30
        } else  if (this.searchParams.isValidForPrimarySearch() == true) {
            //trouve les recettes avec le texte de la recherche principale
            this.searchMainRecipesResult = MainSearch.research(this.searchParams); //30
            this.searchResultFinal = this.searchMainRecipesResult; //30
        }
    }
}

export default SearchService;