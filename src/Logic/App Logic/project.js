import _ from "lodash";
import element from "./element";

class project extends element{
  constructor(name){
    this.name = name;
    this.taskList = new Array;
  }

  addTask(task){
    this.taskList.push(task);
  }

  removeTask(taskToRemove){
    _.remove(array, (arrayElement) =>{
      arrayElement == taskToRemove;
    })
  }

  getTaskList(){
    return this.taskList;
  }

  generatePageElements(){
    const project = document.createElement('div');
    divide.classList.add('project');
    this.taskList.forEach(element => {
      const task = element.generateElements();
    })
  }
}

export default project;