import DomRechercheSecondaireIngredients from './dom/DomRechercheSecondaireIngredients.js';
import DomRechercheSecondaireAppareils from './dom/DomRechercheSecondaireAppareils.js';
import DomRechercheSecondaireUstensils from './dom/DomRechercheSecondaireUstensils.js';
import ResultatDeLaRecherche from './data/fixtures.js';
import DomServiceRecipies from './dom/DomServiceRecipies.js';
import DomTagsselected from './dom/DomTagsselected.js';


//liste deroulante des ingredients, appariels et des ustensils
let listIngredients = new DomRechercheSecondaireIngredients();
listIngredients.remplirListeDeroulante(ResultatDeLaRecherche.ingredients);
let listAppareils = new DomRechercheSecondaireAppareils();
listAppareils.remplirListeDeroulante(ResultatDeLaRecherche.appliance);
let listUstensils = new DomRechercheSecondaireUstensils();
listUstensils.remplirListeDeroulante(ResultatDeLaRecherche.ustensils);

// au click d'un tag sa l'ajoute a la liste des tags selectionnés ou le retire
const tagsSelected = document.getElementById('tagsSelected');
//tagsSelected.selectedTags();
let domTagsSelect = new DomTagsselected(tagsSelected);
domTagsSelect.selectedTags(ResultatDeLaRecherche);




//Pour l'article contenuant les recettes
const listRecipiesContainer = document.getElementById('listRecipiesContainer');

//Affiche les recettes
let domRecipiesService = new DomServiceRecipies(listRecipiesContainer);
domRecipiesService.afficherLesRecettes(ResultatDeLaRecherche.recettesFiltrees);

console.log(ResultatDeLaRecherche);

