class EditMenu extends Modal {
  open() {
    if (document.querySelectorAll('#resubmit.modal').length === 1) {
      return this.selectAll();
    } else if (document.querySelectorAll('#resubmit.modal').length > 1) {
      document.querySelectorAll('#resubmit.modal').forEach(i => i.remove());
    }
    document.getElementById('main').innerHTML +=
    `<div class="modal background-white" id="resubmit">
      <section class="container-wrapper">
        <section class="container-content" id="edit-questions">
        </section>
      </section>
      <div class="closeButton" id="closeButton"></div>
    </div>`;
    for (let i = 0; i < questions.length; i++) {
      document.getElementById('edit-questions').innerHTML +=
      `<section class="half section">
        <ul class="multipleChoice incomplete">
          <header><h3>${questions[i].abbr}</h3></header>
        </ul>
      </section>`;
      for (let k = 0; k < questions[i].responses.length; k++) {
        document.querySelectorAll('.multipleChoice')[i].innerHTML +=
        `<li class="text-gray3 ${questions[i].responses[k].class}" id="${questions[i].responses[k].class}"><a><section><p>${questions[i].responses[k].name}</p></section></a></li>`;
      }
    }
    document.getElementById('edit-questions').innerHTML +=
    `<section class="button-container-submit">
      <button class="submitButton background-gray3" id="submitButton">Submit</button>
    </section>`;
    return this.selectAll();
  }
  reveal() {
    const modal = document.getElementById('resubmit');
    new Animation(document.getElementById('module')).fadeOut();
    new Animation(modal).slideFromTop();
    modal.style.display = 'flex';
    modal.style.top = `${Math.max(0, ((document.documentElement.clientHeight - modal.offsetHeight) / 2) + window.scrollY)}px`;
    modal.style.left = `${Math.max(0, ((document.documentElement.clientWidth - modal.offsetWidth) / 2) + window.scrollX)}px`;
    modal.scrollTop = 0;
    document.documentElement.style.overflowY = 'hidden';
    return this.enableEvents();
  }
  enableEvents() {
    new Survey().constructor.enableChoices();
    document.getElementById('submitButton').addEventListener('click', () => {
      this.constructor.editCriteria();
    });
    document.getElementById('closeButton').addEventListener('click', () => {
      this.constructor.editDiscard();
    });
    window.addEventListener('keyup', (event) => {
      if (event.which === 13 && window.getComputedStyle(document.getElementById('resubmit'), null).getPropertyValue('display') !== 'none') {
        window.requestAnimationFrame(() => {
          this.constructor.editCriteria();
        });
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.which === 27) {
        window.requestAnimationFrame(() => {
          this.constructor.editDiscard();
        });
      }
    });
  }
  selectAll() {
    switch (settings.tactility) {
      case 'linear':
        new Choice(document.getElementById('tactilityLinear')).add();
        break;
      case 'tactile':
        new Choice(document.getElementById('tactilityBumpy')).add();
        break;
      case 'clicky':
        new Choice(document.getElementById('tactilityClicky')).add();
        break;
      default:
        break;
    }
    switch (settings.force) {
      case 'ultralight':
        new Choice(document.getElementById('forceUltraLight')).add();
        new Choice(document.getElementById('tactilityClicky')).disable();
        break;
      case 'light':
        new Choice(document.getElementById('forceLight')).add();
        break;
      case 'med':
        new Choice(document.getElementById('forceMed')).add();
        break;
      case 'heavy':
        new Choice(document.getElementById('forceHeavy')).add();
        break;
      case 'ultra':
        new Choice(document.getElementById('forceUltra')).add();
        break;
      default:
        break;
    }
    switch (settings.noise) {
      case 'quiet':
        new Choice(document.getElementById('noiseQuiet')).add();
        new Choice(document.getElementById('tactilityClicky')).disable();
        break;
      case 'loud':
        new Choice(document.getElementById('noiseLoud')).add();
        break;
      default:
        break;
    }
    switch (settings.size) {
      case 100:
        new Choice(document.getElementById('size100')).add();
        break;
      case 80:
        new Choice(document.getElementById('size80')).add();
        break;
      case 60:
        new Choice(document.getElementById('size60')).add();
        break;
      default:
        break;
    }
    switch (settings.macros) {
      case 'yes':
        new Choice(document.getElementById('macrosYes')).add();
        break;
      case 'no':
        new Choice(document.getElementById('macrosNo')).add();
        break;
      default:
        break;
    }
    switch (settings.backlighting) {
      case 'yes':
        new Choice(document.getElementById('backlightingYes')).add();
        break;
      case 'no':
        new Choice(document.getElementById('backlightingNo')).add();
        break;
      default:
        break;
    }
    switch (settings.color) {
      case 'yes':
        new Choice(document.getElementById('colorYes')).add();
        break;
      case 'no':
        new Choice(document.getElementById('colorNo')).add();
        break;
      default:
        break;
    }
    return this.reveal();
  }
  static editCriteria() {
    if (document.getElementsByClassName('incomplete').length > 0) {
      document.querySelectorAll('.incomplete').forEach((incomp) => {
        incomp.classList.add('faulty', 'text-red');
      });
      document.getElementsByClassName('faulty')[0].scrollIntoView();
    } else {
      new Checker().check();
      new Checker().updateLocalStorage();
      document.getElementById('module').style.visibility = 'hidden';
      new Survey().next();
      document.getElementById('resubmit').style.top = '';
      new Animation(document.getElementById('resubmit')).slideToTop();
      window.requestAnimationFrame(() => {
        setTimeout(() => {
          new Animation(document.getElementById('module')).slideFromRight();
          document.getElementById('module').style.visibility = '';
          document.documentElement.style.overflowY = '';
        }, 300);
      });
    }
  }
  static editDiscard() {
    loadFromStorage();
    document.getElementById('module').style.visibility = 'hidden';
    new Survey().next();
    document.getElementById('resubmit').style.top = '';
    new Animation(document.getElementById('resubmit')).slideToBottom();
    setTimeout(() => {
      new Animation(document.getElementById('module')).slideFromRight();
      document.getElementById('module').style.visibility = '';
      document.documentElement.style.overflowY = '';
    }, 300);
  }
}
