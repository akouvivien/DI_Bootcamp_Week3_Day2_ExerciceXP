var allBoldItems

// collecter tous les éléments en gras à l'intérieur du paragraphe et les affecter à la allBoldItemsvariable
function getBold_items() {
    allBoldItems = document.querySelectorAll('p strong')
    return allBoldItems
} getBold_items()



//une fonction appelée highlight()qui change la couleur de tout le texte en gras en bleu.
function highlight() {
    for (const elem of allBoldItems) {
       elem.style.backgroundColor = 'blue'
    }
    
} 
// return_normal()qui change la couleur de tout le texte en gras en noir.
function return_normal() {
    for (const elem of allBoldItems) {
        elem.style.backgroundColor = "white"
     }
}
//liste des evelements
allBoldItems.forEach(element => {
    element.addEventListener('mouseover', highlight);
    element.addEventListener('mouseout', return_normal);
});