class DomRechercheSecondaireAppareils {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des appareils
    remplirListeDeroulante(listDesAppareils) {
        let htmlContent = '';

        //Ajout des LI dans la liste deroulante
        listDesAppareils.forEach(function (item) {
            htmlContent += `<li class="tagAppareil"><a href="#">${item}</a></li>`;
        });
        
        // Ajouter des appareils
        var node = document.createElement("LI");
        let listSelect = document.getElementById('detailRechercheAppareil');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    
    afficherOuMasquerListe() {
        document.getElementById('detailRechercheAppareilBtn').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailRechercheAppareil').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailRechercheAppareil').classList.remove('hide');
            } else {
                document.getElementById('detailRechercheAppareil').classList.add('hide');
            }
        })
    }
}

export default DomRechercheSecondaireAppareils;