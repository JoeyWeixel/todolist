import _, { forEach } from "lodash";

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
      this.$controller.currentProject = project;
      this.updatePage();
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
    this.tab.appendChild(deleteTaskButton);

    const editTaskButton = document.createElement('div');
    editTaskButton.classList.add('button', 'edit');
    editTaskButton.addEventListener('click', e => {
      this.$controller.editTask();
      this.updatePage();
    })
    this.tab.appendChild(editTaskButton);

    return task;
  }

  updateSideBar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';

    this.generateProjectTabList().forEach(tab => {
      sidebar.appendChild(tab);
    });

    const addProjectButton = document.createElement('div');
    addProjectButton.classList.add('button', 'add');
    addProjectButton.addEventListener('click', e => {
      this.$controller.addProject();
      this.updatePage();
    });
    sidebar.appendChild(addProjectButton);
    
  }
  updateContentArea(){
    const content = document.getElementById('content-area');
    content.innerHTML = '';
    this.generateTaskList().forEach(task => {
      content.appendChild(task);
    });

    const addTaskButton = document.createElement('div');
    addTaskButton.classList.add('button', 'add');
    addTaskButton.addEventListener('click', e => {
      this.$controller.addTask();
      this.updatePage();
    });
    content.appendChild(addTaskButton);
  }
  updatePage(){
    reloadContentArea();
    reloadSideBar();
  }
}

export default view;