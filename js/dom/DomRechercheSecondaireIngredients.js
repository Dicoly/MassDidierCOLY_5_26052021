class DomRechercheSecondaireIngredients {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des ingredients
    remplirListeDeroulante(listDesIngredients) {
        let htmlContent = '';

        //Ajout des LI dans la liste deroulante
        listDesIngredients.forEach(function (item) {
            htmlContent += `<li class="tagIngredient"><a href="#">${item}</a></li>`;
        });

        // Ajouter des ingredients
        var node = document.createElement("LI");
        let listSelect = document.getElementById('detailRechercheIngredients');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    
    afficherOuMasquerListe() {
        document.getElementById('detailRechercheIngredientsBtn').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailRechercheIngredients').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailRechercheIngredients').classList.remove('hide');
            } else {
                document.getElementById('detailRechercheIngredients').classList.add('hide');
            }
        })
    }
}

export default DomRechercheSecondaireIngredients;