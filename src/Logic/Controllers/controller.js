class controller{
  constructor(model, view){
    this.model = model;
    this.view = view;
  }

  createProject(title){
    const newProject = this.model.addProject(title);
    this.currentProject = newProject;
    this.view.updatePage();
  }

  deleteProject(project){
    this.model.removeProject(project);
    if(this.currentProject == project){
      this.currentProject = this.model.projectList[0];
      this.view.updatePage();
    }
  }

  editProject(project, newTitle){
    project.title = newTitle;
    this.view.updatePage();
  }

  get projectList(){
    return this.model.projectList;
  }

  createTask(title, description, importance, dueDate){
    this.model.addTask(this.$currentProject, title, description, importance, dueDate);
    this.view.updatePage();
  }

  deleteTask(task){
    this.model.removeTask(this.$currentProject, task);
    this.view.updatePage();
  }

  editTask(task, title, description, importance, dueDate){
    task.title = title;
    task.description = description;
    task.importance = importance;
    task.dueDate = dueDate;
    this.view.updatePage();
  }

  initializePage(){
    this.currentProject = this.model.addProject('test');
    this.view.initializePage();
  }

  set currentProject(currentProject){
    this.$currentProject = currentProject;
  }

  get currentProject(){
    return this.$currentProject;
  }
}

export default controller;