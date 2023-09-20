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
}

class checklist extends task{
  constructor(){
    super();
    this.checks = new Array();
  }

  addCheck(check){
    this.checks.push(check);
  }

  removeCheck(check){
    const i = this.checks.indexOf(check);
    if (i > -1) {
      array.splice(i, 1);
    }
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
}