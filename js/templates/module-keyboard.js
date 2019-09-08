class Keyboard extends Module {
  constructor(s, k) {
    super();
    this.s = s;
    this.k = k;
  }
  add() {
    super.html.innerHTML = '';
    if (settings.showSilencer === 'yes') {
      return this.appendSilencer();
    }
    return this.appendSwitch();
  }
  appendSilencer() {
    const getname = (v) => {
      if (v.class === 'zealencio') {
        switch (settings.size) {
          case 100:
            return v.name[0];
          case 80:
            return v.name[1];
          case 60:
            return v.name[2];
          default:
            return v.name;
        }
      }
      return v.name;
    };
    const getprice = (v) => {
      if (v.class === 'zealencio') {
        switch (settings.size) {
          case 100:
            return v.price[0].toFixed(2);
          case 80:
            return v.price[1].toFixed(2);
          case 60:
            return v.price[2].toFixed(2);
          default:
            return v.price.toFixed(2);
        }
      }
      return v.price.toFixed(2);
    };
    super.html.innerHTML +=
    `<section class="container-content silencerMessage background-gray3">
      <section class="silencer">
        <div class="switch-listing">
          <div class="media">
            <div class="media-img"></div>
          </div>
          <div class="switch-listing-description">
            <header><h3>${silencers.message.title}</h3></header>
            <small class="text-gray2"><p>${silencers.message.description.split('\r\n').join('</p><p>')}</p></small>
          </div>
        </div>
        <ul class="keyboard-list" id="silencer-list">
        </ul>
      </section>
    </section>`;
    silencers.silencers.forEach((value) => {
      document.getElementById('silencer-list').innerHTML +=
      `<li class="silencer ${value.class}">
        <div class="keyboard-identifier">
          <div class="media">
            <div class="media-img"></div>
          </div>
          <div class="image modal background-gray3-50">
            <div class="media-img"></div>
          </div>
          <div class="description">
            <a href="${value.url}" target="_blank"><p class="text-gray2">${getname(value)}</p></a>
            <small class="text-gray2">
              <ul class="keyboard-specs">
                <li><b>Travel reduction:</b> ${value.distance.toFixed(1)}mm</li>
                <li><b>Changes feeling:</b> ${value.changefeeling}</li>
              </ul>
              <a class="spec-toggle text-blue1"><span class="showHide">Show</span> specifications</a>
            </small>
          </div>
        </div>
        <div class="price">
          <header><h3>$${getprice(value)}</h3></header>
        </div>
      </li>`;
    });
    return this.appendSwitch();
  }
  appendSwitch() {
    super.html.innerHTML +=
    `<section class="container-content">
      <section class="section">
        <p>Here are some keyboards you might be interested in:</p>
      </section>
      <section class="section" id="keyboard-recommendations">
      </section>
      <section class="button-container-last">
        <button class="editButton background-gray2" id="editButton">Edit</button>
      </section>
    </section>`;
    this.s.forEach((value) => {
      document.getElementById('keyboard-recommendations').innerHTML +=
      `<section class="switch" id="${value.class}">
        <div class="switch-listing">
          <div class="media">
            <div class="media-img"></div>
          </div>
          <div class="switch-listing-description">
            <header><h3>${value.name}</h3></header>
            <small class="text-gray3"><p>${value.description.split('\r\n').join('</p><p>')}</p></small>
          </div>
        </div>
        <ul class="keyboard-list">
        </ul>
      </section>`;
    });
    return this.appendKeyboard();
  }
  appendKeyboard() {
    const geturl = (v) => {
      if (v.url !== undefined) {
        return `${v.url}`;
      }
      return `keyboards/${v.switch}-${v.class}`;
    };
    const getbacklighting = ((v) => {
      switch (v.backlighting) {
        case 0:
          return 'No';
        default:
          return `LED (${v.LEDName})`;
      }
    });
    const getsize = ((v) => {
      switch (v.size) {
        case 100:
          return 'Fullsize';
        case 80:
          return 'Tenkeyless';
        default:
          return `${v.size}%`;
      }
    });
    const getmacros = ((v) => {
      switch (v.macros) {
        case 0:
          return 'No';
        case 1:
          return 'Yes';
        default:
          break;
      }
    });
    this.k.forEach((value) => {
      document.getElementById(value.switch).getElementsByClassName('keyboard-list')[0].innerHTML +=
      `<li class="keyboard ${value.class}">
        <div class="keyboard-identifier">
          <div class="media">
            <div class="media-img"></div>
          </div>
          <div class="image modal background-gray3-50">
            <div class="media-img"></div>
          </div>
          <div class="description">
            <a href="${geturl(value)}" target="_blank"><p class="text-gray3">${value.name}</p></a>
            <small class="text-gray3">
              <ul class="keyboard-specs">
                <li><b>Anti-ghosting:</b> Yes</li>
                <li><b>Backlighting:</b> ${getbacklighting(value)}</li>
                <li><b>Color:</b> ${value.colorName}</li>
                <li><b>Form factor:</b> ${getsize(value)}</li>
                <li><b>Keycap material:</b> ${value.keycaps}</li>
                <li><b>Macro support:</b> ${getmacros(value)}</li>
                <li><b>USB key rollover:</b> ${value.rollover}</li>
              </ul>
              <a class="spec-toggle text-blue1"><span class="showHide">Show</span> specifications</a>
            </small>
          </div>
        </div>
        <div class="price">
          <header><h3>$${value.price.toFixed(2)}</h3></header>
        </div>
      </li>`;
    });
    document.documentElement.scrollTop = 0;
    new Animation(super.container).slideFromRight();
    return this.constructor.hideChildless();
  }
  static hideChildless() {
    document.querySelectorAll('.keyboard-list').forEach((i) => {
      if (i.children.length === 0) {
        i.parentNode.remove();
      }
    });
    return this.enableEvents();
  }
  static enableEvents() {
    document.querySelectorAll('.spec-toggle').forEach((toggler) => {
      toggler.addEventListener('click', () => {
        if (toggler.childNodes[0].innerHTML === 'Show') {
          new Animation(toggler.previousElementSibling).slideDown();
          toggler.childNodes[0].innerHTML = 'Hide';
        } else if (toggler.childNodes[0].innerHTML === 'Hide') {
          new Animation(toggler.previousElementSibling).slideUp();
          toggler.childNodes[0].innerHTML = 'Show';
        }
      });
    });
    document.querySelectorAll('.keyboard-identifier .media').forEach((media) => {
      media.addEventListener('click', () => {
        new Modal().open(media);
      });
    });
    document.getElementById('editButton').addEventListener('click', () => {
      new EditMenu().open();
    });
  }
}
