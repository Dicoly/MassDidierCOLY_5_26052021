class DomRechercheSecondaireUstensils {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des ustensils
    remplirListeDeroulante(listDesUstensils) {
        let htmlContent = '';
        //Ajout des LI dans la liste deroulante
        listDesUstensils.forEach(function (item) {
            htmlContent += `<li class="tagUstensils"><a href="#">${item}</a></li>`;
        });
        
        // Ajouter des ustensils
        let listSelect = document.getElementById('detailRechercheUstensiles');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    //Affichage de la classe Hide contenant la liste des ustensils
    afficherOuMasquerListe() {
        document.getElementById('detailRechercheUstensilesBtn').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailRechercheUstensiles').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailRechercheUstensiles').classList.remove('hide');
            } else {
                document.getElementById('detailRechercheUstensiles').classList.add('hide');
            }
        });
        //ratation icon bouton dropdown
        const btnicon = document.getElementById('detailRechercheUstensilesBtn');
        btnicon.addEventListener('click', rotateIcon);

        function rotateIcon() {
            btnicon.classList.toggle('show');
        }
    }
}

export default DomRechercheSecondaireUstensils;