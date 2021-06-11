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
        let listSelect = document.getElementById('detailRechercheAppareil');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    //Affichage de la classe Hide contenant la liste des appareils
    afficherOuMasquerListe() {
        document.getElementById('detailRechercheAppareilBtn').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailRechercheAppareil').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailRechercheAppareil').classList.remove('hide');
            } else {
                document.getElementById('detailRechercheAppareil').classList.add('hide');
            }
        })
        //ratation icon bouton dropdown
        const btnicon = document.getElementById('detailRechercheAppareilBtn');
        btnicon.addEventListener('click', rotateIcon);

        function rotateIcon() {
            btnicon.classList.toggle('show');
        }
    };
        
}

export  default DomRechercheSecondaireAppareils;