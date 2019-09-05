class Survey extends Module {
  constructor() {
    super();
    this.i = settings.start;
  }
  next() {
    if (settings.start >= questions.length) {
      new Checker().updateLocalStorage();
      new Animation(super.container).slideToLeft();
      const waitforcompletion = () => {
        if (settings.completed !== 'yes') {
          window.requestAnimationFrame(waitforcompletion);
        } else {
          setTimeout(() => {
            document.documentElement.scrollTop = 0;
            new Recommendation().generate();
          }, 150);
        }
      };
      waitforcompletion();
    } else {
      new Animation(super.container).slideToLeft();
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        this.appendQuestion('next');
      }, 150);
    }
  }
  prev() {
    new Animation(super.container).slideToRight();
    setTimeout(() => this.appendQuestion('prev'), 150);
  }
  appendQuestion(direction) {
    super.html.innerHTML =
    `<section class="container-content">
      <section class="section">
        <ul class="multipleChoice incomplete">
          <header><small class="text-blue1">Question ${this.i + 1} of ${questions.length}</small><h3>${questions[this.i].name}</h3></header>
        </ul>
      </section>
    </section>`;
    if (direction === 'prev') {
      return this.appendResponses('prev');
    }
    return this.appendResponses('next');
  }
  appendResponses(direction) {
    questions[this.i].responses.forEach((response, n) => {
      if ((settings.force === 'ultralight' || settings.noise === 'quiet') && this.i === 2) {
        if (n === 2) {
          return;
        }
      }
      document.getElementsByClassName('multipleChoice')[0].innerHTML +=
      `<li class="text-gray3 ${response.class}"><a>
        <section>
          <div class="media-img"></div>
        </section>
        <section>
          <p>${response.name}</p><small class="text-gray1">${response.description}</small>
        </section>
      </a></li>`;
    });
    this.constructor.enableChoices();
    if (direction === 'prev') {
      new Animation(super.container).slideFromLeft();
    } else {
      new Animation(super.container).slideFromRight();
    }
  }
  static enableChoices() {
    document.querySelectorAll('.multipleChoice li').forEach((li) => {
      li.addEventListener('click', () => {
        new Choice(li).add();
      });
    });
  }
}
