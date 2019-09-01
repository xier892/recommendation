class Download {
  constructor() {
    this.keyboardurl = 'https://xier892.github.io/recommendation/js/data/keyboards.json';
    this.switchurl = 'https://xier892.github.io/recommendation/js/data/switches.json';
    this.silencerurl = 'https://xier892.github.io/recommendation/js/data/silencers.json';
  }
  async fetchData() {
    Promise.all([this.getKeyboards(), this.getSwitches(), this.getSilencers()])
      .catch(() => {
        new Error().disconnected();
        throw setTimeout(() => this.fetchData(), 5000);
      })
      .then(() => {
        settings.completed = 'yes';
        new Error().constructor.removeError('error-disconnected');
      });
  }
  getKeyboards() {
    return fetch(this.keyboardurl)
      .then(resp => this.constructor.handleError(resp))
      .then((data) => {
        keyboards = data;
      });
  }
  getSwitches() {
    return fetch(this.switchurl)
      .then(resp => this.constructor.handleError(resp))
      .then((data) => {
        switches = data;
      });
  }
  getSilencers() {
    return fetch(this.silencerurl)
      .then(resp => this.constructor.handleError(resp))
      .then((data) => {
        silencers = data;
      });
  }
  static handleError(r) {
    if (!r.ok) {
      return r.json().then(Promise.reject.bind(Promise));
    }
    return r.json();
  }
}
