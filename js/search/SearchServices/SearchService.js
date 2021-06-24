import RecipesDB from "../../data/recipes.js";
import SearchParams from "../SearchParams.js";
import SearchResult from "../SearchResult.js";
import MainSearch from "./MainSearch.js";
//import SecondarySearch from "./SecondarySearch.js"

class SearchService {
    constructor() {
        this.recipes = RecipesDB;
        //this.searchMainRecipesResult = this.recipes; //100
        //this.searchResultFinal = this.recipes; //100
    }

    launch() {
        this.searchParams = new SearchParams();
        this.searchResult = new SearchResult(); //@todo remplacer par SearchResult
        
       // si aucun param, affiche toutes les recettes
        if (this.searchParams.getMainInput()) {
            this.searchResultFinal = MainSearch.research(this.searchParams); //30
            this.searchResult.recipes = this.searchResultFinal;
            this.searchResult.recipes.forEach(recipe => {
                recipe.ingredients.forEach(element => {
                    this.searchResult.ingredients.add(element.ingredient);
                });
                recipe.appliance.forEach(element => {
                    this.searchResult.appareils.add(element)
                });
                recipe.ustensils.forEach(element => {
                    this.searchResult.ustensiles.add(element)
                });
            });

        }
        
        if (this.searchParams.isValidForPrimarySearch()) {
            //trouve les recettes avec le texte de la recherche principale
            this.searchMainRecipesResult = MainSearch.research(this.searchParams); //30
            this.searchResultFinal = this.searchMainRecipesResult; //30
            this.searchResult.recipes = this.searchResultFinal;
            this.searchResult.recipes.forEach(recipe => {
                recipe.ingredients.forEach(element => {
                    this.searchResult.ingredients.add(element.ingredient);
                });
                recipe.appliance.forEach(element => {
                    this.searchResult.appareils.add(element);
                });
                recipe.ustensils.forEach(element => {
                    this.searchResult.ustensiles.add(element)
                });
            });

        }

        this.searchResult.allFilter = [...this.searchResult.ingredients,...this.searchResult.appareils,...this.searchResult.ustensiles];

        //this.searchResult.ingredients.add('lait de coco', 'poulet');
        //this.searchResult.recipes = this.searchResultFinal;
        console.log(this.searchResult);
        return this.searchResult;

    }
}   


export default SearchService;