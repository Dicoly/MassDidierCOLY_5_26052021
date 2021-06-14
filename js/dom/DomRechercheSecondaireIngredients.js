class DomRechercheSecondaireIngredients {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des ingredients
    remplirListeDeroulante(listDesIngredients) {
        let htmlContent = '';
        //Ajout des LI dans la liste deroulante
        listDesIngredients.forEach(function (item) {
            htmlContent += `<li ><a class="selectListItem" data-tag-value="${item}" href="#">${item}</a></li>`;
        });
        // Ajouter des ingredients
        let listSelect = document.getElementById('detailListIngredients');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    //Affichage de la classe Hide contenant la liste des Ingredients
    afficherOuMasquerListe() {
        document.getElementById('btnIngredients').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailListIngredients').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailListIngredients').classList.remove('hide');
                document.getElementById('inputIngredients').classList.add('show');//changement de placeholder
            } else {
                document.getElementById('detailListIngredients').classList.add('hide');
                document.getElementById('inputIngredients').classList.remove('show');
            }
        });
        //ratation icon bouton dropdown
        const btnicon = document.getElementById('btnIngredients');
        btnicon.addEventListener('click', rotateIcon);

        function rotateIcon() {
            btnicon.classList.toggle('show');
        };
    };
}

export default DomRechercheSecondaireIngredients;