class DomRechercheSecondaireUstensils {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des ustensils
    remplirListeDeroulante(listDesUstensils) {
        let htmlContent = '';
        //Ajout des LI dans la liste deroulante
        listDesUstensils.forEach(function (item) {
            htmlContent += `<li><a class="selectListItem" data-tag-value="${item}" href="#">${item}</a></li>`;
        });
        // Ajouter des ustensils
        let listSelect = document.getElementById('detailListUstensiles');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    //Affichage de la classe Hide contenant la liste des ustensils
    afficherOuMasquerListe() {
        document.getElementById('btnUstensiles').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailListUstensiles').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailListUstensiles').classList.remove('hide');
                document.getElementById('inputUstensiles').classList.add('show');//changement de placeholder   
            } else {
                document.getElementById('detailListUstensiles').classList.add('hide');
                document.getElementById('inputUstensiles').classList.remove('show');
            }
        });
        //ratation icon bouton dropdown
        const btnicon = document.getElementById('btnUstensiles');
        btnicon.addEventListener('click', rotateIcon);

        function rotateIcon() {
            btnicon.classList.toggle('show');
        }
    }
}

export default DomRechercheSecondaireUstensils;