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

class DomSelectList {
    constructor() {
        //this.afficherOuMasquerLaListeDesTags();
    }

    //////////// creer Les Trois Listes Select
    creerLesTroisListesSelect(ResultatDeLaRecherche) {
        this.remplirListeDeroulante('ingredients', ResultatDeLaRecherche.ingredients);
        this.remplirListeDeroulante('appareils', ResultatDeLaRecherche.appliance);
        this.remplirListeDeroulante('ustensiles', ResultatDeLaRecherche.ustensils);
    };

    // Creation  les LI dans la liste des 
    remplirListeDeroulante(name, tagsValue) {
        let htmlContent = '';
        //Ajout des LI dans la liste deroulante
        tagsValue.forEach(function(item) {

            htmlContent += `<li ><a class="selectListItem" data-tag-value="${item}" href="#">${item}</a></li>`;
        });
        // Ajouter des Li dans les ul pour les ingredients, appareils et les ustensils
        let listSelect = document.getElementById('detailList-' + name);
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };

    /*//Affichage de la classe Hide contenant la liste des tags
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
    };*/
}

export default DomSelectList;