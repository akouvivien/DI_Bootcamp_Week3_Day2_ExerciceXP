//recuperation des elements
var RADUIS = document.querySelector('#radius')
var VOLUME = document.querySelector('#volume')
var SUBMIT = document.querySelector('#submit')

//gestion des evenements
SUBMIT.addEventListener('click', calculate);

//  appel de la fonction agissant sur l'evenement
function calculate(e) {
    e.preventDefault()
    let raduis = RADUIS.value.trim()
    raduis = Number(raduis)
    let result =  (4/3*Math.PI*Math.pow(raduis,3)).toFixed(2)
    VOLUME.value=result
console.log(result)
}