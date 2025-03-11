const newInput = document.getElementById("tasks");
const newOutput = document.getElementById("tasks-output");

const actualDate = new Date();
const myDate = actualDate.toLocaleString('fr-FR',{
    weekday: 'short',
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})

function addTasks() {
    if (newInput.value == '') {
        alert("Vous devez au moins écrire quelque chose...");
    }

    else {
        const newTask = document.createElement("span");
        newTask.classList.add("active-tasks");
        newTask.innerHTML = newInput.value + ` - Tâche ajoutée le ${myDate}`;
        newOutput.appendChild(newTask);
        const newButton = document.createElement("button");
        newButton.innerHTML = "<button style='padding: .3em;'>Supprimer</button>";
        newButton.classList.add("eraser");
        newTask.appendChild(newButton);
        

        newButton.addEventListener("click", function() {
            if (newTask.classList.contains("active-tasks") == true) {
                newOutput.removeChild(newTask);
            }
        })
    }
}