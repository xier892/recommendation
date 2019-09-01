class Animation {
  constructor(el) {
    this.el = el;
    this.display = window.getComputedStyle(this.el, null).getPropertyValue('display');
    this.animations = ['slideToLeft', 'slideToRight', 'slideFromLeft', 'slideFromRight', 'slideFromTop', 'slideToTop', 'slideUp', 'slideDown', 'fadeIn', 'fadeOut', 'shake', 'zoom', 'zoom2'];
  }
  add(animation) {
    const anim = () => this.el.classList.add(animation);
    this.el.classList.remove(...this.animations);
    window.requestAnimationFrame(anim);
  }
  slideToLeft() {
    this.add('slideToLeft');
    setTimeout(() => {
      this.el.style.opacity = '0';
    }, 150);
  }
  slideToRight() {
    this.add('slideToRight');
    setTimeout(() => {
      this.el.style.opacity = '0';
    }, 150);
  }
  slideFromLeft() {
    this.el.style.opacity = '0';
    this.add('slideFromLeft');
    if (this.display === 'none') {
      this.el.style.display = 'block';
    }
    setTimeout(() => {
      this.el.style.opacity = '1';
    }, 600);
  }
  slideFromRight() {
    this.el.style.opacity = '0';
    if (this.display === 'none') {
      this.el.style.display = 'block';
    }
    this.add('slideFromRight');
    setTimeout(() => {
      this.el.style.opacity = '1';
    }, 600);
  }
  fadeIn() {
    this.add('fadeIn');
    if (this.display === 'none') {
      this.el.style.display = 'block';
    }
  }
  fadeOut() {
    this.add('fadeOut');
    setTimeout(() => {
      this.el.style.display = 'none';
    }, 350);
  }
  slideUp() {
    this.el.style.overflowY = 'hidden';
    window.requestAnimationFrame(() => {
      this.add('slideUp');
      setTimeout(() => {
        this.el.style.display = 'none';
        this.el.style.overflowY = '';
      }, 200);
    });
  }
  slideDown() {
    this.el.style.overflowY = 'hidden';
    this.el.style.maxHeight = '0';
    window.requestAnimationFrame(() => {
      this.add('slideDown');
      if (this.display === 'none') {
        this.el.style.display = 'block';
      }
      setTimeout(() => {
        this.el.style.overflowY = '';
        this.el.style.maxHeight = '';
      }, 200);
    });
  }
  slideFromTop() {
    this.el.style.opacity = '0';
    this.add('slideFromTop');
    setTimeout(() => {
      this.el.style.opacity = '1';
    }, 600);
  }
  slideToTop() {
    this.add('slideToTop');
    setTimeout(() => {
      this.el.style.display = 'none';
    }, 600);
  }
  zoom() {
    this.el.style.transform = 'scale(0)';
    this.add('zoom');
    setTimeout(() => {
      this.el.style.transform = '';
    }, 250);
  }
  zoom2() {
    this.add('zoom2');
    setTimeout(() => {
      this.el.style.display = 'none';
    }, 250);
  }
}
