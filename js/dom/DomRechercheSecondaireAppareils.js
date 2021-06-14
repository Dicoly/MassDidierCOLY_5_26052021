class DomRechercheSecondaireAppareils {
    constructor() {
        this.afficherOuMasquerListe();
    }

    // Creation  les LI dans la liste des appareils
    remplirListeDeroulante(listDesAppareils) {
        let htmlContent = '';
        //Ajout des LI dans la liste deroulante
        listDesAppareils.forEach(function (item) {
            htmlContent += `<li class="tags__item" data-id-filter="${item}"><a href="#">${item}</a></li>`;
        });
        // Ajouter des appareils
        let listSelect = document.getElementById('detailListAppareil');
        listSelect.insertAdjacentHTML('beforeend', htmlContent);
    };
    //Affichage de la classe Hide contenant la liste des appareils
    afficherOuMasquerListe() {
        document.getElementById('btnAppareil').addEventListener('click', function () {
            let estAfficher = document.getElementById('detailListAppareil').classList.contains('hide');
            if (estAfficher) {
                document.getElementById('detailListAppareil').classList.remove('hide');
                document.getElementById('inputAppareil').classList.add('show');//changement de placeholder
            } else {
                document.getElementById('detailListAppareil').classList.add('hide');
                document.getElementById('inputAppareil').classList.remove('show');
            }
        })
        ///ratation icon bouton dropdown
        const btnicon = document.getElementById('btnAppareil');
        btnicon.addEventListener('click', rotateIcon);

        function rotateIcon() {
            btnicon.classList.toggle('show');
        };
    };      
}

export default DomRechercheSecondaireAppareils;