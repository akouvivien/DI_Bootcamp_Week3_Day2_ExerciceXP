//1Récupérez le formulaire et consolez-le.
let form = document.forms[0]
console.log(form)
console.log('**************')

//2 Récupérez les entrées par leur identifiant et console.log les.
let name1 = document.getElementById('fname')
let name2 = document.getElementById('lname')
console.log(name1)
console.log(name2)
console.log('**************')

//3 Récupérez les entrées par leur identifiant et console.log les.
let elem1= form.elements.fname
let elem2= form.elements.lname
console.log(elem1)
console.log(elem2)
console.log('**************')


//4
var nom,prenom
var bUTTON = document.getElementById('submit')
var uL = document.querySelector('ul')

bUTTON.addEventListener('click', calculate);

//  appel de la fonction agissant sur l'evenement
function calculate(e) {
    // utiliser event.preventDefault()
    e.preventDefault()
    // obtenir les valeurs des balises d'entrée,
    nom = document.getElementById('fname').value.trim()
    prenom =document.getElementById('lname').value.trim() 
    // créer une livaleur par entrée
    let items1LI = document.createElement('li')
    let items2LI = document.createElement('li')
    // puis ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form
    uL.append(items1LI,items2LI)
    items1LI.innerText = nom// pratique pareille a TextContent et inner HTML prends l'integralité de la balise
    items2LI.innerText = prenom
}

//utilisation de callback fonction anonyme
// bUTTON.addEventListener('click', function (e) {
//     e.preventDefault()// ne doit pas executer l'action de soumission par defaut afin de pourvoir verifier les actions
//     let nom = nOM.value.trim()
//     let prenom =pRENOM.value.trim() 
//     let firstLI = document.createElement('li')
//     let twotLI = document.createElement('li')
//     uL.append(firstLI,twotLI)
//     firstLI.innerText = nom// pratique pareille a TextContent et inner HTML prends l'integralité de la balise
//     twotLI.innerText = prenom
// });


//utilisation de callback fonction fleché
// bUTTON.addEventListener('click', (e) =>{ remarque lorsque le parmatre est unique pas obligé de mettre une parenthese
//     e.preventDefault()// ne doit pas executer l'action de soumission par defaut afin de pourvoir verifier les actions
//     let nom = nOM.value.trim()
//     let prenom =pRENOM.value.trim() 
//     let firstLI = document.createElement('li')
//     let twotLI = document.createElement('li')
//     uL.append(firstLI,twotLI)
//     firstLI.innerText = nom// pratique pareille a TextContent et inner HTML prends l'integralité de la balise
//     twotLI.innerText = prenom
// });


