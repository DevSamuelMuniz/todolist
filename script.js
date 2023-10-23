function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-button" onclick="editTask(this)">Editar</button>
            <button onclick="confirmDelete(this)">Excluir</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}


function confirmDelete(button) {
    if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
        deleteTask(button);
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function editTask(button) {
    const span = button.parentElement.querySelector("span");
    const newText = prompt("Edite a tarefa:", span.textContent);

    if (newText !== null) {
        span.textContent = newText;
    }
}
