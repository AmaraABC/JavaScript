// Exercices d'entraînement en JavaScript

// Afficher un message dans la console
console.log("Hello World !");

// Addition simple avec 2 variables
let a = 1; let b = 2; console.log(`${a + b}`);

// Concaténation de chaînes de caractères
let nom = "Stroebel"; let prenom = "Paul"; console.log("Bonjour " + prenom + " " + nom);

// Calculer le périmètre d'un rectangle
let longueur = 2; let largeur = 3; console.log("Le périmètre du rectangle : " `${(longueur * largeur) / 2}`);

// Carré d'un entier
let nombre = prompt('Veuillez entrer un nombre : '); let input = parseInt(nombre); console.log(`${input * input}`);

// Pair ou Impair ?
function OddOrEven(input) {
    ((input % 2) == 0) ? console.log("La valeur est pair") : console.log("La aleur est impair");
};

// Boolean
let isStudent = true; typeof (isStudent); isStudent = !isStudent;

// Division (modulo)
a = 8; b = 3; console.log(`${a % b}`);

// Longueur d'une chaîne de caractères
let greetings = "Welcome"; greetings.length();
