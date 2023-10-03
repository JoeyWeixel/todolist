import _ from 'lodash';
import project from './project';
import task from './task';

class model{
  constructor(){
    this.$projectList = [];
  }

  addProject(title){
    const newProject = new project(title, this);
    this.$projectList.push(newProject);

    return newProject;
  }

  removeProject(project){
    if(this.$projectList.length > 1){
      _.remove(this.$projectList, project);
    }else{
      console.error('violates : projectList.length >= 1');
    }
  }

  addTask(project, title, name, description, importance, dueDate){
    project.addTask(new task(title, name, description, importance, dueDate));
  }

  removeTask(project, task){
    project.removeTask(task);
  }

  get projectList(){
    return this.$projectList;
  }
}

export default model;