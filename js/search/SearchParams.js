import ResultatDeLaRecherche from '../data/fixtures.js';
/**
 * Contient tous les critéres de recherches
 *          Ex : input principal valeur et tags selectionnés 
 */
class SearchParams { 
    constructor() {
        this.mainInput = document.getElementById('inputSearchBar').value;
        this.ingredients = this.getIngredients();
        this.appareils = this.getAppareils();
        this.ustensiles = this.getUstensiles();
    };
    
    getMainInput() {
        return this.mainInput === '';
    };

    isValidForPrimarySearch() {
        return this.mainInput.length > 2;
    };

    isValidForSecondarySearch() {
        return (
            this.ingredients.length > 0 ||
            this.appareils.length > 0 ||
            this.ustensiles.length > 0   
        );
    };

    //retourne un tableau des éléments selectionnés pour une catégorie
    getIngredients() {
        const ingredients = new Set();
        const ingredientsDom = Array.from(document.querySelectorAll('#detailList-ingredients .selectListItemSelected'))
        ingredientsDom.forEach( element => {
        ingredients.add(element.innerHTML);
        console.dir(ingredientsDom)
        });
        return ingredients;
    };

    getAppareils() {
        const appareils = new Set();
        const appareilsDom = Array.from(document.querySelectorAll('#detailList-appareils .selectListItemSelected'))
        appareilsDom.forEach( element => {
        appareils.add(element.innerHTML);
        console.dir(appareilsDom)
        });
        return appareils;
    };

    getUstensiles() {
        const ustensiles = new Set();
        const ustensilesDom = Array.from(document.querySelectorAll('#detailList-ustensiles .selectListItemSelected'))
        ustensilesDom.forEach( element => {
        ustensiles.add(element.innerHTML);
        console.dir(ustensilesDom)
        });
        return ustensiles;
        
    };
}

export default SearchParams;