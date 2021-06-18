import DomSelectList from './dom/DomSelectList.js';
import ResultatDeLaRecherche from './data/fixtures.js';
import DomServiceRecipies from './dom/DomServiceRecipies.js';
import DomTagsSelected from './dom/DomTagsSelected.js';
import SearchTags from  './search/SearchTags.js';
import DomFiltresList from './dom/DomFiltresList.js';




//Recherche à "vide" pour obtenir la liste complete à partir du resultat de la recherche
let domFiltresLists = new DomFiltresList();
domFiltresLists.tagsList();

//Creation de la listes deroulante des ingredients, appariels et des ustensils
let domlist = new DomSelectList();
domlist.creerLesTroisListesSelect(ResultatDeLaRecherche);

//Recherche à "vide" pour obtenir tous les infos
let tagsResearch = new SearchTags();
tagsResearch.searchTags(ResultatDeLaRecherche);


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