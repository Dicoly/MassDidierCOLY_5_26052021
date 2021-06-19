import ResultatDeLaRecherche from '../data/fixtures.js';
/**
 * Contient tous les critéres de recherches
 *          Ex : input principal valeur et tags selectionnés 
 */
class SearchParam {
    
    constructor() {
        this.mainInput = document.getElementById('searchBarPrincipale').value;
        this.ingredients = this.getIngredients();
        this.appareils = this.getAppareils();
        this.ustensiles = this.getUstensiles();
        //console.log(this.ustensilesSelected)
    };
    
    getMainInput() {
        return this.mainInput
    };

    isValidForPrimarySearch() {
        return this.mainInput.length > 2
    };

    isValidForSecondarySearch() {
        return (
            this.ingredients.size > 0 ||
            this.appareils.size > 0 ||
            this.ustensiles.size > 0   
        );
    };


    //retourne un tableau des éléments selectionnés pour une catégorie
    getIngredients() {
        const ingredients = new Set();
        //boucle sur le tableau précédent et pour chaque element, stocke le texte de la balise <a> dans un nouveau tableau
        const ingredientsDom = Array.from(document.querySelectorAll('#detailList-ingredients .selectListItem'))
        ingredientsDom.forEach( element => {
        ingredients.add(element.innerHTML);
        });
        return ingredients;
    };

    getAppareils() {
        const appareils = new Set();
        const appareilsDom = Array.from(document.querySelectorAll('#detailList-appareils .selectListItem'))
        appareilsDom.forEach( element => {
        appareils.add(element.innerHTML);
        });
        return appareils;
    };

    getUstensiles() {
        const ustensiles = new Set();
        const ustensilesDom = Array.from(document.querySelectorAll('#detailList-ustensiles .selectListItem'))
        ustensilesDom.forEach( element => {
        ustensiles.add(element.innerHTML);
        });
        return ustensiles;
        
    };
}

export default SearchParam;