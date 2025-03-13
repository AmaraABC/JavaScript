// 3 constantes pour représenter l'intitulé de la tâche, son résumé et son ajout
const input = document.getElementById("task");
const comments = document.getElementById("comments");
const output = document.getElementById("tasks-output");

// Définition de la date
const actualDate = new Date();
const myDate = actualDate.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})

// Fonction d'incrémentation pour différencier les identifiants de chaque tâche
let idIncrement = 1;

function newIntForId() {
    return idIncrement++;
}

function addTasks() {
    if (input.value == '') {
        alert("Vous devez au moins écrire quelque chose...");
    }

    else {
        // Définition d'une div et de sa classe
        const firstDiv = document.createElement('div');
        firstDiv.style.marginBottom = "1vw";
        firstDiv.classList.add("active-tasks");

        // Ajout de la tâche saisie auparavant
        const checkbox = document.createElement('input');
        checkbox.setAttribute("id", `task-check-${idIncrement}`);
        checkbox.setAttribute("name", `task-check-${idIncrement}`);
        checkbox.setAttribute("type", "checkbox");
        firstDiv.appendChild(checkbox);

        const intitule = document.createElement('label');
        intitule.classList.add("task-name");
        intitule.setAttribute("for", `task-check-${idIncrement}`);
        intitule.innerText = input.value;
        intitule.style.marginLeft = '2vw';
        intitule.style.fontSize = '4vh';
        firstDiv.appendChild(intitule);

        output.appendChild(firstDiv);
        newIntForId();

        /*newOutput.appendChild(newDiv);
        newButton.innerHTML = "<button style='padding: .3em;'>Supprimer</button>";
        newButton.classList.add("eraser");
        newTask.appendChild(newButton);
        

        newButton.addEventListener("click", function() {
            if (newTask.classList.contains("active-tasks") == true) {
                newOutput.removeChild(newTask);
            }
        })*/
    }
}