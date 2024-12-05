function addTask() {
    const taskValue = document.getElementById('taskInput').value.trim();
    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;
        document.getElementById('tasks').appendChild(li);
        document.getElementById('taskInput').value = '';
    } else {
        alert("Please enter a task.");
    }
}
