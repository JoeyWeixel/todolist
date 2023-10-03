import _, { forEach } from "lodash";
import task from "../Model/task";

class view{
  constructor(){
    this.$controller = null;
  }

  set controller(controller){
    this.$controller = controller;
  }

  initializePage(){
    const body = document.body;
    const container = document.createElement('div');
    container.classList.add('container');
    container.id = 'webpage-root';
    
    const sidebar = document.createElement('div')
    sidebar.id = 'sidebar';
    container.appendChild(sidebar);

    const content = document.createElement('div');
    content.id = 'content-area';
    container.appendChild(content);

    body.appendChild(container);

    this.updateSideBar();
    this.updateContentArea();
  }

  generateProjectTabList(){
    const projectTabList = [];
    this.$controller.projectList.forEach(project => {
      projectTabList.push(this.generateProjectTab(project));
    })

    return projectTabList;
  }
  generateProjectTab(project){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.addEventListener('click', e => {
      if(this.$controller.currentProject != project){
        this.$controller.currentProject = project;
        this.updatePage();
      }
    });

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = project.title;
    tab.appendChild(title);

    const deleteProjectButton = document.createElement('div');
    deleteProjectButton.classList.add('button', 'delete');
    deleteProjectButton.addEventListener('click', e => {
      this.$controller.deleteProject(project);
      this.updatePage();
    })
    tab.appendChild(deleteProjectButton);

    const editProjectButton = document.createElement('div');
    editProjectButton.classList.add('button', 'edit');
    editProjectButton.addEventListener('click', e => {
      this.$controller.editProject();
      this.updatePage();
    })
    tab.appendChild(editProjectButton);

    return tab;
  }
  generateNewTabForm(){
    const tab = document.createElement('div');
    tab.classList.add('tab', 'form');

    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'newTaskTitle';
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'newTaskTitle');
    titleLabel.innerText = 'Input tab title';
    title.classList.add('title', 'input');
    tab.appendChild(titleLabel);
    tab.appendChild(title);

    const addProjectButton = document.createElement('div');
    addProjectButton.classList.add('button', 'add');
    addProjectButton.addEventListener('click', e => {
      if(title.value != ''){
        this.$controller.createProject(title.value);
      }else{
        alert('Title field must have a unique name and must not be empty!');
      }
    });
    tab.appendChild(addProjectButton);

    return tab;
  }

  generateTaskList(){
    const taskList = [];
    this.$controller.currentProject.taskList.forEach(task =>{
      taskList.push(this.generateTask(task));
    })

    return taskList;
  }
  generateTask(curTask){
    const task = document.createElement('div');
    task.classList.add('task');

    const title = document.createElement('div');
    title.classList.add('name');
    title.innerText = curTask.title;
    task.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerText = curTask.description;
    task.appendChild(description);

    const importance = document.createElement('div');
    importance.classList.add('importance');
    task.appendChild(importance);

    const dueDate = document.createElement('div');
    dueDate.classList.add('dueDate');
    task.appendChild(dueDate);

    const deleteTaskButton = document.createElement('div');
    deleteTaskButton.classList.add('button', 'delete');
    deleteTaskButton.addEventListener('click', e => {
      this.$controller.deleteTask(curTask);
      this.updatePage();
    })
    task.appendChild(deleteTaskButton);

    const editTaskButton = document.createElement('div');
    editTaskButton.classList.add('button', 'edit');
    editTaskButton.addEventListener('click', e => {
      this.$controller.editTask();
      this.updatePage();
    })
    task.appendChild(editTaskButton);

    return task;
  }
  generateNewTaskForm(){
    const taskForm = document.createElement('div');
    taskForm.classList.add('form', 'task');

    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'newTaskTitle';
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'newTaskTitle');
    titleLabel.innerText = 'Input task title';
    title.classList.add('title', 'input');
    taskForm.appendChild(titleLabel);
    taskForm.appendChild(title);

    const description = document.createElement('input');
    description.type = 'text';
    description.id = 'newTaskDescription';
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'newTaskDescription');
    descriptionLabel.innerText = 'Input task description';
    description.classList.add('description', 'input');
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(description);

    const importance = document.createElement('select');
    importance.name = 'newTaskImportance';
    const importanceChoices = ['none','!', '!!', '!!!'];
    for(let i=0; i<importanceChoices.length; i++){
      const option = document.createElement("option");
      option.value = importanceChoices[i];
      option.text = importanceChoices[i];
      importance.appendChild(option);
    }

    const importanceLabel = document.createElement('label');
    importanceLabel.setAttribute('for', 'newTaskImportance');
    importanceLabel.innerText = 'Input task importance';
    importance.classList.add('importance', 'input');
    taskForm.appendChild(importance);

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'newTaskDueDate';
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'newTaskDueDate');
    dueDateLabel.innerText = 'Input task due date';
    dueDate.classList.add('dueDate', 'input');
    taskForm.appendChild(dueDate);

    const addTaskButton = document.createElement('div');
    addTaskButton.classList.add('button', 'add');
    addTaskButton.addEventListener('click', e => {
      this.$controller.createTask(title.value, description.value, importance.value, dueDate.value);
    });
    taskForm.appendChild(addTaskButton);

    return taskForm;
  }


  updateSideBar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';

    this.generateProjectTabList().forEach(tab => {
      sidebar.appendChild(tab);
    });
    sidebar.appendChild(this.generateNewTabForm());
    
  }
  updateContentArea(){
    const content = document.getElementById('content-area');
    content.innerHTML = '';
    this.generateTaskList().forEach(task => {
      content.appendChild(task);
    });

    content.appendChild(this.generateNewTaskForm());
  }
  updatePage(){
    this.updateContentArea();
    this.updateSideBar();
  }
}

export default view;