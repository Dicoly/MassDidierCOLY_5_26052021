import ResultatDeLaRecherche from '../data/fixtures.js';

class DomFiltersList {
    
    tagsList() {
        const arrayIngredients = [];
        const arrayAppareils = []; 
        const arrayUstensils = [];

        console.log(arrayIngredients)
        /*console.log(arrayAppareils)
        console.log(arrayUstensils)*/

        ResultatDeLaRecherche.recettesFiltrees.forEach((recettesFiltree) => {

            recettesFiltree.ingredients.forEach((ingredient) => {
                if (arrayIngredients.indexOf(ingredient.ingredient) === -1) {
                    arrayIngredients.push(ingredient.ingredient);
                }
            });
            recettesFiltree.appliance.forEach((appliance) => {
                if (arrayAppareils.indexOf(appliance) === -1) {
                    arrayAppareils.push(appliance);
                }
            });
            recettesFiltree.ustensils.forEach((ustensil) => {
                if (arrayUstensils.indexOf(ustensil) === -1) {
                arrayUstensils.push(ustensil);
                }
            });
        });
        arrayIngredients.sort();
        arrayUstensils.sort();
        arrayAppareils.sort();
    }     
}

export default DomFiltersList;