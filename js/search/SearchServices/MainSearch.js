import recipes from "../../data/recipes.js";

class MainSearch {
    static research(searchParams) {
        this.filteredRecipes = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            if (recipe.name.toLowerCase().indexOf(searchParams.mainInput) > -1) {
                this.filteredRecipes.add(recipe)
            } else if (recipe.description.toLowerCase().indexOf(searchParams.mainInput) > -1) {
                this.filteredRecipes.add(recipe)
            }
            else if (recipe.ingredients.forEach((element) => {
                    element.ingredient.toLowerCase().indexOf(searchParams.mainInput) > -1;   
                    })) {
                this.filteredRecipes.add(recipe)
            }
        });
        return this.filteredRecipes;
    }
}

export default MainSearch;