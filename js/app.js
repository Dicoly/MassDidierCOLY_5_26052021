import DomEvent from './dom/DomEvent.js';
import SearchEvent from './search/SearchEvent.js';

(new SearchEvent()).watch();

(new DomEvent()).watch();
