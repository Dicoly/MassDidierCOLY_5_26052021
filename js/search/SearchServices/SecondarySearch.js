import recipes from '../../data/recipes.js';
class SecondarySearch {
    /*static research(searchResult, searchParams) {
        this.SearchSecondaryResult = new Set();
        console.log(this.SearchSecondaryResult)
        if (searchParams.ingredients.length !== 0) {
            //searchParams.ingredients.forEach(ingrSelected => {
                
                searchResult.forEach(recipe => {
                    let isFoundIngr = true;
                    searchParams.ingredients.forEach((element) => {
                    isFoundIngr &= recipe.ingredients.findIndex(
                        (ingredient) => ingredient.ingredient.indexOf(element) > -1,
                    ) > -1;
                    });
                    if (isFoundIngr) {
                        this.SearchSecondaryResult.push(recipe);
                    }
                });
            //});
        }
    }*/
}

export default SecondarySearch;