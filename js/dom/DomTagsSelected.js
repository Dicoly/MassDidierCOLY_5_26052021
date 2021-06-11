class DomTagsselected {
    //Création tags selectionnés
    selectedTags() {
        let tagsIgredients = document.getElementById('detailRechercheIngredients');
        let tagsApareil = document.getElementById('detailRechercheAppareil')
        let tagsUstensiles = document.getElementById('detailRechercheUstensiles')
        
        // Si je click sur un element LI ingredient
        tagsIgredients.addEventListener('click', function (event) {
            const element = event.target;
            console.log('click sur un tag');
            console.dir(element);
            console.log(element);

                let elementValue = element.textContent;

                // Si le tag est déja séléctionné pas d'ajout
                if (element.classList.contains('tags__Selected')) {
                    element.classList.remove('tagsIgredients');
                }
                // Si le tag n'est pas séléctionné ajoute le tag
                else {
                    element.classList.add('tags__Selected');
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div class="tagsIgredients">${elementValue}<span id="monIconCircle"><i class="far fa-times-circle"></i></span></div>`);
                }
        });
        
        // Si je click sur un element LI appareil
        tagsApareil.addEventListener('click', function (event) {
            const element = event.target;
            console.log('click sur un tag');
            console.dir(element);
            console.log(element);

                let elementValue = element.textContent;

                // Si le tag est déja séléctionné pas d'ajout
                if (element.classList.contains('tags__Selected')) {
                    element.classList.remove('tagsAppareils');
                }
                // Si le tag n'est pas séléctionné ajoute le tag
                else {
                    element.classList.add('tags__Selected');
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div class="tagsAppareils">${elementValue}<span id="monIconCircle"><i class="far fa-times-circle"></i></span></div>`);
                }
        });

        // Si je click sur un element LI ustensil
        tagsUstensiles.addEventListener('click', function (event) {
            const element = event.target;
            console.log('click sur un tag');
            console.dir(element);
            console.log(element);

                let elementValue = element.textContent;
            
                // Si le tag est déja séléctionné pas d'ajout
                if (element.classList.contains('tags__Selected')) {
                    element.classList.remove('tagsUstensiles');
                }
                // Si le tag n'est pas séléctionné ajoute le tag
                else {
                    element.classList.add('tags__Selected');
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div class="tagsUstensiles">${elementValue}<span id="monIconCircle"><i class="far fa-times-circle"></i></span></div>`);
                }
        });    
    };
}
export default DomTagsselected;