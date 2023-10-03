import _ from 'lodash';
import project from './project';

class model{
  constructor(){
    this.$projectList = [];
  }

  addProject(title){
    this.$projectList.push(new project(title, this));
  }

  removeProject(project){
    _.remove(this.$projectList, project);
  }

  get projectList(){
    return this.$projectList;
  }
}

export default model;