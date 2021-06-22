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
        
        
        /*this.recipes = RecipesDB;

        const arrayIngredients = [];
        const arrayAppareils = [];
        const arrayUstensils = [];

        //console.dir(arrayIngredients)
        //console.log(arrayUstensils)
        //console.log(arrayUstensils)

        RecipesDB.forEach((recipe) => {
            recipe.ingredients.forEach((ingredient) => {
                if (arrayIngredients.indexOf(ingredient.ingredient) === -1) {
                    arrayIngredients.push(ingredient.ingredient);
                }
            });
            recipe.appliance.forEach((appliance) => {
                if (arrayAppareils.indexOf(appliance) === -1) {
                    arrayAppareils.push(appliance);
                }
            });
            recipe.ustensils.forEach((ustensil) => {
                if (arrayUstensils.indexOf(ustensil) === -1) {
                    arrayUstensils.push(ustensil);
                }
            });
        });
        arrayIngredients.sort();
        arrayUstensils.sort();
        arrayAppareils.sort();*/
    }
}

export default MainSearch;