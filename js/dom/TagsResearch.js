class TagsResearch {
    // Research match between input in dropdown and tag content
    static filterTags(event) {
        const filter = event.target.value.toLowerCase();
        console.log(event)
        const dropdown = event.target.parentElement.parentElement;
      
        [...dropdown.getElementsByTagName('li')].forEach((element) => {
            const txtValue = element.textContent || element.innerText;
            
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                element.classList.remove('hide');
            } else {
                element.classList.add('hide');
            }
        });
    }  
  }
  
  export default TagsResearch;
  