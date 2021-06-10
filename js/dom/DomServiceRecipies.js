class DomServiceRecipies {
    constructor(domElementContainer) {
        this.container = domElementContainer;
    }

    afficherLesRecettes(recettes) {
        //
        this.container.textContent = '';
        let htmlContent = '';

        recettes.forEach(recette => {

            //Recuperation des ingredients de la recettes
            let listIngredientsHtml = '';
            recette.ingredients.forEach(ingredient => {

                listIngredientsHtml += `<li><strong>${ingredient.ingredient}</strong> : ${ingredient.quantity} ${ingredient.unit}</li>`;
            })
            
            //Contenu d'une recette
            htmlContent += `<div class="recettesContainer">
                                <figure class="figure">
                                <div ><img class="figure__img" src="images/cebon.jpg" alt="" title=""></div>
                                    <figcaption class="figcaption">
                                        <h3 class="figcaption__titre">${recette.name}</h3>
                                        <p class="figcaption__temps"><i class="far fa-clock"></i><strong> ${recette.time} min </strong></p>
                                        <div><ul class="figcaption__ingredients">${listIngredientsHtml}</ul></div>
                                        <p class="figcaption__description">${recette.description}</p>
                                    </figcaption>
                                <figure>
                            </div>`;
        });
        //Affiche le setion  des recettes
        this.container.insertAdjacentHTML('beforeend', htmlContent);
    }
}


export default DomServiceRecipies;
