let keyboards;
let switches;
let silencers;

const settings = {
  tactility: '',
  force: '',
  noise: '',
  size: '',
  macros: '',
  backlighting: '',
  color: '',
  showSilencer: '',
  start: 0,
  completed: 'no',
};

const loadFromStorage = async () => {
  settings.tactility = localStorage.getItem('tactility');
  settings.force = localStorage.getItem('force');
  settings.noise = localStorage.getItem('noise');
  settings.size = Number(localStorage.getItem('size'));
  settings.macros = localStorage.getItem('macros');
  settings.backlighting = localStorage.getItem('backlighting');
  settings.color = localStorage.getItem('color');
  settings.showSilencer = localStorage.getItem('showSilencer');
  if (localStorage.getItem('start') !== null) {
    settings.start = Number(localStorage.getItem('start'));
  }
};

new Download().fetchData();
(async () => {
  await loadFromStorage();
  new Survey().next();
  new Button().add();
})();
