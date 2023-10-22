const addTask = () => {
    const taskTopic = document.querySelector('#taskTopic');
    const taskTop = taskTopic.value;
    const taskInput = document.querySelector('#taskInput');
    const task = taskInput.value;

    if (!task && !taskTop) return;
  
    const taskList = document.querySelector('#taskList');
  
    const newTask = document.createElement('div');
    newTask.classList.add('task');
  
    const taskText = document.createElement('div');
    taskText.classList.add('task-text');
    taskText.innerHTML = `<h2>Тема: ${taskTop}</h2><p>${task}</p>`;
      
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Удалить';
    deleteButton.onclick = () => {
      taskList.removeChild(newTask);
    };
   
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
     
    taskTopic.value = '';
    taskInput.value = '';
  };