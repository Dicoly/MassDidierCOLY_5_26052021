import recipes from "../../data/recipes.js";

class MainSearch {
    static research(searchParams) {
        this.filteredRecipes = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            const recipeName = recipe.name.toLowerCase();
            const inputValue = searchParams.mainInput.toLowerCase();

            if (recipeName.indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe);
            } else if (recipe.description.toLowerCase().indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe);
            }
            else {
                recipe.ingredients.forEach((element) => {
                    if (element.ingredient.toLowerCase().indexOf(inputValue) > -1) {
                        this.filteredRecipes.add(recipe);
                    }
                }); 
            }
        });
        return this.filteredRecipes;
    };

    static tagsresearch(searchResult, searchParams) {
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
    };
}

export default MainSearch;