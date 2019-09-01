class Error {
  disconnected() {
    this.constructor.clearAll();
    if (!document.body.contains(document.getElementById('error-disconnected'))) {
      document.getElementById('main').innerHTML +=
      `<header class="error-container background-red" id="error-disconnected">
        <h4>Connection lost</h4>
      </header>`;
      return this.constructor.displayError('error-disconnected');
    }
  }
  static displayError(err) {
    document.getElementById(err).style.top = window.scrollY;
    new Animation(document.getElementById(err)).slideFromTop();
  }
  static removeError(err) {
    if (document.body.contains(document.getElementById(err))) {
      new Animation(document.getElementById(err)).slideToTop();
      setTimeout(() => {
        document.getElementById(err).remove();
      }, 600);
    }
  }
  static clearAll() {
    if (document.getElementsByClassName('.error-container').length > 0) {
      document.querySelectorAll('.error-container').forEach((err) => {
        err.remove();
      });
    }
  }
}
