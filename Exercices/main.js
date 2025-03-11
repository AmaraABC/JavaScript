/*Exercices en JavaScript*/

// Etape n°1 - Les variables

    let a = 2; // int, number
    var A = 3.4; // float, number
    var b = 'Hey ?'; // string
    let B = 'What\'s up ?!'; // Echappement de l'apostrophe
    
    // Booléens
    var f = false;
    let t = true;
    var F = 'false' // Pas un boléen

    // Autres
    var n = null;
    var u = undefined;
    var nn = NaN;

    typeof(A); // Révèle le type de la variable 'A'
    typeof(t);

    // Opérations entre variables :
    a = 5;
    var c = 162;
    var j = a;

    a = a + c;
    b = a - 47;
    c = 4 / 5;
    d = a * c;
    e = a % 7;

    j += c;
    e -= A;
    c *= d;
    d /= c;
    b %= e;


    // Concaténation :
    var Name = "Roanna";
    var Lastname = "Snowden";
    console.log("Voici : " + Name + ' ' + Lastname);

    var sham = '21'; // String
    var x = typeof(sham); // String

    a = 12;
    b = 34;
    console.log(`${a} + ${b} = ${a + b}`);

// Etape n°2 et n°3 - Les conditions & fonctions

    // Opérateurs de comparaison :
    a == B; // Egal (valeur)
    a != B; // Différent (valeur)
    a === B; // Strictement égal (valeur & type)
    a !== B; // Différent (valeur ou type)
    a < B; // Inférieur à
    a > B; // Supérieur à
    a <= B; // Inférieur ou égal à
    a >= B; // Supérieur ou égal à

    // Opérateurs logiques :
    a && b; // ET
    a || B; // OU
    !B; // NON

    // Opérateurs ternaires :
    const wellBeing = 1;
    const message = wellBeing != 0 ? "Je vais bien !" : "Je vais mal..";
    console.log(message);


    // Exemple(s) de fonctions :
    function choose() {
        const chooseNumb = prompt("Veuillez entrer un nombre");
        const chooseNumb_1 = parseInt(chooseNumb);
    
        if (chooseNumb_1 <= 12) {
            console.log("Votre nombre est inférieur ou égal à 12 !");
        }
    
        else if ((chooseNumb_1 > 12) && (chooseNumb_1 <= 40)) {
            console.log("Votre nombre est compris entre 12 et 40 (inclus)");
        }
    
        else {
            alert("Votre nombre est plus grand que 40 !!");
        }
    }

    // choose();

// Etape n°4 - Les boucles

    // Boucle While : 
    let newNumber = 9;
    while (newNumber < 12) {
        newNumber++;
        console.log(newNumber);
    }

    // Instruction Switch :
    const randomness = Math.floor(Math.random() * 100);
    console.log(randomness);

    switch (randomness) {
        case 27 :
            alert("Félicitations, vous avez trouvé un bon nombre !!");
            break;
        case 36 :
            alert("Félicitations, vous avez trouvé un bon nombre !!");
            break;
        case 47 :
            alert("Félicitations, vous avez trouvé un bon nombre !!");
            break;
        case 62 :
            alert("Félicitations, vous avez trouvé un bon nombre !!");
            break;
        case 75 :
            alert("Félicitations, vous avez trouvé un bon nombre !!");
            break;
        case 94 :
            alert("Félicitations, vous avez trouvé un bon nombre !!");
            break;
        default :
            alert("Pas de chance, vous n'avez pas trouvé le nombre...");
    }

    // Boucle For :
    let age;
    for (age = 1; age < 7; age++) {
        if (age === 2) {
            continue;
        }
        console.log(`Vous avez ${age} an(s)`);
    }

// Etape n°5 - Orientée Objet

    // Exemple(s) d'objet(s) :
    const utilisateurs = {
        Nom : 'Rawson',
        Prenom  : 'Paully',
        Age : 31,

        personne : function() {
            alert(`Voici ${this.Prenom} ${this.Nom}, ${this.Age}`);
        }
    }

    alert(utilisateurs.Age);
    utilisateurs.personne();

    // Constructeur d'objets :
    function Character(surname, category, age) {
        this.surname = surname;
        this.category = category;
        this.age = age;
        this.id = function() {
            alert(`Notre nouveau champion est arrivé !, Je vous présente ${this.surname}, ${this.age} ans, un personnage de catégorie ${this.category}`);
        }
    }

    const perso = new Character("Tara de Fontenay", 'B', 32);
    perso.id();
    alert(perso.surname);

// Etape n°6 - String

    // Propriétés :
    let text = "Bonjour !";
    const maj = text.toUpperCase(); // Mettre le texte en majuscule
    const min = text.toLowerCase(); // Mettre le texte en minuscule
    const Localisation = text.charAt(4); // Renvoie à un caractère (espaces inclus)
    t = text.indexOf('o'); // Retourne la position de la séquence trouvée en premier
    z = text.lastIndexOf('o'); // Retourne la position de la séquence trouvée en dernier
    console.log(`${maj}`);
    console.log(`${min}`);
    console.log(`${Localisation}`);
    console.log(`${t}`);
    console.log(`${z}`);

    console.log(text.replace("Bonjour", "Bonsoir")); // Remplace le texte saisi par un autre
    console.log(text.slice(0, 3)) // Affiche que la section définie par des index d'un texte
    
    text = "                J'aime dormir tard le soir !!"
    console.log(text.trim()); // Racourcir le texte (espaces)

// Etape n°7 - Number

    // Propriétés :
    