class controller{
  constructor(model, view){
    this.model = model;
    this.view = view;
  }

  createProject(){

  }

  deleteProject(project){

  }

  editProject(project){

  }

  get projectList(){
    return this.model.projectList;
  }

  createTask(){

  }

  deleteTask(task){

  }

  editTask(){

  }

  initializePage(){
    this.model.addProject('test');
    this.currentProject = this.model.projectList[0]
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