import recipes from './data/recipes.js';
import DomBuilder from './dom/DomBuilder.js';
import DomEvent from './dom/DomEvent.js';
import SearchEvent from './search/SearchEvent.js';

(new SearchEvent()).watch();

(new DomEvent()).watch();

const domBuilder = new DomBuilder();
domBuilder.afficherLesRecettes(recipes);
domBuilder.afficherOuMasquerLaListeDesTags();
