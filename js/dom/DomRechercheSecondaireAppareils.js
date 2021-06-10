class DomRechercheSecondaireAppareils {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des appareils
    remplirListeDeroulante(listDesAppareils) {
        let htmlContent = '';

        //Ajout des LI dans la liste deroulante
        listDesAppareils.forEach(function (item) {
            htmlContent += `<li class="tagAppareil"><a href="#">${item}</a></li>`;
        });
        
        // Ajouter des appareils
        var node = document.createElement("LI");
        let listSelect = document.getElementById('detailRechercheAppareil');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    
    afficherOuMasquerListe() {
        document.getElementById('detailRechercheAppareilBtn').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailRechercheAppareil').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailRechercheAppareil').classList.remove('hide');
            } else {
                document.getElementById('detailRechercheAppareil').classList.add('hide');
            }
        })
    }
}
/*
class DomTagsselected {

    //Création tags selectionnés
    selectedTags() {
        let tagsApareil = document.getElementById('detailRechercheAppareil');

        tagsApareil.addEventListener('click', function (event) {
            const element = event.target;
            console.log('click sur un tag');
            console.dir(element);
            console.log(element);

            // Si je click sur un element LI (ingredient, ustensiles ou materiels)
           // if (element.classList.contains('tags__item ')) {

                let elementValue = element.textContent;

            
                // Si le tag est déja séléctionné
                if (element.classList.contains('tags__item')) {
                    element.classList.remove('tags__Selected');
                    //document.querySelector('[data-tag-selected="' + elementValue + '"]').remove();
                }
                // Si le tag n'est pas séléctionné
                else {
                    element.classList.add('tags__Selected');

                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div class="tagsAppareils data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle"></i></div>`);
                }
        });
    }
}
export  {DomRechercheSecondaireAppareils, DomTagsselected};*/
export  default DomRechercheSecondaireAppareils;