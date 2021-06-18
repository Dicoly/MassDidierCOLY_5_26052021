class SearchTags {
    searchTags() { 

        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('input-ingredients');
        filter = input.value.toUpperCase();
        ul = document.getElementById("detailList-ingredients");
        li = ul.getElementsByTagName('li');
       // console.log(input)


        input.addEventListener('keyup', (event) => {
            event.preventDefault();
         
         
                // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                console.dir(a)
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                } else {
                li[i].style.display = "none";
                }
            }
        });
    };
}

export default SearchTags;