const addListBrn = document.getElementById('button-addon1');
const userInput = document.getElementById('task-input');
const entryTextSection = document.getElementById('entry-text');
const deleteBtn = document.getElementById('del-btn')

console.log(userInput)

let tasks = [];

const updateUI = () => {
    if (tasks.length === 0) {
      entryTextSection.style.display = 'block';
    } else {
      entryTextSection.style.display = 'none';
    }
};

const deleteTask = ( taskId) =>{
    
    

    let taskIndex = 0;
    for (const task of tasks) {
      if (task.id == taskId) {
        break;
      }
        
      taskIndex++;
    }
    tasks.splice(taskIndex, 1);
    
    const listRoot = document.getElementById('task-list');
    listRoot.children[taskIndex].remove();
   
    

    updateUI();
}

const renderNewTaskElement = (id , value) =>{
    const newTaskElement = document.createElement('li');
    newTaskElement.className = 'task-element';
    newTaskElement.innerHTML = `
    <div class="task-element__info">
      <h2>${value}</h2>
      <i class="fa-sharp fa-solid fa-trash del-btn" id = "del-btn" onclick= "deleteTask(${id})"></i>
    </div>
    `;
    
    const listRoot = document.getElementById('task-list');
    listRoot.append(newTaskElement);
}

const clearTaskInput = () =>{
    userInput.value = '';
}

const addTask = () =>{
    const taskValue = userInput.value;

    const newTask = {
        id: Math.random().toString() ,
        value: taskValue
    }
    tasks.push(newTask);
    clearTaskInput();
    renderNewTaskElement(newTask.id , newTask.value);
    updateUI();
    console.log(tasks)
}

addListBrn.addEventListener('click' , addTask);
window.addEventListener('keypress' , (event) =>{
    if(event.key === 'Enter'){
        addTask();
    }
} )

