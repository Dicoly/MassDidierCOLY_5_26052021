import SearchService from './SearchService.js';

class SearchEvent {

    static watch() {
        document.getElementById('launchSearch').addEventListener('click', () => {
            const searchService = new SearchService();
            searchService.launch();
        })
    }


}

export default SearchEvent;