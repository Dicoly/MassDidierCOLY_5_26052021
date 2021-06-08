import DomRechercheSecondaireIngredients from './dom/DomRechercheSecondaireIngredients.js';
import DomRechercheSecondaireAppareils from './dom/DomRechercheSecondaireAppareils.js';
import DomRechercheSecondaireUstensils from './dom/DomRechercheSecondaireUstensils.js';
import ResultatDeLaRecherche from './data/fixtures.js';
import DomServiceRecipies from './dom/DomServiceRecipies.js';



let listIngredients = new DomRechercheSecondaireIngredients();
listIngredients.remplirListeDeroulante(ResultatDeLaRecherche.ingredients);
let listAppareils = new DomRechercheSecondaireAppareils();
listAppareils.remplirListeDeroulante(ResultatDeLaRecherche.appareils);
let listUstensils = new DomRechercheSecondaireUstensils();
listUstensils.remplirListeDeroulante(ResultatDeLaRecherche.ustensils);

const listRecipiesContainer = document.getElementById('listRecipiesContainer');

let domRecipiesService = new DomServiceRecipies(listRecipiesContainer);
domRecipiesService.afficherLesRecettes(ResultatDeLaRecherche.recettesFiltrees)

console.log(ResultatDeLaRecherche);