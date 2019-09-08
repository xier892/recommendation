class Modal {
  constructor() {
    this.module = document.getElementById('module');
    this.moduleHeight = this.module.offsetHeight;
    this.moduleWidth = this.module.offsetWidth;
    this.window = document.documentElement;
    this.windowHeight = document.documentElement.clientHeight;
    this.windowScrollTop = window.scrollY;
    this.windowWidth = document.documentElement.scrollWidth;
  }
  open(el) {
    const modal = el.nextElementSibling;
    new Animation(modal).zoom();
    new Animation(modal.children[0]).zoom();
    modal.style.display = 'flex';
    document.documentElement.style.overflowY = 'hidden';
    if (this.moduleHeight > this.windowHeight) {
      modal.style.top = `${this.windowScrollTop}px`;
    } else {
      modal.style.top = `${0 - (this.windowHeight - this.moduleHeight) / 2}px`;
    }
    modal.style.left = `${0 - (this.windowWidth - this.moduleWidth) / 2}px`;
    modal.addEventListener('click', () => {
      this.close(el);
    });
    window.addEventListener('keyup', (event) => {
      if (event.which === 27) {
        this.close(el);
      }
    });
  }
  close(el) {
    const modal = el.nextElementSibling;
    new Animation(modal).zoom2();
    this.window.style.overflowY = '';
  }
}
