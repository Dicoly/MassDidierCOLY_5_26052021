import DomRechercheSecondaireIngredients from './dom/DomRechercheSecondaireIngredients.js';
import DomRechercheSecondaireAppareils from './dom/DomRechercheSecondaireAppareils.js';
import DomRechercheSecondaireUstensils from './dom/DomRechercheSecondaireUstensils.js';
import ResultDeLaRecherche from './data/fixtures.js';


let listIngredients = new DomRechercheSecondaireIngredients();
listIngredients.remplirListeDeroulante(ResultDeLaRecherche.ingredients);
let listAppareils = new DomRechercheSecondaireAppareils();
listAppareils.remplirListeDeroulante(ResultDeLaRecherche.appareils);
let listUstensils = new DomRechercheSecondaireUstensils();
listUstensils.remplirListeDeroulante(ResultDeLaRecherche.ustensils);

console.log(ResultDeLaRecherche);