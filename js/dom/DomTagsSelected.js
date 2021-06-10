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

                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div class="tagsIgredients data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle"></i></div>`);
                }
        });
        // Si je click sur un element LI appareil
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
        // Si je click sur un element LI ustensil
        tagsUstensiles.addEventListener('click', function (event) {
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

                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend', `<div class="tagsUstensiles data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle"></i></div>`);
                }
        });  
    }
}
export default DomTagsselected;