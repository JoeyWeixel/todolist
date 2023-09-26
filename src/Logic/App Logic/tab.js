import controller from "../DOM Logic/controller";
import element from "./element";

class tab extends element{
  constructor(tabTitle, contentField){
    this.tabTitle = tabTitle;
    this.contentField = contentField;
  }

  getContentField(){
    return this.contentField;
  }

  getTitle(){
    return this.tabTitle
  }

  generatePageElements(){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    const text = document.createTextNode(this.tabTitle);
    tab.appendChild(text);
    return tab;
  }
}

export default tab;