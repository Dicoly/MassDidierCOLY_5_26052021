class DomServiceRecipies {
    /*constructor(domElementContainer) {
        this.container = domElementContainer;
    }*/

    afficherLesRecettes(recettes) {
        let htmlContent = '';

        recettes.forEach(recipe => {
            //Recuperation des ingredients de la recettes
            let listIngredientsHtml = '';
            recipe.ingredients.forEach(ingredient => {
                let unit = '';
                let quantity = '';
                //permet d'affiche l'unité s'il en existe
                if (ingredient.unit !== undefined) {
                    unit = ingredient.unit; 
                };
                //permet d'affiche la quantité s'il en existe
                if (ingredient.quantity !== undefined) {
                    quantity = ingredient.quantity;
                };
                listIngredientsHtml += `<li>
                                            <strong>${ingredient.ingredient}
                                            </strong> : ${quantity} ${unit}
                                        </li>`;
            })
            //Contenu d'une recette
            htmlContent += `<div class="recettesContainer" id=${recipe.id}>
                                <figure class="figure">
                                <div ><img class="figure__img" src="images/cebon.jpg" alt="" title=""></div>
                                    <figcaption class="figcaption">
                                        <h3 class="figcaption__titre">${recipe.name}</h3>
                                        <p class="figcaption__temps"><i class="far fa-clock"></i><strong> ${recipe.time} min </strong></p>
                                        <div><ul class="figcaption__ingredients">${listIngredientsHtml}</ul></div>
                                        <p class="figcaption__description">${recipe.description}</p>
                                    </figcaption>
                                <figure>
                            </div>`;
        });
        //Affiche la section  des recettes
        document.getElementById('listRecipiesContainer').insertAdjacentHTML('beforeend', htmlContent);
    }
}

export default DomServiceRecipies;
