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
        this.allSelected = new Set([
            ...this.getIngredients(),
            ...this.getAppareils(),
            ...this.getUstensiles()
        ]);
    };

    isValidForPrimarySearch() {
        return this.mainInput.trim().length > 2;
    };

    isValidForSecondarySearch() {
        return (
            this.ingredients.size !== 0 ||
            this.appareils.size !== 0 ||
            this.ustensiles.size !== 0
        );
    }

    //retourne un tableau des éléments selectionnés pour une catégorie
    getIngredients() {
        const ingredients = new Set();

        //boucle sur le tableau précédent et pour chaque element, stocke l'element selectionné dans un nouveau tableau
        const ingredientsDom = Array.from(
            document.querySelectorAll('#tagsSelected .tagSelected.ingredients')
        )
        
        ingredientsDom.forEach( element => {
            ingredients.add(element.innerText);
        });

        return ingredients;
    };

    getAppareils() {
        const appareils = new Set();

        const appareilsDom = Array.from(
            document.querySelectorAll('#tagsSelected .tagSelected.appareils')
        )

        appareilsDom.forEach( element => {
            appareils.add(element.innerText);
        });

        return appareils;
    };

    getUstensiles() {
        const ustensiles = new Set();

        const ustensilesDom = Array.from(
            document.querySelectorAll('#tagsSelected .tagSelected.ustensiles')
        )
        
        ustensilesDom.forEach( element => {
            ustensiles.add(element.innerText);
        });

        return ustensiles;
    };
}

export default SearchParams;