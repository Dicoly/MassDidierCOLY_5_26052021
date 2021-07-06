import DomEvent from './dom/DomEvent.js';
import SearchEvent from './search/SearchEvent.js';

(new SearchEvent()).watch().launchSearch();

(new DomEvent()).watch();

