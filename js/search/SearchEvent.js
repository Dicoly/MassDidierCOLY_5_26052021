import SearchService from './SearchServices/SearchService.js';

class SearchEvent {

    static watch() {
        const searchService = new SearchService();

        //Au click sur le bouton Search pour lancer la recherche
        document.getElementById('launchSearch').addEventListener('click', () => {
            searchService.launch();
        });

        //Pour la recherche principale avec le input.
        const inputSearchBar = document.getElementById('inputSearchBar');
        inputSearchBar.addEventListener('keyup', searchService.launch);
        
        // Au click sur l'element seleectionné pour la retirer des tags selecrtionnés
        document.getElementById('selectContainer').addEventListener('click', (event) =>{
            const element = event.target;
            if (element.classList.contains('selectListItem')) {
                searchService.launch();
            }
        });

        //Affichage ou masquer la classe Hide contenant la liste des tags
        const boutonsFiltres = document.getElementsByClassName('btnFiltres');
            for (let bouton of boutonsFiltres) {
                const target = bouton.dataset.target; //data-target=""
                bouton.addEventListener('click', function () {
                    document.getElementById(target).classList.toggle('hide'); //affiche la liste
                    bouton.classList.toggle('show'); // rotation icon bouton
                    searchService.launch();
                    document.getElementById('input-' + this.name).classList.toggle('show'); //changement couleur placeholder
                });  
            };      

        // Au click sur la croix du tag selectionné pour supprimer.
        document.getElementById('tagsSelected').addEventListener('click', function(event) {
            const element = event.target;
            if (element.classList.contains('removeTagSelected')) {
                const tagValue = element.dataset.tagValueSelected;
                document.querySelector('[data-tag-value="'+ tagValue + '"]').classList.remove('selectListItemSelected');
                element.closest('.tagSelected').remove();
                searchService.launch();
            }
        });
    }
}

export default SearchEvent;