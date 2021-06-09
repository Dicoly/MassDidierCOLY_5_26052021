const ResultatDeLaRecherche = {
    "recettesFiltrees": [{
        "id": 1,
        "name": "Limonade de Coco",
        "servings": 1,
        "ingredients": [
            {
                "ingredient": "Lait de coco",
                "quantity": 400,
                "unit": "ml"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 2
            },
            {
                "ingredient": "Crème de coco",
                "quantity": 2,
                "unit": "cuillères à soupe"
            },
            {
                "ingredient": "Sucre",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["cuillère à Soupe", "verres", "presse citron"]
    },
    {
        "id": 50,
        "name": "Frangipane",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pâte feuilletée",
                "quantity": 400,
                "unit":"grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 6
            },
            {
                "ingredient": "Poudre d'amendes",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 500,
                "unit":"grammes"
            }
        ],
        "time": 60,
        "description":"Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
        "appliance": "Four",
        "ustensils":["rouleau à patisserie","fouet"]
    },{
        "id": 47,
        "name": "Mousse au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Jus de citron",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Mascarpone",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème Fraîche",
                "quantity": 20,
                "unit":"cl"
            }
        ],
        "time": 5,
        "description":"Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
        "appliance": "Saladier",
        "ustensils":["fouet", "verres", "cuillère en bois"]
    }],
    "ustensils": ["cuillère à Soupe", "verres", "presse citron","rouleau à patisserie","fouet", "cuillère en bois"],
    "ingredients": ["Lait de coco", "Jus de citron", "Crème de coco","Pâte feuilletée","Oeuf","Poudre d'amendes", "Beurre", "Sucre glace", "Sucre", "Mascarpone", "Crème Fraîche",],
    "appliance": ["Blender", "Four", "Saladier"]
}

export default ResultatDeLaRecherche;