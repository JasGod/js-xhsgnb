// Import stylesheets
import "./style.css";
import * as data from './data.json';

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;
let ch1 = "une chaine de caractères";

console.log(data);


function utilisateur(n, a, m) {
  this.nom = n;
  this.age = a;
  this.mail = m;
}

utilisateur.prototype.bonjour = function() {
  let tail = ch1.length;
/*   alert(
    `Bonjour c'est moi, taille du mot: ${tail} et c'est ${ch1.toUpperCase()}`
  ); */
};
function personne(n, t) {
  utilisateur.call(this, n);
}

let pierre = new utilisateur(["pierre", "Tori"], 16, "abc@mail.com");
pierre.taille = 170;
pierre.bonjour();

appDiv.innerHTML = `<p> nom complet: ${pierre.nom}<br/>Taille:${
  pierre.taille
} cm`;
