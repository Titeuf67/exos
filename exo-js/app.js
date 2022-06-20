const heritage = require("express"); // la constante express herite de la dependance d'express
const monApp = heritage(); // la constante app est en instance de la constante express
const port = 3000;

var hbs = require('express-hbs');

// Use `.hbs` for extensions and find partials in `views/partials`.
monApp.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/toto/partials'
}));
monApp.set('view engine', 'hbs');
monApp.set('views', __dirname + '/toto');

monApp.get("/", (req, res) => {
  res.send("Hello World!");
});

const baseDeDonnee = {
    name : "Dracaufeu",
    power : 1000,
    img : "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/500px-Dracaufeu-RFVF.png",
}
const dresseur = {
    name : "Joris",
}

// monApp qui est une instance de la dependance express, permet d'utiliser des methodes dont la methode .get() .
// Cette methode possede 2 parametres: url + fonction callback
monApp.get(
  "/contacts", //url
  (req, res) => {res.send("Page Contacts!");} // fonction callback (req: permet de recuperer la valeur dans les champs de formulaire et dans l'url)
);                                            // (res: permet de retourner une reponse)

monApp.get("/pokemon", (req, res) => {
  res.render(
    "pokemon.hbs",
  {dracaufeu : baseDeDonnee, titre : "Pokemon", dresseur : dresseur}
  ); // {variable: DataBase} la variable dracaufeu est disponible dans le fichier de templating pokemon à la l033 
});

// A mettre à la fin
monApp.get("/*", (req, res) => {
  res.send("Error 404!");
});

monApp.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
