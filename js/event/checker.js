class Checker {
  check() {
    switch (settings.start) {
      case 0:
        return this.constructor.checkForce();
      case 1:
        return this.constructor.checkNoise();
      case 2:
        return this.constructor.checkTactility();
      case 3:
        return this.constructor.checkSize();
      case 4:
        return this.constructor.checkMacros();
      case 5:
        return this.constructor.checkBacklighting();
      case 6:
        return this.constructor.checkColor();
      case 7:
        (async () => {
          await this.constructor.toggleClicky();
          this.constructor.checkForce();
          this.constructor.checkNoise();
          this.constructor.checkTactility();
          this.constructor.checkSize();
          this.constructor.checkMacros();
          this.constructor.checkBacklighting();
          this.constructor.checkColor();
        })();
        break;
      default:
        break;
    }
  }
  updateLocalStorage() {
    return this.constructor.checkSettings();
  }
  static toggleClicky() {
    if (document.getElementsByClassName('forceUltraLight selected').length > 0 || document.getElementsByClassName('noiseQuiet selected').length > 0) {
      new Choice(document.getElementById('tactilityClicky')).disable();
    } else {
      new Choice(document.getElementById('tactilityClicky')).enable();
    }
  }
  static checkForce() {
    switch (true) {
      case document.getElementsByClassName('forceUltraLight selected').length > 0:
        settings.force = 'ultralight';
        break;
      case document.getElementsByClassName('forceLight selected').length > 0:
        settings.force = 'light';
        break;
      case document.getElementsByClassName('forceMed selected').length > 0:
        settings.force = 'med';
        break;
      case document.getElementsByClassName('forceHeavy selected').length > 0:
        settings.force = 'heavy';
        break;
      case document.getElementsByClassName('forceUltra selected').length > 0:
        settings.force = 'ultra';
        break;
      default:
        break;
    }
  }
  static checkNoise() {
    switch (true) {
      case document.getElementsByClassName('noiseQuiet selected').length > 0:
        settings.noise = 'quiet';
        break;
      case document.getElementsByClassName('noiseLoud selected').length > 0:
        settings.noise = 'loud';
        break;
      default:
        break;
    }
  }
  static checkTactility() {
    switch (true) {
      case document.getElementsByClassName('tactilityLinear selected').length > 0:
        settings.tactility = 'linear';
        break;
      case document.getElementsByClassName('tactilityBumpy selected').length > 0:
        settings.tactility = 'tactile';
        break;
      case document.getElementsByClassName('tactilityClicky selected').length > 0:
        settings.tactility = 'clicky';
        break;
      default:
        break;
    }
  }
  static checkSize() {
    switch (true) {
      case document.getElementsByClassName('size100 selected').length > 0:
        settings.size = 100;
        break;
      case document.getElementsByClassName('size80 selected').length > 0:
        settings.size = 80;
        break;
      case document.getElementsByClassName('size60 selected').length > 0:
        settings.size = 60;
        break;
      default:
        break;
    }
  }
  static checkMacros() {
    switch (true) {
      case document.getElementsByClassName('macrosYes selected').length > 0:
        settings.macros = 'yes';
        break;
      case document.getElementsByClassName('macrosNo selected').length > 0:
        settings.macros = 'no';
        break;
      default:
        break;
    }
  }
  static checkBacklighting() {
    switch (true) {
      case document.getElementsByClassName('backlightingYes selected').length > 0:
        settings.backlighting = 'yes';
        break;
      case document.getElementsByClassName('backlightingNo selected').length > 0:
        settings.backlighting = 'no';
        break;
      default:
        break;
    }
  }
  static checkColor() {
    switch (true) {
      case document.getElementsByClassName('colorYes selected').length > 0:
        settings.color = 'yes';
        break;
      case document.getElementsByClassName('colorNo selected').length > 0:
        settings.color = 'no';
        break;
      default:
        break;
    }
  }
  static checkSettings() {
    localStorage.setItem('force', settings.force);
    localStorage.setItem('noise', settings.noise);
    localStorage.setItem('tactility', settings.tactility);
    localStorage.setItem('size', settings.size);
    localStorage.setItem('macros', settings.macros);
    localStorage.setItem('backlighting', settings.backlighting);
    localStorage.setItem('color', settings.color);
  }
}
