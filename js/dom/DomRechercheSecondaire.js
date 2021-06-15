/**
 * #detailList- : permet d'aller cherche l'id pour afficher la select
 *          Ex : #detailList-ingradients , #detailList-appareil, #detailList-ustensils
 * 
 * #input- : permet de changer la couleur du placeholder
 *          Ex : #input-ingradients , #input-appareil, #input-ustensils
 * 
 * #btn- : permet de réaliser la rotation de icon du bouton
 * 
 * .hide : permet d'afficher ou de masquer la liste des tags
 */

class DomRechercheSecondaire {
    constructor(name) {
        this.name = name;
        this.afficherOuMasquerLaListeDesTags();
    }

    // Creation  les LI dans la liste des ingredients
    remplirListeDeroulante(tagsValue) {
        let htmlContent = '';
        console.dir(tagsValue)
        //Ajout des LI dans la liste deroulante
        tagsValue.forEach(function(item) {

            htmlContent += `<li ><a class="selectListItem" data-tag-value="${item}" href="#">${item}</a></li>`;
        });
        // Ajouter des ingredients
        let listSelect = document.getElementById('detailList-' + this.name);
        console.log('detailList-' + this.name)
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };

    //Affichage de la classe Hide contenant la liste des Ingredients
    afficherOuMasquerLaListeDesTags() {
        document.getElementById('btn-' + this.name).addEventListener('click', function () {
            let estAfficher = document.getElementById('detailList-' + this.name).classList.contains('hide');

            if (estAfficher) {
                document.getElementById('detailList-' + this.name).classList.remove('hide');
                document.getElementById('input-' + this.name).classList.add('show');//changement de placeholder
            } else {
                document.getElementById('detailList-' + this.name).classList.add('hide');
                document.getElementById('input-' + this.name).classList.remove('show');
            }
        });
        //ratation icon bouton dropdown
        const btnicon = document.getElementById('btn-' + this.name);
        btnicon.addEventListener('click', rotateIcon);

        function rotateIcon() {
            btnicon.classList.toggle('show');
        };
    };
}

export default DomRechercheSecondaire;