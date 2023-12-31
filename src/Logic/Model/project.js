import task from "./task";

class project{
  constructor(title, model){
    this.$title = title;
    this.$taskList = [];
    this.$model = model;
  }

  addTask(task){
    this.taskList.push(task);
  }
  removeTask(taskToRemove){
    _.remove(this.taskList, taskToRemove);
  }
  get taskList(){
    return this.$taskList;
  }
  get title(){
    return this.$title;
  }
  set title(name){
    this.$title = title;
  }
  set taskList(taskList){
    this.$taskList = taskList;
  }

  delete(){
    this.model.deleteTab(this);
  }

  generateHTMLElementsTab(){
    const tab = document.createElement('div');
    
  }

  generateHTMLElementsContent(){
    const content = document.createElement('div');
    content.classList.add('content');
    this.taskList.forEach(element => {
      const task = element.generatePageElements();
      content.appendChild(task);
    });
  }
}

export default project;