import RecipesDB from "../../data/recipes.js";
import SearchParams from "../SearchParams.js";
import SearchResult from "../SearchResult.js";
import MainSearch from "./MainSearch.js";
import SecondarySearch from "./SecondarySearch.js"

class SearchService {
    constructor() {
        this.recipes = RecipesDB;
        //this.searchMainRecipesResult = this.recipes; //100
        this.searchResultFinal = this.recipes; //100
    }

    launch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult(); //@todo remplacer par SearchResult
        //this.secondarySearch = new SecondarySearch();
        
       // si aucun param, affiche toutes les recettes
       if (this.searchParams.isEmptySearch()) {
        this.searchResultFinal = MainSearch.research(this.searchParams); //100
        this.searchResult.buildRecipes(this.searchResultFinal);
        }

        // si texte présent dans le input principal lance une recherche
        if (this.searchParams.isValidForPrimarySearch()) {
            this.searchResultFinal = MainSearch.research(this.searchParams); //100
            this.searchResult.buildRecipes(this.searchResultFinal);
        }
        // si uniquement tag selectionné
        if (this.searchParams.isValidForTertiarySearch()) {            
            this.searchResultFinal = SecondarySearch.research(this.searchResultFinal, this.searchParams);
            this.searchResult.buildRecipes(this.searchResultFinal); 
        }
        //this.searchResult.ingredients.add('lait de coco', 'poulet');
        //this.searchResult.recipes = this.searchResultFinal;
        console.dir(this);
        return this.searchResult;
    }
}   


export default SearchService;