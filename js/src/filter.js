class Filter {
  constructor(array) {
    this.array = array;
  }
  tactility() {
    switch (settings.tactility) {
      case 'linear':
        return this.array.bumpiness <= 1 && this.array.clickiness <= 1;
      case 'tactile':
        return this.array.bumpiness > 1;
      case 'clicky':
        return this.array.clickiness >= 2;
      default:
        break;
    }
  }
  force() {
    switch (settings.force) {
      case 'ultralight':
        return this.array.force <= 40;
      case 'light':
        return this.array.force >= 40 && this.array.force <= 50;
      case 'med':
        return this.array.force >= 50 && this.array.force <= 60;
      case 'heavy':
        return this.array.force >= 60 && this.array.force <= 70;
      case 'ultra':
        return this.array.force >= 70;
      default:
        break;
    }
  }
  noise() {
    switch (settings.noise) {
      case 'quiet':
        return this.array.noise <= 3;
      case 'loud':
        return this.array.noise >= 3;
      default:
        break;
    }
  }
  size() {
    switch (settings.size) {
      case 100:
        return this.array.size >= 100;
      case 80:
        return this.array.size >= 80 && this.array.size < 100;
      case 60:
        return this.array.size < 80;
      default:
        break;
    }
  }
  macros() {
    switch (settings.macros) {
      case 'yes':
        return this.array.macros === 1;
      case 'no':
        return this.array.macros >= 0;
      default:
        break;
    }
  }
  backlighting() {
    switch (settings.backlighting) {
      case 'yes':
        return this.array.backlighting > 0;
      case 'no':
        return this.array.backlighting === 0;
      default:
        break;
    }
  }
  color() {
    switch (settings.color) {
      case 'no':
        return this.array.color <= 1;
      case 'yes':
        return this.array.color >= 0;
      default:
        break;
    }
  }
}
