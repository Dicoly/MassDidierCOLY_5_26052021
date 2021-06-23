class TagsResearch {
    // Research match between input in dropdown and tag content
    static filterTags(event) {
      const filter = event.target.value.toUpperCase();
      const dropdown = event.target.parentElement.parentElement;
    
      [...dropdown.getElementsByTagName('selectListItem')].forEach((element) => {
        const txtValue = element.textContent || element.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          if (element.classList.contains('selectListItemSelected')) {
            element.classList.remove('selectListItemSelected');
          }
        } else {
          element.classList.add('selectListItemSelected');
        }
      });
    }  
}
  
  export default TagsResearch;
  