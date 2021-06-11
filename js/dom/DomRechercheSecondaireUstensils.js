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
    
    afficherOuMasquerListe() {
        document.getElementById('detailRechercheUstensilesBtn').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailRechercheUstensiles').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailRechercheUstensiles').classList.remove('hide');
            } else {
                document.getElementById('detailRechercheUstensiles').classList.add('hide');
            }
        })
    }
}

export default DomRechercheSecondaireUstensils;