import _ from 'lodash';


class webpage{
  constructor(){
    this.elementList = Array();
  }

  addElement(element){
    this.elementList.push(element);
  }

  removeElement(elementToRemove){
    _.remove(array, (arrayElement) =>{
      arrayElement == elementToRemove;
    })
  }

  generateElements(){
    const content = document.createElement('div');
    content.classList.add('')
    array.forEach(element => {
      content.appendChild(element.generatePageElements());
    });
  }
}