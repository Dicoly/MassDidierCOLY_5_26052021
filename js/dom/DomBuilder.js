/**
 * #detailList- : permet d'aller cherche l'id pour afficher la select
 *          Ex : #detailList-ingradients , #detailList-appareil, #detailList-ustensils
 * 
 * #input- : permet de changer la couleur du placeholder
 * 
 * btnFiltres : classe deposé sur les trois boutons
 *          Ex: ingredient, appareil et ustensile
 * 
 * .hide : permet d'afficher ou de masquer la liste des tags
 */

class DomBuilder {
    constructor() {
        this.afficherOuMasquerLaListeDesTags();
    }

    //////////// creer Les Trois Listes Select
    creerLesTroisListesSelect(ResultatDeLaRecherche) {
        this.remplirListeDeroulante('ingredients', ResultatDeLaRecherche.ingredients);
        this.remplirListeDeroulante('appareils', ResultatDeLaRecherche.appareils);
        this.remplirListeDeroulante('ustensiles', ResultatDeLaRecherche.ustensiles);
    };

    // Creation  les LI dans la liste des 
    remplirListeDeroulante(name, elements) {
        let htmlContent = '';
        //Ajout des LI dans la liste deroulante
        for (let element of elements) {
            htmlContent += `<li ><a class="selectListItem" data-tag-value="${element}" href="#">${element}</a></li>`;
        }

        // Ajouter des Li dans les ul pour les ingredients, appareils et les ustensils
        let listSelect = document.getElementById('detailList-' + name);
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };

    //Affichage de la classe Hide contenant la liste des tags
    afficherOuMasquerLaListeDesTags() {
        const boutonsFiltres = document.getElementsByClassName('btnFiltres');

        for (let bouton of boutonsFiltres) {
            const target = bouton.dataset.target; //data-target=""

            bouton.addEventListener('click', function () {
                document.getElementById(target).classList.toggle('hide'); //affiche la liste
                bouton.classList.toggle('show'); // rotation icon bouton
                //document.getElementById('input-' + this.name).classList.toggle('show'); //changement couleur placeholder
            });  
        };      
    };

    //Creation et afficher des recettes
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

export default DomBuilder;