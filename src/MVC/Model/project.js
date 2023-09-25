import "/task.js";

class project{
  constructor(name){
    this.name = name;
    this.taskList = new Array;
  }

  addTask(task){
    this.taskList.push(task);
  }

  removeTask(task){
    const i = this.checks.indexOf(check);
    if (i > -1) {
      array.splice(i, 1);
    }
  }
}