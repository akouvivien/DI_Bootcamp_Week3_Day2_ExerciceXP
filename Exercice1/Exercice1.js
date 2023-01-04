//supression de la balise H1
let Article = document.querySelector('article')
let H1elements = document.querySelector('h1')
Article.removeChild(H1elements);

//changer la couleur du background h2 en bleue
(document.querySelector('h2').onclick = function() {
    document.querySelector('h2').style.backgroundColor= 'blue'
    alert('la couleur a ete changer en bleue');
})

//Ajoutez un écouteur d'événement qui masquera le h3 lorsqu'il est cliqué (utilisez la propriété display:none ).
(document.querySelector('h3').onclick = function() {
    document.querySelector('h3').style.display = "none";
    alert("la balise sera masquée");
})

//Ajoutez un écouteur qui rend le contenu des paragraphes en bold lorqu'on clique sur le bouton.
(document.querySelector('button').onclick = function() {
     let value = document.querySelectorAll('article > p');
     for (const elem of value) {
        elem.style.fontWeight = "bold"
     }
    alert("tous les paragraphes ont été mis en gras");
})

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
(document.querySelector('h1').onmouseover = function() {
    let taille = Math.floor(Math.random() * 101)
    document.querySelector('h1').style.fontSize= taille+'px'
    alert('la taille de la police augmentera aleatoirement');
})
