import element from "./element";

class sidebar extends element{
  constructor(){
    this.tabList = Array;
  }

  addTab(tab){
    this.tabList.push(tab);
  }

  removeTab(tab){
    _.remove(tabList, tab);
  }

  generatePageElements(){
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    tabList.forEach(element => {
      const tab = element.generatePageElements;
      sidebar.appendChild(tab);
    });
  }
}