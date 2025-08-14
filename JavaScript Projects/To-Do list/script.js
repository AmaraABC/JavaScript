// Tableau pour le stockage des tâches
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Définition de la date et du temps où la tâche a été ajoutée
function displayDateTime() {
    const actualDate = new Date();
    const myDate = actualDate.toLocaleString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const myTime = actualDate.toLocaleString('fr-FR', {
        hour: 'numeric',
        minute: 'numeric'
    });

    return `Le ${myDate} à ${myTime}`;
};

// Fonction pour effecer les champs renseignés dans l'intitulé
function resetText() {
    const input = document.getElementById("task");
    input.value = '';
    return input.value;
};

// Fonction pour l'affichage de chaque tâche sous forme de liste
function displayTasks() {
    const taskList = document.getElementById('task-output');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        // Création d'une div et d'une classe pour la tâche
        const taskDiv = document.createElement('div');
        taskDiv.style.marginBottom = "1vw";
        // Ajout de styles pour la div
        taskDiv.style.padding = ".9em";
        taskDiv.style.backgroundColor = "white";
        taskDiv.style.border = "2px dashed rgb(2, 117, 125)";
        taskDiv.style.borderRadius = "6px";
        taskDiv.style.boxShadow = "9px 9px rgb(245, 165, 60)";
        taskDiv.style.width = "25vw";
        taskDiv.style.minWidth = "140px";

        // Création des éléments de la tâche
        const taskName = document.createElement('p'); // Nom de la tâche
        taskName.textContent = task.name;
        taskName.contentEditable = false;
        // Stylisation
        taskName.style.fontSize = '2.5vh';

        const taskPublication = document.createElement('p'); // Date de publication de la tâche
        taskPublication.textContent = task.date;
        // Stylisation
        taskPublication.style.marginBlock = '.75vw';
        taskPublication.style.fontSize = '2vh';

        // Création du bouton "Supprimer"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = () => deleteTask(index);
        deleteButton.style.padding = ".25rem";
        deleteButton.style.marginRight = ".5rem";

        // Création du bouton "Modifier"
        const editButton = document.createElement('button');
        editButton.textContent = "Modifier";
        editButton.onclick = () => editTask(index, taskName);
        editButton.style.padding = ".25rem";
        editButton.style.marginRight = ".5rem";

        // Intégration de tous ces éléments à la div
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(taskPublication);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        // Intégration de la div à la liste de tâche
        taskList.appendChild(taskDiv);
    });
}

// Fonction pour l'ajout d'une nouvelle tâche
function addTasks() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();

    if (task !== '') {
        const newTask = {
            name: task,
            date: displayDateTime(),
        };
        tasks.push(newTask);
        taskInput.value = '';
        saveTasks();
        displayTasks();
    } else {
        alert("Vous devez au moins écrire quelque chose...");
    };
};

// Fonction pour supprimer une tâche
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
};

// Fonction pour editer une tâche enregistrée
function editTask(index, taskName) {
    taskName.contentEditable = true;
    taskName.focus();

    const existingButtons = taskName.parentElement.querySelectorAll('.edit-buttons');
    if (existingButtons.length > 0) {
        return;
    }

    // Création du bouton "Sauvegarder"
    const saveButton = document.createElement('button');
    saveButton.textContent = "Sauvegarder";
    saveButton.onclick = () => saveEditedTask(index, taskName, saveButton);
    saveButton.style.marginRight = ".5rem";
    saveButton.style.padding = ".25rem";
    saveButton.classList.add('edit-buttons');

    // Création du bouton "Annuler"
    const cancelButton = document.createElement('button');
    cancelButton.textContent = "Annuler";
    cancelButton.onclick = () => cancelEdit(index, taskName, saveButton, cancelButton);
    cancelButton.style.padding = ".25rem";
    cancelButton.style.marginTop = ".5rem";
    cancelButton.classList.add('edit-buttons');

    // Intégration de ces boutons à la tâche
    taskName.parentElement.appendChild(saveButton);
    taskName.parentElement.appendChild(cancelButton);
};

// Fonction pour sauvegarder les modifications de la tâche
function saveEditedTask(index, taskName, saveButton) {
    const updatedText = taskName.textContent.trim();
    if (updatedText === tasks[index].name) {
        alert("Aucune modification n'a été effectuée. Le nom de la tâche reste inchangé.");
        taskName.contentEditable = false;
        saveButton.remove();
        taskName.parentElement.querySelector('button').remove();
        return;
    }

    tasks[index].name = taskName.textContent;
    tasks[index].date = displayDateTime() + ' (modifiée)';
    saveTasks();
    taskName.contentEditable = false;
    saveButton.remove();
    taskName.parentElement.querySelector('button').remove();
    displayTasks();
}

// Fonction pour annuler les modifications de la tâche
function cancelEdit(index, taskName, saveButton, cancelButton) {
    taskName.contentEditable = false;
    saveButton.remove();
    cancelButton.remove();
    taskName.textContent = tasks[index].name;
    displayTasks();
}

// Fonction pour sauvegarder les tâches dans le LocalStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

displayTasks();

// Responsive et media queries
window.addEventListener('resize', () => {
    const output = document.getElementById("task-output");
    const responsive = window.matchMedia("(max-width: 615px)");
    if (!responsive.matches) {
        output.style.gridTemplateColumns = "repeat(3, .5fr)"
        output.style.rowGap = "2rem"
    } else if (responsive.matches) {
        output.style.gridTemplateColumns = "repeat(2, 1fr)";
        output.style.rowGap = "1rem"
    };
});

console.log(tasks);