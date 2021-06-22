import ResultatDeLaRecherche from './data/fixtures.js';
import DomSelectList from './dom/DomSelectList.js';
import DomServiceRecipies from './dom/DomServiceRecipies.js';
import DomTagsSelected from './dom/DomTagsSelected.js';
//import SearchServicesInput from './search/SearchServices/SearchServicesInput.js';
import SearchEvent from './search/SearchEvent.js';


SearchEvent.watch();

/*let domarray = new SearchServicesInput();
domarray.research();*/

//Creation de la listes deroulante des ingredients, appariels et des ustensils
let domlist = new DomSelectList();
domlist.creerLesTroisListesSelect(ResultatDeLaRecherche);

// au click d'un tag sa l'ajoute a la liste des tags selectionnés ou le retire
let domTagsSelect = new DomTagsSelected();
domTagsSelect.selectListEvent();
//domTagsSelect.tagSelectedEvent();

//Pour l'article contenant des recettes
const listRecipiesContainer = document.getElementById('listRecipiesContainer');

//Affiche les recettes
let domRecipiesService = new DomServiceRecipies(listRecipiesContainer);
domRecipiesService.afficherLesRecettes(ResultatDeLaRecherche.recettesFiltrees);

//console.log(ResultatDeLaRecherche);