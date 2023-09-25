class tab{
  constructor(tabTitle, content){
    this.tabTitle = tabTitle;
    this.content = content;
  }

  getContent(){
    return this.content;
  }

  getTitle(){
    return this.tabTitle
  }

}

export default tab;