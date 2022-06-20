// inserer les elements dans le html

// Raccourci de Body pour les Enfants
let body = document.body

// Creation des elements
const h2 = document.createElement('h2');
// Ajout du texte a l'elements
h2.innerHTML = "Guess Number Between 0-100"
// Ajout du h2 (enfant) au body (parent)
body.appendChild(h2);


const h3 = document.createElement('h3');
h3.innerHTML = "Vous avez peut etre win"
body.appendChild(h3);


const p = document.createElement('p');
p.innerHTML = "Ceci est un paragraphe"
body.appendChild(p);


const input = document.createElement('input');
// Ajout d'attributs aux elements
input.setAttribute('type', 'number')
input.setAttribute('id', 'monInput')
body.appendChild(input);


const button = document.createElement('button');
button.setAttribute('onclick', 'checkValue()')
button.innerHTML = "click me"
body.appendChild(button);


const compteur = document.createElement('p')
compteur.innerHTML = `Vous avez joué 0 fois.`
body.appendChild(compteur);

// Variable pour les essaies
let count = 0

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
    count++;
  
    input.focus()
    input.value =""
    
    if(count >= 10){
        compteur.innerHTML = `Vous avez joué 10 fois.`

        p.innerHTML = 'perdu'
        setTimeout(function(){
            location.reload();
        },5000)
    }else{
        if(valeur<0 || valeur>100)return p.innerHTML=`erreur, le chiffre ${valeur} n'est pas bon`;

        compteur.innerHTML = `Vous avez joué ${count} fois.`

        if (x === valeur) {
            p.innerHTML = "gagné"
            
        } else if (valeur > x) {
            p.innerHTML = "trop grand"
        }
        else {
            p.innerHTML = "trop petit"
        }
    }
}