import recipes from "../../data/recipes.js";

class MainSearch {
    static research(searchParams) {
        this.filteredRecipes = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            const recipeName = recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            const inputValue = searchParams.mainInput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            if (recipeName.indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe);
            } else if (recipe.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe);
            }
            else {
                recipe.ingredients.forEach((element) => {
                    if (element.ingredient.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(inputValue) > -1) {
                        this.filteredRecipes.add(recipe);
                    }
                }); 
            }
        });
        return this.filteredRecipes;
    }
}

export default MainSearch;