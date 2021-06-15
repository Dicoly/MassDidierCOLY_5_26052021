import DomRechercheSecondaire from './dom/DomRechercheSecondaire.js';
//import DomRechercheSecondaireAppareils from './dom/DomRechercheSecondaireAppareils.js';
//import DomRechercheSecondaireUstensils from './dom/DomRechercheSecondaireUstensils.js';
import ResultatDeLaRecherche from './data/fixtures.js';
import DomServiceRecipies from './dom/DomServiceRecipies.js';
import DomTagsSelected from './dom/DomTagsSelected.js';


//let domlist = new DomSelectList();


//liste deroulante des ingredients, appariels et des ustensils
let listIngredients = new DomRechercheSecondaire("ingredients");
let listAppareils = new DomRechercheSecondaire("appareils");
let listUstensils = new DomRechercheSecondaire("ustensiles");

listIngredients.remplirListeDeroulante(ResultatDeLaRecherche.ingredients);
listAppareils.remplirListeDeroulante(ResultatDeLaRecherche.appliance);
listUstensils.remplirListeDeroulante(ResultatDeLaRecherche.ustensils);



// au click d'un tag sa l'ajoute a la liste des tags selectionnés ou le retire
const tagsSelected = document.getElementById('tagsSelected');

let domTagsSelect = new DomTagsSelected(tagsSelected);
domTagsSelect.selectListEvent();
domTagsSelect.tagSelectedEvent();


//Pour l'article contenant des recettes
const listRecipiesContainer = document.getElementById('listRecipiesContainer');

//Affiche les recettes
let domRecipiesService = new DomServiceRecipies(listRecipiesContainer);
domRecipiesService.afficherLesRecettes(ResultatDeLaRecherche.recettesFiltrees);

console.log(ResultatDeLaRecherche);