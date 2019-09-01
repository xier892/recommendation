class Button {
  constructor() {
    this.container = document.getElementById('button-container');
  }
  add() {
    if (document.documentElement.clientWidth <= 1024) {
      return this.addMobile();
    }
    return this.addDesktop();
  }
  addDesktop() {
    if (settings.start < questions.length) {
      this.container.innerHTML =
      `<button class="desktop nextButton background-blue1" id="nextButton"><h2 class="text-gray2">&gt;</h2></button>
      <button class="desktop prevButton border-blue1 background-white" id="prevButton"><h2 class="text-blue1">&lt;</h2></button>`;
      setTimeout(() => {
        this.enableEvents();
        new Animation(this.container).fadeIn();
        return this.constructor.addPrev();
      }, 150);
    } else if (settings.start >= questions.length) {
      this.container.style.display = 'none';
    }
  }
  addMobile() {
    if (settings.start < questions.length) {
      this.container.innerHTML =
      `<button class="mobile nextButton background-blue1" id="nextButton">Next</button>
      <button class="mobile prevButton background-gray2" id="prevButton">Back</button>`;
      setTimeout(() => {
        this.enableEvents();
        new Animation(this.container).fadeIn();
        return this.constructor.addPrev();
      }, 150);
    } else if (settings.start >= questions.length) {
      this.container.style.display = 'none';
    }
  }
  enableEvents() {
    document.getElementById('nextButton').addEventListener('click', () => {
      if (document.getElementsByClassName('incomplete').length > 0 && document.getElementsByClassName('faulty').length > 0) {
        new Animation(document.getElementById('module')).add('shake');
      } else if (document.getElementsByClassName('incomplete').length > 0) {
        document.querySelectorAll('.incomplete header').forEach((incomp) => {
          incomp.classList.add('faulty', 'text-red');
        });
      } else {
        if (settings.start < questions.length) {
          settings.start++;
          localStorage.setItem('start', settings.start);
        }
        new Survey().next();
      }
    });
    document.getElementById('prevButton').addEventListener('click', () => {
      if (settings.start > 0) {
        settings.start--;
        localStorage.setItem('start', settings.start);
      }
      new Survey().prev();
    });
    document.querySelectorAll('.button-container button').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (settings.start === 0) {
          new Animation(document.getElementById('prevButton')).fadeOut();
        } else if (settings.start > 0 && document.getElementsByClassName('incomplete').length === 0 && document.getElementsByClassName('prevButton fadeIn').length === 0) {
          new Animation(document.getElementById('prevButton')).fadeIn();
        } else if (settings.start === questions.length) {
          new Animation(this.container).fadeOut();
        }
      });
    });
  }
  static addPrev() {
    if (settings.start > 0) {
      new Animation(document.getElementById('prevButton')).fadeIn();
    }
  }
}
