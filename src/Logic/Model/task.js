class task{
  constructor(title, importance, description, dueDate, project){
    this.$name = title;
    this.$importance = importance;
    this.$description = description;
    this.$dueDate = dueDate;
    this.$project = project;
  }
  set importance(newImportance){
    this.$importance = newImportance;
  }
  set title(newTitle){
    this.$title = newTitle;
  }
  set description(newDescription){
    this.$description = newDescription;
  }
  set dueDate(newDueDate){
    this.$dueDate = newDueDate;
  }
  get importance(){
    return this.$importance;
  }
  get title(){
    return this.$title;
  }
  get description(){
    return this.$description;
  }
  get dueDate(){
    return this.$dueDate;
  }
  get project(){
    return this.$project;
  }

  delete(){
    this.project.deleteTask(this);
  }

  edit(title, importance, description, dueDate){
    this.$name = title;
    this.$importance = importance;
    this.$description = description;
    this.$dueDate = dueDate;
  }

  generateHTMLElements(){
    const task = document.createElement('div');
    task.classList.add('task');

    const title = document.createElement('div');
    title.classList.add('title');
    const nameText = document.createTextNode();
    titleText.textContent = this.title;
    title.appendChild(titleText);
    task.appendChild(title);

    const description = document.createElement('div');
    description.classList.add('description');
    const descriptionText = document.createTextNode();
    descriptionText.textContent = this.description;
    description.appendChild(descriptionText);
    task.appendChild(description);

    const importance = document.createElement('div');
    importance.classList.add('importance');
    const importanceText = document.createTextNode();
    importanceText.textContent = this.importance;
    importance.appendChild(importanceText);
    task.appendChild(importance);

    const dueDate = document.createElement('div');
    dueDate.classList.add('dueDate');
    dueDate.innerText =this.$dueDate
    task.appendChild(dueDate);

    // const deleteTaskButton = new button(this.delete);
    // const editButton = new button(this.delete)

    // task.appendChild(deleteTaskButton.pageElements())
    // task.appendChild(editButton.pageElements());

    return task;
  }
}

class checklist extends task{
  constructor(){
    super();
    this.$checks = new Array();
  }

  addCheck(check){
    this.$checks.push(check);
  }

  removeCheck(checkToRemove){
    _.remove(this.$checks, checkToRemove);
  }
}

class check{
  constructor(checkName){
    this.$checkName = checkName;
    this.$isComplete = false;
  }

  set checkName(name){
    this.$checkName = name;
  }

  set isComplete(isComplete){
    this.$isComplete = isComplete;
  }

  get checkName(){
    return this.$checkName;
  }

  get isComplete(){
    return this.$isComplete;
  }
}

export default task;