//import DomSelectList from './dom/DomSelectList.js';

class SearchTags {
    searchTags() { 
        
        // Déclaration des  variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('input-ingredients');
        filter = input.value.toUpperCase();
        ul = document.getElementById("detailList-ingredients");
        li = ul.getElementsByTagName('li');
        //console.log()
         
            // Parcourez tous les éléments de la liste et masquez ceux qui ne correspondent pas à la requête de recherche
        for ( i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            //console.log(a)
            txtValue = a.textContent || a.innerText;
            //console.log(txtValue)
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                } else {
                li[i].style.display = "none";
                }
        }
        //input.addEventListener('keyup', ul.txtValue);
    };
}

export default SearchTags;