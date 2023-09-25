import _ from 'lodash';

class task{
  constructor(name, importance, description, dueDate){
    this.name = name;
    this.importance = importance;
    this.description = description;
  }

  setImportance(newImportance){
    this.importance = newImportance;
  }

  setName(newName){
    this.name = newName;
  }

  setNote(newDescription){
    this.note = newDescription;
  }

  setDueDate(newDueDate){
    this.dueDate = newDueDate;
  }

  getImportance(){
    return this.importance;
  }

  getName(){
    return this.name;
  }

  getNote(){
    return this.note;
  }

  getDueDate(){
    return this.dueDate;
  }

  generatePageElements(){
    const task = document.createElement('div');
    task.classList.add('task');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = this.name;
    task.appendChild(name);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = description;
    task.appendChild(description);

    const importance = document.createElement('div');
    importance.classList.add('importance');
    task.appendChild(importance);

    const dueDate = document.createElement('div');
    dueDate.classList.add('dueDate');
    task.appendChild(dueDate);

    return task;
  }
}

class checklist extends task{
  constructor(){
    super();
    this.checks = new Array();
  }

  addCheck(check){
    this.checks.push(check);
  }

  removeCheck(checkToRemove){
    _.remove(array, (arrayElement) =>{
      arrayElement == checkToRemove;
    })
  }

  generatePageElements(){
    const task = super();
    this.checks.forEach(element => {
      task.appendChild(element.generatePageElements());
    });
  }
}

class check{
  constructor(checkName){
    this.checkName = checkName;
    this.isComplete = false;
  }

  setName(name){
    this.checkName = name;
  }

  changeComplete(){
    this.isComplete = !this.isComplete;
  }

  generatePageElements(){
    const check = document.createElement('div');
    check.classList.add('check');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = this.name;
    check.appendChild(name);

    const completionTracker = document.createElement('div');
    completionTracker.classList.add('check', 'isComplete');
    check.appendChild(completionTracker);

    return check;
  }
}

export default {task, checklist};