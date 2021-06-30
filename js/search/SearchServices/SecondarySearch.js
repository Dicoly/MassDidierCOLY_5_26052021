import recipes from '../../data/recipes.js';

class SecondarySearch {
    static research(searchResult, searchParams) {
        this.SearchSecondaryResult = new Set();

        searchResult.forEach(recipe => {

            recipe.allProduct = new Set([
                ...recipe.ingredients.map(element => (element.ingredient)),
                ...recipe.appliance,
                ...recipe.ustensils
            ]);
            
            let indexOfRecipe = recipe.id - 1;

            if (Array.from(searchParams.allSelected).every(element => Array.from(recipes[indexOfRecipe].allProduct).includes(element))) {
                this.SearchSecondaryResult.add(recipe);
            }
        });

        return this.SearchSecondaryResult;
    }
}

export default SecondarySearch;