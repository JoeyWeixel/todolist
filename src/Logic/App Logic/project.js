import "/task.js";

class project{
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
}

export default project;