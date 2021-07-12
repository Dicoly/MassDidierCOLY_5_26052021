import DomBuilder from '../dom/DomBuilder.js';
import TagsResearch from '../dom/TagsResearch.js';
import SearchService from './SearchServices/SearchService.js';

class SearchEvent {
    constructor() {
        this.searchService = new SearchService();
        this.domBuilder = new DomBuilder();
    }

    launchSearch() {
        const searchResult = this.searchService.launch();
        this.domBuilder.afficherLesRecettes(searchResult.recipes);
        this.domBuilder.creerLesTroisListesSelect(searchResult, this.searchService.searchParams);
        return this;
    }

    watch() {
        //Au click sur le bouton Search pour lancer la recherche
        document.getElementById('launchSearch').addEventListener('click', () => {
            this.launchSearch();
        });

        //Pour la recherche principale avec le input.
        document.getElementById('inputSearchBar').addEventListener('keyup', () => {
            this.launchSearch();
        });

        // Au click sur l'element selectionné pour la retirer des tags selecrtionnés
        document.getElementById('selectContainer').addEventListener('click', () => {
                this.launchSearch();
        });

        // Au click sur la croix du tag selectionné pour supprimer.
        document.getElementById('tagsSelected').addEventListener('click', (event) => {
            const element = event.target;
            if (element.classList.contains('removeTagSelected')) {
                const tagValue = element.dataset.tagValueSelected;
                document.querySelector('[data-tag-value="'+ tagValue + '"]').classList.remove('selectListItemSelected');
                element.closest('.tagSelected').remove();
                this.launchSearch();
            }
        });

        //Pour filtrer les tags avec le input
        [...document.getElementsByClassName('inputFiltres')].forEach((element) => {
            element.addEventListener('keyup', TagsResearch.filterTags);
        });
        return this;
    }
}

export default SearchEvent;