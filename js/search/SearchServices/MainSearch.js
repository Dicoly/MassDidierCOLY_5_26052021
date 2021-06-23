import recipes from "../../data/recipes.js";

class MainSearch {

    static research(searchParams) {
        
        console.log(searchParams)
        this.filteredRecipes = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            if (
                recipe.name.toLowerCase().includes(searchParams.mainInput) ||
                recipe.description.toLowerCase().includes(searchParams.mainInput)
                ) {
                this.filteredRecipes.add(recipe)
            }
            recipe.ingredients.forEach(element => {
                if (element.ingredient.toLowerCase().includes(searchParams.mainInput)){
                    this.filteredRecipes.add(recipe)
                }
            })
        });

        console.log(this.filteredRecipes)
        return this.filteredRecipes;
    }
}

export default MainSearch;