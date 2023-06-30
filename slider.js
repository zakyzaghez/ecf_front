// SLIDER

/* Création des variables */
let i = 1
const nbr = 5
const slider = document.getElementById('slider')

/* Fonction qui change l'image affichée */
function setNextImage() {
    const div = document.createElement('div')
    div.className = 'diapo'
    div.style.background = `url(./assets/images/image${i}slider.jpg)`
    div.style.backgroundPosition = 'center'
    div.style.backgroundRepeat = 'no-repeat'
    div.style.backgroundSize = 'cover'
    slider.appendChild(div)
    i = (i % nbr) + 1 // incrémentation du compteur i, modulo

    /* Si le slider contient plus de cinq images, la première est supprimée */
    if (slider.children.length > nbr) {
        slider.removeChild(slider.children[0])
    }

    setTimeout(setNextImage, 2500) // appel récursif de la fonction setNextImage toutes les cinq secondes
}

setNextImage() // appel initial de la fonction setNextImage pour lancer le slider