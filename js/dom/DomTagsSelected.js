/**
 * permet de gerer les evenements sur les listes deroulantes
 * 
 * .selectList : classe deposé sur les trois listes 
 *          Ex: ingredient, appareil et ustensile
 * .selectListItem : element contenu dans une selectList
 *          Ex: lait de coco, four et verre
 * .selectListItemSelected : permet d'identifier si l'element
 *          est deja selectionné (filtre actif)
 * 
 * #tagsSelected : contient les elements de recherche par tag selectionné
 *          Ex: lait de coco, four et verre
 * .removeTagSelected : permet de retirer un tag selectionné
 */

class DomTagsSelected {
    //Création tags selectionnés
    selectListEvent() {
       let selectLists = document.getElementsByClassName('selectList');

       for (let item of selectLists) {
            item.addEventListener('click', function (event) {
                const element = event.target;
                const type = item.dataset.type;
                event.preventDefault();

                if (element.classList.contains('selectListItem')) {
                    const tagValue = element.textContent;
                    
                    if (element.classList.contains('selectListItemSelected')) {
                        element.classList.remove('selectListItemSelected');
                        document.querySelector('[data-tag-value-selected="'+ tagValue + '"]').closest('div').remove();
                    } else {
                        element.classList.add('selectListItemSelected');
                        document.getElementById('tagsSelected')
                            .insertAdjacentHTML(
                                'beforeend', 
                                `<div class="tagSelected ${type}">
                                    ${tagValue}
                                    <span class="monIconCircle">
                                        <i data-tag-value-selected="${tagValue}" class="far fa-times-circle removeTagSelected"></i>
                                    </span>
                                </div>`
                            );
                    }
                }
            });
        };   
    };

    tagSelectedEvent() {
        document.getElementById('tagsSelected').addEventListener('click', function(event) {
            const element = event.target;

            if (element.classList.contains('removeTagSelected')) {
                const tagValue = element.dataset.tagValueSelected;
                document.querySelector('[data-tag-value="'+ tagValue + '"]').classList.remove('selectListItemSelected');
                element.closest('div').remove();
            }
        });
    }
}

export default DomTagsSelected;

