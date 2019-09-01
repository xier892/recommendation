class Module {
  constructor() {
    this.box = document.getElementById('module');
    this.content = document.getElementById('module-content');
  }
  get html() {
    return this.content;
  }
  get container() {
    return this.box;
  }
}
