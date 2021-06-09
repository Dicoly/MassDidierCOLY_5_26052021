class DomRechercheSecondaireIngredients {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des ingredients
    remplirListeDeroulante(listDesIngredients) {
        let htmlContent = '';

        //Ajout des LI dans la liste deroulante
        listDesIngredients.forEach(function (item) {
            htmlContent += `<li class="tags__item"><a href="#">${item}</a></li>`;
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
    };

    selectedTags() {
        document.getElementById('filtresContainer').addEventListener('click', function (event) {
            const element = event.target;
            //console.dir(element);
            console.log(element);

            // Si je click sur un element LI (ingredient, ustensiles ou materiels)
            if (element.classList.contains('tags__item')) {

                const elementValue = element.textContent;
                console.log('hello');

                // Si le tag est déja séléctionné
                if (element.classList.contains('tags__Selected')) {
                    element.classList.remove('tags__Selected');
                    //document.querySelector('[data-tag-selected="' + elementValue + '"]').remove();
                }
                // Si le tag n'est pas séléctionné
                else {
                    element.classList.add('tags__Selected');

                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle"></i></div>`);
                }
            };
        });
    }
}

export default DomRechercheSecondaireIngredients;