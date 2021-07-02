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

class DomEvent {
    watch() {
        this.selectListEvent();
    }

    //Création tags selectionnés
    selectListEvent() {
       let selectLists = document.getElementsByClassName('selectList');

       for (let item of selectLists) {
           // Si je click sur un element LI (ingredient, ustensiles ou materiels)
            item.addEventListener('click', function (event) {
                const element = event.target;
                const type = item.dataset.type;
                event.preventDefault();

                if (element.classList.contains('selectListItem')) {
                    const tagValue = element.textContent;
                    // Si le tag est déja sélectionné
                    if (element.classList.contains('selectListItemSelected')) {
                        element.classList.remove('selectListItemSelected');
                        document.querySelector('[data-tag-value-selected="'+ tagValue + '"]').closest('.tagSelected').remove();
                    } else { // Si le tag n'est pas sélectionné
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
}

export default DomEvent;

