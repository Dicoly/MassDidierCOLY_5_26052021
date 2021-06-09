import DomRechercheSecondaireIngredients from './dom/DomRechercheSecondaireIngredients.js';
import DomRechercheSecondaireAppareils from './dom/DomRechercheSecondaireAppareils.js';
import DomRechercheSecondaireUstensils from './dom/DomRechercheSecondaireUstensils.js';
import ResultatDeLaRecherche from './data/fixtures.js';
import DomServiceRecipies from './dom/DomServiceRecipies.js';



let listIngredients = new DomRechercheSecondaireIngredients();
listIngredients.remplirListeDeroulante(ResultatDeLaRecherche.ingredients);

// au click d'un tag sa l'ajoute a la liste des tags selectionnés ou le retire
listIngredients.selectedTags();

let listAppareils = new DomRechercheSecondaireAppareils();
listAppareils.remplirListeDeroulante(ResultatDeLaRecherche.appliance);
let listUstensils = new DomRechercheSecondaireUstensils();
listUstensils.remplirListeDeroulante(ResultatDeLaRecherche.ustensils);

const listRecipiesContainer = document.getElementById('listRecipiesContainer');

//Affiche les recettes
let domRecipiesService = new DomServiceRecipies(listRecipiesContainer);
domRecipiesService.afficherLesRecettes(ResultatDeLaRecherche.recettesFiltrees);

console.log(ResultatDeLaRecherche);

