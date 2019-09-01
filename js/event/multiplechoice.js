class Choice {
  constructor(el) {
    this.el = el;
    this.siblings = Array.from(this.el.parentNode.children).filter(child => child !== this.el);
    this.classes = ['selected', 'background-blue1', 'faulty', 'background-red', 'text-red'];
  }
  add() {
    this.siblings.forEach((sibling) => {
      sibling.classList.remove(...this.classes);
    });
    this.el.classList.add('selected', 'background-blue1');
    this.el.parentNode.classList.remove(...this.classes, 'incomplete');
    new Checker().check();
  }
  disable() {
    new Animation(this.el).slideUp();
    if (this.el.classList.contains('selected')) {
      this.el.classList.remove('selected', 'background-blue1');
      this.el.parentNode.classList.add('incomplete');
    }
  }
  enable() {
    if (window.getComputedStyle(this.el, null).getPropertyValue('display') === 'none') {
      new Animation(this.el).slideDown();
      if (this.el.classList.contains('selected')) {
        this.el.classList.remove('selected', 'background-blue1');
        this.el.parentNode.classList.add('incomplete');
      }
    }
  }
}
