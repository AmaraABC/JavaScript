// 3 constantes pour représenter l'intitulé de la tâche, son résumé et son ajout
const input = document.getElementById("task");
const comments = document.getElementById("comments");
const output = document.getElementById("tasks-output");
const button = document.getElementById("submit-button");

// Définition de la date et du temps
function displayDateTime() {
    const actualDate = new Date();
    const myDate = actualDate.toLocaleString('fr-FR', {
        weekday: 'short',
        day: 'numeric',
        month: '2-digit',
        year: 'numeric'
    });

    const myTime = actualDate.toLocaleString('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    return `Date de création : ${myDate}, à ${myTime}`
}

// Fonction d'incrémentation pour différencier les identifiants de chaque tâche
let idIncrement = 1;

function newIntForId() {
    return idIncrement++;
}

// Définition d'une div (container) qui comportera chaque tâche
const mainContainer = document.createElement('div');
mainContainer.classList.add(".tasks-box");
mainContainer.style.backgroundColor = "white";
mainContainer.style.display = "grid";
mainContainer.style.gridTemplateColumns = "repeat(3, .5fr)"
mainContainer.style.rowGap = "2rem"
mainContainer.style.justifyItems = "center"
output.appendChild(mainContainer);

// Responsive et media queries
window.addEventListener('resize', () => {
    const responsive = window.matchMedia("(max-width: 615px)");
    if (!responsive.matches) {
        mainContainer.style.gridTemplateColumns = "repeat(3, .5fr)"
        mainContainer.style.rowGap = "2rem"
    }

    else if (responsive.matches) {
        mainContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
        mainContainer.style.rowGap = "1rem"
    }
});

// Fonction pour l'ajout d'une nouvelle tâche
function addTasks() {
    if (input.value == '') {
        alert("Vous devez au moins écrire quelque chose dans l'intitulé...");
    }

    else {
        // Définition d'une div et de sa classe
        const mainArticle = document.createElement('div');
        mainArticle.style.marginBottom = "1vw";
        mainArticle.classList.add("active-tasks");

        // Ajout de la tâche saisie auparavant
        const checkbox = document.createElement('input');
        checkbox.setAttribute("id", `task-check-${idIncrement}`);
        checkbox.setAttribute("name", `task-check-${idIncrement}`);
        checkbox.setAttribute("type", "checkbox");
        mainArticle.appendChild(checkbox);

        const intitule = document.createElement('label');
        intitule.classList.add("task-name");
        intitule.setAttribute("for", `task-check-${idIncrement}`);
        intitule.innerText = input.value;
        intitule.style.marginLeft = '1vw';
        intitule.style.fontSize = '2.5vh';
        mainArticle.appendChild(intitule);

        const description = document.createElement('p');
        description.classList.add("task-description");
        description.innerText = 'Description: ' + comments.value;
        description.style.fontSize = '2vh';
        description.style.margin = '.5vw 0';
        if (comments.value) {
            mainArticle.appendChild(description);
        }

        const dateAjout = document.createElement('p');
        dateAjout.classList.add("task-date");
        dateAjout.innerText = displayDateTime();
        dateAjout.style.fontSize = '2vh';
        dateAjout.style.margin = ".5rem 0";
        mainArticle.appendChild(dateAjout);

        mainArticle.style.padding = ".9em";
        mainArticle.style.border = "3px groove rgb(2, 117, 125)";
        mainArticle.style.borderRadius = "6px";
        mainArticle.style.boxShadow = "9px 9px rgb(227, 144, 37)";
        mainArticle.style.width = "25vw";
        mainArticle.style.minWidth = "140px";

        mainContainer.appendChild(mainArticle);
        resetText();
        deleteTask(mainArticle);
        editTask(mainArticle, intitule, description);
        newIntForId();
    }
};

// Fonction pour effecer les champs renseignés dans l'intitulé et les commentaires
function resetText() {
    input.value = '';
    comments.value = '';
    return input.value, comments.value;
};

// Fonction pour editer une tâche enregistrée
function editTask(mainArticle, intitule, description) {
    // Création du bouton pour supprimer une tâche
    const editButton = document.createElement('button');
    editButton.classList.add("edit-task");
    editButton.setAttribute("type", "button");
    editButton.innerText = "Editer";
    editButton.style.padding = '.15em .5em';
    editButton.style.margin = '.3vw 4px 0 0';
    editButton.style.fontSize = '2vh';

    editButton.addEventListener('click', () => {
        button.onclick = () => {
            mainArticle.remove();
            addTasks();
        };
        input.value = intitule.innerText;
        if (description.value != "") {
            comments.value = description.innerText.slice(13);
            return comments.value;
        };
        return input.value;
    });

    mainArticle.appendChild(editButton);
};

// Fonction pour supprimer une tâche
function deleteTask(mainArticle) {
    // Création du bouton pour supprimer une tâche
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-task");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerText = "Supprimer";
    deleteButton.style.padding = '.15em .5em';
    deleteButton.style.margin = '.3vw 4px 0 0';
    deleteButton.style.fontSize = '2vh';

    deleteButton.addEventListener('click', () => {
        mainArticle.remove();
    });

    mainArticle.appendChild(deleteButton);
};