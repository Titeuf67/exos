// inserer les elements dans le html

// Creation des elements
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const input = document.createElement('input');
const button = document.createElement('button');



// Ajout d'attributs aux elements
input.setAttribute('type', 'number')
button.setAttribute('onclick', 'checkValue()')

// Gestion de Texte (h1/h2/p/...)
h2.innerHTML = "Guess Number Between 0-100"
h3.innerHTML = "Vous avez peut etre win"
p.innerHTML = "Ceci est un paragraphe"
button.innerHTML = "click me"


// Raccourci de Body pour les Enfants
let body = document.body

// Gestion parent/enfants (le nom de variable)
body.appendChild(h2);
body.appendChild(h3);
body.appendChild(p);
body.appendChild(input);
body.appendChild(button);


// faire choisir le nombre par la machine (Random)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// affichage de l'aleatoire
let x = getRandomInt(100);
console.log(x)

// valider et retourner un nombre
// comparer les elements recuperés et donner la reponse
function checkValue() {
    let valeur = Number(input.value) 
    
    if (x === valeur) {
        p.innerHTML = "gagné"

    } else if (valeur > x) {
        p.innerHTML = "trop grand"
    }
    else { 
        p.innerHTML="trop petit"
    }
}

// afficher
